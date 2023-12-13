import { FaArrowRightLong } from "react-icons/fa6";
function HeaderText() {
  return (
    <div className="header-title">
      <h4 className="title-text">
        Build Your Dream Website with Our Skilled
        <h4 className="title-development">development</h4> Team
      </h4>
      <p className="title-describe">
        Are you looking for a way to close all marketing, technical and customer
        support tasks for your company in one place
      </p>
      <div className="title-btn">
        <button className="btn-get-start">
          <a href="#">
            Get Started <FaArrowRightLong></FaArrowRightLong>
          </a>
        </button>
        <button className="btn-pricing">
          <a href="#">pricing</a>
        </button>
      </div>
    </div>
  );
}
export default HeaderText;
