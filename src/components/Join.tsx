import { useRef, useState } from "react";
import "../assets/css/Join.css";
import emailjs from "@emailjs/browser";

const serviceID = import.meta.env.VITE_YOUR_SERVICE_ID;
const templateID = import.meta.env.VITE_YOUR_TEMPLATE_ID;
const pubilcKEY = import.meta.env.VITE_YOUR_PUBLIC_KEY;

const Join = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      alert("유효하지 않은 이메일 입니다.");
      return;
    }

    setLoading(true);
    if (formRef.current) {
      emailjs
        .sendForm(serviceID, templateID, formRef.current, pubilcKEY)
        .then(
          (result) => {
            alert("전송성공");
            console.log(result);
          },
          (error) => {
            alert("전송실패");
            console.log(error);
          }
        )
        .finally(() => {
          setLoading(false);
          setEmail("");
        });
    }
  };
  return (
    <div className="join" id="Join">
      <div className="left__j">
        <hr />
        <div>
          <span className="stroke__text">READY TO</span>
          <span>LEVEL UP</span>
        </div>

        <div>
          <span>YOUR BODY</span>
          <span className="stroke__text">WITH US?</span>
        </div>
      </div>
      <div className="right__j">
        <form ref={formRef} className="email" onSubmit={sendEmail}>
          <input
            type="email"
            name="user__email"
            placeholder="Enter your Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn join__btn">
            {loading ? "..." : "Join Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
