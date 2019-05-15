import React,{Component } from 'react';
import './About.css';

export default class VisionMission extends Component{

    render(){

        return(
        <div className="content container" style={{marginTop:"30px"}}>
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">About Institute</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">About SIMS</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <div className="col-md-6 col-sm-6">
                            <h3>An Academy for</h3>
                            <h1>Holistic Education</h1>
                            
                                <p><img src="http://zenopsys.net/soundarya_forms/sims_images/Aboutus/saraswathiphoto.jpg" style={{"height":"380px"}}/></p>
                       
                        </div>

                        <div className="col-md-6 col-sm-6">
                             <div style={{"background":"#66bf69","border-radius":"20px","margin-top":"105px","padding":"15px","height":"380px"}}>
                                <h1 style={{"color":"white"}}>Vision</h1>
                                <p>To ensure quality higher education and to enable stake holders to face the contemporary challenges of the world with courage, confidence and commitment.</p>
                                <h1 style={{"color":"white"}}>Mission</h1>
                                <p>Strive to create knowledge, to open the minds of the students to take the best advantage of this educational opportunity.
                                </p>
                                <ul>
                                <li>To respect ideas and free expression of the students. </li>
                                <li>To identify and remove restraints on student's full participation, so that students can discuss individual capabilities. </li>
                               
                                </ul>
                            </div>
                            
                        </div>                     
                    </div>
                    <div className="row page-row">
                        <div className="col-md-12 col-sm-12">
                            <div style={{"background":"Orange","border-radius":"20px","padding":"15px"}}>
                                <h1>Quality Policy</h1>
                                We shall impart the best holistic education instill excellence and incalculating values which will suit the challenges
                                of the competitive technology driven environment with continual improvement to make every student excel in scholastic and
                                non-scholastic spears with competency,commitment and compassion.<br/>

                                <h1>Objectives</h1>
                                <ol>
                                <li>To build a community of staff and students commmitted to the common pursuit truth & moral excellence. </li>
                                <li>To help student achieve self discipline,cultivate good habits, and develop respect for fellow human beings. </li>
                                <li>To train students in acquiring clarity of thoughts,accuracy of expression and leadership qualities. </li>
                                <li>To promote a healthy modern outlook among the students while drawing inspirations from the richness of our heritage,culture and tradition.</li>
                                <li>To become an instrument of social change and force for integration among linguistic,religious,caste groups and inspire young men and women to work towards eradication of social evils.</li>
                                <li>To inCulcate the students a sense of responsibility towards the nation and encourage their creatve involvement in the task of building up a new India, a country free from exploitation, injustice, ignorance , poverty and misery. </li>
                                </ol>

                            </div>
                           

                        </div>
                    </div>
                </div>
            </div>
        </div>
                )
    }
}