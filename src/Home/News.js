import React,{Component } from 'react';
import './Home.css';
import axios from 'axios';

export default class Home extends Component{
     constructor(){
        super();
        this.state={
         
			 events:[]
           
        }
    }
    componentDidMount(){
	
		 axios.get(`http://ec2-18-217-223-214.us-east-2.compute.amazonaws.com/SIMS/Events`)
             .then((res)=>{
                    console.log(res)
                    this.setState({
                        events:res.data.response,
                       
                    })
             })

         
	}
    render(){
        	let events="";
        if(this.state.events.length>0){

            events=this.state.events.reverse().map((item,index)=>{
                if(index < this.state.events.length){
                    var month=new Date(item.eventdate).toDateString().split(" ")[1];
                     var day=new Date(item.eventdate).toDateString().split(" ")[2];
                     var href=`/#/NewsSingle?id=${item.eventid}`;
                     var cnt=this.state.events.length;

                    return(
                                    <article className="events-item row page-row">                                    
                                                <div className="date-label-wrapper col-md-3 col-sm-4 col-xs-4">
                                                    <p className="date-label">                          
                                                        <span className="month">{month}</span>
                                                        <span className="date-number"> {day}</span>
                                                    </p>
                                                </div>
                                                <div className="details col-md-9 col-sm-8 col-xs-8">
                                                    {/* <h5 className="title"><a href={href}>{item.eventname} </a></h5>   */}
                                                    <h5 className="title"><a href={item.event_url}>{item.eventname} </a></h5>  
                                                    <p className="time text-muted">Soundarya Institute of Management and Science</p>  
                                                </div>
                                            </article>
              
                                 )
                          }
                     
                        else{
                            return ( <div className="col-md-3 col-xs-12 col-sm-6">
							
								</div>)

                            }
                
             
                           
            })
        }

        return(<div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix"><br/>
                    <h1 className="heading-title pull-left">Events</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Events</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                    <h3 className="title">All Events</h3>
                        <div className="news-wrapper col-md-8 col-sm-7">

                           {events}
                       
                        </div>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">  
                            

                        <section className="widget has-divider">
                           {/*  <h3 className="title">Latest Events</h3>
                              {events}  */}
                        </section>                                  
                        </aside>
                    </div>
                </div>
            </div>
        </div>)
    }
}