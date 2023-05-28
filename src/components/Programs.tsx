import "../assets/css/Programs.css";
import { programsData } from "../assets/data/programsData.js";
import RightArrow from "../assets/images/rightArrow.png";

const Programs = () => {
  return (
    <div className="programs" id="Programs">
      <div className="program__header">
        <span className="stroke__text">Explore our</span>
        <span>Programs</span>
        <span className="stroke__text">to shape you</span>
      </div>

      <div className="program__categories">
        {programsData.map((program) => (
          <div className="category" key={program.heading}>
            <program.image />
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join__now">
              <span>Join Now</span>
              <img
                src={RightArrow}
                alt="right-arrow"
                className="right__arrow"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
