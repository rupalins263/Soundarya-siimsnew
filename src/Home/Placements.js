import React,{Component } from 'react';
import $ from "jquery";
import './Home.css';

export default class Home extends Component{

    render(){

        return(<div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Department of Training &amp; Placement</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Campus Life</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <article className="col-md-8 col-sm-7">                         
                            <p>The objective of the department is bridging the gap between industry and academia, through mutually exploring the 
                            opportunities for students, institutions, professionals and the corporate world at large towards better growth and 
                            development</p>
                            <p>Institutions of higher learning need robust interface with the industry in order to maintain the relevance of the 
                            programs offered. The Training &amp; Placements department of SIMS continuously interacts with the industry for projects,
                            internships, and placement activities for the successful student community of the college, besides providing continual 
                            improvement and inputs on ever-changing requirements.</p>
                            <p>The Department focuses at understanding the requirements of the corporate and then develops the abilities of our 
                            students and guides them in getting proper information about the market changes,industry expectations, nature of 
                            opportunities, salary structure, industry openings, on campus and off-campus interviews for internship, projects and 
                            placements, career counselling and career development preparation. SIMS has a strong corporate back up sponsored by 
                            effective alumni members.</p>
                            
                            <h3 className="text sub-heading">Key Objectives of Training and Placement dept are to:</h3>
                            <ul className="custom-list-style tik">
                                <li>Provide placement assistance to the students of SIMS</li>
                                <li>Conduct pre-placement training in coordination with the Academic Department</li>
                                <li>Organise guest lectures and corporate interactions with the resource people from industry.</li>
                                <li>Coordinate Alumni meet</li>
                                <li>Develop effective network with the industry in order to understand the needs of the industry</li>
                                <li>Invite companies and domain to visit SIMS</li>
                                
                            </ul>
                            <p>The Placement cell of Soundarya Institute of Management and Science has moved from strength to strength and has emerged as a destination for many National and Multi-National organizations to recruit the fresh talent nurtured in the campus.</p>

                            <p>In the journey towards excellence, many milestones were also set by the Placement cell in terms of Quality and Quantity. The excellent infrastructure of the campus facilitates different activities of placement-cell like pre-placement talks, written tests, group discussions and interviews as per the requirements of the Organizations. The consistent placement record illustrates the commitment to the success of the group.</p>


                            <h3 className="text sub-heading">PLACEMENT PARTNERS</h3> 
         <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="2000">
 
                                        <ol className="carousel-indicators">
                                            
                                         
                                    
                                        </ol>
            
                    <div className="carousel-inner">
                     <div className="item active">
                           <div className="row">
                            <div className="col-sm-2"><a ><img src="http://zenopsys.net/soundarya_forms/sims_images/Placements/accenture_Placements.png" alt="Image" style={{width:"0%"}} /></a>
							
						    </div>
                            <div className="col-sm-2"><a ><img src="http://zenopsys.net/soundarya_forms/sims_images/Placements/bosch_Placements.png" alt="Image" style={{width:"120%",height:"100px"}} /></a>
							  
                            </div>
                            <div className="col-sm-2"><a ><img src="http://zenopsys.net/soundarya_forms/sims_images/Placements/capg_Placements.png" alt="Image" style={{width:"120%",height:"100px"}} /></a>
                               
						    </div>
                            <div className="col-sm-2"><a ><img src="http://zenopsys.net/soundarya_forms/sims_images/Placements/oracle_Placements.png" alt="Image" style={{width:"120%",height:"100px"}} /></a>
                               
						    </div>
                            <div className="col-sm-2"><a ><img src="http://zenopsys.net/soundarya_forms/sims_images/Placements/ibm_Placements.png" alt="Image" style={{width:"120%",height:"100px"}} /></a>
                               
						    </div>
                              <div className="col-sm-2"><a ><img src=" http://zenopsys.net/soundarya_forms/sims_images/Placements/abb_Placements.png" alt="Image" style={{width:"120%",height:"100px"}} /></a>
                               
						    </div>
                           
                          
                        </div>
                    </div>
                       <div className="item">
                           <div className="row">
                            <div className="col-sm-2"><a ><img src="http://zenopsys.net/soundarya_forms/sims_images/Placements/infosys_Placements.png" alt="Image" style={{width:"120%",height:"100px"}} /></a>
							
						    </div>
                            <div className="col-sm-2"><a ><img src="http://zenopsys.net/soundarya_forms/sims_images/Placements/bosch_Placements.png" alt="Image" style={{width:"120%",height:"100px"}} /></a>
							  
                            </div>
                            <div className="col-sm-2"><a ><img src="http://zenopsys.net/soundarya_forms/sims_images/Placements/serco_Placements.png" alt="Image" style={{width:"120%",height:"100px"}} /></a>
                               
						    </div>
                            <div className="col-sm-2"><a ><img src="http://zenopsys.net/soundarya_forms/sims_images/Placements/ne_Placements.png" alt="Image" style={{width:"120%",height:"100px"}} /></a>
                               
						    </div>
                            <div className="col-sm-2"><a ><img src="http://zenopsys.net/soundarya_forms/sims_images/Placements/SLK_Placements.png" alt="Image" style={{width:"120%",height:"100px"}} /></a>
                               
						    </div>
                             <div className="col-sm-2"><a ><img src="http://zenopsys.net/soundarya_forms/sims_images/Placements/fouress_Placements.png" alt="Image" style={{width:"120%",height:"100px"}} /></a>
                               
						    </div>
                          
                        </div>
                    </div>

            </div>
              	<a className="left carousel-control" href="#myCarousel" data-slide="prev">
											<span className="glyphicon glyphicon-chevron-left"></span>
											<span className="sr-only">Previous</span>
									</a>
									<a className="right carousel-control" href="#myCarousel" data-slide="next">
											<span className="glyphicon glyphicon-chevron-right"></span>
											<span className="sr-only">Next</span>
									</a>
            </div>




                            <h3 className="text sub-heading">Placement of students in various companies   </h3>                       
                            <div className="table-responsive">
                            <div id="sport-table_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer"><div className="row"><div className="col-sm-6"><div className="dataTables_length" id="sport-table_length"></div></div></div><div className="row"><div className="col-sm-12">
                            <table id="sport-table" className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer dtr-inline" width="100%" role="grid" aria-describedby="sport-table_info" style={{width:"100%"}}>
                                <thead>
									<tr role="row"><th className="sorting_asc" tabindex="0" aria-controls="sport-table" rowspan="1" colspan="1" style={{width: "47px"}} aria-sort="ascending" aria-label="Sl.No.: activate to sort column descending">Sl.No.</th><th className="sorting" tabindex="0" aria-controls="sport-table" rowspan="1" colspan="1" style={{width: "126px"}} aria-label="Student name : activate to sort column ascending">Student name </th><th className="sorting" tabindex="0" aria-controls="sport-table" rowspan="1" colspan="1" style={{width: "55px"}} aria-label="Stream: activate to sort column ascending">Stream</th><th className="sorting" tabindex="0" aria-controls="sport-table" rowspan="1" colspan="1" style={{width:"223px"}} aria-label="Company: activate to sort column ascending">Company</th><th className="sorting" tabindex="0" aria-controls="sport-table" rowspan="1" colspan="1" style={{width: "118px"}} aria-label="Annual package: activate to sort column ascending">Annual package</th></tr></thead>
                                <tbody>
                                        <tr role="row" className="even">
                                                <td className="sorting_1" tabindex="0">1</td>
                                                <td>Tejashree B O</td>
                                                <td>BBA</td>
                                                <td>HP</td>
                                                <td>2.7 LPA</td>
                                            </tr>
                                            <tr role="row" className="even">
                                                <td className="sorting_1" tabindex="0">2</td>
                                                <td>Abdullah N</td>
                                                <td>BBA</td>
                                                <td>India Money</td>
                                                <td>1.8 LPA</td>
                                            </tr>
                                            <tr role="row" className="even">
                                                <td className="sorting_1" tabindex="0">3</td>
                                                <td>Faraz Ahamed</td>
                                                <td>BBA</td>
                                                <td>India Money, Transact</td>
                                                <td>1.92LPA, 2.2LPA</td>
                                            </tr>
                                            <tr role="row" className="even">
                                                <td className="sorting_1" tabindex="0">4</td>
                                                <td>Kiran S</td>
                                                <td>BBA</td>
                                                <td>India Money</td>
                                                <td>2.28 LPA</td>
                                            </tr>
                                            <tr role="row" className="even">
                                                <td className="sorting_1" tabindex="0">5</td>
                                                <td>Moulya</td>
                                                <td>BBA</td>
                                                <td>India Money</td>
                                                <td>1.8 LPA</td>
                                            </tr>
                                            <tr role="row" className="even">
                                                <td className="sorting_1" tabindex="0">6</td>
                                                <td>Tejaswini</td>
                                                <td>BBA</td>
                                                <td>India Money</td>
                                                <td>1.8 LPA</td>
                                            </tr>
                                            <tr role="row" className="even">
                                                <td className="sorting_1" tabindex="0">7</td>
                                                <td>Rekha</td>
                                                <td>BBA</td>
                                                <td>Airtel</td>
                                                <td>1.8 LPA</td>
                                            </tr>
                                            <tr role="row" className="even">
                                                    <td className="sorting_1" tabindex="0">8</td>
                                                    <td>Hemanth</td>
                                                    <td>BBA</td>
                                                    <td>Airtel</td>
                                                    <td>1.8 LPA</td>
                                                </tr>
                                            <tr role="row" className="even">
                                                <td className="sorting_1" tabindex="0">9</td>
                                                <td>Shravan Kumar M R </td>
                                                <td>BBA</td>
                                                <td>Infosys </td>
                                                <td>2.26 LPA</td>
                                            </tr>
                                            <tr role="row" className="even">
                                                <td className="sorting_1" tabindex="0">10</td>
                                                <td>Faraz Ahamed </td>
                                                <td>BBA</td>
                                                <td>Colossians Knowledge Company Pvt Ltd.</td>
                                                <td>2.90 LPA</td>
                                            </tr>
                                            <tr role="row" className="even">
                                                <td className="sorting_1" tabindex="0">11</td>
                                                <td>Nayana S</td>
                                                <td>BBA</td>
                                                <td>India Money</td>
                                                <td>1.8LPA</td>
                                            </tr>
                                            <tr role="row" className="even">
                                                    <td className="sorting_1" tabindex="0">12</td>
                                                    <td>Pooja</td>
                                                    <td>BBA</td>
                                                    <td>Gap Bridges</td>
                                                    <td>2.2LPA</td>
                                                </tr>

                                            <tr role="row" className="even">
                                                    <td className="sorting_1" tabindex="0">13</td>
                                                    <td>Ms.Suma N</td>
                                                    <td>BBA</td>
                                                    <td>HP</td>
                                                    <td>2.7 LPA</td>
                                                </tr>
                                                
                                                <tr role="row" className="even">
                                                    <td className="sorting_1" tabindex="0">14</td>
                                                    <td>Pavan Raj</td>
                                                    <td>BCOM "C"</td>
                                                    <td>Airtel</td>
                                                    <td>2.2LPA</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1" tabindex="0">15</td>
                                                    <td>Keerthi Kumar</td>
                                                    <td>BCOM "C"</td>
                                                    <td>Airtel</td>
                                                    <td>2.2LPA</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1" tabindex="0">16</td>
                                                    <td>Kavya V</td>
                                                    <td>BCOM "A"</td>
                                                    <td>Pristine Facility</td>
                                                    <td>1.8 LPA</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1" tabindex="0">17</td>
                                                    <td>Kavya N</td>
                                                    <td>BCOM "A"</td>
                                                    <td>Pristine Facility</td>
                                                    <td>1.8 LPA</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1" tabindex="0">18</td>
                                                    <td>Sai Tejashree</td>
                                                    <td>BCOM "A"</td>
                                                    <td>Airtel, Pristine Facility</td>
                                                    <td>2.2LPA</td>
                                                </tr>
                                               
                                                <tr role="row" className="even">
                                                    <td className="sorting_1" tabindex="0">19</td>
                                                    <td>Chaithra </td>
                                                    <td>BCOM "A"</td>
                                                    <td>Airtel, Pristine Facility</td>
                                                    <td>2.2LPA</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1" tabindex="0">20</td>
                                                    <td>Geethanjali </td>
                                                    <td>BCOM "A"</td>
                                                    <td>Airtel, Pristine Facility</td>
                                                    <td>2.2LPA</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">21</td>
                                                        <td>Brinda </td>
                                                        <td>BCOM "A"</td>
                                                        <td>Airtel, Pristine Facility</td>
                                                        <td>2.2LPA</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">22</td>
                                                        <td>Priyanka </td>
                                                        <td>BCOM "B"</td>
                                                        <td>Reliance Education</td>
                                                        <td>2.2LPA</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">23</td>
                                                        <td>Shivani </td>
                                                        <td>BCOM "B"</td>
                                                        <td>Reliance Education</td>
                                                        <td>2.2LPA</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">24</td>
                                                        <td>Subramanya </td>
                                                        <td>BCOM "B"</td>
                                                        <td>Reliance Education</td>
                                                        <td>2.4LPA</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">25</td>
                                                        <td>Sukanya </td>
                                                        <td>BCOM "B"</td>
                                                        <td>Quick ride</td>
                                                        <td>2.2LPA</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">26</td>
                                                        <td>Abhishek H </td>
                                                        <td>BCOM "B"</td>
                                                        <td>Kotak Mahindra Bank</td>
                                                        <td>2.64LPA</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">27</td>
                                                        <td>Sandeep Kumar R </td>
                                                        <td>BCOM "B"</td>
                                                        <td>Kotak Mahindra Bank</td>
                                                        <td>2.64LPA</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">28</td>
                                                        <td>Mohan </td>
                                                        <td>BCOM "C"</td>
                                                        <td>Royal Enfiled</td>
                                                        <td>1.8LPA</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">29</td>
                                                        <td>Roshni G L </td>
                                                        <td>BCOM "C"</td>
                                                        <td>Royal Enfiled</td>
                                                        <td>1.8LPA</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">30</td>
                                                        <td>Tejas N  </td>
                                                        <td>BCOM "A"</td>
                                                        <td>Winners Vision</td>
                                                        <td></td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">31</td>
                                                        <td>Yashwanth B S  </td>
                                                        <td>BCOM "C"</td>
                                                        <td>Winners Vision</td>
                                                        <td></td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">32</td>
                                                        <td>Nishanth K  </td>
                                                        <td>BCOM "A"</td>
                                                        <td>Winners Vision</td>
                                                        <td></td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">33</td>
                                                        <td>Kavya V</td>
                                                        <td>BCOM "A"</td>
                                                        <td>DREAM GAINS PVT LTD </td>
                                                        <td>503400</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">34</td>
                                                        <td>Priyanka </td>
                                                        <td>BCOM "B"</td>
                                                        <td>DREAM GAINS PVT LTD </td>
                                                        <td>503400</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">35</td>
                                                        <td>Vishwas Gowda </td>
                                                        <td>BCOM "A"</td>
                                                        <td>DREAM GAINS PVT LTD </td>
                                                        <td>503400</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">36</td>
                                                        <td>Ranjith Singh </td>
                                                        <td>BCOM "A"</td>
                                                        <td>Concentrix </td>
                                                        <td>2.2LPA</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">37</td>
                                                        <td>Sukanya  </td>
                                                        <td>BCOM</td>
                                                        <td>Infosys </td>
                                                        <td>2.26LPA</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">38</td>
                                                        <td>Amrutha K T  </td>
                                                        <td>BCOM</td>
                                                        <td>Infosys </td>
                                                        <td>2.26LPA</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">39</td>
                                                        <td>Varsha S  </td>
                                                        <td>BCOM</td>
                                                        <td>Infosys </td>
                                                        <td>2.26LPA</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">40</td>
                                                        <td>Vaishnavi DS  </td>
                                                        <td>BCOM</td>
                                                        <td>Infosys </td>
                                                        <td>2.26LPA</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">41</td>
                                                        <td>Udayashree M p  </td>
                                                        <td>BCOM</td>
                                                        <td>Infosys </td>
                                                        <td>2.26LPA</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">42</td>
                                                        <td>Kavya N  </td>
                                                        <td>BCOM</td>
                                                        <td>Infosys </td>
                                                        <td>2.26LPA</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">43</td>
                                                        <td>Sai Tejashree  </td>
                                                        <td>BCOM</td>
                                                        <td>Infosys </td>
                                                        <td>2.26LPA</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">44</td>
                                                        <td>Rashmi K  </td>
                                                        <td>BCOM</td>
                                                        <td>Infosys </td>
                                                        <td>2.26LPA</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">45</td>
                                                        <td>Usha B </td>
                                                        <td>BCA</td>
                                                        <td>Qpsiders</td>
                                                        <td>Trainee</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">46</td>
                                                        <td>Kapil Sharma </td>
                                                        <td>BCA</td>
                                                        <td>Qpsiders</td>
                                                        <td>Trainee</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">47</td>
                                                        <td>Jenisha </td>
                                                        <td>BCA</td>
                                                        <td>Qpsiders</td>
                                                        <td>Trainee</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">48</td>
                                                        <td>Usha B A</td>
                                                        <td>BCA</td>
                                                        <td>Qpsiders</td>
                                                        <td>Trainee</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">49</td>
                                                        <td>Tejashree</td>
                                                        <td>BCA</td>
                                                        <td>Qpsiders</td>
                                                        <td>Trainee</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">50</td>
                                                        <td>Vidyashree P</td>
                                                        <td>BCA</td>
                                                        <td>Qpsiders</td>
                                                        <td>Trainee</td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">51</td>
                                                        <td>Varshini </td>
                                                        <td>BCOM "B"</td>
                                                        <td>Wipro</td>
                                                        <td></td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">52</td>
                                                        <td>Ramya  </td>
                                                        <td>BCOM "C"</td>
                                                        <td>Wipro</td>
                                                        <td></td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">53</td>
                                                        <td>Usha B A   </td>
                                                        <td>BCOM "C"</td>
                                                        <td>Cognizant </td>
                                                        <td></td>
                                                
                                                </tr>
                                                <tr role="row" className="even">
                                                        <td className="sorting_1" tabindex="0">54</td>
                                                        <td>Neviditha K P   </td>
                                                        <td>BCOM "C"</td>
                                                        <td>Cognizant </td>
                                                        <td></td>
                                                
                                                </tr>
                                                
        
                                 <tr role="row" className="odd">
                                            <td tabindex="0" className="sorting_1">55</td>
                                            <td>Sridhar H S</td>
                                            <td>B.Com</td>
                                            <td>IBM Daksh</td>
                                            <td></td>
                                        </tr><tr role="row" className="even">
                                            <td tabindex="0" className="sorting_1">56</td>
                                            <td>Nuthan P</td>
                                            <td>B.Com</td>
                                            <td>IBM</td>                                            <td></td>
                                        </tr><tr role="row" className="odd">
                                            <td tabindex="0" className="sorting_1">57</td>
                                            <td>Rukmini</td>
                                            <td>BBM</td>
                                            <td>Northern Trust Bank</td>
                                            <td></td>
                                        </tr><tr role="row" className="even">
                                            <td tabindex="0" className="sorting_1">58</td>
                                            <td>Swathi M</td>
                                            <td>BBM</td>
                                            <td>Northern Trust Bank</td>
                                            <td></td>
                                        </tr><tr role="row" className="odd">
                                            <td tabindex="0" className="sorting_1">59</td>
                                            <td>Nethravathi S</td>
                                            <td>B.Com</td>
                                            <td>Northern Trust Bank</td>
                                            <td></td>
                                        </tr><tr role="row" className="even">
                                            <td tabindex="0" className="sorting_1">60</td>
                                            <td>Shobha Rani N</td>
                                            <td>BCA</td>
                                            <td>Accenture</td>
                                            <td></td>
                                        </tr><tr role="row" className="odd">
                                            <td tabindex="0" className="sorting_1">61</td>
                                            <td>Santhosh Kumar T N</td>
                                            <td>B.Com</td>
                                            <td>Accenture</td>
                                            <td></td>
                                        </tr><tr role="row" className="even">
                                            <td tabindex="0" className="sorting_1">62</td>
                                            <td>Shruthi K</td>
                                            <td>BBM</td>
                                            <td>Oracle</td>
                                            <td></td>
                                        </tr><tr role="row" className="odd">
                                            <td tabindex="0" className="sorting_1">63</td>
                                            <td>Kushal K M</td>
                                            <td>B.Com</td>
                                            <td>TVS</td>
                                            <td></td>
                                        </tr><tr role="row" className="even">
                                            <td tabindex="0" className="sorting_1">64</td>
                                            <td>Keerthi Kumar D</td>
                                            <td>B.Com</td>
                                            <td>Cross Domain</td>
                                            <td></td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1" tabindex="0">65</td>
                                            <td>Sowmya R</td>
                                            <td>BBM</td>
                                            <td>Cross Domain</td>
                                            <td></td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1" tabindex="0">66</td>
                                            <td>Deepti S</td>
                                            <td>B.Com</td>
                                            <td>SERCO</td>
                                            <td></td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1" tabindex="0">67</td>
                                            <td>Naveen Gowda K</td>
                                            <td>B.Com</td>
                                            <td>Infosys</td>
                                            <td></td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1" tabindex="0">68</td>
                                            <td>Thanuja B</td>
                                            <td>B.Com</td>
                                            <td>Accenture</td>
                                            <td></td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1" tabindex="0">69</td>
                                            <td>Niveditha M</td>
                                            <td>B.Com</td>
                                            <td>Cape Gemini</td>
                                            <td></td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1" tabindex="0">70</td>
                                            <td>Shashikala  M</td>
                                            <td>B.Com</td>
                                            <td>BOSH</td>
                                            <td></td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1" tabindex="0">71</td>
                                            <td>Jayapriya B R</td>
                                            <td>BCA</td>
                                            <td>Uni Tech Incorporation</td>
                                            <td></td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1" tabindex="0">72</td>
                                            <td>D N Tejesh</td>
                                            <td>B.Com</td>
                                            <td>Indian Academy</td>
                                            <td></td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1" tabindex="0">73</td>
                                            <td>Madhusudhan M R</td>
                                            <td>B.Com</td>
                                            <td>Kemwell</td>
                                            <td></td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1" tabindex="0">74</td>
                                            <td>Pavan Kumar R</td>
                                            <td>BBM</td>
                                            <td>ABB Company</td>
                                            <td></td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1" tabindex="0">75</td>
                                            <td>Vinodh Kumar C</td>
                                            <td>B.Com.</td>
                                            <td>Fouress</td>
                                            <td></td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1" tabindex="0">76</td>
                                            <td>Varun N</td>
                                            <td>BCA</td>
                                            <td>SLK Software</td>                                           <td></td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1" tabindex="0">77</td>
                                            <td>Deeksha T S</td>
                                            <td>BCA</td>
                                            <td>Varun N</td>
                                            <td></td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1" tabindex="0">78</td>
                                            <td>Mamatha</td>
                                            <td>B.Com</td>
                                            <td>DMT Corporation</td>
                                            <td></td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1" tabindex="0">79</td>
                                            <td>Usha Rani</td>
                                            <td>B.Com</td>
                                            <td>DMT Corporation</td>
                                            <td></td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1" tabindex="0">80</td>
                                            <td>Manjula B N</td>
                                            <td>B.Com</td>
                                            <td>Magnum International</td>
                                            <td></td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1" tabindex="0">81</td>
                                            <td>Girish S</td>
                                            <td>B.Com</td>
                                            <td>Vardhaman threads &amp; yarns limited</td>
                                            <td></td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1" tabindex="0">82</td>
                                            <td>Spoorthi G M</td>
                                            <td>BCA</td>
                                            <td>E-dreams</td>
                                            <td></td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1" tabindex="0">83</td>
                                            <td>Santhosh S</td>
                                            <td>B.Com</td>
                                            <td>Ocwen Financial solutions</td>
                                            <td></td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1" tabindex="0">84</td>
                                            <td>Prasad S</td>
                                            <td>B.Com</td>
                                            <td>Housefull International ltd.</td>
                                            <td></td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1" tabindex="0">85</td>
                                            <td>DAVID.B</td>
                                            <td>BBA</td>
                                            <td>Northern Trust</td>
                                            <td>2.14 lakh P.A</td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1" tabindex="0">86</td>
                                            <td>MEGHA E.J</td>
                                            <td>B.Com</td>
                                            <td>BEGL</td>
                                            <td>1.80 lakh P.A</td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1" tabindex="0">87</td>
                                            <td>MANJULA DHAMI</td>
                                            <td>B.Com</td>
                                            <td>BEGL</td>
                                            <td>1.80 lakh P.A</td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1" tabindex="0">88</td>
                                            <td>ANEESHA</td>
                                            <td>B.Com</td>
                                            <td>BEGL</td>
                                            <td>1.80 lakh P.A</td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1" tabindex="0">89</td>
                                            <td>BINDU SHREE</td>
                                            <td>B.Com</td>
                                            <td>Standard Charted Bank</td>
                                            <td>2.5 lakh P.A</td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1" tabindex="0">90</td>
                                            <td>MANJUNATH PRABHU</td>
                                            <td>B.Com</td>
                                            <td>Standard Charted Bank</td>
                                            <td>2.5 lakh P.A</td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1" tabindex="0">91</td>
                                            <td>DHEERAJ PRAKASH</td>
                                            <td>B.Com</td>
                                            <td>Standard Charted Bank</td>
                                            <td>2.5 lakh P.A</td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1" tabindex="0">92</td>
                                            <td>PAVITHRA.V.K</td>
                                            <td>B.Com</td>
                                            <td>Axa Business Service</td>
                                            <td>1.80 lakh P.A</td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1" tabindex="0">93</td>
                                            <td>MAMTHA</td>
                                            <td>B.Com</td>
                                            <td>Axa Business Service</td>
                                            <td>1.80 lakh P.A</td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1" tabindex="0">94</td>
                                            <td>TRINYA</td>
                                            <td>B.Com</td>
                                            <td>Axa Business Service</td>
                                            <td>1.80 lakh P.A</td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1" tabindex="0">95</td>
                                            <td>BINDU SHREE</td>
                                            <td>B.Com</td>
                                            <td>Axa Business Service</td>
                                            <td>1.80 lakh P.A</td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1" tabindex="0">96</td>
                                            <td>RINI</td>
                                            <td>B.Com</td>
                                            <td>Axa Business Service</td>
                                            <td>1.80 lakh P.A</td>
                                        </tr>
                                       
                                        </tbody>
                            </table></div></div><div className="row"><div className="col-sm-5"></div></div><div className="col-sm-7"><div className="dataTables_paginate paging_simple_numbers" id="sport-table_paginate"></div></div></div></div>
                           
                            

                        </article>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
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
                                    <p className="tel"><i className="fa fa-phone"></i>Tel: <a href="tel:080 28390260">080-28390260 </a></p>
                                    <p className="email"><i className="fa fa-envelope"></i>Email: <a href="mailto:degreesoundarya@gmail.com">degreesoundarya@gmail.com</a></p>
                                </section> 
                            <section className="widget has-divider">
                                <h3 className="title">Gallery</h3>
                                 <div className="row ">
                           
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="/Gallery">                    
                                    <img style={{marginRight:"10px",width:"100px",height:"100px"}}className="img-responsive bg-img" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506928252/gallery-1_fsdguv.jpg" alt=""/>                                                                                                         
                                    </a>                        

                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="/Gallery">                    
                                    <img style={{marginRight:"10px",width:"100px",height:"100px"}}className="img-responsive bg-img" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506928258/gallery-2_fmucas.jpg" alt=""/>                                                                                                         
                                    </a>                        

                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="/Gallery">                    
                                    <img style={{marginRight:"10px",width:"100px",height:"100px"}}className="img-responsive bg-img" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506928263/gallery-3_dmkzpy.jpg" alt=""/>                                                                                                         
                                    </a>  
                                </div>
                                <div className="row ">   
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="/Gallery">                    
                                    <img style={{marginRight:"10px",width:"100px",height:"100px"}}className="img-responsive bg-img" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506928268/gallery-4_jnrein.jpg" alt=""/>                                                                                                         
                                    </a>
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="/Gallery">                    
                                    <img style={{marginRight:"10px",width:"100px",height:"100px"}}className="img-responsive bg-img" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506928275/gallery-5_xewr0f.jpg" alt=""/>                                                                                                         
                                    </a>  
                                   
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="/Gallery">                    
                                    <img style={{marginRight:"10px",width:"100px",height:"100px"}}className="img-responsive bg-img" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506928280/gallery-6_biczsb.jpg" alt=""/>                                                                                                         
                                    </a>         
                         
                                </div>
                                
                            </section>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}