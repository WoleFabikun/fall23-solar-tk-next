import { useState } from "react";
import CryptoJS from 'crypto-js';

const secretKey = 'your-secret-key';

const UserConfig = () => {
  const [apiKeys, setApiKeys] = useState({
    openaiApiKey: '',
    videodbApiKey: '',
  });

  const [showChat, setShowChat] = useState(false);

  
  const encryptApiKey = (apiKey: string) => {
    return CryptoJS.AES.encrypt(apiKey, secretKey).toString();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Encrypt the API keys using AES and store them in client-side storage
    localStorage.setItem('openaiApiKey', encryptApiKey(apiKeys.openaiApiKey));
    localStorage.setItem('videodbApiKey', encryptApiKey(apiKeys.videodbApiKey));
    setShowChat(true);
  };

  return (
    <div className="max-w-md mx-auto">
    <h1 className="text-2xl font-bold mb-4">Welcome to Green Thumb Guide!</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="openaiApiKey" className="block text-sm font-medium text-gray-700">
          OpenAI API Key:
        </label>
        <input
          type="text"
          id="openaiApiKey"
          value={apiKeys.openaiApiKey}
          onChange={(e) => setApiKeys({ ...apiKeys, openaiApiKey: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="videodbApiKey" className="block text-sm font-medium text-gray-700">
          VideoDB API Key:
        </label>
        <input
          type="text"
          id="videodbApiKey"
          value={apiKeys.videodbApiKey}
          onChange={(e) => setApiKeys({ ...apiKeys, videodbApiKey: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Start Chatting
      </button>
    </form>
  </div>
)
}

export default UserConfig