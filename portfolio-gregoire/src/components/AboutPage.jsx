import React from "react";
import Hero from "./Hero";
import Content from "./Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>Salute, my name is Gregoire Boisrond Jr. A full stack engineer.</p>
      </Content>
    </div>
  );
}

export default AboutPage;
