import React, { Component } from 'react';
import Nav from '../nav';
import NavTop from '../navtop';
import Footer from '../footer/footer'
import ChartistGraph from 'react-chartist';
import  Task from '../task/task';


class Dashboard extends React.Component {
   render() {
      return (
        <div >
          <Nav></Nav>
          <Dashboard1></Dashboard1>
        </div>
      );
   }
}

class Dashboard1 extends React.Component {
   render() {

     var data = {
           series: [
            62,32,6
           ]
         };

      var type = 'Pie'


      return (
        <div className="main-panel">
              <NavTop></NavTop>
               <div className="content">
                 <div className="container-fluid">
                   <div className="row">
                     <div className="col-md-4">
                       <div className="card">
                         <div className="header">
                           <h4 className="title">Email Statistics</h4>
                           <p className="category">Last Campaign Performance</p>
                         </div>
                         <div className="content">

                           <ChartistGraph data={data} type={type} />

                           <div className="footer">
                             <div className="legend">
                               <i className="fa fa-circle text-info" /> Open
                               <i className="fa fa-circle text-danger" /> Bounce
                               <i className="fa fa-circle text-warning" /> Unsubscribe
                             </div>
                             <hr />
                             <div className="stats">
                               <i className="fa fa-clock-o" /> Campaign sent 2 days ago
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="col-md-8">
                       <div className="card">
                         <div className="header">
                           <h4 className="title">Users Behavior</h4>
                           <p className="category">24 Hours performance</p>
                         </div>
                         <div className="content">
                           <div id="chartHours" className="ct-chart" />
                           <div className="footer">
                             <div className="legend">
                               <i className="fa fa-circle text-info" /> Open
                               <i className="fa fa-circle text-danger" /> Click
                               <i className="fa fa-circle text-warning" /> Click Second Time
                             </div>
                             <hr />
                             <div className="stats">
                               <i className="fa fa-history" /> Updated 3 minutes ago
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="card ">
                         <div className="header">
                           <h4 className="title">2014 Sales</h4>
                           <p className="category">All products including Taxes</p>
                         </div>
                         <div className="content">
                           <div id="chartActivity" className="ct-chart" />



                           <div className="footer">
                             <div className="legend">
                               <i className="fa fa-circle text-info" /> Tesla Model S
                               <i className="fa fa-circle text-danger" /> BMW 5 Series
                             </div>
                             <hr />
                             <div className="stats">
                               <i className="fa fa-check" /> Data information certified
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="col-md-6">

                       <Task/>

                     </div>
                   </div>
                 </div>
               </div>
               <Footer></Footer>
             </div>
      );
   }
}




export default Dashboard;
