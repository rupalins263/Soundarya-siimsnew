
import React,{Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import './FacultyNew.css';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class FacultyNew extends Component{

  state = {
    openFirstModal: false,
    openSecondModal:false,
  };
 
  onOpenModal = () => {
    this.setState({ openFirstModal: true });
  };

  
  onCloseModal = () => {
    this.setState({ openFirstModal: false });
  };

   onOpenSecondModal = () => {
    this.setState({ openSecondModal: true });
  };

  onCloseSecondModal = () => {
    this.setState({ openSecondModal: false });
  };

    render(){
           const { openFirstModal, openSecondModal } = this.state;


        return(

            <div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Faculty</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">About Us</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                   
                        <article className="col-md-12 col-sm-12">
                            <h3 className="text sub-heading">TEACHING STAFFS</h3>  

                            <div className="col-md-12 col-sm-12">
                              <div className="col-md-2" style={{textAlign:"center", padding: "5px"}}>
                                <img src="http://zenopsys.net/soundarya_forms/sims/faculty/LokeshAngadi.png" alt="Image" style={{height: "100px;",width:"80px"}}></img>
                                <span style={{textAlign: "center", display: "block"}}>
                                  <strong><br/>Lokesha G Angadi</strong>
                                  <br/>Director &amp; Principal
                                  <br/>Marketing<br/>
                                  <div style={styles}>
                          <button className="btn btn-primary btn-xs" onClick={this.onOpenModal}>More Details</button>
                          <Modal open={openFirstModal} onClose={this.onCloseModal} center>
                          
                            <div className="modal-content">
                              <div className="modal-header">
                                {/*<button type="button" className="close" data-dismiss="modal" aria-hidden="true">x</button> */}
                                <h4 className="modal-title" id="myModalLabel"> Mr. Lokesh G Angadi </h4>
                              </div>
                              <div className="modal-body">                      
                                                    <div className="col-md-4 col-xs-12"> 
                                          <img src="http://zenopsys.net/soundarya_forms/sims/faculty/LokeshAngadi.png" alt="Image" style={{height: "150px;",width:"120px"}}></img>
                                                    </div>
                                                   
                                                  <div className="col-md-8 col-xs-12"> 
                                                  <h4><em>Mr. Lokesh G Angadi</em></h4>                                               
                                                    <p className="faculty-det">
                                                      <span>Designation :</span>Asst. Professor<br/>
                                                      <span>Qualification : </span>MBA, M.Com PGDHRM <br/>
                                                      <span>Area of Specialisation: </span>Finance/Marketing/HR<br/>   
                                                      {/*<span>Contact NO: </span>080 26677100 Ext:948<br/>*/}
                                                      <span>Address :</span>#17,9th cross, Balaji Layout, Nagarbhavi, Bangalore-560072<br/><br/>
                                                      <span>Email ID :</span>lokeshangadi@gmail.com<br/>
                                                    </p>                    
                                                  
                                                  </div>
                                                    <div className="clearfix"></div>   

                                                                                                 
                                                    <div className="clearfix"></div>   
                                                    <div style={{margin:"20px 5px"}}>
                                                      <div className="col-md-12">
                                                        <h4 style={{margin:"20px 0px",color:"red"}}><em>Finance/Marketing/HR</em></h4>
                                                        <h4 style={{margin:"20px 0px",color:"red"}}><em>Number of Attended Faculty Development Programme</em></h4>
                                                        <ul className="list-icon star">
                                                          <li>
                                                            FDP on Research guidance skills for projects/Dissertation at CBMS, Central college campus,Bangalore
                                                          </li>
                                                          <li>
                                                            FDP on Interpersonal competency &  meeting in VIMS at Bangalore
                                                          </li>
                                                          <li>
                                                            FDP on center for Excellence in Financial Studies in RVIM at Bangalore
                                                          </li>
                                                        </ul>
                                                        <h4 style={{margin:"20px 0px",color:"red"}}><em>Number of Papers presented in National conference</em></h4>
                                                        <ul className="list-icon star">
                                                          <li>
                                                            Global economic crisis and its impact on Indian corporates and government
                                                          </li>
                                                          
                                                        </ul>
                                                        <h4 style={{margin:"20px 0px",color:"red"}}><em>Number of Workshops attended</em></h4>
                                                        <ul className="list-icon star">
                                                          <li>
                                                            Work shop on Enhancing Teaching skills and Developing instructional strategies in Brindavan college at Bangalore
                                                          </li>
                                                          
                                                        </ul>
                                                        <h4 style={{margin:"20px 0px",color:"red"}}><em>Projects Major and Minor Self-financed/Sponsored</em></h4>
                                                        <ul className="list-icon star">
                                                          <li>
                                                            An Analysis of Financial statements in Apex Cooperative Bank at Bangalore
                                                          </li>
                                                          
                                                        </ul>
                                                      </div>
                                                    </div>

                                                    <div className="clearfix"></div>   


                                                 </div> 
                                               </div>
                          </Modal>
                        </div>
                                </span>
                              </div>
                              <div className="col-md-2" style={{textAlign:"center", padding: "5px"}}>
                                <img src="http://zenopsys.net/soundarya_forms/sims/faculty/LokeshAngadi.png" alt="Image" style={{height: "100px;",width:"80px"}}></img>
                                <span style={{textAlign: "center", display: "block"}}>
                                  <strong><br/>Lokesha G Angadi</strong>
                                  <br/>Director &amp; Principal
                                  <br/>Marketing<br/>

                                   <div style={styles}>
                                  

                          <button className="btn btn-primary btn-xs" onClick={this.onOpenSecondModal}>More Details</button>
                          <Modal open={openSecondModal} onClose={this.onCloseSecondModal} center>
                          
                            <div className="modal-content">
                              <div className="modal-header">
                                {/*<button type="button" className="close" data-dismiss="modal" aria-hidden="true">x</button> */}
                                <h4 className="modal-title" id="myModalLabel"> Mr. Lokesh G Angadiiiiiiiiiiiii </h4>
                              </div>
                              <div className="modal-body">                      
                                                    <div className="col-md-4 col-xs-12"> 
                                          <img src="http://zenopsys.net/soundarya_forms/sims/faculty/LokeshAngadi.png" alt="Image" style={{height: "150px;",width:"120px"}}></img>
                                                    </div>
                                                   
                                                  <div className="col-md-8 col-xs-12"> 
                                                  <h4><em>Mr. Lokesh G Angadiiiiiiiiiiii</em></h4>                                               
                                                    <p className="faculty-det">
                                                      <span>Designation :</span>Asst. Professor<br/>
                                                      <span>Qualification : </span>MBA, M.Com PGDHRM <br/>
                                                      <span>Area of Specialisation: </span>Finance/Marketing/HR<br/>   
                                                      {/*<span>Contact NO: </span>080 26677100 Ext:948<br/>*/}
                                                      <span>Address :</span>#17,9th cross, Balaji Layout, Nagarbhavi, Bangalore-560072<br/><br/>
                                                      <span>Email ID :</span>lokeshangadi@gmail.com<br/>
                                                    </p>                    
                                                  
                                                  </div>
                                                    <div className="clearfix"></div>   

                                                                                                 
                                                    <div className="clearfix"></div>   
                                                    <div style={{margin:"20px 5px"}}>
                                                      <div className="col-md-12">
                                                        <h4 style={{margin:"20px 0px",color:"red"}}><em>Finance/Marketing/HR</em></h4>
                                                        <h4 style={{margin:"20px 0px",color:"red"}}><em>Number of Attended Faculty Development Programme</em></h4>
                                                        <ul className="list-icon star">
                                                          <li>
                                                            FDP on Research guidance skills for projects/Dissertation at CBMS, Central college campus,Bangalore
                                                          </li>
                                                          <li>
                                                            FDP on Interpersonal competency &  meeting in VIMS at Bangalore
                                                          </li>
                                                          <li>
                                                            FDP on center for Excellence in Financial Studies in RVIM at Bangalore
                                                          </li>
                                                        </ul>
                                                        <h4 style={{margin:"20px 0px",color:"red"}}><em>Number of Papers presented in National conference</em></h4>
                                                        <ul className="list-icon star">
                                                          <li>
                                                            Global economic crisis and its impact on Indian corporates and government
                                                          </li>
                                                          
                                                        </ul>
                                                        <h4 style={{margin:"20px 0px",color:"red"}}><em>Number of Workshops attended</em></h4>
                                                        <ul className="list-icon star">
                                                          <li>
                                                            Work shop on Enhancing Teaching skills and Developing instructional strategies in Brindavan college at Bangalore
                                                          </li>
                                                          
                                                        </ul>
                                                        <h4 style={{margin:"20px 0px",color:"red"}}><em>Projects Major and Minor Self-financed/Sponsored</em></h4>
                                                        <ul className="list-icon star">
                                                          <li>
                                                            An Analysis of Financial statements in Apex Cooperative Bank at Bangalore
                                                          </li>
                                                          
                                                        </ul>
                                                      </div>
                                                    </div>

                                                    <div className="clearfix"></div>   


                                                 </div> 
                                               </div>
                          </Modal>
                        </div>
                                </span>
                              </div>
                              <div className="col-md-2" style={{textAlign:"center", padding: "5px"}}>
                                <img src="http://zenopsys.net/soundarya_forms/sims/faculty/LokeshAngadi.png" alt="Image" style={{height: "100px;",width:"80px"}}></img>
                                <span style={{textAlign: "center", display: "block"}}>
                                  <strong><br/>Lokesha G Angadi</strong>
                                  <br/>Director &amp; Principal
                                  <br/>Marketing<br/>
                                </span>
                              </div>
                              <div className="col-md-2" style={{textAlign:"center", padding: "5px"}}>
                                <img src="http://zenopsys.net/soundarya_forms/sims/faculty/LokeshAngadi.png" alt="Image" style={{height: "100px;",width:"80px"}}></img>
                                <span style={{textAlign: "center", display: "block"}}>
                                  <strong><br/>Lokesha G Angadi</strong>
                                  <br/>Director &amp; Principal
                                  <br/>Marketing<br/>
                                </span>
                              </div>
                              <div className="col-md-2" style={{textAlign:"center", padding: "5px"}}>
                                <img src="http://zenopsys.net/soundarya_forms/sims/faculty/LokeshAngadi.png" alt="Image" style={{height: "100px;",width:"80px"}}></img>
                                <span style={{textAlign: "center", display: "block"}}>
                                  <strong><br/>Lokesha G Angadi</strong>
                                  <br/>Director &amp; Principal
                                  <br/>Marketing<br/>
                                </span>
                              </div>
                              <div className="col-md-2" style={{textAlign:"center", padding: "5px"}}>
                                <img src="http://zenopsys.net/soundarya_forms/sims/faculty/LokeshAngadi.png" alt="Image" style={{height: "100px;",width:"80px"}}></img>
                                <span style={{textAlign: "center", display: "block"}}>
                                  <strong><br/>Lokesha G Angadi</strong>
                                  <br/>Director &amp; Principal
                                  <br/>Marketing<br/>
                                </span>
                              </div>
                            </div>
                                

                            
            </article>
                        <article className="col-md-8 col-sm-7">
              <h3 className="title sub-heading">NON-TEACHING STAFF</h3>
                            
                        </article>
                        <aside className="page-sidebar  col-md-3 col-sm-4" style={{"margin":"30px"}}>                    
                             <section className="widget">
                                    <h3 className="title">Contact</h3>
                                    <p><b>SIMS</b><br/>Soundarya Nagara, Sidedahalli,<br/> Nagasandra Post, Bangalore-560073</p>
                                    <p className="tel"><i className="fa fa-phone"></i>Tel: <a href="tel:080 28390260">080-28390260 </a></p>
                                    <p className="email"><i className="fa fa-envelope"></i>Email: <a href="mailto:degreesoundarya@gmail.com">degreesoundarya@gmail.com</a></p>
                                </section>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
                )
    }
}
