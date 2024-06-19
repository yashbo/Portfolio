import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        Discover my web development portfolio showcasing modern, responsive applications tailored for diverse needs. Utilizing React.js for frontend, Node.js and Express.js for backend, and MongoDB for robust databases, each project exemplifies my commitment to innovation, performance, and user-centric design.


        </p>
        {/* card design */}
        <div className="row" id="ads">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-md-4"
          >
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img
                  src="https://imgs.search.brave.com/-TweKG1Fq5yFm2QS05U59QB_0Vu6KWkcFg4ed9WAwLE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/YW5kcm9pZGF1dGhv/cml0eS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDkv/bWVzc2VuZ2VyLnBu/Zw"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
                <span className="card-detail-badge">jsonwebtoken</span>
                <span className="card-detail-badge">bcryptjs</span>
                <span className="card-detail-badge">socket.io</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">Axios</span>
                <span className="card-detail-badge">CSS</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Chat Application</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/yashbo/MERN-CHAT"
                >
                  View
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-md-4"
          >
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img
                  src="https://imgs.search.brave.com/_AssAJ7_qX0ps1rds6Z4yk-KyTG0cy5sVcogiBZB58g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9yZWFk/aW5nbGlzdC5hcHAv/X25leHQvc3RhdGlj/L21lZGlhL2lQaG9u/ZV8xM19Qcm8tMF9U/b1JlYWRMaXN0X2Zy/YW1lZC41MzhkOWQ4/Mi5wbmc"
                  alt="project2"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">Mongodb</span>
                <span className="card-detail-badge">Axios</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">CSS</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">BookList Application</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://booklist-front.onrender.com/"
                >
                  View
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-md-4"
          >
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img
                  src="https://imgs.search.brave.com/SeOMkWVno7EPXwc2Q4-HV6hn3YntJg59RCEQ-uSBZUQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS81/ZTU5M2ZiMDYwY2Y4/NzdjZjg3NWRkMWYv/NjY1NTQwZWNlNTBm/MjJhMTQ0MjA5MWNm/XzIwODE3MDQyLTE0/N2QtNDE1OC05ZjRj/LTIxZDg4Yjk1Nzgx/NC5qcGVn"
                  alt="project3"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">Mongodb</span>
                <span className="card-detail-badge">Redux</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Portfolio Website</h5>
                </div>
                <a className="ad-btn" href="view">
                  View
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
