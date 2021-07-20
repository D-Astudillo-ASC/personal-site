import React from "react";

const IconClick = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};

export default IconClick;
