
import React from 'react';
import './App.css';
import data from './data/db.json';
import About from './components/About/about.js';
import Education from './components/Education/education';

class App extends React.Component {
  render(){
    return (
      <div>
      {
        data.skills.map((sekil, index) => {
          return(
              <div key={index}>
                <div className="scroll-up-btn">
                  <i className="fas fa-angle-up" />
                </div>
                <nav className="navbar">
                  <div className="max-width">
                    <div className="logo"><a href="#">Welco<span>me.</span></a></div>
                    <ul className="menu">
                      <li><a href="#home" className="menu-btn">Home</a></li>
                      <li><a href="#about" className="menu-btn">About</a></li>
                      <li><a href="#skills" className="menu-btn">Skills</a></li>
                      <li><a href="#education" className="menu-btn">Education</a></li>
                      <li><a href="#contact" className="menu-btn">Contact</a></li>
                    </ul>
                    <div className="menu-btn">
                      <i className="fas fa-bars" />
                    </div>
                  </div>
                </nav>
                <section className="home" id="home">
                  <div className="max-width">
                    <div className="home-content">
                      <div className="text-1">Hello, my name is</div>
                      <div className="text-2">Jovan Runturambi</div>
                      <div className="text-3">And I'm a <span className="typing" /></div>
                      <a href="#">Hire me</a>
                    </div>
                  </div>
                </section>
                <About />
                <section className="skills" id="skills">
                          <div className="max-width">
                            <h2 className="title">My skills</h2>
                            <div className="skills-content">
                              <div className="column left">
                                <div className="text">My experiences</div>
                                <p>Pengalaman = Skill, salah satu awalnya adalah melalui belajar, mencoba, berlatih. tahap demi tahap hal ini membuat kita semakin mahir sedikit demi sedikit.</p>
                                <a href="#">Read more</a>
                              </div>
                              <div className="column right">
                                <div className="bars">
                                  <div className="info">
                                    {/* {
                                      data.map((detail, index) =>{
                                        return <div>
                                          <span>{detail.title}</span>
                                          <span>{detail.persen}</span>
                                        </div>
                                      })
                                    } */}
                                    
                                    <span>{sekil.title}</span>
                                    <span>{sekil.persen}%</span> 
                                  </div>
                                  <div className="line html" />
                                </div>
                                <div className="bars">
                                <div class="info">
                                        <span>CSS</span>
                                        <span>60%</span>
                                    </div>
                                    <div class="line css"></div>
                                </div>
                                <div class="bars">
                                    <div class="info">
                                        <span>JavaScript</span>
                                        <span>50%</span>
                                    </div>
                                    <div class="line js"></div>
                                </div>
                                <div class="bars">
                                    <div class="info">
                                        <span>PHP</span>
                                        <span>30%</span>
                                    </div>
                                    <div class="line php"></div>
                                </div>
                                <div class="bars">
                                    <div class="info">
                                        <span>MySQL</span>
                                        <span>70%</span>
                                    </div>
                                    <div class="line mysql"></div>
                                </div>  
                              </div>
                            </div>
                          </div>
                        </section>
                <Education />
                <section className="contact" id="contact">
                  <div className="max-width">
                    <h2 className="title">Contact</h2>
                    <div className="contact-content">
                      <div className="column left">
                        <div className="text">Get in Touch</div>
                        <p /><ul>
                          <li><img src="https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png" alt="picture" width={20} />
                            <a href="https://www.instagram.com/jovn_vjrun/"> <b>jovn_vjrun</b></a> </li><br />
                          <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/480px-LINE_logo.svg.png" alt="picture" width={20} /> 
                            <b>jovanvjr15</b></li><br />
                          <li><img src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png" alt="picture" width={20} />
                            <a href="https://www.facebook.com/jovan.runturambi/photos"> <b>Jovan Runturambi</b></a></li>
                        </ul> <p />
                        <div className="icons">
                          <div className="row">
                            <i className="fas fa-user" />
                            <div className="info">
                              <div className="head">Name</div>
                              <div className="sub-title">Jovan Runturambi</div>
                            </div>
                          </div>
                          <div className="row">
                            <i className="fas fa-map-marker-alt" />
                            <div className="info">
                              <div className="head">Address</div>
                              <div className="sub-title">Ratna, Palembang</div>
                            </div>
                          </div>
                          <div className="row">
                            <i className="fas fa-envelope" />
                            <div className="info">
                              <div className="head">Email</div>
                              <div className="sub-title">jusufrunturambi@gmail.com</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column right">
                        <div className="text">Message me</div>
                        <form action="#">
                          <div className="fields">
                            <div className="field name">
                              <input type="text" placeholder="Name" required />
                            </div>
                            <div className="field email">
                              <input type="email" placeholder="Email" required />
                            </div>
                          </div>
                          <div className="field">
                            <input type="text" placeholder="Subject" required />
                          </div>
                          <div className="field textarea">
                            <textarea cols={30} rows={10} placeholder="Message.." required defaultValue={""} />
                          </div>
                          <div className="button">
                            <button type="submit">Send message</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
                <footer>
                  <span>Created By <a href="https://www.jovan.com">Jovan Runturambi</a> | <span className="far fa-copyright" /> 2022 All rights reserved.</span>
                </footer>
              </div>
          );
        })
      }
      </div>
    );
  }
} 


export default App;
