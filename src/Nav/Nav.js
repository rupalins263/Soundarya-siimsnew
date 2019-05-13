import React,{Component } from 'react';
import './Nav.css';

export default class Nav extends Component{

    render(){

        return(
     <div style={{ marginTop:"30px"}}>
        <header className="header">  
            <div className="top-bar">
                <div className="container" style={{"text-align":"right"}}>              
            
                    
                    <div className="other-branch"><a href="http://central.soundaryainstitutions.in">Soundarya Central School</a></div>
                    <div className="other-branch"><a href="http://school.soundaryainstitutions.in">Soundarya School</a></div>
                    <div className="other-branch"><a href="http://puc.soundaryainstitutions.in">Soundarya PU College</a></div>
                    <div className="other-branch"><span style={{"color":"#fff"}}>Social Connect</span></div>
                    <div className="other-branch"><a href="https://www.facebook.com/Soundarya-Institute-of-Management-Science-519268908134711/" target="_blank"><i className="fa fa-facebook"></i></a></div>
                    <div className="other-branch"><a href="https://www.facebook.com/Soundarya-Institute-of-Management-Science-519268908134711/" target="_blank"><i className="fa fa-linkedin"></i></a></div>
                    <div className="other-branch"><a href="https://www.facebook.com/Soundarya-Institute-of-Management-Science-519268908134711/" target="_blank"><i className="fa fa-google-plus"></i></a></div> 
                </div>      
            </div>
            <div className="header-main container">
                <div className="col-md-2 col-sm-2" style={{"margin-top":"1%"}}>
                    <a href="/" style={{"text-decoration": "none"}}>
                        <img id="logo" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506674025/logo_qucn59.jpg" alt="Logo" style={{"width":"85%"}}/>
                    </a>
                </div>    
                <div className="col-md-4 col-sm-4">
                    <a href="/" style={{"text-decoration": "none"}}>
                        <h1 style={{"display":"inline-block","margin-top":"10%","font-size":"30px","font-family":"'LexiaLight',Georgia,sans-serif"}}>Soundarya Institute of <br/> Management &amp; Science</h1>
                    </a>
                </div>      
                <div className="logo col-md-6 col-sm-6">
					<div className="col-md-8 mt20">
						<div className="holder pull-right top-links">                            
							<a href="/sims/#/Faculty">CURRENT FACULTY &nbsp; |</a>
							<a href="/sims/#/Carrer">&nbsp; CAREERS &nbsp; |</a>
							<a href="/sims/#/Placements">&nbsp; PLACEMENTS </a>
						</div>
					</div>
                    <div className="col-md-4 mt20">
                        <a href="/" style={{"text-decoration": "none"}}>
                            <img id="logo" src="http://zenopsys.net/soundarya_forms/sims/logo.jpg" alt="Logo" style={{"width":"80%"}}/>
                        </a>
                    </div> 
					{/* <div className="col-md-12 mt10">
						<a href="/#/Admissions" className="admission-btn btn btn-primary"> ADMISSIONS OPEN &gt;</a>
					</div> */ }
                </div>
            </div>
        </header>
         {/* Nav Bar*/}


         <nav className="main-nav" role="navigation" style={{"margin-bottom":"5px"}}>
            <div className="container">
                <div className="navbar-header">
                    <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>    
                <div className="navbar-collapse collapse" id="navbar-collapse">
                    <ul className="nav navbar-nav">                              
                        
        
            
        <li className="nav-item"><a href="/">Home</a></li>
    
                        <li className="nav-item" id="about"><a className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false" href="about.mako#group">About Us<i className="fa fa-angle-down"></i></a>
                            <ul className="dropdown-menu">
                                
        
        <li className=""><a href="/sims/#/About">About SIMS</a></li>
    
                                
        
        <li className=""><a href="/sims/#/Management">Key Executives</a></li>
    

                                
        
        <li className="nav-item"><a href="/sims/#/Faculty">Faculty</a></li>
    
                      
                                
        
        <li className="nav-item"><a href="/sims/#/Milestones">Milestones</a></li>
                                
                            </ul> 
                         </li>                         
                         <li className="nav-item" id="courses"><a className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false" href="about.mako#group">Courses<i className="fa fa-angle-down"></i></a>
                            <ul className="dropdown-menu">                                
                                
        
        <li className="nav-item"><a href="/sims/#/UGCoarse">UG Courses</a></li>
    
                                
        
        <li className="nav-item"><a href="/sims/#/PGCoarse">PG Course</a></li>
    
                                
        
        <li className="nav-item"><a href="/sims/#/Research">Research Facilities</a></li>
                                
                                
        
        <li className="nav-item"><a href="/sims/#/ValueAdded">Value Added Courses</a></li>
                                   
                            </ul> 
                         </li>      
                         <li className="nav-item" id="courses"><a className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false" href="/">Departments<i className="fa fa-angle-down"></i></a>
                            <ul className="dropdown-menu">                                
                                
        
        <li className="nav-item"><a href="/sims/#/MangementStudy">Management</a></li>
    
                                
        
        <li className="nav-item"><a href="/sims/#/Commerce">Commerce</a></li>
    
                                
        
        <li className="nav-item"><a href="/sims/#/BCA">BCA</a></li>
    
                                
        
        <li className="nav-item"><a href="/sims/#/Physical">Physical Education</a></li>
                                   
                            </ul> 
                         </li>    
                         <li className="nav-item" id="admissions"><a className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false" href="/">Admissions<i className="fa fa-angle-down"></i></a>
                            <ul className="dropdown-menu">                                
                                
        
        <li className="nav-item"><a href="/sims/#/Admissions">Admission Process</a></li>
    
        <li className="nav-item"><a href="/sims/#/AdmissionsReg">Admission Registration Form</a></li>
                       
        
        <li className="nav-item"><a href="/sims/#/Admissions#eligibility">Eligibility Criteria</a></li>
    
                              
                            </ul> 
                         </li>                                                                          
                         <li className="nav-item dropdown" id="life">
                            <a className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false" href="#">Campus Life <i className="fa fa-angle-down"></i></a>
                            <ul className="dropdown-menu">
                             
        <li className="nav-item"><a href="/sims/#/Library">Library</a></li>
    
                        
                                
        
        <li className="nav-item"><a href="/sims/#/Student">Student Council</a></li>
      
                                
        
        <li className="nav-item"><a href="/sims/#/CommerceClub">Commerce &amp; Management Club</a></li>
                                
                                
        
        <li className="nav-item"><a href="/sims/#/ITClub">IT Club</a></li>
    
                                
        
        <li className="nav-item"><a href="/sims/#/LiteracyClub">Literary Club</a></li>
    
                                
        
        <li className="nav-item"><a href="/sims/#/Sports">Sports Activities</a></li>
    
                                
        
        <li className="nav-item"><a href="/sims/#/Women">Women's Cell</a></li>
    
                                
        
        <li className="nav-item"><a href="/sims/#/Nss">National Service Scheme (NSS)</a></li>
    
                                
        
        <li className="nav-item"><a href="/sims/#/Clubs">Clubs &amp; Committee</a></li>
                                   
                                
        
        <li className="nav-item"><a href="/sims/#/Unique">Unique Features</a></li>
    
                                
        
        <li className="nav-item"><a href="/sims/#/Hostels">Hostels</a></li>
    
                                       
                                                               
                            </ul>
                         </li>   
                        
        
        <li className="nav-item"><a href="/sims/#/IQAC">IQAC</a></li>
    
                        
        
        <li className="nav-item"><a href="/sims/#/Gallery">Gallery</a></li>
    
                        
        
        <li className="nav-item"><a href="/sims/#/Placements">Placements</a></li>
    
                        
        
        <li className="nav-item"><a href="/sims/#/Downloads">Downloads</a></li>
    
                        
        
        <li className="nav-item"><a href="/sims/#/Contact">Contact Us</a></li>
    
                        </ul>
                </div>
            </div>
        </nav>
    </div>
        )
    }
}