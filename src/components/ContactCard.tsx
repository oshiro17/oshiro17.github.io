import React from 'react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  link: string;
}

interface VisibilityState {
  [key: string]: boolean;
}

interface ContactSectionProps {
  isVisible: VisibilityState;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, description, action, link }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <div className="text-black mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-center mb-4">{description}</p>
      <div className="text-center">
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300 inline-block"
        >
          {action}
        </a>
      </div>
    </div>
  );
};

export default ContactCard;