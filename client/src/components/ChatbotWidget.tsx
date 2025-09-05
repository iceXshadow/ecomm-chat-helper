import { MessageCircle } from "lucide-react";


const ChatbotWidget = () => {
	return (
		<div>
			<button className="rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg w-12 sm:w-14 h-12 sm:h-14 p-0 flex items-center justify-center transition-colors">
          <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6" />
        </button>
		</div>
	);
};

export default ChatbotWidget;
