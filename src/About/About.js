import React,{Component } from 'react';
import './About.css';

export default class About extends Component{

    render(){

        return(
        <div className="content container" style={{marginTop:"30px"}}>
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">About Institution</h1>
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
                            
                                <p><img src="http://zenopsys.net/soundarya_forms/sims/simsabout.PNG" style={{"height":"300px","width":"530px"}}/></p>
                       
                        </div>

                        <div className="col-md-6 col-sm-6">
                             <div style={{"background":"#ADD8E6","border-radius":"20px","margin-top":"15px","padding":"15px","height":"280px"}}>
                                <h1 style={{"color":"white"}}></h1>
                                <p>Soundarya Institute of Management and Science is one of the leading educational institutions in the field of Management
                                    and Science, in Bangalore. It was established in the year 2007 with students of 92; within a span of one and half decade 
                                    strength of students has reached more than 1300 hundred. It reflects institution a sense of commitment in the field of higher
                                    education and it also unfolds an academic learning environment in the campus. The institution has spread over in 9.2 acre with 
                                    the state of art infrastructure, good academic ambience and aesthetic sense.</p>
                                {/*<h1 style={{"color":"white"}}>Mission</h1>
                                <p>Strive to create knowledge, to open the minds of the students to take the best advantage of this educational opportunity.
                                </p>
                                <ul>
                                <li>To respect ideas and free expression of the students. </li>
                                <li>To identify and remove restraints on student's full participation, so that students can discuss individual capabilities. </li>
                               
                                </ul> */}
                            </div>
                            
                        </div>                     
                    </div>
                    <div className="row page-row">
                        <div className="col-md-12 col-sm-12">
                            <div style={{"background":"#ADD8E6","border-radius":"20px","padding":"15px"}}>
                                <h1></h1>
                                Institution offers under graduate courses in B.Com, BCA, BBA, BBA (Aviation
                                Management), B.Sc, BA (Journalism), Post Graduate in M Com, M Com (Financial
                                Analysis) and Post Graduate Diploma in e-commerce. In addition to it provides more 12
                                value added Certificate Courses like, Remedial Course in English, General Proficiency in
                                English, Finance and Banking Service Crash Courses like Soft Skills, Quantitative Aptitude
                                etc. in order to enrich and enhance employability skills among students. Institution is also
                                recognized under UGC 2F, 12B and accredited by NAAC.<br/>

                                Indeed, academic initiation and approach of the institution has immensely reflected
                                both in Curricular, Co-Curricular and Extra-Curricular activities in the overall performance of
                                students. The Achievements of students are the testimony of the institutional contribution
                                commitment for exceptional performance quality assurance in every endeavour. It has
                                considerable contributed in Research, Cultural activities Sports and Institutional Social
                                Responsibilities. The holistic approach and initiation has been guiding both faculty and
                                students to grow from strength to strength in Curricular and Extra–Curricular activities. This
                                approach has shown in the Academic result of students, more than 90% of students stand in
                                First Class with Distinction.<br/>

                                Institution strongly supports and encourages faculty members to explore their
                                intellectual insights in academic as a result faculty members have published more than 60
                                research papers in National and International peer reviewed journals and working as Board of
                                Examiners in various autonomous and to be Deemed Universities. As a matter of fact
                                institution is not only striving hard in enhancing innate skills of students in academics but
                                also is making sincere efforts in harnessing potentialities of students skills and abilities in
                                sports and cultural activities. Since inception of the institution more than 600 hundred
                                students played at various levels of Sports in International, National and represented
                                Bangalore Universities in various competitions. <br/>

                                Institution strongly believes in sharing ideas, building platforms for intellectuals and
                                respecting cross culture in education. Keeping these views in mind it would like to explore its
                                core values of education policy through bridging students exchange programs.

                                

                            </div>
                           

                        </div>
                    </div>
                </div>
            </div>
        </div>
                )
    }
}