// components/Socials.tsx
import React, { JSX } from 'react';
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoLinkedin } from 'react-icons/bi';

type SocialItem = {
  icon: JSX.Element;
  path: string;
};

const socialsData: SocialItem[] = [
  {
    icon: <BiLogoFacebook />,
    path: "https://www.facebook.com/mohmed.aradieb/",
  },
  {
    icon: <BiLogoInstagramAlt />,
    path: "https://www.instagram.com/mohammed_3radieb",
  },
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/in/mohammed-omer-759714294/",
  },
];

type Props = {
  containerStyles?: string;
  iconStyles?: string;
};

const Socials: React.FC<Props> = ({ containerStyles = "", iconStyles = "" }) => {
  return (
    <div className={containerStyles}>
      {socialsData.map((item, index) => (
        <a
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;