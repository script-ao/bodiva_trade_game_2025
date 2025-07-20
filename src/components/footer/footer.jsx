import React from "react";
import { vectorImages } from "../../assets";

function Footer() {
  return (
    <React.Fragment>
      <footer className="fo_wrapper">
        <div className="fo_container">
          <ul className="fo_social_list-container">
            <li>
              <a href="#">
                <img src={vectorImages.icons.instagram} alt="Instagram Icone" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={vectorImages.icons.facebook} alt="Facebook Icone" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={vectorImages.icons.linkedin} alt="LinkedIn Icone" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={vectorImages.icons.youtube} alt="YouTube Icone" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
}

export { Footer };
