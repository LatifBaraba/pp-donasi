import {React, useEffect} from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
// import { fetchPageDonasi } from '../Redux/pagelistdonasi/actions'
import { fetchPagedonasi2 } from "../Redux/pagelistdonasi2/actions";
import { useDispatch, useSelector } from "react-redux";

const ListProgram = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchPageDonasi(token));
    dispatch(fetchPagedonasi2(token));
  }, []);
  
  // const datas = useSelector((state) => state.pagedonasiReducer.pagedonasi);
  const datas = useSelector((state) => state.pagedonasi2Reducer.pagedonasi2);

  return (
    <div className="container list-program">
      {datas.map((data, idx) => (
        <Row className="mt-3" key={idx}>
          <Col md={4}>
            {/* <img src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg" alt=""/> */}
            {data.thumbnail_image_url ? <img src={data.thumbnail_image_url} alt="" /> : <img src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?size=626&ext=jpg" alt="" />}
          </Col>
          <Col md={8} className="program-content">
            <Row>
              <Col>
                <h4 className="text-center">{data.title}</h4>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <p>
                  {data.sub_title}
                </p>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="text-right">
                <Link to={{
                  pathname: "/donasi-detail",
                  state: { donasi: data }
                }}><Button>Donasi Sekarang</Button></Link>
                {/* <Button>Daftar Sekarang</Button> */}
              </Col>
            </Row>
          </Col>
      </Row>
      ))}
    </div>
  );
};

export default ListProgram;
