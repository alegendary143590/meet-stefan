import React from "react"

interface TopicDataItem {
  title: string;
//   description: string;
}

interface TopicProps {
  title: string;
  img: string;
  data: TopicDataItem[];
}

const Topic: React.FC<TopicProps> = ({ title, img, data }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-3">
      <div className="w-[50px] h-[50px] bg-[#F1F5F9] flex justify-center items-center rounded-lg">
        <img
            width={28}
            height={28}
            src={img}
            alt="Icon"
        />
      </div>
      <h1 className="text-[#0966AB] text-xl font-bold py-2">{title}</h1>
      <div>
        <ul className="mt-2">
          {data.map((item, index) => (
            <li key={index} className="mb-5">
                <span className="bg-[#F4F4F5] text-sm py-2 px-3 rounded-full">
                    {item.title}
                </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Topic;
