import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";


const banner = (props) => {
  
  const datas = props.data;

  return (
    <div className="banner">
      <Carousel>
        {datas.map((data, idx) => (
          <Carousel.Item key={idx}>
            {data.thumbnail_image_url ? <img className="d-block w-100" src={data.thumbnail_image_url} alt="First slide"/> : <img className="d-block w-100" src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?size=626&ext=jpg" alt="First slide"/>}
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        
      </Carousel>
    </div>
  );
};

export default banner;
