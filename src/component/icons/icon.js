import React from 'react';
import Nav from '../nav';
import NavTop from '../navtop';
import Footer from '../footer/footer'


class Icon extends React.Component {
  render() {
     return (
       <div >
         <Nav></Nav>
         <Icon1></Icon1>
       </div>
     );
  }
}


class Icon1 extends React.Component {
  render() {
     return (
       <div >
       <div className="main-panel">
             <nav className="navbar navbar-default navbar-fixed">
               <div className="container-fluid">
                 <div className="navbar-header">
                   <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                     <span className="sr-only">Toggle navigation</span>
                     <span className="icon-bar" />
                     <span className="icon-bar" />
                     <span className="icon-bar" />
                   </button>
                   <a className="navbar-brand" href="#">Icons</a>
                 </div>
                 <div className="collapse navbar-collapse">
                   <ul className="nav navbar-nav navbar-left">
                     <li>
                       <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                         <i className="fa fa-dashboard" />
                         <p className="hidden-lg hidden-md">Dashboard</p>
                       </a>
                     </li>
                     <li className="dropdown">
                       <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                         <i className="fa fa-globe" />
                         <b className="caret hidden-sm hidden-xs" />
                         <span className="notification hidden-sm hidden-xs">5</span>
                         <p className="hidden-lg hidden-md">
                           5 Notifications
                           <b className="caret" />
                         </p>
                       </a>
                       <ul className="dropdown-menu">
                         <li><a href="#">Notification 1</a></li>
                         <li><a href="#">Notification 2</a></li>
                         <li><a href="#">Notification 3</a></li>
                         <li><a href="#">Notification 4</a></li>
                         <li><a href="#">Another notification</a></li>
                       </ul>
                     </li>
                     <li>
                       <a href>
                         <i className="fa fa-search" />
                         <p className="hidden-lg hidden-md">Search</p>
                       </a>
                     </li>
                   </ul>
                   <ul className="nav navbar-nav navbar-right">
                     <li>
                       <a href>
                         <p>Account</p>
                       </a>
                     </li>
                     <li className="dropdown">
                       <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                         <p>
                           Dropdown
                           <b className="caret" />
                         </p>
                       </a>
                       <ul className="dropdown-menu">
                         <li><a href="#">Action</a></li>
                         <li><a href="#">Another action</a></li>
                         <li><a href="#">Something</a></li>
                         <li><a href="#">Another action</a></li>
                         <li><a href="#">Something</a></li>
                         <li className="divider" />
                         <li><a href="#">Separated link</a></li>
                       </ul>
                     </li>
                     <li>
                       <a href="#">
                         <p>Log out</p>
                       </a>
                     </li>
                     <li className="separator hidden-lg hidden-md" />
                   </ul>
                 </div>
               </div>
             </nav>
             <div className="content">
               <div className="container-fluid">
                 <div className="row">
                   <div className="col-md-12">
                     <div className="card">
                       <div className="header">
                         <h4 className="title">202 Awesome Stroke Icons</h4>
                         <p className="category">Handcrafted by our friends from <a target="_blank" href="http://themes-pixeden.com/font-demos/7-stroke/index.html">Pixeden</a></p>
                       </div>
                       <div className="content all-icons">
                         <div className="row">
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-album" />
                               <input type="text" defaultValue="pe-7s-album" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-arc" />
                               <input type="text" defaultValue="pe-7s-arc" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-back-2" />
                               <input type="text" defaultValue="pe-7s-back-2" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-bandaid" />
                               <input type="text" defaultValue="pe-7s-bandaid" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-car" />
                               <input type="text" defaultValue="pe-7s-car" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-diamond" />
                               <input type="text" defaultValue="pe-7s-diamond" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-door-lock" />
                               <input type="text" defaultValue="pe-7s-door-lock" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-eyedropper" />
                               <input type="text" defaultValue="pe-7s-eyedropper" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-female" />
                               <input type="text" defaultValue="pe-7s-female" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-gym" />
                               <input type="text" defaultValue="pe-7s-gym" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-hammer" />
                               <input type="text" defaultValue="pe-7s-hammer" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-headphones" />
                               <input type="text" defaultValue="pe-7s-headphones" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-helm" />
                               <input type="text" defaultValue="pe-7s-helm" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-hourglass" />
                               <input type="text" defaultValue="pe-7s-hourglass" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-leaf" />
                               <input type="text" defaultValue="pe-7s-leaf" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-magic-wand" />
                               <input type="text" defaultValue="pe-7s-magic-wand" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-male" />
                               <input type="text" defaultValue="pe-7s-male" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-map-2" />
                               <input type="text" defaultValue="pe-7s-map-2" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-next-2" />
                               <input type="text" defaultValue="pe-7s-next-2" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-paint-bucket" />
                               <input type="text" defaultValue="pe-7s-paint-bucket" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-pendrive" />
                               <input type="text" defaultValue="pe-7s-pendrive" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-photo" />
                               <input type="text" defaultValue="pe-7s-photo" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-piggy" />
                               <input type="text" defaultValue="pe-7s-piggy" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-plugin" />
                               <input type="text" defaultValue="pe-7s-plugin" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-refresh-2" />
                               <input type="text" defaultValue="pe-7s-refresh-2" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-rocket" />
                               <input type="text" defaultValue="pe-7s-rocket" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-settings" />
                               <input type="text" defaultValue="pe-7s-settings" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-shield" />
                               <input type="text" defaultValue="pe-7s-shield" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-smile" />
                               <input type="text" defaultValue="pe-7s-smile" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-usb" />
                               <input type="text" defaultValue="pe-7s-usb" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-vector" />
                               <input type="text" defaultValue="pe-7s-vector" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-wine" />
                               <input type="text" defaultValue="pe-7s-wine" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-cloud-upload" />
                               <input type="text" defaultValue="pe-7s-cloud-upload" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-cash" />
                               <input type="text" defaultValue="pe-7s-cash" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-close" />
                               <input type="text" defaultValue="pe-7s-close" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-bluetooth" />
                               <input type="text" defaultValue="pe-7s-bluetooth" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-cloud-download" />
                               <input type="text" defaultValue="pe-7s-cloud-download" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-way" />
                               <input type="text" defaultValue="pe-7s-way" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-close-circle" />
                               <input type="text" defaultValue="pe-7s-close-circle" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-id" />
                               <input type="text" defaultValue="pe-7s-id" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-angle-up" />
                               <input type="text" defaultValue="pe-7s-angle-up" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-wristwatch" />
                               <input type="text" defaultValue="pe-7s-wristwatch" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-angle-up-circle" />
                               <input type="text" defaultValue="pe-7s-angle-up-circle" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-world" />
                               <input type="text" defaultValue="pe-7s-world" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-angle-right" />
                               <input type="text" defaultValue="pe-7s-angle-right" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-volume" />
                               <input type="text" defaultValue="pe-7s-volume" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-angle-right-circle" />
                               <input type="text" defaultValue="pe-7s-angle-right-circle" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-users" />
                               <input type="text" defaultValue="pe-7s-users" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-angle-left" />
                               <input type="text" defaultValue="pe-7s-angle-left" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-user-female" />
                               <input type="text" defaultValue="pe-7s-user-female" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-angle-left-circle" />
                               <input type="text" defaultValue="pe-7s-angle-left-circle" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-up-arrow" />
                               <input type="text" defaultValue="pe-7s-up-arrow" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-angle-down" />
                               <input type="text" defaultValue="pe-7s-angle-down" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-switch" />
                               <input type="text" defaultValue="pe-7s-switch" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-angle-down-circle" />
                               <input type="text" defaultValue="pe-7s-angle-down-circle" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-scissors" />
                               <input type="text" defaultValue="pe-7s-scissors" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-wallet" />
                               <input type="text" defaultValue="pe-7s-wallet" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-safe" />
                               <input type="text" defaultValue="pe-7s-safe" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-volume2" />
                               <input type="text" defaultValue="pe-7s-volume2" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-volume1" />
                               <input type="text" defaultValue="pe-7s-volume1" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-voicemail" />
                               <input type="text" defaultValue="pe-7s-voicemail" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-video" />
                               <input type="text" defaultValue="pe-7s-video" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-user" />
                               <input type="text" defaultValue="pe-7s-user" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-upload" />
                               <input type="text" defaultValue="pe-7s-upload" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-unlock" />
                               <input type="text" defaultValue="pe-7s-unlock" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-umbrella" />
                               <input type="text" defaultValue="pe-7s-umbrella" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-trash" />
                               <input type="text" defaultValue="pe-7s-trash" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-tools" />
                               <input type="text" defaultValue="pe-7s-tools" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-timer" />
                               <input type="text" defaultValue="pe-7s-timer" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-ticket" />
                               <input type="text" defaultValue="pe-7s-ticket" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-target" />
                               <input type="text" defaultValue="pe-7s-target" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-sun" />
                               <input type="text" defaultValue="pe-7s-sun" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-study" />
                               <input type="text" defaultValue="pe-7s-study" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-stopwatch" />
                               <input type="text" defaultValue="pe-7s-stopwatch" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-star" />
                               <input type="text" defaultValue="pe-7s-star" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-speaker" />
                               <input type="text" defaultValue="pe-7s-speaker" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-signal" />
                               <input type="text" defaultValue="pe-7s-signal" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-shuffle" />
                               <input type="text" defaultValue="pe-7s-shuffle" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-shopbag" />
                               <input type="text" defaultValue="pe-7s-shopbag" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-share" />
                               <input type="text" defaultValue="pe-7s-share" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-server" />
                               <input type="text" defaultValue="pe-7s-server" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-search" />
                               <input type="text" defaultValue="pe-7s-search" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-film" />
                               <input type="text" defaultValue="pe-7s-film" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-science" />
                               <input type="text" defaultValue="pe-7s-science" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-disk" />
                               <input type="text" defaultValue="pe-7s-disk" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-ribbon" />
                               <input type="text" defaultValue="pe-7s-ribbon" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-repeat" />
                               <input type="text" defaultValue="pe-7s-repeat" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-refresh" />
                               <input type="text" defaultValue="pe-7s-refresh" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-add-user" />
                               <input type="text" defaultValue="pe-7s-add-user" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-refresh-cloud" />
                               <input type="text" defaultValue="pe-7s-refresh-cloud" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-paperclip" />
                               <input type="text" defaultValue="pe-7s-paperclip" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-radio" />
                               <input type="text" defaultValue="pe-7s-radio" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-note2" />
                               <input type="text" defaultValue="pe-7s-note2" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-print" />
                               <input type="text" defaultValue="pe-7s-print" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-network" />
                               <input type="text" defaultValue="pe-7s-network" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-prev" />
                               <input type="text" defaultValue="pe-7s-prev" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-mute" />
                               <input type="text" defaultValue="pe-7s-mute" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-power" />
                               <input type="text" defaultValue="pe-7s-power" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-medal" />
                               <input type="text" defaultValue="pe-7s-medal" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-portfolio" />
                               <input type="text" defaultValue="pe-7s-portfolio" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-like2" />
                               <input type="text" defaultValue="pe-7s-like2" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-plus" />
                               <input type="text" defaultValue="pe-7s-plus" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-left-arrow" />
                               <input type="text" defaultValue="pe-7s-left-arrow" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-play" />
                               <input type="text" defaultValue="pe-7s-play" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-key" />
                               <input type="text" defaultValue="pe-7s-key" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-plane" />
                               <input type="text" defaultValue="pe-7s-plane" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-joy" />
                               <input type="text" defaultValue="pe-7s-joy" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-photo-gallery" />
                               <input type="text" defaultValue="pe-7s-photo-gallery" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-pin" />
                               <input type="text" defaultValue="pe-7s-pin" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-phone" />
                               <input type="text" defaultValue="pe-7s-phone" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-plug" />
                               <input type="text" defaultValue="pe-7s-plug" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-pen" />
                               <input type="text" defaultValue="pe-7s-pen" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-right-arrow" />
                               <input type="text" defaultValue="pe-7s-right-arrow" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-paper-plane" />
                               <input type="text" defaultValue="pe-7s-paper-plane" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-delete-user" />
                               <input type="text" defaultValue="pe-7s-delete-user" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-paint" />
                               <input type="text" defaultValue="pe-7s-paint" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-bottom-arrow" />
                               <input type="text" defaultValue="pe-7s-bottom-arrow" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-notebook" />
                               <input type="text" defaultValue="pe-7s-notebook" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-note" />
                               <input type="text" defaultValue="pe-7s-note" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-next" />
                               <input type="text" defaultValue="pe-7s-next" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-news-paper" />
                               <input type="text" defaultValue="pe-7s-news-paper" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-musiclist" />
                               <input type="text" defaultValue="pe-7s-musiclist" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-music" />
                               <input type="text" defaultValue="pe-7s-music" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-mouse" />
                               <input type="text" defaultValue="pe-7s-mouse" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-more" />
                               <input type="text" defaultValue="pe-7s-more" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-moon" />
                               <input type="text" defaultValue="pe-7s-moon" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-monitor" />
                               <input type="text" defaultValue="pe-7s-monitor" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-micro" />
                               <input type="text" defaultValue="pe-7s-micro" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-menu" />
                               <input type="text" defaultValue="pe-7s-menu" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-map" />
                               <input type="text" defaultValue="pe-7s-map" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-map-marker" />
                               <input type="text" defaultValue="pe-7s-map-marker" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-mail" />
                               <input type="text" defaultValue="pe-7s-mail" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-mail-open" />
                               <input type="text" defaultValue="pe-7s-mail-open" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-mail-open-file" />
                               <input type="text" defaultValue="pe-7s-mail-open-file" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-magnet" />
                               <input type="text" defaultValue="pe-7s-magnet" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-loop" />
                               <input type="text" defaultValue="pe-7s-loop" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-look" />
                               <input type="text" defaultValue="pe-7s-look" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-lock" />
                               <input type="text" defaultValue="pe-7s-lock" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-lintern" />
                               <input type="text" defaultValue="pe-7s-lintern" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-link" />
                               <input type="text" defaultValue="pe-7s-link" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-like" />
                               <input type="text" defaultValue="pe-7s-like" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-light" />
                               <input type="text" defaultValue="pe-7s-light" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-less" />
                               <input type="text" defaultValue="pe-7s-less" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-keypad" />
                               <input type="text" defaultValue="pe-7s-keypad" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-junk" />
                               <input type="text" defaultValue="pe-7s-junk" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-info" />
                               <input type="text" defaultValue="pe-7s-info" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-home" />
                               <input type="text" defaultValue="pe-7s-home" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-help2" />
                               <input type="text" defaultValue="pe-7s-help2" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-help1" />
                               <input type="text" defaultValue="pe-7s-help1" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-graph3" />
                               <input type="text" defaultValue="pe-7s-graph3" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-graph2" />
                               <input type="text" defaultValue="pe-7s-graph2" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-graph1" />
                               <input type="text" defaultValue="pe-7s-graph1" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-graph" />
                               <input type="text" defaultValue="pe-7s-graph" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-global" />
                               <input type="text" defaultValue="pe-7s-global" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-gleam" />
                               <input type="text" defaultValue="pe-7s-gleam" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-glasses" />
                               <input type="text" defaultValue="pe-7s-glasses" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-gift" />
                               <input type="text" defaultValue="pe-7s-gift" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-folder" />
                               <input type="text" defaultValue="pe-7s-folder" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-flag" />
                               <input type="text" defaultValue="pe-7s-flag" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-filter" />
                               <input type="text" defaultValue="pe-7s-filter" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-file" />
                               <input type="text" defaultValue="pe-7s-file" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-expand1" />
                               <input type="text" defaultValue="pe-7s-expand1" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-exapnd2" />
                               <input type="text" defaultValue="pe-7s-exapnd2" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-edit" />
                               <input type="text" defaultValue="pe-7s-edit" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-drop" />
                               <input type="text" defaultValue="pe-7s-drop" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-drawer" />
                               <input type="text" defaultValue="pe-7s-drawer" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-download" />
                               <input type="text" defaultValue="pe-7s-download" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-display2" />
                               <input type="text" defaultValue="pe-7s-display2" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-display1" />
                               <input type="text" defaultValue="pe-7s-display1" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-diskette" />
                               <input type="text" defaultValue="pe-7s-diskette" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-date" />
                               <input type="text" defaultValue="pe-7s-date" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-cup" />
                               <input type="text" defaultValue="pe-7s-cup" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-culture" />
                               <input type="text" defaultValue="pe-7s-culture" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-crop" />
                               <input type="text" defaultValue="pe-7s-crop" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-credit" />
                               <input type="text" defaultValue="pe-7s-credit" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-copy-file" />
                               <input type="text" defaultValue="pe-7s-copy-file" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-config" />
                               <input type="text" defaultValue="pe-7s-config" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-compass" />
                               <input type="text" defaultValue="pe-7s-compass" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-comment" />
                               <input type="text" defaultValue="pe-7s-comment" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-coffee" />
                               <input type="text" defaultValue="pe-7s-coffee" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-cloud" />
                               <input type="text" defaultValue="pe-7s-cloud" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-clock" />
                               <input type="text" defaultValue="pe-7s-clock" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-check" />
                               <input type="text" defaultValue="pe-7s-check" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-chat" />
                               <input type="text" defaultValue="pe-7s-chat" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-cart" />
                               <input type="text" defaultValue="pe-7s-cart" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-camera" />
                               <input type="text" defaultValue="pe-7s-camera" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-call" />
                               <input type="text" defaultValue="pe-7s-call" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-calculator" />
                               <input type="text" defaultValue="pe-7s-calculator" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-browser" />
                               <input type="text" defaultValue="pe-7s-browser" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-box2" />
                               <input type="text" defaultValue="pe-7s-box2" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-box1" />
                               <input type="text" defaultValue="pe-7s-box1" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-bookmarks" />
                               <input type="text" defaultValue="pe-7s-bookmarks" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-bicycle" />
                               <input type="text" defaultValue="pe-7s-bicycle" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-bell" />
                               <input type="text" defaultValue="pe-7s-bell" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-battery" />
                               <input type="text" defaultValue="pe-7s-battery" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-ball" />
                               <input type="text" defaultValue="pe-7s-ball" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-back" />
                               <input type="text" defaultValue="pe-7s-back" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-attention" />
                               <input type="text" defaultValue="pe-7s-attention" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-anchor" />
                               <input type="text" defaultValue="pe-7s-anchor" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-albums" />
                               <input type="text" defaultValue="pe-7s-albums" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-alarm" />
                               <input type="text" defaultValue="pe-7s-alarm" />
                             </div>
                           </div>
                           <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                             <div className="font-icon-detail"><i className="pe-7s-airplay" />
                               <input type="text" defaultValue="pe-7s-airplay" />
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <footer className="footer">
               <div className="container-fluid">
                 <nav className="pull-left">
                   <ul>
                     <li>
                       <a href="#">
                         Home
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         Company
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         Portfolio
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         Blog
                       </a>
                     </li>
                   </ul>
                 </nav>
                 <p className="copyright pull-right">
                   ©  <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
                 </p>
               </div>
             </footer>
           </div>
       </div>
     );
  }
}

export default Icon;
