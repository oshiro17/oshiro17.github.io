import React from 'react';
import { Gift, Coffee, Star, ExternalLink } from 'lucide-react';

const PayCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8 rounded-2xl shadow-lg max-w-2xl mx-auto border border-purple-200">
      <h3 className="text-3xl font-bold mb-4 text-indigo-600 text-center">
        開発者を応援する
      </h3>
      <p className="mb-4 text-gray-700 text-center">
        あなたの支援が、次世代のソフトウェアを作り出す力になります！
      </p>
      <p className="mb-6 text-gray-700 text-center">
        プレゼントくれルト嬉しいです
      </p>
      
      <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-sm mb-6">
        <h4 className="text-xl font-semibold mb-4 text-purple-600 flex items-center justify-center">
          <Star className="text-yellow-400 mr-2" size={20} />
          サポート方法
        </h4>
        <div className="flex items-center justify-center mb-4">
          <Coffee className="text-brown-500 mr-2" size={20} />
          <span className="text-gray-700">Amazon ほしい物リストから</span>
        </div>
      </div>
      
      <div className="text-center">
        <a 
          href="https://www.amazon.jp/hz/wishlist/ls/TZLH9Q88S3EZ?ref_=wl_share" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          <Gift className="mr-2" size={18} />
          ほしい物リストを見る
          <ExternalLink className="ml-2" size={14} />
        </a>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-purple-600 font-semibold">
        金は天下のまわりもの
        </p>
      </div>
    </div>
  );
};

export default PayCard;