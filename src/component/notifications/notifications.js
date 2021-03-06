import React from 'react';
import Nav from '../nav';
import NavTop from '../navtop';
import Footer from '../footer/footer'


class Notification extends React.Component {
  render() {
     return (
       <div >
         <Nav></Nav>
         <Notification1></Notification1>
       </div>
     );
  }
}


class Notification1 extends React.Component {
  render() {
     return (
       <div >
       <div className="main-panel">
            <NavTop></NavTop>
             <div className="content">
               <div className="container-fluid">
                 <div className="card">
                   <div className="header">
                     <h4 className="title">Notifications</h4>
                     <p className="category">Handcrafted by our friend <a target="_blank" href="https://github.com/mouse0270">Robert McIntosh</a>. Please checkout the <a href="http://bootstrap-notify.remabledesigns.com/" target="_blank">full documentation.</a></p>
                   </div>
                   <div className="content">
                     <div className="row">
                       <div className="col-md-6">
                         <h5>Notifications Style</h5>
                         <div className="alert alert-info">
                           <span>This is a plain notification</span>
                         </div>
                         <div className="alert alert-info">
                           <button type="button" aria-hidden="true" className="close">×</button>
                           <span>This is a notification with close button.</span>
                         </div>
                         <div className="alert alert-info alert-with-icon" data-notify="container">
                           <button type="button" aria-hidden="true" className="close">×</button>
                           <span data-notify="icon" className="pe-7s-bell" />
                           <span data-notify="message">This is a notification with close button and icon.</span>
                         </div>
                         <div className="alert alert-info alert-with-icon" data-notify="container">
                           <button type="button" aria-hidden="true" className="close">×</button>
                           <span data-notify="icon" className="pe-7s-bell" />
                           <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                         </div>
                       </div>
                       <div className="col-md-6">
                         <h5>Notification states</h5>
                         <div className="alert alert-info">
                           <button type="button" aria-hidden="true" className="close">×</button>
                           <span><b> Info - </b> This is a regular notification made with ".alert-info"</span>
                         </div>
                         <div className="alert alert-success">
                           <button type="button" aria-hidden="true" className="close">×</button>
                           <span><b> Success - </b> This is a regular notification made with ".alert-success"</span>
                         </div>
                         <div className="alert alert-warning">
                           <button type="button" aria-hidden="true" className="close">×</button>
                           <span><b> Warning - </b> This is a regular notification made with ".alert-warning"</span>
                         </div>
                         <div className="alert alert-danger">
                           <button type="button" aria-hidden="true" className="close">×</button>
                           <span><b> Danger - </b> This is a regular notification made with ".alert-danger"</span>
                         </div>
                       </div>
                     </div>
                     <br />
                     <br />
                     <div className="places-buttons">
                       <div className="row">
                         <div className="col-md-6 col-md-offset-3 text-center">
                           <h5>Notifications Places
                             <p className="category">Click to view notifications</p>
                           </h5>
                         </div>
                       </div>
                       <div className="row">
                         <div className="col-md-2 col-md-offset-3">
                           <button className="btn btn-default btn-block" onclick="demo.showNotification('top','left')">Top Left</button>
                         </div>
                         <div className="col-md-2">
                           <button className="btn btn-default btn-block" onclick="demo.showNotification('top','center')">Top Center</button>
                         </div>
                         <div className="col-md-2">
                           <button className="btn btn-default btn-block" onclick="demo.showNotification('top','right')">Top Right</button>
                         </div>
                       </div>
                       <div className="row">
                         <div className="col-md-2 col-md-offset-3">
                           <button className="btn btn-default btn-block" onclick="demo.showNotification('bottom','left')">Bottom Left</button>
                         </div>
                         <div className="col-md-2">
                           <button className="btn btn-default btn-block" onclick="demo.showNotification('bottom','center')">Bottom Center</button>
                         </div>
                         <div className="col-md-2">
                           <button className="btn btn-default btn-block" onclick="demo.showNotification('bottom','right')">Bottom Right</button>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <Footer></Footer>
           </div>
       </div>
     );
  }
}

export default Notification;
