
import React from 'react';

class About extends React.Component {
  render(){
    return (
      <div>
      <section className="about" id="about">
        <div className="max-width">
          <h1 className="title">About me</h1>
          <div className="about-content">
            <div className="column left">
              <img src="images/WhatsApp Image 2020-09-05 at 14.48.50.jpeg" alt="" />
            </div>
            <div className="column right">
              <div className="text">I'm Jovan and I'm a <span className="typing-2" /></div>
              <p>Saya adalah seorang pelajar dari Universitas Klabat dan memiliki motto hidup dalam diri "Penuhilah dirimu melalui tindakan atau usaha dan membuahkan hasil"
                Setiap orang memiliki hak dan kewajiban maupun Harapan, Dibumi kita dapat berkreasi dan bertahan hidup, dibumi ini juga ada hal hal baru yang menarik. Setiap manusia hidup satu kali Lahir lalu mati. Maka dari situlah nikmatilah hidup dan bersyukurlah dan satu hal berusahalah menjadi orang yang sukses dimata Tuhan maupun diri kita.<b> by: jovanvenly</b></p>
              <a href="#">Download CV</a>
            </div>
          </div>
        </div>
      </section>
      </div>
      );
  }
} 


export default About;
