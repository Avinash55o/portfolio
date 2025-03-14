"use client";
import { useState } from 'react';
import axios from 'axios';

export default function ResumeDownload() {
  const [isLoading, setIsLoading] = useState(false);

  const downloadResume = async () => {
    try {
      setIsLoading(true);
      // Replace with your Pinata IPFS hash
      const ipfsHash = "YOUR_IPFS_HASH";
      const response = await axios.get(`https://gateway.pinata.cloud/ipfs/${ipfsHash}`, {
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Avinash_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Failed to download resume. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={downloadResume}
      disabled={isLoading}
      className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? 'Downloading...' : 'Download Resume'}
    </button>
  );
} 