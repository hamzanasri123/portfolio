import React, { useState } from "react";
import { FaFacebookF, FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
function Banner() {
  const [state, setState] = useState({
    title: "Je Suis Hamza Nasri",
    text: ` En tant que full stack developer, je suis impliqué de la
                  conception à la finalisation du produit. Je fais en sorte de
                  résoudre le problème ou le besoin initial du client, en
                  mettant en place des outils , en développant des sites et des
                  applications, et m’assure ensuite du bon fonctionnement du
                  tout ce qui a été réalisé `,
    image: "",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header-content">
              <div className="header-section">
                <ul className="header-ul">
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaGithubSquare />
                  </li>

                  <li>
                    <FaLinkedinIn />
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header-button">
                  <a href="" className="btn btn-outline">
                    Portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="" className="btn btn-outline">
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner-image">
              {/*  <img src={state.image} alt="logo" /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
