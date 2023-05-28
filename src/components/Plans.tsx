import "../assets/css/Plans.css";
import { plansData } from "../assets/data/plansData";
import WhiteTick from "../assets/images/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans" id="Plans">
      <div className="blur blur__p__1"></div>
      <div className="blur blur__p__2"></div>
      <div className="plans__header">
        <span className="stroke__text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke__text">NOW WITHUS</span>
      </div>

      {/* plans card */}
      <div className="plans__card">
        {plansData.map((plan) => (
          <div className="plan" key={plan.name}>
            <plan.icon />
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature" key={index}>
                  <img src={WhiteTick} alt="white-tick" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="more__benefits">
              <span>See more benefits{`->`}</span>
            </div>
            <div className="btn plan__btn">Join Now</div>
          </div>
        ))}
      </div>
      {/* plans card */}
    </div>
  );
};

export default Plans;
