import React from "react";
import "./techstack.css";
import { motion } from "framer-motion";
import { TechstackList } from "../../utils/techstacklist";

const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 including programming Languages, frameworks, databases, front-end
            and back-end tools, and APIs
          </p>
        </motion.div>
        <div className="row">
          {TechstackList.map((tech) => (
            <motion.div
              key={tech._id}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="col-md-3"
            >
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
