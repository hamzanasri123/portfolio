import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
function Services() {
  const [info] = useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur consequatur asperiores saepe, tempora,
                  repudiandae hic impedit voluptatem, id doloribus quibusdam
                  nemo nesciunt veritatis sit placeat beatae cumque quis. Eaque,
                  nam?`,
  });

  const [state] = useState([
    {
      id: 1,
      icon: "FaGithub",
      heading: "Web Development",
      text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur consequatur asperiores saepe, tempora,
                  repudiandae hic impedit voluptatem, id doloribus quibusdam
                  nemo nesciunt veritatis sit placeat beatae cumque quis. Eaque,
                  nam?`,
    },
    {
      id: 2,
      icon: "FaGithub",
      heading: "FaGithub",
      text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur consequatur asperiores saepe, tempora,
                  repudiandae hic impedit voluptatem, id doloribus quibusdam
                  nemo nesciunt veritatis sit placeat beatae cumque quis. Eaque,
                  nam?`,
    },
    {
      id: 3,
      icon: "FaGithub",
      heading: "FaGithub",
      text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur consequatur asperiores saepe, tempora,
                  repudiandae hic impedit voluptatem, id doloribus quibusdam
                  nemo nesciunt veritatis sit placeat beatae cumque quis. Eaque,
                  nam?`,
    },
    {
      id: 4,
      icon: "FaGithub",
      heading: "FaGithub",
      text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur consequatur asperiores saepe, tempora,
                  repudiandae hic impedit voluptatem, id doloribus quibusdam
                  nemo nesciunt veritatis sit placeat beatae cumque quis. Eaque,
                  nam?`,
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services-header">
          <div className="common">
            <h3 className="heading">{info.mainHeader}</h3>
            <h1 className="mainheader">{info.subHeading}</h1>
            <p className="mainContent">{info.text}</p>
            <div className="common-border"></div>
          </div>
          <div className="row">
            {state.map((el) => (
              <div className="col-4">
                <div className="services-box">
                  <FaGithub className="common-icons" />
                  <div className="services-box-header">{el.heading}</div>
                  <div className="services-box-p">{el.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
