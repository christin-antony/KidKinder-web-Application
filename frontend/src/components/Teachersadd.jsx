import React, { useState } from "react";
import axios from "axios";
import testimonia3 from "./image/testimonial-3.jpg";
import { useNavigate } from "react-router-dom";

const Teachersadd = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    teachername: "",
    teachersubject: "",
    teacherimage:"",
    imageFile: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const teacherData = new FormData();
    teacherData.append("teachername", formData.teachername);
    teacherData.append("teachersubject", formData.teachersubject);
    teacherData.append("teacherimage", formData.imageFile);

    try {
      const response = await axios.post(
        "http://localhost:1010/insertteacher",
        teacherData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    
      navigate("/updateteacher")

      setFormData({
        teachername: "",
        teachersubject: "",
        teacherimage:"",
        imageFile: null
      });

    } catch (error) {
      console.error("Error:", error);
      alert('Failed to add new teacher');
    }
  };

  const handleChange = (e) => {
   

      if (e.target.name === "imageFile") {
        setFormData({
          ...formData,
          [e.target.name]: e.target.files[0],
         teacherimage: URL.createObjectURL(e.target.files[0]) 
        });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <div className="sidebar pb-3 ">
      <nav className="navbar bg-light navbar-light">
        <a href="/" className="navbar-brand mx-4 mb-3">
          <h3 className="text-primary"> <i className="flaticon-043-teddy-bear" />KidKinder</h3>
        </a>
        <div className="d-flex align-items-center ms-4 mb-4">
          <div className="position-relative">
            <img className="rounded-circle" src={testimonia3} alt="" style={{ "width": "40px", "height": "40px" }} />
            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
          </div>
          <div className="ms-3">
            <h6 className="mb-0">christin</h6>
            <span>Admin</span>
          </div>
        </div>
        <div className="navbar-nav w-100 ">
          <a href="/admin" className="nav-item nav-link slid">Dashboard</a>
          <a href="/teacheradd" className="nav-item nav-link active slid">Add teachers</a>
          <a href="/classadd" className="nav-item nav-link slid">Add class</a>
          <a href="/table" className="nav-item nav-link slid">Booking</a>
          <a href="" className="nav-item nav-link slid">Kid</a>
        
        </div>
      </nav>
      </div>
      <div className="container-fluid bg-primary px-0 px-md-5 ">
        <h1 className="display-3 font-weight-bold text-white" style={{ marginTop: "80px", textAlign: "center" }}>
          Add Teachers
        </h1>
        <div className="tablediv">
          <form onSubmit={handleSubmit}>
            <table className="tablediv2">
              <tbody>
                <tr>
                  <td className="td2">
                    <label htmlFor="teachername" className="label2">Name</label>
                  </td>
                  <td className="td2">
                    <input
                      type="text"
                      id="teachername"
                      name="teachername"
                      value={formData.teachername}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="td2">
                    <label htmlFor="teachersubject" className="label2">Subject</label>
                  </td>
                  <td className="td2">
                    <input
                      type="text"
                      id="teachersubject"
                      name="teachersubject"
                      value={formData.teachersubject}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="td2" >
                    <label htmlFor="teacherimage" className="label2">Image</label>
                  </td>
                  <td className="td2">
                    <input
                      type="file"
                      id="teacherimage"
                      name="imageFile"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="submit" className="btn1">
              Submit
            </button>
           
          </form>
          <button  className="btnN"><a href="/updateteacher" className="classbtn"><i class="fa-solid fa-pen-to-square"></i></a></button> 
        </div>
      </div>
    </div>
  );
};

export default Teachersadd;
