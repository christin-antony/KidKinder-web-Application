import React, { useState } from 'react';
import './Style.css';
import portfolio1 from './image/portfolio-1.jpg';
import portfolio2 from './image/portfolio-2.jpg';
import portfolio3 from './image/portfolio-3.jpg';
import portfolio4 from './image/portfolio-4.jpg';
import portfolio5 from './image/portfolio-5.jpg';
import portfolio6 from './image/portfolio-6.jpg';

const Gallerymain = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div>
      <div className="container-fluid bg-primary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 400 }}>
          <h3 className="display-3 font-weight-bold text-white">Gallery</h3>
          <div className="d-inline-flex text-white">
            <p className="m-0">
              <a className="text-white" href="/">
                Home
              </a>
            </p>
            <p className="m-0 px-2">/</p>
            <p className="m-0">Gallery</p>
          </div>
        </div>
      </div>
      {/* Header End */}
      {/* Gallery Start */}
      <div className="container-fluid pt-5 pb-3">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">Our Gallery</span>
            </p>
            <h1 className="mb-4">Our Kids School Gallery</h1>
          </div>
          <div className="row">
            <div className="col-12 text-center mb-2">
              <ul className="list-inline mb-4" id="portfolio-flters">
                <li className={`btn btn-outline-primary m-1 ${activeFilter === '*' ? 'active' : ''}`} onClick={() => handleFilterClick('*')}>
                  All
                </li>
                <li className={`btn btn-outline-primary m-1 ${activeFilter === '.first' ? 'active' : ''}`} onClick={() => handleFilterClick('.first')}>
                  Playing
                </li>
                <li className={`btn btn-outline-primary m-1 ${activeFilter === '.second' ? 'active' : ''}`} onClick={() => handleFilterClick('.second')}>
                  Drawing
                </li>
                <li className={`btn btn-outline-primary m-1 ${activeFilter === '.third' ? 'active' : ''}`} onClick={() => handleFilterClick('.third')}>
                  Reading
                </li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            {[
              { src: portfolio1, filter: '.first' },
              { src: portfolio2, filter: '.second' },
              { src: portfolio3, filter: '.third' },
              { src: portfolio4, filter: '.first' },
              { src: portfolio5, filter: '.second' },
              { src: portfolio6, filter: '.third' },
            ].filter(item => activeFilter === '*' || item.filter === activeFilter).map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4 portfolio-item">
                <div className="position-relative overflow-hidden mb-2">
                  <img className="img-fluid w-100" src={item.src} alt="" />
                  <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                    <a href={item.src} data-lightbox="portfolio">
                      <i className="fa fa-plus text-white" style={{ fontSize: 60 }} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallerymain;
