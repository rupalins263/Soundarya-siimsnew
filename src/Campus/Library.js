import React,{Component } from 'react';


export default class Library extends Component{

    render(){

        return(
            <div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">LIBRARY AND INFORMATION CENTRE</h1>
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
                        <article className="welcome col-md-8 col-sm-7">                         
                                <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
                                        <ol className="carousel-indicators">
                                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                            <li data-target="#myCarousel" data-slide-to="1"></li>
                                            <li data-target="#myCarousel" data-slide-to="2"></li>
                                           
                                        </ol>


                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/CampusLife/library-1_LibrarySlideShow.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/CampusLife/library-2_LibrarySlideShow.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/CampusLife/library-3_LibrarySlideShow.jpg" alt=""/>
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
                            
                                                
                            
                           
                            
                        </article>

                          </div>
                </div>

                        <div className="page-content">
                    <div className="row page-row">
                        <div className="col-md-12 col-sm-12">
                          
                            <div className="col-md-12 p0">
                                <div className="exTab2">
                                    <ul className="nav nav-tabs">
                                        <li className="active"><a href="#tab1" data-toggle="tab" aria-expanded="true">About</a></li>
                                        <li className=""><a href="#tab2" data-toggle="tab" aria-expanded="false">Library Access</a></li>
                                        <li className=""><a href="#tab3" data-toggle="tab" aria-expanded="false">Library Collection</a></li>
                                        <li className=""><a href="#tab4" data-toggle="tab" aria-expanded="false">Library Facilities</a></li>
                                        <li className=""><a href="#tab5" data-toggle="tab" aria-expanded="false">Library Staff</a></li>
                                        <li className=""><a href="#tab6" data-toggle="tab" aria-expanded="false">Downloads</a></li>                                      
                                    </ul>
                                    <div className="tab-content col-md-12">
                                        <div className="tab-pane active" id="tab1">
                                            <h3 className="title" style={{"margin":"10px 0 20px","padding-left":"15px"}}>ABOUT LIBRARY</h3>                   
                                            <div className="col-md-12 col-xs-12">
                                                <div id="collapse1" className="panel-collapse collapse in">
                                                    <div className="panel-body">
                                                        <p>
                                                            The library facility here is of the state-of-the art. The library is fully computerized with library 
                                                            software (LIBSOFT & DELNET e-resources). The library has a huge collection of 8,000 reference and text 
                                                            books along with CDs and DVDs apart from reputed National and International journals, magazines and 
                                                            periodicals in the field of Commerce, Management and Computer Science.
                                                        </p>
                                                        <p>
                                                            The project reports, question papers, and Back volumes of previous years are made available in
                                                            the library and also provides internet facility to the faculty and students .
                                                        </p>
                                                        <p>
                                                            The mission is to provide comprehensive resources and services in support of the
                                                            research, teaching, and learning needs of the faculty and students community.
                                                        </p>
                                                    </div>
                                                </div>                                               
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="tab2">
                                            <h3 className="title" style={{"margin": "10px 0 20px"}}>LIBRARY ACCESS</h3>
                                            <ul>
                                                <li>Library has Good Collection of Books and Journals, documents are well organized by following Library Classification (Dewey Decimal Classification) latest.
                                                    <p>This arrangement has  helped organization of information in a systematic way and has helped users to locate documents easily.</p>

                                                </li>

                                                <li>Library provides open access facilities which help easy access and use of library as a Learning Resource.</li>
                                                <li>Library is following open access system, where the books from the stock section are borrowed by the faculty and students. The circulation counter updates day to day borrowing and returning of the books and statistics are maintained</li>
                                                <li>Separate Log in and Log out register is maintained for students and faculty which helps tracking the day to day visitors.</li>
                                                <li>Barcode ID card is issued to the student to borrow the books. The books are arranged according to dept. wise which helps in knowing the status of the book easily.</li>
                                                <li>Reader’s guidance and Ready reference service is provided to users.</li>
                                            </ul>
                                            
                                        </div>
                                        <div className="tab-pane" id="tab3">
                                            <h3 className="title" style={{"margin": "10px 0 20px"}}>LIBRARY COLLECTION</h3>
                                            <p>The Library collection consists of Books (including text books, Reference Books, dictionaries, 
                                                encyclopedia, competitive books, and yearbooks), Periodicals, Project Reports, CD Rom/DVDs, Audio 
                                            cassette, past and present question papers. The Library collections cater to the needs of UG, PG 
                                            Students and other stake holders. Thus library collection addresses the needs for teaching – learning 
                                            (UG, PG), research, reference, and preparation of project proposals, reports, and competitive 
                                            examination through its vast collection. The library collection is quite systematic and procurements 
                                            are made only on the recommendations of the different departments. The library ensures procurement of 
                                            the latest and updated learning resources like books and journals by sending the latest catalogues, 
                                            paper clippings etc. to the departments to facilitate procurement.
                                            </p>
                                            <table style={{"width":"70%" }}>
                                            <thead>
                                                <tr>
                                                    <td>Sl.No </td>
                                                    <td>Name of the Resources</td>
                                                    <td>Total no of volumes</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Total No.Books</td>
                                                    <td>13035</td>
                                                </tr>
                                                <tr>                                                    
                                                    <td>2</td>
                                                    <td>Total No. Titles</td>
                                                    <td>5026</td>                                                   
                                                </tr>
                                                <tr>                                                    
                                                    <td>3</td>
                                                    <td>Reference Books</td>
                                                    <td>4790</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Donated Books</td>
                                                    <td>332</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>SC/ST Book Bank</td>
                                                    <td>258</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Journals</td>
                                                    <td>28</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>Project Reports</td>
                                                    <td>410</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>CD Rom/DVD’s</td>
                                                    <td>224</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>Audio-Visual</td>
                                                    <td>16</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>Newspapers</td>
                                                    <td>14</td>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td>Magazines</td>
                                                    <td>20</td>
                                                </tr>
                                                <tr>
                                                    <td>12</td>
                                                    <td>Back Volumes</td>
                                                    <td>156</td>
                                                </tr>
                                            </tbody>

                                            </table>                                   
                                        </div>
                                        <div className="tab-pane" id="tab4">
                                            <h3 className="title" style={{"margin": "10px 0 20px"}}>LIBRARY FACILITIES:</h3>
                                            <h4 className="title" style={{"margin": "10px 0 20px"}}>ORGANIZATION OF LIBRARY RESOURCES</h4>
                                            <ul>
                                                <li>Books are arranged and Organized  subject wise.</li>
                                                <li>Journals are displayed alphabetically.</li>
                                                <li>Reference books kept separately in reference section.</li>
                                                <li>Back volumes of  journals maintaine.</li>
                                            </ul>
                                           <hr />
                                            <h4 className="title" style={{"margin": "10px 0 20px"}}>ON-LINE INTERNET SERVICES</h4>
                                            <ul>
                                                <li>Library is providing the internet services to the faculty and are using for daily.</li>                                             
                                            </ul>
                                            <hr />
                                            <h4 className="title" style={{"margin": "10px 0 20px"}}>COMPUTERIZATION OF LIBRARY</h4>
                                            <ul>
                                                <li>For computerization LIBSOFT 9.8 software supported by ENVIRON has been procured for automating in-house activities and services of the library.</li>
                                                <li>The Online Public Access Catalogue (OPAC) will be made available to the users to identify the status of availability of documents in the library.</li>
                                                <li>Library is provided with WI-FI Internet connectivity extensively used by the library staff, and faculty.</li>
                                                <li>Library is having reprographic facility with Printer machine and catering for the photocopying purpose for faculty and official work.</li>
                                            </ul>
                                            <hr />
                                            <h4 className="title" style={{"margin": "10px 0 20px"}}>THE SIMS LIBRARY PROVIDES THE FOLLOWING SERVICES:</h4>
                                            <ul>
                                                <li>Reference Service:</li>
                                                <li>Inter Library Loan:</li>
                                                <li>Internet Service:</li>
                                                <li>SC / ST Book Bank:</li>
                                                <li>Reprography Service:</li>
                                                <li>Newspaper clipping service:</li>
                                                <li>Special Reference Books for Competitive Exams(CSIR/UGC/NET/SLET,IAS,KAS,Banking, Railways &amp; other exams)</li>
                                                <li>Question Bank Service.</li>
                                            </ul>
                                            <hr />
                                                     
                                        </div>
                                        <div className="tab-pane" id="tab5">
                                            <h3 className="title" style={{"margin": "10px 0 20px"}}>LIBRARY STAFF</h3>
                                            <table style={{"width":"70%"}}>
                                                <thead> 
                                                    <tr><td>Sl No.</td><td>Name</td><td>Qualification</td><td>Designation</td></tr>
                                                </thead>
                                                <tbody>
                                                    <tr><td>1</td><td>Mr. Ranganatha T L</td><td>M.Sc (LIS) M.Phil</td><td>Librarian</td></tr>
                                                    <tr><td>2</td><td>Mr. Ravichandiran T</td><td>M.com</td><td>Library Assistant<  /td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tab-pane" id="tab6">
                                            <h3 className="title" style={{"margin": "10px 0 20px"}}>Library Rules and Regulations</h3>
                                            <h4 className="title" style={{"margin": "10px 0 20px"}}>Library Timings – 9.00 a.m. to 5.00 p.m.</h4>
                                            <ul>
                                                <li>Students are requested to enter their name and sign in the register kept at the check point while entering the library.</li>
                                                <li>Issuing and returning of books is between 9:00a.m.to4.00p.m.</li>
                                                <li>2 Books for students &amp; 4 Books for faculty members will be issued. </li>
                                                <li>Must promptly display the books and other documents which are being taken out of the library to the staff at the check Point. </li>
                                                <li>Library books should be returned within 15 days else of Rs. 1/- per day will be collected as fine. </li>
                                                <li>Borrower must replace lost - damaged books. </li>
                                                <li>Personal books/ Files/ Blazers/ Jerkins should not be carried inside the Library. </li>
                                                <li>Reference books/ Journals/ Students Project Report are only for reference. </li>
                                                <li>Students should bring their Identity Card /Borrower’s Card whenever they enter the Library. </li>
                                                <li>Students have to Maintain Silence inside the Library. </li>
                                                <li>If any student found misbehaving inside the Library, he/she will be suspended from the library for one week. </li>
                                                <li>All borrowed books must be returned and Dues must be settled prior to receiving examination hall tickets. </li>
                                                <li>Borrower’s card is not transferable </li>
                                                <li>Loss of borrower `s card to be reported immediately in writing to the Librarian </li>
                                                <li>Contact the Librarian /section staff on duty for any queries </li>
                                                <li>Renewals are allowed only time, when there is no claim by others </li>
                                                <li>Keep the library premises tidy </li>
                                                <li>Mobile phones strictly prohibited inside the library </li>                                          

                                            </ul>
                                           
                                        </div>
                                    </div>
                                </div>                              
                            </div>                            
                        </div>
                    </div>
                </div>
                        
                  
            </div>
        </div>
        )
    }
}