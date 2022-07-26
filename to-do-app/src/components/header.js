import React from "react";

const header = ({ title, year }) => {
  const date = "20/07";
  return (
    <div>
      {title} - {date} - {year}
    </div>
  );
};

export default header;
