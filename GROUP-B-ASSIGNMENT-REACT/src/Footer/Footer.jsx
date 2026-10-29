import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="pepsi-footer">
      <div className="footer-main">
        <a
          href="https://www.pepsi.com/"
          className="footer-logo"
          aria-label="Pepsi homepage"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/68/Pepsi_2023.svg"
            alt="Pepsi logo"
          />
        </a>

        <div className="footer-links">
          <a href="https://www.pepsi.com/products">PRODUCTS</a>
          <a href="https://www.pepsi.com/faq">FAQ</a>
          <a href="https://contact.pepsico.com/pepsi">
            CONTACT US
          </a>
        </div>

        <div className="footer-links">
          <a href="https://www.pepsi.com/">PEPSI.COM</a>
          <a href="https://www.pepsico.com/">PEPSICO</a>
          <a href="https://www.pepsico.com/privacy">PRIVACY POLICY</a>
        </div>

        <div className="footer-socials">
          <a href="https://www.instagram.com/pepsi/" aria-label="Instagram">
            IG
          </a>
          <a href="https://www.facebook.com/PepsiUS/" aria-label="Facebook">
            FB
          </a>
          <a href="https://www.youtube.com/user/Pepsi" aria-label="YouTube">
            YT
          </a>
          <a href="https://www.tiktok.com/@pepsi" aria-label="TikTok">
            TT
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©️ {new Date().getFullYear()} Pepsi. For practice purposes.</p>
        <p>Refresh Your World.</p>
      </div>
    </footer>
  );
};

export default Footer;