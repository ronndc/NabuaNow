import React from "react";

const Section = ({ id, title, content, style }) => {
  return (
    <section id={id} style={style}>
      <h1>{title}</h1>
      <p>{content}</p>
    </section>
  );
};

export default Section;
