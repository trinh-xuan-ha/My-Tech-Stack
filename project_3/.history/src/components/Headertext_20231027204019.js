import { FaArrowRightLong } from "react-icons/fa6";
function HeaderText() {
  return (
    <div className="header-title">
      <h2 className="title-text">
        Build Your Dream Website with Our Skilled
        <h2 className="title-development">development</h2> Team
      </h2>
      <p className="title-describe">
        Are you looking for a way to close all marketing, technical and customer
        support tasks for your company in one place
      </p>
      <div className="title-btn">
        <button className="btn-get-start">
          Get Started <FaArrowRightLong></FaArrowRightLong>
        </button>
        <button className="btn-pricing">
          <a href="#">pricing</a>
        </button>
      </div>
    </div>
  );
}
export default HeaderText;
