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
              <NavTop></NavTop>
              <div className="content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card">
                        <div className="header">
                          <h4 className="title">Striped Table with Hover</h4>
                          <p className="category">Here is a subtitle for this table</p>
                        </div>
                        <Table3/>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="card card-plain">
                        <div className="header">
                          <h4 className="title">Table on Plain Background</h4>
                          <p className="category">Here is a subtitle for this table</p>
                        </div>
                        <Table2/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer/>
            </div>
       </div>
     );
  }
}

class Table2 extends React.Component {
  render() {
    return (
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
    )
  }
}

class Table3 extends React.Component {
  render() {
    return (
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
    )
  }
}


export default Table;
