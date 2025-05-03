
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const ChatWidget = () => {
  return (
    <div className="chat-widget">
      <div className="chat-button">
        <Avatar className="w-12 h-12 border-2 border-white shadow-lg">
          <img 
            src="/lovable-uploads/317bcf42-f17a-42b2-be88-c2334b9bef80.png" 
            alt="HAL 2001" 
            className="w-full h-full object-contain"
          />
        </Avatar>
      </div>
      <div className="chat-tooltip">
        <Card className="p-3">
          <p className="text-gray-700 text-sm">Hi! I'm HAL 2001. Can I help you discover the space opportunities for your company?</p>
        </Card>
      </div>
    </div>
  );
};

export default ChatWidget;
