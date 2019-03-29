import React from 'react';

class Nav extends React.Component {
   render() {
      return (
        <div className="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">
                {/*

                Tip 1: you can change the color of the sidebar using: data-color="blue | azure | green | orange | red | purple"
                Tip 2: you can also add an image using data-image tag

            */}
                <div className="sidebar-wrapper">
                  <div className="logo">
                    <a href="http://www.anudeepgi.com" className="simple-text">
                      Anudeep
                    </a>
                  </div>
                  <ul className="nav">
                    <li className="active">
                      <a href="dashboard">
                        <i className="pe-7s-graph" />
                        <p>Dashboard</p>
                      </a>
                    </li>
                    <li>
                      <a href="user">
                        <i className="pe-7s-user" />
                        <p>User Profile</p>
                      </a>
                    </li>
                    <li>
                      <a href="table">
                        <i className="pe-7s-note2" />
                        <p>Table List</p>
                      </a>
                    </li>

                    <li>
                      <a href="icons">
                        <i className="pe-7s-science" />
                        <p>Icons</p>
                      </a>
                    </li>

                    <li>
                      <a href="notifications">
                        <i className="pe-7s-bell" />
                        <p>Notifications</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
      );
   }
}

export default Nav;
