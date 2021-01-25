import React, { useState } from "react";

function About() {
  const [state] = useState({
    subHeader: `About Me`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur consequatur asperiores saepe, tempora,
                  repudiandae hic impedit voluptatem, id doloribus quibusdam
                  nemo nesciunt veritatis sit placeat beatae cumque quis. Eaque,
                  nam?`,
  });

  const [about] = useState([
    { id: 1, title: "Name", text: "Hamza Nasri" },
    { id: 2, title: "Email", text: "hamzanasri16@gmail.com" },
    { id: 3, title: "Phone", text: "+21696231966" },
    { id: 4, title: "Linkedin", text: "hamza nasri" },
  ]);

  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainheader">{state.subHeader}</h1>
          <p className="mainContent">{state.text}</p>
          <div className="common-border"></div>
        </div>

        <div className="row h-650 alignCenter">
          <div className="col-6">
            <div className="about-img">
              <img src="" alt="" />
            </div>
          </div>
          <div className="col-6">
            <div className="about-info">
              <h1>Hi There</h1>
              <div className="about-info-p1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti nulla quia sequi similique suscipit, voluptate
                assumenda corporis quas et quaerat ut in error officiis aut
                tempora, eum consectetur alias totam.
              </div>
              <div className="about-info-p2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                maiores nesciunt magnam, qui doloremque ad, unde explicabo, quae
                obcaecati ab reprehenderit. Mollitia reprehenderit
                necessitatibus minus dolor numquam sint cum alias?
              </div>
              <div className="info-contact">
                <div className="row">
                  {about.map((el) => (
                    <div className="col-6">
                      <strong>{el.title}</strong>
                      <p>{el.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
