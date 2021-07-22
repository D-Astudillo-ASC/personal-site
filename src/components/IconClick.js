import React from "react";

const IconClick = ({ icon, link, style }) => {
  return (
    <a style={style} href={link} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};

export default IconClick;
