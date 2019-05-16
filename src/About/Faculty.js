import React,{Component } from 'react';


export default class Faculty extends Component{

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
                            <div id="sport-table_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
								<div className="row">
									<div className="col-sm-6"><div className="dataTables_length" id="sport-table_length">
											
											</div></div>
											<div className="col-sm-6"><div id="sport-table_filter" className="dataTables_filter">
												</div></div></div><div className="row"><div className="col-sm-12"><table id="sport-table" className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer dtr-inline" width="100%" role="grid" aria-describedby="sport-table_info" style={{"width": "100%"}}>
                                <thead>
									<tr role="row"><th className="sorting_asc" tabindex="0" aria-controls="sport-table" rowspan="1" colspan="1"style={{"width": "69px"}} aria-sort="ascending" aria-label="Sl.No.: activate to sort column descending">Sl.No.</th><th className="sorting" tabindex="0" aria-controls="sport-table" rowspan="1" colspan="1" style={{"width": "202px"}} aria-label="Name: activate to sort column ascending">Name</th><th className="sorting" tabindex="0" aria-controls="sport-table" rowspan="1" colspan="1" style={{"width":"176px"}} aria-label="Department: activate to sort column ascending">Department</th><th className="sorting" tabindex="0" aria-controls="sport-table" rowspan="1" colspan="1" style={{"width": "293px"}} aria-label="Qualifn.: activate to sort column ascending">Qualifn.</th><th className="sorting" tabindex="0" aria-controls="sport-table" rowspan="1" colspan="1" style={{width:" 226px"}}aria-label="Designation: activate to sort column ascending">Designation</th></tr></thead>
                       <tbody>
       	
										
                                <tr role="row" class="odd">
											<td tabindex="0" class="sorting_1">1</td>
											<td>Dr.Suresh C Hegadi</td>
											<td>Head of the Institution</td>
											<td>M.Com, Ph.D</td>
											<td>Principal</td>
										</tr><tr role="row" class="even">
											<td tabindex="0" class="sorting_1">2</td>
											<td>Dr. Harish P M</td>
											<td>Sports </td>
											<td>M.A.,M.P.Ed.,Ph.D.,PGDSY</td>
											<td>Physical Education Director</td>
										</tr><tr role="row" class="odd">
											<td tabindex="0" class="sorting_1">3</td>
											<td>Mr. Ranganath T L</td>
											<td>Library </td>
											<td>M.Sc in Lib. Science</td>
											<td>Librarian</td>
										</tr><tr role="row" class="even">
											<td tabindex="0" class="sorting_1">4</td>
											<td>Mrs.Vijayalakshmi R.Shirashad</td>
											<td>Computer-Science</td>
											<td>MCA</td>
											<td> Asst.Professor</td>
										</tr><tr role="row" class="odd">
											<td tabindex="0" class="sorting_1">5</td>
											<td>Mr.Pradeep K Shetty</td>
											<td>Dept. Of Kannada</td>
											<td>MA</td>
											<td>Asst.Prof.</td>
										</tr><tr role="row" class="even">
											<td tabindex="0" class="sorting_1">6</td>
											<td>Mrs.Haritha M</td>
											<td>Commerce</td>
											<td>M.B.A., M.Com.,(Ph.D)</td>
											<td>Asst.Professor</td>
										</tr><tr role="row" class="odd">
											<td tabindex="0" class="sorting_1">7</td>
											<td>Mrs.Prithvi Heggade M.</td>
											<td>Commerce</td>
											<td>M.Com., M.Phil.</td>
											<td>Asst.Professor</td>
										</tr><tr role="row" class="odd">
											<td tabindex="0" class="sorting_1">8</td>
											<td>Mr.Ramesh D</td>
											<td>Commerce</td>
											<td> M.Sc., M.Ed., M.B.A, M.Phil. (Ph.D)</td>
											<td>Asst.Professor</td>
										</tr><tr role="row" class="odd">
											<td tabindex="0" class="sorting_1">9</td>
											<td>Mrs.Suguna K</td>
											<td>Commerce</td>
											<td>M.B.A, M.Com (B.Ed)</td>
											<td>Asst.Professor</td>
										</tr><tr role="row" class="even">
											<td tabindex="0" class="sorting_1">10</td>
											<td>Mrs.Madhumita</td>
											<td>Computer-Science</td>
											<td>M.C.A.</td>
											<td>Asst.Prof.</td>
										</tr><tr role="row" class="odd">
											<td class="sorting_1" tabindex="0">11</td>
											<td>Mrs.Nischitha H</td>
											<td>Management</td>
											<td>M.Com</td>
											<td>Asst.Prof.</td>
										</tr><tr role="row" class="even">
											<td class="sorting_1" tabindex="0">12</td>
											<td>Mrs.Sowmyalatha</td>
											<td>Commerce</td>
											<td> M.Com(B.Ed)</td>
											<td>Asst.Prof.</td>
										</tr><tr role="row" class="even">
											<td class="sorting_1" tabindex="0">13</td>
											<td>Mrs.Gayathri Devi</td>
											<td>Hindi</td>
											<td>M.A., B.Ed.</td>
											<td>Asst.Prof.</td>
										</tr><tr role="row" class="even">
											<td class="sorting_1" tabindex="0">14</td>
											<td>Mrs.Sheela D.V</td>
											<td>Computer-Science</td>
											<td>M.C.A.</td>
											<td>Asst.Prof.</td>
										</tr><tr role="row" class="odd">
											<td class="sorting_1" tabindex="0">15</td>
											<td>Mrs.Sunitha N</td>
											<td>Commerce</td>
											<td>M.Com</td>
											<td>Asst.Prof.</td>
										</tr>
										<tr role="row" class="odd">
											<td class="sorting_1" tabindex="0">16</td>
											<td>Mrs.Nethravathi A</td>
											<td>Management</td>
											<td>M.B.A</td>
											<td>Asst.Prof.</td>
										</tr>
										<tr role="row" class="odd">
											<td class="sorting_1" tabindex="0">17</td>
											<td>Mr.Anilkumar K Y</td>
											<td>Commerce</td>
											<td>M.Com</td>
											<td>Asst.Prof.</td>
										</tr>
										<tr role="row" class="odd">
											<td class="sorting_1" tabindex="0">18</td>
											<td>Mrs.Divyashree D</td>
											<td>Computer-Science</td>
											<td>M.C.A.</td>
											<td>Asst.Prof.</td>
										</tr>
										<tr role="row" class="even">
											<td class="sorting_1" tabindex="0">19</td>
											<td>Mr.Darshan C</td>
											<td>Management</td>
											<td>MBA, BE</td>
											<td>Asst.Prof.</td>
										</tr>
										<tr role="row" class="even">
											<td class="sorting_1" tabindex="0">20</td>
											<td>Mr.Shivakumar U Ganachari</td>
											<td>English</td>
											<td>MA, KSET</td>
											<td>Asst.Prof.</td>
										</tr><tr role="row" class="odd">
											<td class="sorting_1" tabindex="0">21</td>
											<td>Mr.N.B. Shighihalli</td>
											<td>Science</td>
											<td>M.Sc.,M.Phil.</td>
											<td>Asst.Prof.</td>
										</tr>
										<tr role="row" class="odd">
											<td class="sorting_1" tabindex="0">22</td>
											<td>Mr.Tejeswi C.M</td>
											<td>Science</td>
											<td> M.Sc.</td>
											<td>Asst.Prof.</td>
										</tr>
										<tr role="row" class="even">
											<td class="sorting_1" tabindex="0">23</td>
											<td>Ms.Sushma A.V</td>
											<td>Science</td>
											<td>M.Sc.</td>
											<td>Asst.Prof.</td>
										</tr><tr role="row" class="odd">
											<td class="sorting_1" tabindex="0">24</td>
											<td>Mr.Lokesh G Angadi</td>
											<td>Commerce</td>
											<td>M.Com, MBA</td>
											<td>Asst.Prof.</td>
										</tr><tr role="row" class="even">
											<td class="sorting_1" tabindex="0">25</td>
											<td>Mr.Puttanna H</td>
											<td>English</td>
											<td>M.A (Eng.) B.Ed.</td>
											<td>Asst.Prof.</td>
										</tr><tr role="row" class="odd">
											<td class="sorting_1" tabindex="0">26</td>
											<td>Mrs.Thanuja V</td>
											<td>Commerce</td>
											<td>M.Com</td>
											<td>Asst.Prof.</td>
										</tr><tr role="row" class="even">
											<td class="sorting_1" tabindex="0">27</td>
											<td>Mr.Manjunath B</td>
											<td>Computer-Science</td>
											<td>B.E., M.Sc,M.Phil.</td>
											<td>HOD & Asst.Professor</td>
										</tr><tr role="row" class="odd">
											<td class="sorting_1" tabindex="0">28</td>
											<td>Mr.Somashekarappa</td>
											<td>Kannada</td>
											<td>M.A(Kann.), (B.Ed)</td>
											<td>Asst.Prof.</td>
										</tr><tr role="row" class="even">
											<td class="sorting_1" tabindex="0">29</td>
											<td>Mr.Rajashekara R</td>
											<td>Commerce</td>
											<td>M.Com</td>
											<td>Asst.Prof.</td>
										</tr><tr role="row" class="odd">
											<td class="sorting_1" tabindex="0">30</td>
											<td>Dr.Srinivas C</td>
											<td>Management</td>
											<td>MBA, M.Com,KSET, Ph.D</td>
											<td>HOD & Asst.Professor</td>
										</tr><tr role="row" class="even">
											<td class="sorting_1" tabindex="0">31</td>
											<td>Mr.Maruthi M.H</td>
											<td>Commerce</td>
											<td>MBA, (M.Com)</td>
											<td>Asst.Prof.</td>
										</tr>
										<tr role="row" class="even">
											<td class="sorting_1" tabindex="0">32</td>
											<td>Mrs.Ramya H.S</td>
											<td>Commerce</td>
											<td>M.A(Pol.Sc), M.Phil.</td>
											<td>Asst.Prof.</td>
										</tr>
										<tr role="row" class="even">
											<td class="sorting_1" tabindex="0">33</td>
											<td>Mrs.Prathima M.C</td>
											<td>Kannada</td>
											<td>M.A.(Kann), M.Phil.,B.Ed</td>
											<td>Professor </td>
										</tr>
										<tr role="row" class="even">
											<td class="sorting_1" tabindex="0">34</td>
											<td>Mr.Hanumantharaju G.K</td>
											<td>English</td>
											<td>M.A (Eng.)</td>
											<td>Asst.Prof.</td>
										</tr>
										<tr role="row" class="even">
											<td class="sorting_1" tabindex="0">35</td>
											<td>Dr.B.Prahlad Reddy</td>
											<td>Kannada</td>
											<td>MA M.Phil, Phd, SET</td>
											<td>Asst.Prof.</td>
										</tr>
										<tr role="row" class="even">
											<td class="sorting_1" tabindex="0">36</td>
											<td>Mr.Anil K.P</td>
											<td>Commerce</td>
											<td>M.Com </td>
											<td>Asst.Prof.</td>
										</tr>
										<tr role="row" class="even">
											<td class="sorting_1" tabindex="0">37</td>
											<td>Mr.Naresh C</td>
											<td>Management</td>
											<td>M.Com ,FA </td>
											<td>Asst.Prof.</td>
										</tr>
										<tr role="row" class="even">
											<td class="sorting_1" tabindex="0">38</td>
											<td>Ms. Leelavathi  L.V</td>
											<td>Management</td>
											<td>MBA</td>
											<td>Asst.Prof.</td>
										</tr>
										<tr role="row" class="even">
											<td class="sorting_1" tabindex="0">39</td>
											<td>Mr.Girisha</td>
											<td>Commerce</td>
											<td>M.Com </td>
											<td>Asst.Prof.</td>
										</tr>
										<tr role="row" class="even">
											<td class="sorting_1" tabindex="0">40</td>
											<td>Mr.Sudharsana Reddy Pujari</td>
											<td>PG</td>
											<td>M.Com, MBA, M.Phil, Phd,APSET,UGC NET </td>
											<td>Asst.Prof.</td>
										</tr>
										<tr role="row" class="even">
											<td class="sorting_1" tabindex="0">41</td>
											<td>Mr.Umar Ali Khan</td>
											<td>PG</td>
											<td>MFA,UGC NET</td>
											<td>Asst.Prof.</td>
										</tr>
									

										
										</tbody>
                            </table></div></div><div className="row">
								<div className="col-sm-7"></div></div></div>
                            </div>
						</article>
                        <article className="col-md-8 col-sm-7">
							<h3 className="title sub-heading">NON-TEACHING STAFF</h3>
                            <div className="table-responsive">
								<table className="table table-responsive table-bordered table-striped">
										<thead>
												<tr><th>Sl.No.</th>
												<th>Name</th>
												<th>Department</th>
												<th>Qualifn.</th>
												<th>Designation</th>
										</tr></thead>
										<tbody>
											<tr>
												<td>1</td>                                        
												<td>Mr. Ravi P</td>
												<td>Office</td>
												<td>M.A</td>
												<td>Office Asst.</td>
											</tr>
											 <tr>
												<td>2</td>                                        
												<td>Mr. Ramananda M. S</td>
												<td>Office</td>
												<td>B.A</td>
												<td>Office Asst.</td>
											</tr>
											<tr>
												<td>3</td>                                        
												<td>Mrs. Bhamamani K. G</td>
												<td>Office</td>
												<td>M.Com</td>
												<td>Office Asst.</td>
											</tr>
											 <tr>
												<td>4</td>                                        
												<td>Mr. Madhusudhan G</td>
												<td>Office</td>
												<td>(ITI)</td>
												<td>Office Attender</td>
											</tr>
											 <tr>
												<td>5</td>                                        
												<td>Mrs.Ramya Seshadri</td>
												<td>Placements</td>
												<td>B.Com,BCA, PG- Diploma in HR</td>
												<td>Manager</td>
											</tr>
										</tbody>    
								</table>            
                            </div>
                        </article>
                        <aside className="page-sidebar  col-md-3 col-sm-4" style={{"margin":"30px"}}>                    
                             <section className="widget">
                                    <h3 className="title">Contact</h3>
                                    <p><b>SIMS</b><br/>Soundarya Nagara, Sidedahalli,<br/> Nagasandra Post, Bangalore-560073</p>
                                    <p className="tel"><i className="fa fa-phone"></i>Tel: <a href="#">8722760601 / 080-29510260 / 080-29510261 </a></p>
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
