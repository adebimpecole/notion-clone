import React, { useState } from "react";
import "./Styles/Footer.sass"

const Footer = () => {
    const [getActive, setActive] = useState(false)
  return (
    <div className="footer">
      <div className="footer_one">
        <img src="/src/assets/product.svg" alt="footer logo"/>
        <div className="icons_socials">
            <img src="/src/assets/instagram.svg" alt="socials"/>
            <img src="/src/assets/twitter.svg" alt="socials"/>
            <img src="/src/assets/linkedin.svg" alt="socials"/>
            <img src="/src/assets/facebook.svg" alt="socials"/>
            <img src="/src/assets/youtube.svg" alt="socials"/>
        </div>
        <ul className={`foot_list_lang ${getActive ? `active` : ""}`} onClick={()=>{getActive ? setActive(false) : setActive(true)}}>
            <span className="list_heading">
            <img src="/src/assets/web.svg" alt="web icon" className="web_icon"/>
              English{" "}
              <img
                className="arrow"
                src="https://www.notion.so/front-static/shared/icons/nav-caret.svg"
              />
            </span>
            <div className="language_list">
              <span className="list_item">
                <span className="list_head">English</span>
                <span className="list_body">English (US)</span>
              </span>
              <span className="list_item">
                <span className="list_head">Français (France)</span>
                <span className="list_body">French</span>
              </span>
              <span className="list_item">
                <span className="list_head">日本語</span>
                <span className="list_body">Japanese</span>
              </span>
              <span className="list_item">
                <span className="list_head">한국어</span>
                <span className="list_body">Korean</span>
              </span>
              <span className="list_item">
                <span className="list_head">Português (Brasil)</span>
                <span className="list_body">Portuguese (Brazil)</span>
              </span>
              <span className="list_item">
                <span className="list_head">Español (Latinoamérica)</span>
                <span className="list_body">Spanish (Latin America)</span>
              </span>
              <span className="list_item">
                <span className="list_head">Español (España)</span>
                <span className="list_body">Spanish (Spain)</span>
              </span>
              
            </div>
          </ul>
      </div>
      <div className="footer_two">
        <div className="sub_footer">
          <ul>
            <span>Product</span>
            <li>Wikis</li>
            <li>Projects</li>
            <li>Docs</li>
            <li>Notion AI</li>
            <li>Wikis</li>
            <li>What's new</li>
          </ul>
          <ul>
            <span>Solutions</span>
            <li>Enterprise</li>
            <li>Small business</li>
            <li>Personal use</li>
            <li>Remote work</li>
            <li>Startups</li>
            <li>Education</li>
            <li>Nonprofits</li>
            <li>Engineering</li>
            <li>Product</li>
            <li>Design</li>
            <li>Managers</li>
          </ul>
        </div>
        <div className="sub_footer">
          <ul>
            <span>Download</span>
            <li>iOS & Andriod</li>
            <li>Mac & Windows</li>
            <li>Web Clipper</li>
          </ul>
          <ul>
            <span>Build</span>
            <li>Integrations</li>
            <li>Templates</li>
            <li>API Docs</li>
            <li>Guides & Tutorials</li>
            <li>Hire a consultant</li>
            <li>Become an affiliate</li>
          </ul>
          <ul>
            <span>Learn</span>
            <li>Customer stories</li>
            <li>Help centers</li>
            <li>Webiners</li>
            <li>Blog</li>
            <li>Community</li>
          </ul>
        </div>
        <div className="sub_footer">
          <ul>
            <span>Get started</span>
            <li>Switch from Confluence</li>
            <li>Switch from Anasa</li>
            <li>Switch from Evernote</li>
            <li>Compare vs Monday</li>
            <li>Compare vs Clickup</li>
            <li>Compare vs Jira</li>
          </ul>
          <ul>
            <span>Resources</span>
            <li>Pricing</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Media kit</li>
            <li>Email us</li>
            <li>Security</li>
            <li>Cookie settings</li>
            <li>Terms & Privacy</li>
            <li>California Privacy N0tice</li>
            <li>Status</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
