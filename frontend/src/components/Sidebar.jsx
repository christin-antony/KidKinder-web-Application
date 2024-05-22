import React from "react";
import testimonia3 from './image/testimonial-3.jpg'

const Sidebar = () => {
  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <div className="sidebar  pb-3 ">
        <nav className="navbar bg-light navbar-light">
          <a href="" className="navbar-brand mx-4 mb-3">
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
            <a href="" className="nav-item nav-link active slid">
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
    </div>
  );
};

export default Sidebar;
