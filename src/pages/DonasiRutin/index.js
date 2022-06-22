
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../../assets/css/dashboard.css"

const Rutin = (props) => {

  const datas = props.data
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="content">
      <Row className="p-2">
        <Col className="content-title">
          <div className="content-title-name">
            <h4>Program Donasi</h4>
            <h5>#TiapHariBerbagi</h5>
          </div>
          {/* <a href="/list-program">Lihat Lainnya</a> */}
          <Link to="/list-donasi">Lihat lainnya</Link>
        </Col>
      </Row>
      {datas.map((data, idx) => (
        <>
          <div className="gWRIil" key={idx}>
            <div className="col-5">
              <figure className="style__ListFigureCanvas-sc-1sl4ulh-1 jXwsPV">
                {data.thumbnail_image_url ? <img src={data.thumbnail_image_url} alt="" height={310} width={275} style={{paddingBottom: '110px'}} /> : <img src="https://imgix.kitabisa.com/a8526eda-a1db-4479-8c77-33ac65e7cd3a.jpg?ar=16:9&amp;w=214&amp;auto=format,compress" alt="" className="kpMTjO" />}
                
                {/* <img alt="Bantu selesaikan masjid pondok quran 2 yg tertunda" src="https://imgix.kitabisa.com/a8526eda-a1db-4479-8c77-33ac65e7cd3a.jpg?ar=16:9&amp;w=214&amp;auto=format,compress" className="style__ListImageCanvas-sc-1sl4ulh-3 kpMTjO" /> */}
              </figure>
            </div>

            <div className="style__ListContent-sc-1sl4ulh-4 cHbJUf col-7">
              <h5>{data.title}
              </h5>
              <div className="cardStyle__CardItemContent-sc-1rj3uct-2 iUjNAO">
                {isReadMore ? data.description && data.description.slice(0, 250) : data.description}
                {data.description.length < 250 ? "" : (<span onClick={toggleReadMore} className="read-or-hide">
                  {isReadMore ? "...read more" : " show less"}
                </span>)}
                
              </div>
              <div className="style__ListCount-sc-1sl4ulh-5 gXlqqS">
                <div type="dayLeft" className="style__ListCountItem-sc-1sl4ulh-6 ioWrdr">
                  <Link to={{
                    pathname: "/rutin/" + data.seo_url,
                    // state: { donasi: data }
                  }}><Button>Donasi Sekarang</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr style={{marginLeft:'30px'}}></hr>
        </>
      ))}
    </div>
  );
};

export default Rutin;
