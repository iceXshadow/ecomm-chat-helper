import 'dotenv/config'
import express, { Express, Request, Response } from "express"
import { MongoClient } from "mongodb"
import { callAgent } from "./agent"
import cors from "cors"

const app: Express = express()
app.use(cors())
app.use(express.json())

const client = new MongoClient(process.env.MONGODB_ATLAS_URI as string)


async function main() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });

        console.log("Connected successfully to MongoDB!");
        
        app.get("/", (req: Request, res: Response) => {
            res.send("Langgraph Agent Server!")
        })

        app.post("/chat", async (req: Request, res: Response) => {
            const initialMsg = req.body.message;
            const threadId = Date.now().toString();
            console.log(initialMsg, threadId);
            
            try {
                const response = await callAgent(client, initialMsg, threadId);
                res.json({ threadId, response });
            } catch (err) {
                console.error("Error handling /chat request:", err);
                res.status(500).json({ error: "Internal server error." })
            }
        })
        
        app.post("/chat/:threadId", async (req: Request, res: Response) => {
            const { threadId } = req.params;
            const { message } = req.body;
            
            try {
                const response = await callAgent(client, message, threadId);
                res.json({ response });
            } catch (err) {
                console.error("Error in the chat!", err);
                res.status(500).json({ error: "Internal server error." })
            }
        })
        
        const PORT = process.env.PORT || 8000;

        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        })
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
        process.exit(1); // indicates failure
    }
}

main();