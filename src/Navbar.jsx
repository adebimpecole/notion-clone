import React, { useEffect, useState } from "react";
import product from "./assets/product.svg";
import "./Styles/Navbar.sass";
import "./Styles/MiniStyles.sass";

import data from "./MinorData.json";
import ListItemIcon from "./MinorComponents/ListItemIcon";

import sprinkle from "./assets/sprinkle.svg";
import books from "./assets/books.svg";
import target from "./assets/target.svg";
import doc from "./assets/doc.svg";

const Navbar = () => {
  const [getProducts, setProducts] = useState([]);
  const [getSolutions, setSolutions] = useState([]);

  useEffect(() => {
    setProducts(data.Navbar[0]);
    setSolutions(data.Navbar[1]);
  }, [data]);

  return (
    <div className="nav_bar">
      <div className="left_nav">
        <img src={product} className="logo" alt="logo" />
        <ul className="each_nav">
          <li className="nav_list_item">
            <span className="list_heading">
              Product{" "}
              <img
                className="arrow"
                src="https://www.notion.so/front-static/shared/icons/nav-caret.svg"
              />
            </span>
            <div className="list_section">
              <ul className="the_list">
                {getProducts.nav1 ? (
                  <>
                    <ul>
                      {getProducts.nav1.map((item, index) => (
                        <ListItemIcon
                          the_icon={item.icon}
                          the_head={item.big_text}
                          the_text={item.small_text}
                          the_key={"prdct2" + index}
                          the_style={{
                            background: `${item.back}`,
                            width: "2rem",
                            height: "2rem",
                            padding: ".35rem",
                            borderRadius: "3px"
                          }}
                        />
                      ))}
                    </ul>
                    <ul className="side_menu">
                      {getProducts.nav2.map((item, index) => (
                        <ListItemIcon
                          the_icon={item.icon}
                          the_head={item.big_text}
                          the_text={item.small_text}
                          the_key={"prdct" + index}
                          the_style={{
                            display: `none`
                          }}
                        />
                      ))}
                    </ul>
                  </>
                ) : (
                  <span></span>
                )}
              </ul>
            </div>
          </li>
          <li className="nav_list_item">
            <span className="list_heading">
              Download{" "}
              <img
                className="arrow"
                src="https://www.notion.so/front-static/shared/icons/nav-caret.svg"
              />
            </span>
            <div className="list_section plain_list">
              <span className="list_item">iOS & Andriod</span>
              <span className="list_item">Mac & Windows</span>
              <span className="list_item">Web Clipper</span>
            </div>
          </li>
          <li className="nav_list_item">
            <span className="list_heading">
              Solutions{" "}
              <img
                className="arrow"
                src="https://www.notion.so/front-static/shared/icons/nav-caret.svg"
              />
            </span>
            <div className="list_section">
              <ul className="the_list">
                {getSolutions.nav1 ? (
                  <>
                    <ul>
                      <span className="lis_header">
                        {getSolutions.nav1[0].head}
                      </span>
                      {getSolutions.nav1.map((item, index) => (
                        <ListItemIcon
                          the_icon={item.icon}
                          the_head={item.big_text}
                          the_text={item.small_text}
                          the_key={"solni" + index}
                        />
                      ))}
                    </ul>
                    <ul className="side_menu">
                      <span className="lis_header">
                        {getSolutions.nav2.head}
                      </span>
                      {getSolutions.nav2.dets.map((item, index) => (
                        <li className="list_item" key={"soln" + index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ul className="side_menu">
                      <span className="lis_header">
                        {getSolutions.nav3.head}
                      </span>
                      {getSolutions.nav3.dets.map((item, index) => (
                        <li className="list_item" key={"soln3" + index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <span></span>
                )}
              </ul>
            </div>
          </li>
          <li className="nav_list_item">
            <span className="list_heading">
              Resources{" "}
              <img
                className="arrow"
                src="https://www.notion.so/front-static/shared/icons/nav-caret.svg"
              />
            </span>
            <div className="list_section plain_list">
              <span className="list_item">Blog</span>
              <span className="list_item">Guides & tutorials</span>
              <span className="list_item">Webiners</span>
              <span className="list_item">Help Center</span>
              <span className="list_item">API docs</span>
              <span className="list_item">Community</span>
              <span className="list_item">Hire a consultant</span>
            </div>
          </li>
          <li className="nav_list_item">
            <span className="list_heading">Pricing</span>
          </li>
        </ul>
      </div>
      <div className="right_nav">
        <ul className="each_nav">
          <li className="nav_list_item">Request a demo</li>
          <span className="border_div"></span>
          <li className="nav_list_item">Log in</li>
          <li className="nav_list_item get_notion">Get notion free</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
