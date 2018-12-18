import React,{Component } from 'react';
import ReactDOM from "react-dom";
import './FacultyNew.css';



export default class FacultyNew extends Component{
state = { show: false };

showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

    render(){
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
                            <div className="table-responsive">
                           		<div className="col-md-12 col-sm-12">
                           			<div className="col-md-2" style={{"text-align":"center","padding":"5px"}}>
                           				<img src="http://zenopsys.net/soundarya_forms/sims/faculty/LokeshAngadi.png" alt="Image" style={{"height":"150px"}} />
                           				<span style={{"text-align":"center","display":"block"}}><strong><br/>Lokesha G Angadi</strong><br/>
							                   Director &amp; Principal<br/>
							                   Marketing<br/>
							                   <button className="btn btn-primary btn-xs" data-toggle="modal" data-target=".modal-1">More details</button>
                                 <main>
                                  <h1>React Modal</h1>
                                  <Modal show={this.state.show} handleClose={this.hideModal} >
                                    <p>Modal sffffsf</p>
                                    <p>Data sgsgsgsggsgsg</p>
                                  </Modal>
                                  <button className="btn btn-primary btn-xs" type='button' onClick={this.showModal}>Open</button>
                                </main>
							          	</span>
                           			</div>
                           			<div className="col-md-2" style={{"text-align":"center","padding":"5px"}}>
                           				<img src="http://zenopsys.net/soundarya_forms/sims/faculty/LokeshAngadi.png" alt="Image" style={{"height":"150px"}} />
                           				<span style={{"text-align":"center","display":"block"}}><strong><br/>Lokesha G Angadi</strong><br/>
							                   Director &amp; Principal<br/>
							                   Marketing<br/>
							                   <button className="btn btn-primary btn-xs" data-toggle="modal" data-target=".modal-1">More details</button>
							          	</span>
                           			</div>
                           			<div className="col-md-2" style={{"text-align":"center","padding":"5px"}}>
                           				<img src="http://zenopsys.net/soundarya_forms/sims/faculty/LokeshAngadi.png" alt="Image" style={{"height":"150px"}} />
                           				<span style={{"text-align":"center","display":"block"}}><strong><br/>Lokesha G Angadi</strong><br/>
							                   Director &amp; Principal<br/>
							                   Marketing<br/>
							                   <button className="btn btn-primary btn-xs" data-toggle="modal" data-target=".modal-1">More details</button>
							          	</span>
                           			</div>
                           			<div className="col-md-2" style={{"text-align":"center","padding":"5px"}}>
                           				<img src="http://zenopsys.net/soundarya_forms/sims/faculty/LokeshAngadi.png" alt="Image" style={{"height":"150px"}} />
                           				<span style={{"text-align":"center","display":"block"}}><strong><br/>Lokesha G Angadi</strong><br/>
							                   Director &amp; Principal<br/>
							                   Marketing<br/>
							                   <button className="btn btn-primary btn-xs" data-toggle="modal" data-target=".modal-1">More details</button>

							          	</span>
                           			</div>
                           			<div className="col-md-2" style={{"text-align":"center","padding":"5px"}}>
                           				<img src="http://zenopsys.net/soundarya_forms/sims/faculty/LokeshAngadi.png" alt="Image" style={{"height":"150px"}} />
                           				<span style={{"text-align":"center","display":"block"}}><strong><br/>Lokesha G Angadi</strong><br/>
							                   Director &amp; Principal<br/>
							                   Marketing<br/>
						                   <button className="btn btn-primary btn-xs" data-toggle="modal" data-target=".modal-1">More details</button>

							          	</span>
                           			</div>
                           			<div className="col-md-2" style={{"text-align":"center","padding":"5px"}}>
                           				<img src="http://zenopsys.net/soundarya_forms/sims/faculty/LokeshAngadi.png" alt="Image" style={{"height":"150px"}} />
                           				<span style={{"text-align":"center","display":"block"}}><strong><br/>Lokesha G Angadi</strong><br/>
							                   Director &amp; Principal<br/>
							                   Marketing<br/>
					                   <button className="btn btn-primary btn-xs" data-toggle="modal" data-target=".modal-1">More details</button>

							          	</span>
                           			</div>


                           		</div>

                            </div>
						</article>
                        <article className="col-md-8 col-sm-7">
							<h3 className="title sub-heading">NON-TEACHING STAFF</h3>
                            <div className="table-responsive">
								


                            </div>
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


const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';


  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button
          onClick={handleClose}
        >
          Close
        </button>
      </section>
    </div>
  );
};


const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<FacultyNew />, container);