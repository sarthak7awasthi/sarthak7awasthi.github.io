import React, { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: "url(images/hackathon.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div
                          className="desc"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                          }}
                        >
                          <h1>Hi, I'm Sarthak!</h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://docs.google.com/document/d/1j9EdVrIu38uQ5TGUz0jC27goRHZSbZAu/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Here's my resume:)
                              <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: "url(images/philly.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div
                          className="desc"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                          }}
                        >
                          <h1>I am somewhat of a Computer Scientist myself</h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/sarthak7awasthi"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              You can see my projects here
                              <i className="icon-briefcase3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
