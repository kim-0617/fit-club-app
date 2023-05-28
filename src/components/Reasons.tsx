import "../assets/css/Reasons.css";

import Image1 from "../assets/images/image1.png";
import Image2 from "../assets/images/image2.png";
import Image3 from "../assets/images/image3.png";
import Image4 from "../assets/images/image4.png";
import Nb from "../assets/images/nb.png";
import Adidas from "../assets/images/adidas.png";
import Nike from "../assets/images/nike.png";
import Tick from "../assets/images/tick.png";

const data = [
  { id: "1", src: Tick, cont: "OVER 140+ EXPERT COACHS" },
  { id: "2", src: Tick, cont: "TRAIN SMARTER AND FASTER THAN BEFORE" },
  { id: "3", src: Tick, cont: "1 FREE PROGRAM FOR NEW MEMBER" },
  { id: "4", src: Tick, cont: "RELIABLE PARTNERS" },
];

const Reasons = () => {
  return (
    <div className="reasons" id="Reasons">
      <div className="left__r">
        <img src={Image1} alt="image-01" />
        <img src={Image2} alt="image-02" />
        <img src={Image3} alt="image-03" />
        <img src={Image4} alt="image-04" />
      </div>

      <div className="right__r">
        <span>some reasons</span>
        <div>
          <span className="stroke__text">who</span>
          <span> choose us?</span>
        </div>

        <div className="details__r">
          {data.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.id} />
              <span>{item.cont}</span>
            </div>
          ))}

          <span className="partners">OUR PARTNERS</span>

          <div className="partners__img">
            <img src={Nb} alt="new-balance" />
            <img src={Adidas} alt="adidas" />
            <img src={Nike} alt="nike" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
