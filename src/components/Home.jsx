import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <section className="px-4 py-5 my-5 text-center animate__animated animate__fadeInUp animate__faster">
        <div className="col-lg-6 mx-auto">
          <div className="row align-items-center">
            <div className="">
              <h1 className="display-3 text-center text-md-start mb-3">
                Welcome to <span className="textName">Anita</span> your period
                tracker
              </h1>

              <p className="lead text-center text-md-start text-muted mb-5 mb-lg-8">
                Thank you for using Anita Period tracker, women's best friend!,
                Now you can manage and record your period and symptoms more
                scientifically. Then you can find how your cycle affects your
                body and well being. We hope you have a pleasant experience
                Please let us know more about you.
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="login"><button className=" btn btn-outline-secondary btn-lg px-4 gap-5">
                  Sign In
                </button>
                </Link>
                <Link to="singup"><button className=" btn btn-outline-secondary btn-lg px-4 ">
                  Sign Up
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Home;
