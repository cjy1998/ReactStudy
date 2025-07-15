import React from "react";

interface ShowCardProps {
  title: string;
  children: React.ReactNode;
}

const ShowCard = ({ title, children }: ShowCardProps) => {
  return (
    <div className="w-[300px] h-[400px] overflow-auto bg-gray-50 rounded-lg hover:shadow-lg p-4 transition duration-300">
      <div>{title}</div>
      <hr className="my-4 border border-gray-300" />
      <div>{children}</div>
    </div>
  );
};

export default ShowCard;
