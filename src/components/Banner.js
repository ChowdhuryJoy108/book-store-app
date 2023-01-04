import React from "react";
import "./Banner.css";
import photo1 from '../assets/2018-Book-Covers-Grid-898x1024.png'
import photo2 from '../assets/2767074bf8b23bda1a486759af8c081f.jpg'
import photo3 from '../assets/0b.jpg'


const Banner = () => {
  return (
<div className="container" style={{
    marginTop:'20px'
}}>
    <div
        id="carouselExampleControls"
        className="carousel slide container"
        data-bs-ride="carousel"
      >

          <div className="carousel-inner container">
            <div className="carousel-item active">
              <div className="card-main">
                 <div className="img-div w-50">
                   <img
                  src={photo1}
                  className="d-block w-50"
                  alt="..."
                  style={{width:"100%", height:"300px"}}
                    />
                 </div>
                 <div className="des-div w-50">
                  <h1 style={{textAlign:"center", color:"yellowgreen"}}>20% Off</h1>
                 <h5
                  style={{
                    textAlign: "center",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                 >
                  A Guy Named Soo
                   
                 </h5>
                 <h6 style={{ textAlign: "center", color: "black" }}>
                 Writing and Other Passions of Andy W. Taylor
                 </h6>
                 <p style={{ textAlign: "center", color: "black" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis quo est dolorem inventore laudantium quae porro,
                  praesentium sunt velit minus officia aspernatur aut reiciendis
                  recusandae quibusdam molestiae dolores quaerat voluptatum.
                 </p>
                </div>
             </div>
           </div>
        
          <div className="carousel-item">
            <div className="card-main">
              <div className="img-div w-50">
                <img
                  src={photo2}
                  className=" d-block w-50"
                  alt="..."
                  style={{width:"100%", height:"300px"}}
                />
              </div>
              <div className="des-div w-50">
                <h1 style={{textAlign:"center", color:"yellowgreen"}}>35% Off</h1>
                <h5
                  style={{
                    textAlign: "center",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  20 best Seller books
                </h5>
                <h6 style={{ textAlign: "center", color: "black" }}>
                  by Christinareadsya
                </h6>
                <p style={{ textAlign: "center", color: "black" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis quo est dolorem inventore laudantium quae porro,
                  praesentium sunt velit minus officia aspernatur aut reiciendis
                  recusandae quibusdam molestiae dolores quaerat voluptatum.
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card-main">
              <div className="img-div w-50 ">
                <img
                  src={photo3}
                  className="d-block w-50"
                  alt="..."
                  style={{width:"100%", height:"300px"}}
                />
              </div>
              <div className=" des-div w-50">
                <h1 style={{textAlign:"center", color:"yellowgreen"}}> 50% Off</h1>
                <h5
                  style={{
                    textAlign: "center",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                25 all time Best Seller Books 
                </h5>
                <h6 style={{ textAlign: "center", color: "black" }}>
                 By New york Times
                </h6>
                <p style={{ textAlign: "center", color: "black" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis quo est dolorem inventore laudantium quae porro,
                  praesentium sunt velit minus officia aspernatur aut reiciendis
                  recusandae quibusdam molestiae dolores quaerat voluptatum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
  
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
