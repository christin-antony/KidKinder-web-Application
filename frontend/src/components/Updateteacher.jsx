
import React, { useState, useEffect } from "react";
import axios from "axios";
import testimonia3 from "./image/testimonial-3.jpg";

const Updateteacher = () => {
   
    const [datateacher, setDatateacher] = useState([]);
    const [error2, setError2] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:1010/getteacher");
          setDatateacher(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
          setError2("Failed to fetch data. Please try again.");
        }
      };
      fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:1010/deleteteacher/${id}`);
          setDatateacher(datateacher.filter((tea) => tea._id !== id));
        } catch (error) {
          console.error("Error deleting user:", error);
        }
      };

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
            <a href="/admin" className="nav-item nav-link slid">
              Dashboard
            </a>
            <a href="/teacheradd" className="nav-item nav-link active slid">
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

      <div className="container-fluid bg-primary px-0 px-md-5 Tableclass ">
      <h1 className="display-3 font-weight-bold text-white" style={{ marginTop: "80px", textAlign: "center" }}>
          Add Teachers
        </h1>
   <table>
        <thead>
          <tr>
            <th className="UTth">Name</th>
            <th className="UTth">Subject</th>
            <th className="UTth">Image</th>
            <th className="UTth">Delete</th>
          </tr>
        </thead>
        <tbody>
          {datateacher.map((teachItem, index) => (
            <tr key={teachItem._id}>
              <td className="UTtd">{teachItem.teachername}</td>
              <td className="UTtd">{teachItem.teachersubject}</td>
              <td className="UTtd">
                <img
                  className="img-fluid w-100"
                  src={`http://localhost:1010/${teachItem.teacherimage}`}
                  alt=""
                />
              </td>
              <td className="UTtd">
                <button onClick={() => handleDelete(teachItem._id)} className="delete">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Updateteacher
