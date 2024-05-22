import React from "react";
import header from "./image/header.png";
import testimonia3 from "./image/testimonial-3.jpg";

const Admin = () => {
  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <div className="sidebar  pb-3 ">
        <nav className="navbar bg-light navbar-light">
          <a href="/" className="navbar-brand mx-4 mb-3">
            <h3 className="text-primary">
              {" "}
              <i className="flaticon-043-teddy-bear" />
              KidKinder
            </h3>
          </a>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img
                className="rounded-circle"
                src={testimonia3}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
            </div>
            <div className="ms-3">
              <h6 className="mb-0">christin</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100 ">
            <a href="/admin" className="nav-item nav-link active slid">
              Dashboard
            </a>
            <a href="/teacheradd" className="nav-item nav-link slid">
              Add teachers
            </a>
            <a href="/classadd" className="nav-item nav-link slid">
              Add class
            </a>
            <a href="/table" className="nav-item nav-link slid">
              Booking
            </a>
            <a href="" className="nav-item nav-link slid">
              Kid
            </a>
          </div>
        </nav>
      </div>

      <div className="container-fluid bg-primary px-0 px-md-5 ">
        <div className="row align-items-center px-3">
          <div className="col-lg-6 text-center text-lg-left">
            <h4 className="text-white mb-4 mt-5 mt-lg-0">
              Kids Learning Center
            </h4>
            <h1 className="display-3 font-weight-bold text-white">
              New Approach to Kids Education
            </h1>
            <p className="text-white mb-4">
              KidKinder is a unique approach to childcare that seamlessly
              integrates early childhood education with nurturing care. Designed
              for children between the ages of 1 to 5, KidKinder prioritizes
              holistic development,emotional, and physical growth in a safe and
              stimulating environment. KidKinder is more than just a
              daycare—it's a community where children thrive, friendships
              blossom, and a love for learning is nurtured from the very
              beginning. With KidKinder you can trust that your child is not
              only receiving quality care but also laying a strong foundation
              for future success."
            </p>
            <a href className="btn btn-secondary mt-1 py-3 px-5">
              Learn More
            </a>
          </div>

          <div className="col-lg-6 text-center text-lg-right">
            <img className="img-fluid mt-5" src={header} alt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
