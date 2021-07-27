import {React, useEffect} from "react";
import { Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { Link} from 'react-router-dom'
// import { fetchPagedonasi2 } from "../Redux/pagelistdonasi2/actions";
import { fetchPageDonasi } from '../Redux/pagelistdonasi/actions'
import { useDispatch, useSelector } from "react-redux";

const Listdonasidua = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchPagedonasi2(token));
    dispatch(fetchPageDonasi(token));
  }, []);
  
  const datas = useSelector((state) => state.pagedonasiReducer.pagedonasi);
  // const datas = useSelector((state) => state.pagedonasi2Reducer.pagedonasi2);

  return (
    <div className="container list-donasi-dua">
      <Row>
        <Carousel className="w-100">
          {datas.map((data, idx) => (
            <Carousel.Item key={idx}>
              {/* <img className="d-block w-100" src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg" alt=""/> */}
              {data.thumbnail_image_url ? <img className="d-block w-100" src={data.thumbnail_image_url} alt=""/> : <img className="d-block w-100" src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?size=626&ext=jpg" alt=""/>}
              <Carousel.Caption>
                <h3>{data.title}</h3>
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>

      <Row>
        {datas.map((data, idx) => (
          <Col md={4} className="mb-2" key={idx}>
            <Card className="bg-dark text-white">
              {/* <Card.Img src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg" alt="Card image"/> */}
              {data.thumbnail_image_url ? <Card.Img src={data.thumbnail_image_url} alt="Card image"/> : <Card.Img src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?size=626&ext=jpg"alt="Card image"/>}
              <Card.ImgOverlay>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text className="card-desc">
                  {data.sub_title}
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                
                <Link to={{
                      pathname: "/donasi-detail2/" + data.id,
                      state: { donasi: data }
                    }}>
                      <Button variant="primary" className="button-donasi">
                    Donasi Sekarang
                  </Button></Link>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Listdonasidua;
