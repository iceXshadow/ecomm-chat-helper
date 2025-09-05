/* eslint-disable @typescript-eslint/no-unused-vars */
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { RiRobot3Fill } from "react-icons/ri";
import ReactMarkdown from "react-markdown";

const ChatbotWidget = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<{ isAgent: boolean; text: string }[]>([]);
	const [inputValue, setInputValue] = useState("");
	const [threadId, setThreadId] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const messageEndRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	useEffect(() => {
		if (isOpen && messages.length === 0) {
			const initialMessages = [{ isAgent: true, text: "Hello! How can I assist you today?" }];
			setMessages(initialMessages);
		}
	}, [isOpen, messages.length]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleSendMessage = async (e: React.FormEvent) => {
		e.preventDefault();
		if (inputValue.trim() === "") return;

		console.log(inputValue);

		const message = {
			text: inputValue,
			isAgent: false,
		};

		setMessages(prevMessages => [...prevMessages, message]);
		setInputValue("");
		setIsLoading(true);

		const endpoint = threadId ? `${process.env.ENDPOINT!}/${threadId}` : process.env.ENDPOINT!;

		try {
			const res = await fetch(endpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message: inputValue }),
			});

			if (!res.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await res.json();

			console.log("Success: ", data);

			const agentResponse = {
				text: data.response,
				isAgent: true,
				threadId: data.threadId,
			};

			setMessages(prevMessages => [...prevMessages, agentResponse]);
			setThreadId(data.threadId);

			console.log(messages);
		} catch (error) {
			console.log(error);
			setMessages(prevMessages => [
				...prevMessages,
				{ isAgent: true, text: "Sorry, I couldn't process your request. Please try again." },
			]);
		} finally {
			setIsLoading(false);
		}
	};

	const LoadingIndicator = () => (
		<div className="mb-3 flex justify-start">
			<div className="flex items-center rounded-lg bg-gray-100 px-4 py-2">
				<div className="flex space-x-1.5">
					<div
						className="h-2.5 w-2.5 animate-bounce rounded-full bg-gray-400"
						style={{ animationDelay: "0ms", animationDuration: "0.6s" }}
					></div>
					<div
						className="h-2.5 w-2.5 animate-bounce rounded-full bg-gray-400"
						style={{ animationDelay: "150ms", animationDuration: "0.6s" }}
					></div>
					<div
						className="h-2.5 w-2.5 animate-bounce rounded-full bg-gray-400"
						style={{ animationDelay: "300ms", animationDuration: "0.6s" }}
					></div>
				</div>
			</div>
		</div>
	);

	return (
		<div className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
			{isOpen ? (
				<div className="animate-slide-in flex h-[70vh] w-[90vw] max-w-[22rem] flex-col rounded-xl border border-gray-200 bg-white shadow-2xl transition-all duration-300 ease-in-out sm:h-[32rem] sm:w-[22rem] sm:max-w-[24rem]">
					{/* Header */}
					<div className="flex items-center justify-between rounded-t-xl border-b border-gray-100 bg-gray-50 p-4">
						<RiRobot3Fill className="h-6 w-6 text-blue-500 transition-transform duration-200 hover:scale-110" />
						<h2 className="text-lg font-medium text-gray-800">Chatbot</h2>
						<button
							onClick={() => setIsOpen(false)}
							className="rounded-full p-2 transition-all duration-200 hover:scale-105 hover:bg-gray-200"
							aria-label="Close chatbot"
						>
							<X className="h-5 w-5 text-gray-500" />
						</button>
					</div>

					{/* Message Area */}
					<div className="flex-1 overflow-y-auto p-4 sm:p-5">
						{messages.length === 0 ? (
							<div className="space-y-4">
								<div className="text-sm text-gray-500 italic">
									No messages yet. Start the conversation!
								</div>
							</div>
						) : null}

						{messages.map((msg, index) => (
							<div
								key={index}
								className="animate-fade-in mb-3 opacity-0"
								style={{ animationDelay: `${index * 50}ms` }}
							>
								<div className={`flex ${!msg.isAgent ? "justify-end" : "justify-start"}`}>
									<span
										className={`inline-block rounded-lg px-4 py-2 text-sm font-light transition-all duration-200 ${
											!msg.isAgent
												? "bg-blue-500 text-white shadow-sm"
												: "bg-gray-100 text-gray-800 shadow-sm"
										}`}
									>
										<ReactMarkdown
											components={{
												// Style markdown elements
												h1: ({ node, ...props }) => (
													<h1 className="my-2 text-xl font-bold" {...props} />
												),
												h2: ({ node, ...props }) => (
													<h2 className="my-2 text-lg font-bold" {...props} />
												),
												h3: ({ node, ...props }) => (
													<h3 className="text-md my-1 font-bold" {...props} />
												),
												p: ({ node, ...props }) => <p className="my-1" {...props} />,
												ul: ({ node, ...props }) => (
													<ul className="my-1 list-disc pl-5" {...props} />
												),
												ol: ({ node, ...props }) => (
													<ol className="my-1 list-decimal pl-5" {...props} />
												),
												li: ({ node, ...props }) => <li className="my-0.5" {...props} />,
												strong: ({ node, ...props }) => (
													<strong className="font-bold" {...props} />
												),
												em: ({ node, ...props }) => <em className="italic" {...props} />,
											}}
										>
											{msg.text}
										</ReactMarkdown>
									</span>
								</div>
							</div>
						))}

						{isLoading && <LoadingIndicator />}

						<div ref={messageEndRef} />
					</div>

					{/* Input Area */}
					<form onSubmit={handleSendMessage} className="flex items-center border-t border-gray-100 p-4">
						<input
							type="text"
							placeholder="Type your message..."
							value={inputValue}
							onChange={handleInputChange}
							className="flex-1 rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:outline-none disabled:bg-gray-50"
							disabled={isLoading}
						/>
						<button
							type="submit"
							className={`ml-3 transform rounded-lg px-4 py-2.5 text-white transition-all duration-200 hover:scale-105 ${
								isLoading || inputValue.trim() === ""
									? "cursor-not-allowed bg-blue-300"
									: "bg-blue-500 hover:bg-blue-600"
							}`}
							disabled={inputValue.trim() === "" || isLoading}
						>
							<FaPaperPlane size={16} />
						</button>
					</form>
				</div>
			) : (
				<button
					onClick={() => setIsOpen(true)}
					className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-all duration-200 hover:scale-110 hover:bg-blue-600 sm:h-14 sm:w-14"
					aria-label="Open chatbot"
				>
					<RiRobot3Fill className="h-6 w-6" />
				</button>
			)}
			<style>{`
				@keyframes slide-in {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				@keyframes fade-in {
					from {
						opacity: 0;
						transform: translateY(5px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-slide-in {
					animation: slide-in 0.3s ease-out;
				}
				.animate-fade-in {
					animation: fade-in 0.2s ease-out forwards;
				}
			`}</style>
		</div>
	);
};

export default ChatbotWidget;
