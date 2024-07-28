import React from 'react';
import { Youtube, Github, X, Instagram } from 'lucide-react';

const ProfileCard: React.FC = () => {
  return (
    <div className="bg-[#FFE4E1] p-8 rounded-lg max-w-2xl mx-auto">
      <h3 className="text-2xl font-semibold mb-4">大城希乃樺</h3>
      <p className="mb-4">沖縄県立向陽高校卒業</p>
      <p className="mb-4">42Tokyo所属</p>
      
      <h4 className="text-xl font-semibold mb-2">好きな食べ物</h4>
      <ul className="list-disc list-inside mb-4">
        <li>お寿司</li>
        <li>焼肉</li>
        <li>ラーメン</li>
      </ul>
      
      <h4 className="text-xl font-semibold mb-2">SNS &amp; Contacts</h4>
      <div className="flex flex-wrap items-center">
        <SocialLink href="https://www.youtube.com/ののかちゃんねる" icon={<Youtube />} text="ののかちゃんねる" />
        <SocialLink href="https://github.com/oshiro17" icon={<Github />} text="@oshiro17" />
        <SocialLink href="https://twitter.com/1nonoka7" icon={<X />} text="@1nonoka7" />
        <SocialLink href="https://www.instagram.com/ora_nonoka" icon={<Instagram />} text="@ora_nonoka" />
      </div>
    </div>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, text }) => {
  return (
    <>
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#ffb8b3]">
        {icon}
      </a>
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#ffb8b3] block md:inline mr-2 ml-1">
        {text}
      </a>
      <div className="w-full md:hidden mb-2"></div>
    </>
  );
};

export default ProfileCard;