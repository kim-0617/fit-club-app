import "../assets/css/Hero.css";
import Header from "./Header";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

import HeroImage from "../assets/images/hero_image.png";
import HeroImageBack from "../assets/images/hero_image_back.png";
import Heart from "../assets/images/heart.png";
import Calories from "../assets/images/calories.png";

const data = [
  {
    id: "1",
    start: 100,
    end: 140,
    delay: "4",
    preFix: "+",
    cont: "expert coaches",
  },
  {
    id: "2",
    start: 800,
    end: 978,
    delay: "4",
    preFix: "+",
    cont: "members joined",
  },
  {
    id: "3",
    start: 0,
    end: 50,
    delay: "4",
    preFix: "+",
    cont: "fitness programs",
  },
];

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const isMobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="Hero">
      <div className="blur blur__h"></div>
      <div className="left__h">
        <Header />

        {/* the best ad */}
        <div className="best__ad">
          <motion.div
            initial={{ left: isMobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* the best ad */}

        {/* hero heading */}
        <div className="hero__text">
          <div>
            <span className="stroke__text">Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>

          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* hero heading */}

        {/* figures */}
        <div className="figures">
          {data.map((item) => (
            <div key={item.id}>
              <span>
                <NumberCounter
                  start={item.start}
                  end={item.end}
                  delay={item.delay}
                  preFix={item.preFix}
                />
              </span>
              <span>{item.cont}</span>
            </div>
          ))}
        </div>
        {/* figures */}

        {/* hero buttons */}
        <div className="hero__btn">
          <div className="btn">Get Started</div>
          <div className="btn">Learn More</div>
        </div>
        {/* hero buttons */}
      </div>
      <div className="right__h">
        <div className="btn join__now">Join Now</div>

        <motion.div
          className="heart__rate"
          transition={transition}
          initial={{ right: "1rem" }}
          whileInView={{ right: "4rem" }}
        >
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={HeroImage} alt="hero-image" className="hero__img" />
        <motion.img
          src={HeroImageBack}
          alt="hero-image-back"
          className="hero__img__back"
          initial={{ right: "11rem" }}
          whileInView={{ right: "22rem" }}
          transition={transition}
        />
        {/* hero images */}

        {/* cal */}
        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
        {/* cal */}
      </div>
    </div>
  );
};

export default Hero;
