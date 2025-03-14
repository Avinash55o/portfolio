import React from "react";

interface ProjectItem {
  name: string;
  description: string;
  link: string;
  github: string;
  rarity: "Common" | "Rare" | "Legendary";
  tags: string[];
}

// Sample Data
const projectsData: ProjectItem[] = [
  {
    name: "NFT Marketplace",
    description: "A decentralized marketplace for buying and selling NFTs.",
    link: "https://example.com/nft-marketplace",
    github: "https://github.com/example/nft-marketplace",
    rarity: "Rare",
    tags: ["Solidity", "DApp", "NFT Marketplace"],
  },
  {
    name: "DeFi Yield Farming",
    description: "A DeFi app for yield farming with automated strategies.",
    link: "https://example.com/defi-yield-farming",
    github: "https://github.com/example/defi-yield-farming",
    rarity: "Legendary",
    tags: ["Solidity", "DeFi", "Smart Contracts"],
  },
];

export default function Projects() {
  return (
    <div className="w-full py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="relative group w-[190px] h-[254px] bg-black flex flex-col justify-end p-3 gap-3 rounded-lg cursor-pointer transition-transform duration-500"
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 -left-1 m-auto w-[200px] h-[264px] rounded-xl bg-gradient-to-br from-red-500 to-yellow-400 -z-10 transition-all duration-500 group-hover:rotate-[-180deg] group-hover:scale-[1.34,0.77]"></div>

            {/* Blurred Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-yellow-400 transform scale-95 blur-xl -z-10 transition-all duration-500 group-hover:blur-2xl"></div>

            {/* Card Content */}
            <div className="transition-opacity duration-500 group-hover:opacity-0">
              <h2 className="text-lg font-bold text-white">{project.name}</h2>
              <p className="text-sm text-gray-300">{project.description}</p>
              <p className="text-pink-400 font-semibold">{project.rarity}</p>
            </div>

            {/* Hidden Content (Revealed on Hover) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
              <p className="text-xl font-bold">{project.name}</p>
              <a href={project.link} className="text-blue-400 underline">
                View Project
              </a>
              <a href={project.github} className="text-blue-400 underline">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
