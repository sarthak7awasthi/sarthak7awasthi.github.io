import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/sea.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Sarthak Awasthi</a>
              </h1>
              <span className="email">
                <i className="icon-mail"></i> sa3655@drexel.edu.com
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/people/Sarthak-Awasthi/100009467075856"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-facebook2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/sarthak7awasthi_/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sarthak-awasthi-6107991a7/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sarthak7awasthi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    );
  }
}
