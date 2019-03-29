import React from 'react';
import Nav from '../nav';
import NavTop from '../navtop';
import Footer from '../footer/footer'


class Table extends React.Component {
  render() {
     return (
       <div >
         <Nav></Nav>
         <Table1></Table1>
       </div>
     );
  }
}


class Table1 extends React.Component {
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
                    <a className="navbar-brand" href="#">Table List</a>
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
                          <h4 className="title">Striped Table with Hover</h4>
                          <p className="category">Here is a subtitle for this table</p>
                        </div>
                        <div className="content table-responsive table-full-width">
                          <table className="table table-hover table-striped">
                            <thead>
                              <tr><th>ID</th>
                                <th>Name</th>
                                <th>Salary</th>
                                <th>Country</th>
                                <th>City</th>
                              </tr></thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Dakota Rice</td>
                                <td>$36,738</td>
                                <td>Niger</td>
                                <td>Oud-Turnhout</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Minerva Hooper</td>
                                <td>$23,789</td>
                                <td>Curaçao</td>
                                <td>Sinaai-Waas</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Sage Rodriguez</td>
                                <td>$56,142</td>
                                <td>Netherlands</td>
                                <td>Baileux</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Philip Chaney</td>
                                <td>$38,735</td>
                                <td>Korea, South</td>
                                <td>Overland Park</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Doris Greene</td>
                                <td>$63,542</td>
                                <td>Malawi</td>
                                <td>Feldkirchen in Kärnten</td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>Mason Porter</td>
                                <td>$78,615</td>
                                <td>Chile</td>
                                <td>Gloucester</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="card card-plain">
                        <div className="header">
                          <h4 className="title">Table on Plain Background</h4>
                          <p className="category">Here is a subtitle for this table</p>
                        </div>
                        <div className="content table-responsive table-full-width">
                          <table className="table table-hover">
                            <thead>
                              <tr><th>ID</th>
                                <th>Name</th>
                                <th>Salary</th>
                                <th>Country</th>
                                <th>City</th>
                              </tr></thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Dakota Rice</td>
                                <td>$36,738</td>
                                <td>Niger</td>
                                <td>Oud-Turnhout</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Minerva Hooper</td>
                                <td>$23,789</td>
                                <td>Curaçao</td>
                                <td>Sinaai-Waas</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Sage Rodriguez</td>
                                <td>$56,142</td>
                                <td>Netherlands</td>
                                <td>Baileux</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Philip Chaney</td>
                                <td>$38,735</td>
                                <td>Korea, South</td>
                                <td>Overland Park</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Doris Greene</td>
                                <td>$63,542</td>
                                <td>Malawi</td>
                                <td>Feldkirchen in Kärnten</td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>Mason Porter</td>
                                <td>$78,615</td>
                                <td>Chile</td>
                                <td>Gloucester</td>
                              </tr>
                            </tbody>
                          </table>
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

export default Table;
