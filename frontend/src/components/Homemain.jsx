import about1 from "./image/about-1.jpg";
import about2 from "./image/about-2.jpg";
import blog1 from "./image/blog-1.jpg";
import blog2 from "./image/blog-2.jpg";
import blog3 from "./image/blog-3.jpg";
import header from "./image/header.png";



import React, { useState, useEffect } from "react";
import axios from "axios";



const Homemain = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [classes, setClasses] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1010/insert", {
        name,
        email,
        classes,
      })
      .then((response) => {
        console.log(response.data);
        // Clear input fields after successful submission
        setName("");
        setEmail("");
        setClasses("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  

  const [dataclass, setDataclass] = useState([]);
  const [error1, setError1] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1010/getclass");
        setDataclass(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError1("Failed to fetch data. Please try again.");
      }
    };
    fetchData();
  }, []);
  

  // teacher

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

// testimonia
// scroll


  return (
    <div>
      <div className="container-fluid bg-primary px-0 px-md-5 mb-5">
        <div className="row align-items-center px-3">
          <div className="col-lg-6 text-center text-lg-left">
            <h4 className="text-white mb-4 mt-5 mt-lg-0">
              Kids Learning Center
            </h4>
            <h1 className="display-3 font-weight-bold text-white">
              New Approach to Kids Education
            </h1>
            <p className="text-white mb-4">
              Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet
              sed sit. Ipsum dolor no justo dolor et, lorem ut dolor erat dolore
              sed ipsum at ipsum nonumy amet. Clita lorem dolore sed stet et est
              justo dolore.
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


      {/* Header End */}
      {/* Facilities Start */}


      <div className="container-fluid pt-5">
        <div className="container pb-3">
          <div className="row">
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: 30 }}
              >
                <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />
                <div className="pl-4">
                  <h4>Play Ground</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: 30 }}
              >
                <i className="flaticon-022-drum h1 font-weight-normal text-primary mb-3" />
                <div className="pl-4">
                  <h4>Music and Dance</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: 30 }}
              >
                <i className="flaticon-030-crayons h1 font-weight-normal text-primary mb-3" />
                <div className="pl-4">
                  <h4>Arts and Crafts</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: 30 }}
              >
                <i className="flaticon-017-toy-car h1 font-weight-normal text-primary mb-3" />
                <div className="pl-4">
                  <h4>Safe Transportation</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: 30 }}
              >
                <i className="flaticon-025-sandwich h1 font-weight-normal text-primary mb-3" />
                <div className="pl-4">
                  <h4>Healthy food</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: 30 }}
              >
                <i className="flaticon-047-backpack h1 font-weight-normal text-primary mb-3" />
                <div className="pl-4">
                  <h4>Educational Tour</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Start */}
      {/* About Start */}


      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img
                className="img-fluid rounded mb-5 mb-lg-0"
                src={about1}
                alt
              />
            </div>
            <div className="col-lg-7">
              <p className="section-title pr-5">
                <span className="pr-2">Learn About Us</span>
              </p>
              <h1 className="mb-4">Best School For Your Kids</h1>
              <p>
                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                dolor
              </p>
              <div className="row pt-2 pb-4">
                <div className="col-6 col-md-4">
                  <img className="img-fluid rounded" src={about2} alt />
                </div>
                <div className="col-6 col-md-8">
                  <ul className="list-inline m-0">
                    <li className="py-2 border-top border-bottom lileft">
                      <i className="fa fa-check text-primary mr-3" />
                      Labore eos amet dolor amet diam
                    </li>
                    <li className="py-2 border-bottom lileft">
                      <i className="fa fa-check text-primary mr-3" />
                      Etsea et sit dolor amet ipsum
                    </li>
                    <li className="py-2 border-bottom lileft">
                      <i className="fa fa-check text-primary mr-3" />
                      Diam dolor diam elitripsum vero.
                    </li>
                  </ul>
                </div>
              </div>
              <a href className="btn btn-primary mt-2 py-2 px-4">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About End */}
      {/* Class Start */}

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">Popular Classes</span>
            </p>
            <h1 className="mb-4">Classes for Your Kids</h1>
          </div>

          <div className="row">
            {dataclass.slice(-3).map((classItem, index) => (
              <div className="col-lg-4 mb-5">
                <div className="card border-0 bg-light shadow-sm pb-2">
                  <img
                    className="card-img-top mb-2"
                    src={`http://localhost:1010/${classItem.classimage}`}
                    alt
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">{classItem.classname}</h4>
                    <p className="card-text">{classItem.classsubject}</p>
                  </div>
                  <div className="card-footer bg-transparent py-4 px-5">
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>Age of Kids</strong>
                      </div>
                      <div className="col-6 py-1">3 - 6 Years</div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>Total Seats</strong>
                      </div>
                      <div className="col-6 py-1">40 Seats</div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>Class Time</strong>
                      </div>
                      <div className="col-6 py-1">08:00 - 10:00</div>
                    </div>
                    <div className="row">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>Tution Fee</strong>
                      </div>
                      <div className="col-6 py-1">$290 / Month</div>
                    </div>
                  </div>
                  <a href className="btn btn-primary px-4 mx-auto mb-4">
                    Join Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Class End */}
      {/* Registration Start */}

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <p className="section-title pr-5">
                <span className="pr-2">Book A Seat</span>
              </p>
              <h1 className="mb-4">Book A Seat For Your Kid</h1>
              <p>
                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                dolor
              </p>
              <ul className="list-inline m-0">
                <li className="py-2 lileft">
                  <i className="fa fa-check text-success mr-3" />
                  Labore eos amet dolor amet diam
                </li>
                <li className="py-2 lileft">
                  <i className="fa fa-check text-success mr-3" />
                  Etsea et sit dolor amet ipsum
                </li>
                <li className="py-2 lileft">
                  <i className="fa fa-check text-success mr-3" />
                  Diam dolor diam elitripsum vero.
                </li>
              </ul>
              <a href className="btn btn-primary mt-4 py-2 px-4">
                Book Now
              </a>
            </div>
            <div className="col-lg-5">
              <div className="card border-0">
                <div className="card-header bg-secondary text-center p-4">
                  <h1 className="text-white m-0">Book A Seat</h1>
                </div>
                <div className="card-body rounded-bottom bg-primary p-5">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Your Name"
                        required="required"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control border-0 p-4"
                        placeholder="Your Email"
                        required="required"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="custom-select border-0 px-4"
                        style={{ height: 47 }}
                        onChange={(e) => setClasses(e.target.value)}
                        value={classes}
                      >
                        <option selected>Select A Class</option>
                        <option value="class1">Class 1</option>
                        <option value="class2">Class 2</option>
                        <option value="class3">Class 3</option>
                      </select>
                    </div>
                    <div>
                      <button
                        className="btn btn-secondary btn-block border-0 py-3"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration End */}
      {/* Team Start */}

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">Our Teachers</span>
            </p>
            <h1 className="mb-4">Meet Our Teachers</h1>
          </div>
          <div className="row">
            {datateacher.slice(-4).map((teachItem, index) => (
              <div
                className="col-md-6 col-lg-3 text-center team mb-5"
                key={index}
              >
                <div
                  className="position-relative overflow-hidden mb-4"
                  style={{ borderRadius: "100%" }}
                >
                  <img
                    className="img-fluid w-100"
                    src={`http://localhost:1010/${teachItem.teacherimage}`}
                    alt=""
                  />
                  <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                    <a
                      className="btn btn-outline-light text-center mr-2 px-0"
                      style={{ width: 38, height: 38 }}
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-outline-light text-center mr-2 px-0"
                      style={{ width: 38, height: 38 }}
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-outline-light text-center px-0"
                      style={{ width: 38, height: 38 }}
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <h4>{teachItem.teachername}</h4>
                <i>{teachItem.teachersubject}</i>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team End */}
      {/* Testimonial Start */}
    
      {/* Testimonial End */}
      {/* Blog Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">Latest Blog</span>
            </p>
            <h1 className="mb-4">Latest Articles From Blog</h1>
          </div>
          <div className="row pb-3">
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm mb-2">
                <img className="card-img-top mb-2" src={blog1} alt />
                <div className="card-body bg-light text-center p-4">
                  <h4 className>Diam amet eos at no eos</h4>
                  <div className="d-flex justify-content-center mb-3">
                    <small className="mr-3">
                      <i className="fa fa-user text-primary" /> Admin
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-folder text-primary" /> Web Design
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-comments text-primary" /> 15
                    </small>
                  </div>
                  <p>
                    Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam
                    eirmod, duo et sed sit eirmod kasd clita tempor dolor stet
                    lorem. Tempor ipsum justo amet stet...
                  </p>
                  <a href className="btn btn-primary px-4 mx-auto my-2">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm mb-2">
                <img className="card-img-top mb-2" src={blog2} alt />
                <div className="card-body bg-light text-center p-4">
                  <h4 className>Diam amet eos at no eos</h4>
                  <div className="d-flex justify-content-center mb-3">
                    <small className="mr-3">
                      <i className="fa fa-user text-primary" /> Admin
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-folder text-primary" /> Web Design
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-comments text-primary" /> 15
                    </small>
                  </div>
                  <p>
                    Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam
                    eirmod, duo et sed sit eirmod kasd clita tempor dolor stet
                    lorem. Tempor ipsum justo amet stet...
                  </p>
                  <a href className="btn btn-primary px-4 mx-auto my-2">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm mb-2">
                <img className="card-img-top mb-2" src={blog3} alt />
                <div className="card-body bg-light text-center p-4">
                  <h4 className>Diam amet eos at no eos</h4>
                  <div className="d-flex justify-content-center mb-3">
                    <small className="mr-3">
                      <i className="fa fa-user text-primary" /> Admin
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-folder text-primary" /> Web Design
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-comments text-primary" /> 15
                    </small>
                  </div>
                  <p>
                    Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam
                    eirmod, duo et sed sit eirmod kasd clita tempor dolor stet
                    lorem. Tempor ipsum justo amet stet...
                  </p>
                  <a href className="btn btn-primary px-4 mx-auto my-2">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  
    </div>
  );
};

export default Homemain;
