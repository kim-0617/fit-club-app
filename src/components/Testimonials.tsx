import { useState } from "react";
import "../assets/css/Testimonials.css";
import { motion } from "framer-motion";

import { testimonialsData } from "../assets/data/testimonialsData";
import RightArrow from "../assets/images/rightArrow.png";
import LeftArrow from "../assets/images/leftArrow.png";

const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };

  const [seleted, setSeleted] = useState<number>(0);
  const tLength = testimonialsData.length;

  return (
    <div className="test" id="Test">
      <div className="left__t">
        <span>Testimonials</span>
        <span className="stroke__text">what they</span>
        <span>say about us</span>
        <motion.span
          key={seleted}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[seleted].review}
        </motion.span>
        <span>
          <span className="name">{testimonialsData[seleted].name}</span> -{` `}
          {testimonialsData[seleted].status}
        </span>
      </div>
      <div className="right__t">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          key={seleted}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[seleted].image}
          alt={testimonialsData[seleted].name}
        />

        <div className="arrows">
          <img
            onClick={() => {
              seleted === 0
                ? setSeleted(tLength - 1)
                : setSeleted((prev) => prev - 1);
            }}
            src={LeftArrow}
            alt="left-arrow"
          />
          <img
            onClick={() => {
              seleted === tLength - 1
                ? setSeleted(0)
                : setSeleted((prev) => prev + 1);
            }}
            src={RightArrow}
            alt="right-arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
