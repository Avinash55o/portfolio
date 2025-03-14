import React from "react";

interface ProjectItem {
  name: string;
  description: string;
  link: string;
  github: string;
  contractAddress: string;
  tokenId: string;
  blockchain: string;
  rarity: "Common" | "Rare" | "Legendary";
  tags: string[];
}

// Sample data for projects
const projectsData: ProjectItem[] = [
  {
    name: "NFT Marketplace",
    description: "A decentralized marketplace for buying and selling NFTs.",
    link: "https://example.com/nft-marketplace",
    github: "https://github.com/example/nft-marketplace",
    contractAddress: "0x1234567890abcdef1234567890abcdef12345678",
    tokenId: "12345",
    blockchain: "Ethereum",
    rarity: "Rare",
    tags: ["Solidity", "DApp", "NFT Marketplace"],
  },
  {
    name: "DeFi Yield Farming",
    description: "A DeFi app for yield farming with automated strategies.",
    link: "https://example.com/defi-yield-farming",
    github: "https://github.com/example/defi-yield-farming",
    contractAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
    tokenId: "67890",
    blockchain: "Polygon",
    rarity: "Legendary",
    tags: ["Solidity", "DeFi", "Smart Contracts"],
  },
];

export default function Projects() {
  return (
    <div className="w-full py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectsData.map((project, index) => (
          <div key={index} className="group perspective w-full h-[400px]">
            {/* Flip Card Container */}
            <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
              
              {/* Front Side */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 p-6 flex flex-col justify-between rounded-lg shadow-lg backface-hidden">
                <h2 className="text-xl font-bold text-white">{project.name}</h2>
                <p className="text-sm text-white">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 bg-white text-gray-800 p-6 flex flex-col justify-between rounded-lg shadow-lg transform rotate-y-180 backface-hidden">
                <div>
                  <h3 className="text-lg font-bold mb-4">Details</h3>
                  <p className="text-sm">
                    <strong>Blockchain:</strong> {project.blockchain}
                  </p>
                  <p className="text-sm">
                    <strong>Contract Address:</strong>{" "}
                    <a href={`https://${project.blockchain.toLowerCase()}.etherscan.io/address/${project.contractAddress}`}
                      target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      View on Etherscan
                    </a>
                  </p>
                  <p className="text-sm"><strong>Token ID:</strong> {project.tokenId}</p>
                  <p className="text-sm"><strong>Rarity:</strong> {project.rarity}</p>
                </div>
                <div className="flex gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
