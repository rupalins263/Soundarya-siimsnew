import React,{Component } from 'react';
import './Footer.css';

export default class Nav extends Component{

    render(){

        return(
        <footer className="footer">
        <div className="footer-content">
            <div className="container">
                <div className="row">
                <div className="footer-col col-md-3 col-sm-3 about">
                    <div className="footer-col-inner">
                        <h3>More Links</h3>
                        <ul >
                            <li><a href="/sims/#/Gallery"><i className="fa fa-caret-right"></i>Gallery</a></li>

                            <li><a href="/sims/#/Privacy"><i className="fa fa-caret-right"></i>Privacy Policy</a></li>

                            {/* <li><a href="/#/Privacy"><i className="fa fa-caret-right"></i>Privacy Policy</a></li>  */} 

                            <li><a href="/sims/#/UGCoarse"><i className="fa fa-caret-right"></i>Courses Offered</a></li>
                            <li><a href="/sims/#/Placements"><i className="fa fa-caret-right"></i>Placements</a></li>
                            
                        </ul>
                    </div>
                </div>
                
                <div className="footer-col col-md-3 col-sm-3 about">
                    <div className="footer-col-inner">
                        <h3>&nbsp;</h3>
                        <ul>

                            <li><a href="/sims/#/News"><i className="fa fa-caret-right"></i>News &amp; Events</a></li>

                           {/* <li><a href="/#/News"><i className="fa fa-caret-right"></i>News &amp; Events</a></li>  */} 

                            <li><a href="/sims/#/Faculty"><i className="fa fa-caret-right"></i>Faculty</a></li>
                            <li><a href="/sims/#/Management"><i className="fa fa-caret-right"></i>Management</a></li>
                            <li><a href="/sims/#/Contact"><i className="fa fa-caret-right"></i>Contact Us</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="footer-col col-md-6 col-sm-3 contact">
                        <h3>Contact us</h3>
                        <div className="row">
                            <p className="adr clearfix col-md-12 col-sm-4">
                                <i className="fa fa-map-marker"></i>        
                                <span className="adr-group">       
                                    <span className="street-address">SIMS<br/>
									<i style={{"visibility": "hidden"}} className="fa fa-map-marker pull-left"></i>  Soundarya Nagara, Sidedahalli,<br/>
									<i className="fa fa-map-marker pull-left" style={{"visibility": "hidden"}}></i> Nagasandra Post, Bangalore-560073<br/>

									<i className="fa fa-phone"></i>8722760601 / 080-29510260/ 080-29510261<br/>

									<i className="fa fa-envelope"></i><a href="mailto:degreesoundarya@gmail.com">degreesoundarya@gmail.com</a>
									</span>
                                    
                                </span>
                            </p>
                           
                        </div> 
                 
                </div>
				<div className="footer-col col-md-5 col-sm-5 contact">					
					{/* <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506759995/lms-jas_cju2qn.jpg" style={{"max-width":"60%","max-height":"130px","margin-right":"20px"}}/>
					 <img style={{"max-width":"60%","max-height":"130px"}} src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506760011/naac-logo_nvxcem.png" alt="NAAC-Logo"/>        */}
                </div>
                </div>   
            </div>        
        </div>
        <div className="bottom-bar">
            <div className="container">
                <div className="row">
                    <small className="copyright col-md-6 col-sm-12 col-xs-12">Copyright @ 2018. All Rights Reserved.</small>
                    <div className="col-md-6 col-sm-12 col-xs-12 pull-right" style={{"margin-top": "8px"}}><small className="pull-right">Designed by Zenopsys Technologies</small></div>
                    
                </div>
            </div>
        </div>
    </footer>
        )
    }
}
