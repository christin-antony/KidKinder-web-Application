import React, { useEffect, useState } from "react";
import axios from "axios";
import testimonia3 from './image/testimonial-3.jpg'

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:1010/get");
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };  
      fetchData();
    }, []);
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:1010/delete/${id}`);
        setData(data.filter((bank) => bank._id !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
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
            <a href="/classadd" className="nav-item nav-link slid">Add class</a>
            <a href="/table" className="nav-item nav-link active slid">Booking</a>
            <a href="" className="nav-item nav-link slid">Kid</a>
          
          </div>
        </nav>
      </div>
      <div className="container-fluid bg-primary px-0 px-md-5 ">
      <div style={{ display: "grid", justifyContent:"center" }}>
       
        <h1 className="display-3 font-weight-bold text-white" style={{marginTop:"80px",textAlign:"center"}}>
        kids Booking Details
            </h1>
        <table  className="table1">
          <thead>
            <tr>
            
              <th className="th">Name</th>
    
              <th className="th">Email</th>
              <th className="th">Classes</th>
            
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user._id}>
                <td className="td">{user.name}</td>
             
                <td className="td">{user.email}</td>
                <td className="td">{user.classes}</td>
               
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
    );
  };
export default Table