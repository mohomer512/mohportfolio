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
    path: "",
  },
  {
    icon: <BiLogoInstagramAlt />,
    path: "",
  },
  {
    icon: <BiLogoLinkedin />,
    path: "",
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
        <div key={index} className={iconStyles}>
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default Socials;