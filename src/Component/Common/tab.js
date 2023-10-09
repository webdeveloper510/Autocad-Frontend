import React, { useEffect, useState } from 'react';

const Tabs = ({ data, handler }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
       if (data.length === 0) {
            setActiveTab(0);
            setTabs(data); 
          }
  }, [data]);

  console.log(data);

  return (
    <div>
      <ul className="flex border-b">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`${
              activeTab === index
                ? 'bg-blue-500 text-white'
                : 'text-blue-500 hover:bg-blue-100'
            } flex-1 text-center p-4 cursor-pointer`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="">{tabs[activeTab]?.content}</div>
    </div>
  );
};

export default Tabs;
