import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="Foot">
        <ul className="horizontal-list">
          <p>Contactez-nous</p>
          <li><p>Téléphone : +225 05 84 947 108</p></li>
          <li><p>Email : contact@e-cars.africa</p></li>
          <li>
            <p>
              Cliquez pour nous suivre sur{" "}
              <a href="https://www.facebook.com/ecarsci?mibextid=2JQ9oc" className="custom-link">
                Facebook
              </a>{" "}
              et{" "}
              <a href="https://instagram.com/ecarsci?igshid=MzRlODBiNWFlZA==" className="custom-link">
                Instagram
              </a>
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
