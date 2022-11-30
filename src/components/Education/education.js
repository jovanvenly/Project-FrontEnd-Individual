
import React from 'react';

class Education extends React.Component {
  render(){
    return (
      <div>
      <section className="education" id="education">
        <div className="max-width">
          <h2 className="title">Education</h2>
          <div className="carousel owl-carousel">
            <div className="card">
              <div className="box">
                <img src="images/download.jpeg" alt="" />
                <div className="text">SD Advent 2 Pakjo</div>
                <p>di Jl. Nusa Indah No. 100, LOROK PAKJO, Kec. Ilir Barat I, Kota Palembang Prov. Sumatera Selatan.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src="images/images.jpeg" alt="" />
                <div className="text">Smp Advent Pahoman</div>
                <p>Berada di Jl. Dr. Susilo No. 55 Pahoman, Sumur Batu, Kec. Teluk Betung Utara, Kota Bandar Lampung</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src="images/download (1).jpeg" alt="" />
                <div className="text">SMA Methodist 1 </div>
                <p>Salah satu sekolah Swasta dan didirikan pada tanggal 1 Mei 1908<a href="https://www.methodist1.sch.id/?limitstart=0">https://www.methodist1.sch.id</a></p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src="images/download (2).jpeg" alt="" />
                <div className="text">Universitas Klabat</div>
                <p>salah satu universitas green dan mayoritas kalangan kristen,<a href="http://www.unklab.ac.id/" /></p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src="images/download (3).jpeg" alt="" />
                <div className="text">TUEC</div>
                <p>The Unklab Echo Choir salah satu organisasi choir, memiliki rasa kekeluargaan maupun kebersamaan dalam setiap pelayanan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      );
  }
} 


export default Education;
