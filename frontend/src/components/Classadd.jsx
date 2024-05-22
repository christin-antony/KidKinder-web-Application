import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import testimonia3 from './image/testimonial-3.jpg'


const Classadd = () => {
  const navigate = useNavigate()

    const [formData, setFormData] = useState({

      classname: "",
      classsubject: "",
      classimage: "", 
      imageFile: null 

    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      const classData = new FormData();

      classData .append("classname", formData.classname);
      classData .append("classsubject", formData.classsubject);
      classData .append("classimage", formData.imageFile);
 
      try {

        const response = await axios.post(
          "http://localhost:1010/insertclass",
          classData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

  console.log(response.data);
  navigate("/updateclass")
          


  setFormData({
    classname: "",
    classsubject: "",
    classimage: "", 
    imageFile: null 
  });

} catch (error) {
  console.error("Error:", error);
}
};

const handleChange = (e) => {
if (e.target.name === "imageFile") {
  setFormData({
    ...formData,
    [e.target.name]: e.target.files[0],
    classimage: URL.createObjectURL(e.target.files[0]) 
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

    <div className="sidebar  pb-3 ">
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
          <a href="/teacheradd" className="nav-item nav-link slid">Add teachers</a>
          <a href="/classadd" className="nav-item nav-link active slid">Add class</a>
          <a href="/table" className="nav-item nav-link slid">Booking</a>
          <a href="" className="nav-item nav-link slid">Kid</a>
        
        </div>
      </nav>
    </div>
    <div className="container-fluid bg-primary px-0 px-md-5 ">

      <h1 className="display-3 font-weight-bold text-white" style={{marginTop:"80px",textAlign:"center"}}>
      Add Class
            </h1>
      <div className="tablediv">
        <form onSubmit={handleSubmit}>
          <table className="tablediv1">
            <tbody>
              <tr>
                <td className="td1">
                  <label htmlFor="classname" className="label1">Class Name</label>
                </td>
                <td className="td1">
                  <input
                    type="text"
                    id="classname"
                    name="classname"
                    value={formData.classname}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="td1">
                  <label htmlFor="classsubject" className="label1"> Description</label>
                </td>
                <td className="td1">
                  <input
                    type="text"
                    id="classsubject"
                    name="classsubject"
                    value={formData.classsubject}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="td1">
                  <label htmlFor="classimage" className="label1">Image</label>
                </td>
                <td className="td1">
                  <input
                    type="file"
                    id="classimage"
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
        <button  className="btnN"><a href="/updateclass" className="classbtn"><i class="fa-solid fa-pen-to-square"></i></a></button> 
      </div>
   
      </div>
    </div>
  );
};

export default Classadd;
