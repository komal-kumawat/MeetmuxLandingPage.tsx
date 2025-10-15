import type { ReactNode } from "react";

interface ICard {
  icon: ReactNode;
  title: string;
  content: string;
}

const Card = ({ icon, title, content }: ICard) => {
  return (
    <div className="flex flex-col bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl gap-4 p-6 border border-gray-200 transform hover:-translate-y-3">
      <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-500 text-[15px] leading-relaxed">{content}</p>
    </div>
  );
};

export default Card;