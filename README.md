# ShopAssist - Intelligent E-commerce Chatbot

A versatile and intelligent AI chatbot built with LangGraph that can be integrated into any e-commerce platform to provide customers with natural language product discovery and assistance.

## Overview

ShopAssist is a powerful conversational agent that leverages Google's Gemini model, LangGraph for orchestration, and vector search to deliver a seamless shopping experience. The system can understand complex queries, maintain context throughout a conversation, and perform targeted searches using tool calling capabilities.

## Key Features

- 🧠 **LangGraph Agent Architecture** - Advanced conversational flow with state management
- 🔧 **Tool Calling Integration** - Agent can call specialized tools to fulfill user requests
- 🔍 **Vector Search Capabilities** - Semantic product search using MongoDB Atlas Vector Database
- 💬 **Context-Aware Conversations** - Maintains conversation history for better responses
- 🔄 **Flexible Integration** - Designed to work with any e-commerce platform
- 🛒 **Product Discovery** - Helps users find products through natural language
- 📱 **Responsive Design** - Works seamlessly on both desktop and mobile devices

## Technical Stack

### Agent Architecture
- **LangGraph** - For creating a conversational graph with stateful agents
- **Google Generative AI** - Utilizing Gemini 1.5 Flash model for natural language understanding
- **Vector Database** - MongoDB Atlas with vector search capabilities

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **MongoDB** for product and conversation storage

### Frontend
- **React** with TypeScript
- **Tailwind CSS** for styling
- **Vite** as the build tool

## Implementation

The system is built around a LangGraph agent that can:

1. **Understand user intentions** through natural language processing
2. **Call specialized tools** based on the conversation context
3. **Perform vector searches** to find semantically similar products
4. **Track conversation state** to maintain context
5. **Generate helpful responses** based on product information

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB Atlas account with Vector Search enabled
- Google AI Studio API key

### Installation

1. Clone this repository
```bash
git clone <repository-url>
cd ecom-chat