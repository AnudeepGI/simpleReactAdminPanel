import React, { Component } from 'react';

class Task extends React.Component {
   render() {
     return (

       <div className="card ">
         <div className="header">
           <h4 className="title">Tasks</h4>
           <p className="category">Backend development</p>
         </div>
         <div className="content">
           <div className="table-full-width">
             <table className="table">
               <tbody>
                 <tr>
                   <td>
                     <div className="checkbox">
                       <input id="checkbox1" type="checkbox" />
                       <label htmlFor="checkbox1" />
                     </div>
                   </td>
                   <td>Sign contract for "What are conference organizers afraid of?"</td>
                   <td className="td-actions text-right">
                     <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                       <i className="fa fa-edit" />
                     </button>
                     <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                       <i className="fa fa-times" />
                     </button>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <div className="checkbox">
                       <input id="checkbox2" type="checkbox" defaultChecked />
                       <label htmlFor="checkbox2" />
                     </div>
                   </td>
                   <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                   <td className="td-actions text-right">
                     <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                       <i className="fa fa-edit" />
                     </button>
                     <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                       <i className="fa fa-times" />
                     </button>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <div className="checkbox">
                       <input id="checkbox3" type="checkbox" />
                       <label htmlFor="checkbox3" />
                     </div>
                   </td>
                   <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                   </td>
                   <td className="td-actions text-right">
                     <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                       <i className="fa fa-edit" />
                     </button>
                     <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                       <i className="fa fa-times" />
                     </button>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <div className="checkbox">
                       <input id="checkbox4" type="checkbox" defaultChecked />
                       <label htmlFor="checkbox4" />
                     </div>
                   </td>
                   <td>Create 4 Invisible User Experiences you Never Knew About</td>
                   <td className="td-actions text-right">
                     <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                       <i className="fa fa-edit" />
                     </button>
                     <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                       <i className="fa fa-times" />
                     </button>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <div className="checkbox">
                       <input id="checkbox5" type="checkbox" />
                       <label htmlFor="checkbox5" />
                     </div>
                   </td>
                   <td>Read "Following makes Medium better"</td>
                   <td className="td-actions text-right">
                     <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                       <i className="fa fa-edit" />
                     </button>
                     <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                       <i className="fa fa-times" />
                     </button>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <div className="checkbox">
                       <input id="checkbox6" type="checkbox" defaultChecked />
                       <label htmlFor="checkbox6" />
                     </div>
                   </td>
                   <td>Unfollow 5 enemies from twitter</td>
                   <td className="td-actions text-right">
                     <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                       <i className="fa fa-edit" />
                     </button>
                     <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                       <i className="fa fa-times" />
                     </button>
                   </td>
                 </tr>
               </tbody>
             </table>
           </div>
           <div className="footer">
             <hr />
             <div className="stats">
               <i className="fa fa-history" /> Updated 3 minutes ago
             </div>
           </div>
         </div>
       </div>

     )
   }
}

export default Task;
