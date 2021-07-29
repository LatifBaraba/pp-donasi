
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './dashboard.css'

const Content = (props) => {

  const datas = props.data

  console.log(datas, 'data list donasi 1')
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

        // <Row className="content-donasi" key={idx}>
        //   <Col md={4} className="content-donasi-image">
        //     {data.thumbnail_image_url ? <img src={data.thumbnail_image_url} alt="" /> : <img src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?size=626&ext=jpg" alt="" />}
        //   </Col>
        //   <Col md={8} className="content-donasi-desc">
        //     <Row className="donasi-1">
        //       <Col md={12} className="donasi-title">
        //         <h5>{data.title}</h5>
        //       </Col>
        //       <Col md={12}className="donasi-desc">
        //         {data.description}
        //       </Col>
        //     </Row>
        //     <Row className="donasi-2">
        //       <Col className="daftar-sekarang">
        //         <Link to={{
        //           pathname: "/donasi-detail",
        //           state: { donasi: data }
        //         }}><Button>Donasi Sekarang</Button></Link>
        //       </Col>
        //     </Row>
        //   </Col>
        // </Row>
        // <a className="eGpFQV">
        <div className="gWRIil" key={idx}>
          <div className="col-5">
            <figure className="style__ListFigureCanvas-sc-1sl4ulh-1 jXwsPV">
              {data.thumbnail_image_url ? <img src={data.thumbnail_image_url} alt="" className="kpMTjO" /> : <img src="https://imgix.kitabisa.com/a8526eda-a1db-4479-8c77-33ac65e7cd3a.jpg?ar=16:9&amp;w=214&amp;auto=format,compress" alt="" className="kpMTjO" />}

              {/* <img alt="Bantu selesaikan masjid pondok quran 2 yg tertunda" src="https://imgix.kitabisa.com/a8526eda-a1db-4479-8c77-33ac65e7cd3a.jpg?ar=16:9&amp;w=214&amp;auto=format,compress" className="style__ListImageCanvas-sc-1sl4ulh-3 kpMTjO" /> */}
            </figure>
          </div>
         
          <div className="style__ListContent-sc-1sl4ulh-4 cHbJUf col-7">
            <h5>{data.title}
            Kejang 4 Kali Sehari, Bantu Arsy Lawan Lumpuh Otak
            </h5>
            <div className="cardStyle__CardItemContent-sc-1rj3uct-2 iUjNAO">
              {/* {data.description} */}
              3 tahun berselang mimpi, buruk serupa kembali menghantui Pak Syaiful dan Bu Tri. Anak ke-3 yang diharapkan bisa mengobati kesedihan beberapa tahun lalu, kini sedang berjuang sembuh dari lumpuh otak dan katarak.

Anak ke-3 mereka bernama Arsy. Umurnya sudah 1 tahun 7 bulan tapi belum bisa merangkak, apa lagi berjalan. Tumbuh kembang Arsy terhambat, pemandangannya pun kabur karena katarak yang menimpanya.
            </div>
            <div className="style__ListCount-sc-1sl4ulh-5 gXlqqS">
              <div type="dayLeft" className="style__ListCountItem-sc-1sl4ulh-6 ioWrdr">
                <Link to={{
                  pathname: "/donasi-detail",
                  state: { donasi: data }
                }}><Button>Donasi Sekarang</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        // </a>

      ))}
    </div>
  );
};

export default Content;
