import React from 'react';
import { ExternalLink, Youtube } from 'lucide-react';

const Tamaki: React.FC = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">YouTubeに出演しました！</h2>
      <div className="bg-[#FFE4E1] p-8 rounded-lg max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <Youtube size={24} className="mr-2" />
          <p className="text-xl">
          国民民主党代表　玉木雄一郎さんのたまきchに出演しました！
          </p>
        </div>
        <div className="aspect-w-16 aspect-h-9 mb-8">
        <iframe 
  className="w-full"
  style={{ height: '500px' }} 
  src="https://www.youtube.com/embed/bxll--eVaSY" 
  title="YouTube video player" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen
></iframe>

        </div>
        <a 
          href="https://youtu.be/bxll--eVaSY?si=GPsgy6jxRjAff0f8" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#FFE8b3] hover:text-black transition duration-300"
        >
          チャンネルを見る
          <ExternalLink className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Tamaki;