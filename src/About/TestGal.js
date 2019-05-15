
import React,{Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import './FacultyNew.css';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class TestGal extends Component{

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
                   
                       
                       
                    </div>
                </div>
            </div>
        </div>
                )
    }
}
