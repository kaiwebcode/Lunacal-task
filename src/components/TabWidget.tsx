import { useState } from "react";
import { HelpCircle } from "lucide-react";

export const TabWidget = () => {
  const [activeTab, setActiveTab] = useState<
    "about" | "experiences" | "recommended"
  >("about");

  const tabs = [
    { id: "about" as const, label: "About Me" },
    { id: "experiences" as const, label: "Experiences" },
    { id: "recommended" as const, label: "Recommended" },
  ];

  const content = {
    about: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          Hello! I'm Dave, your sales rep here from Salesforce. I've been
          working at this awesome company for 3 years now.
        </p>
        <p className="text-gray-300 leading-relaxed">
          I was born and raised in Albany, NY & have been living in Santa Carla
          for the past 10 years with my wife Tiffany and my 4-year-old twin
          daughters — Emma and Ella. Both of them are just starting school, so
          my calendar is usually blocked between 9–10 AM. This is a...
        </p>
      </div>
    ),
    experiences: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          With over 3 years at Salesforce, I've helped countless businesses
          transform their sales processes and achieve remarkable growth.
        </p>
        <p className="text-gray-300 leading-relaxed">
          My expertise includes CRM implementation, sales strategy optimization,
          and team training. I'm passionate about helping companies leverage
          technology to drive results.
        </p>
      </div>
    ),
    recommended: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          I highly recommend exploring Salesforce's latest AI-powered features
          that can help automate your sales workflow and provide valuable
          insights.
        </p>
        <p className="text-gray-300 leading-relaxed">
          For teams looking to scale, I suggest starting with Sales Cloud and
          gradually integrating Marketing Cloud for a comprehensive solution.
        </p>
      </div>
    ),
  };

  return (
    <div className="bg-[#1a1a1a] rounded-[28px] p-6 shadow-xl">
      <div className="flex items-start justify-between mb-6">
        {/* Tabs */}
        <div className="bg-[#141414] rounded-3xl p-1.5 flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-3xl text-base font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#2a2a2a] text-white shadow-sm"
                  : "text-gray-400 hover:bg-[#222222] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Help icon */}
        <button className="p-2 rounded-full bg-[#141414] hover:bg-[#222222] transition-colors">
          <HelpCircle className="w-5 h-5 text-gray-400 hover:text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="min-h-40 text-gray-300">{content[activeTab]}</div>
    </div>
  );
};
