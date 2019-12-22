import React from "react";
import Hero from "./Hero";
import Content from "./Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Salut, My name is Gregoire Boisrond Jr. I want to invite you to get to
          know a little about me.{" "}
        </p>

        <p>
          I am software engineer, a lover of science, and having a keen eye on
          for aesthetics allows me ease of use and an understanding for
          web-design and app development.
        </p>

        <p>
          My evolution from civil engineering, tech-retail, and computer science
          was a great journey. The tie that binds is finding is an algorithm of
          balance. I can explain further in a one to one. Hear from you soon.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
