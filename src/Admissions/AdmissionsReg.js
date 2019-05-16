import React,{Component} from 'react';
import './Contact.css';
import ReactPixel from 'react-facebook-pixel';
import axios from 'axios';
export default class ContactUs extends Component{


    componentWillMount(){
        ReactPixel.init('157395081538454');
    }

        submit(event)
    {
    ReactPixel.track('track', 'Lead')
      event.preventDefault();
       var name= document.getElementById("name");
        var phone= document.getElementById("phone");
         var email= document.getElementById("email");
         var course= document.getElementById("pihone");
          var message= document.getElementById("message");
          axios.post('http://ec2-18-217-223-214.us-east-2.compute.amazonaws.com/SIMS/ContactUs', {
                "name":name.value,
                "email":email.value,
                "number":phone.value,
                "course":course.value,
                "message":message.value
            })
                .then(function (response) {
                    alert("Successfully submitted")
                    window.location=window.location
                })
                .catch(function (error) {
                   alert("Retry again")
                });
           
    }


    render(){
        return(
            <div className="content container">
    <div className="page-wrapper">
        <header className="page-heading clearfix"><br/>
            <h1 className="heading-title pull-left">Admissions Registration Form</h1>
            <div className="breadcrumbs pull-right">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-label">You are here:</li>
                    <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                    <li className="current">Admissions</li>
                </ul>
            </div>
        </header> 
        <div className="page-content">
            <div className="row page-row">
                <article className="welcome col-md-8 col-sm-7"> 

                <p></p>  
                    
                    <h3 className="title sub-heading">For admissions contact:</h3>  
                    
                      <form onSubmit={this.submit.bind(this)}>
                      <div className="form-group name">
                          <label for="name">Name<sup>*</sup></label>
                          <input id="name" type="text" className="form-control req_field" placeholder="Enter your name"/>
                      </div>
                      <div className="form-group sex">
                          <label for="name">Gender<sup>*</sup></label>
                          <input id="gender" type="text" className="form-control req_field" placeholder="Enter your Gender"/>
                      </div>
                      <div className="form-group email">
                          <label for="email">Email <span className="required">*</span></label>
                          <input id="email" type="email" className="form-control req_field req_field_email" placeholder="Enter your email"/>
                      </div>
                      
                      <div className="form-group phone">
                          <label for="phone">Phone<sup>*</sup></label>
                          <input id="phone" type="tel" className="form-control" placeholder="Enter your contact number"/>
                      </div>
                      <div className="form-group country">
                          <label for="phone">Country<sup>*</sup></label>
                          <input id="phone" type="tel" className="form-control" placeholder="Enter your Country Name"/>
                      </div>
                      <div className="form-group course">
                          <label for="phone">Course<sup>*</sup></label>
                         {/*  <input id="pihone" type="tel" className="form-control" placeholder="Enter your Desired Course"/> */}
                          <select id="pihone" className="form-control" placeholder="Enter your Desired Course">
                            <option value="">Select your Desired Course</option>
                            <option value="BCom">B.Com</option>
                            <option value="BBA">BBA</option>
                            <option value="BCA">BCA</option>
                            <option value="BSc">B.Sc</option>
                            <option value="BBA_Avi">BBA – Aviation</option>
                            <option value="MCom">M.Com</option>
                            <option value="PGDip">PG Diploma in E- Commerce  </option>
                            <option value="MastFin">Master of Financial Analysis</option>
                          </select>
                      </div>
                      <div className="form-group message">
                          <label for="message">Ask your Admission Related Quires<span className="required">*</span></label>
                          <textarea id="message" className="form-control req_field" rows="4" placeholder="Enter your message here..."></textarea>
                      </div>
                      <button type="submit" className="btn btn-theme" >Submit</button>
  
                  </form>     
                  <p><br/><br/></p>                                                                          
                    
                
                </article>
                 <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                            <section className="widget has-divider">
                                <h3 className="title">Downloads</h3>
                                <p>For your benefit we have compiled in this section some of the key features you should know about Soundarya School.</p>
                                <p><a className="btn btn-theme" href="http://zenopsys.net/soundarya_forms/sims/SIMS-application-form.pdf"><i className="fa fa-download"></i>Application Form for UG-Courses</a></p>
                                <p><a className="btn btn-theme" href="http://zenopsys.net/soundarya_forms/sims/brochure.pdf"><i className="fa fa-download"></i>Brochure</a></p>
                                <p><a className="btn btn-theme" href="http://zenopsys.net/soundarya_forms/sims/downloads/leaflet.pdf"><i className="fa fa-download"></i>Leaflet</a></p>
                            </section>
                            <section className="widget has-divider">
                                <h3 className="title">Related Links</h3>
                                <ul className="job-list custom-list-style">
                                      <li><i className="fa fa-caret-right"></i><a href="/#/SpecialCoarse">Curriculum</a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="/#/Research">Assesment Plan </a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="/#/Faculty">Teaching Staff</a></li>
                                    </ul>
                                
                            </section>  
                            <section className="widget">
                                <h3 className="title">Contact</h3>
                                <p><b>SIMS</b><br/>Soundarya Nagara, Sidedahalli,<br/> Nagasandra Post, Bangalore-560073</p>
                                <p className="tel"><i className="fa fa-phone"></i>Tel: <a href="#">8722760601 / 080-29510260/ 080-29510261 </a></p>
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