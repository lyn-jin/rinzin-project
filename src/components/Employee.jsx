import React from "react";

function Employee() {
  return (
    <div className="container">
      <div className="card p-5 my-5">
        <div className="card-header">
          <h2 className="text-center">Employee List</h2>
        </div>
        <div className="table-responsive">
          <table className="table table-hover my-4 py-3">
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Dprt</th>
                <th scope="col">Leave reason</th>
                <th scope="col">From Date</th>
                <th scope="col">To Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Kelzang Wangmo</td>
                <td>Drpt 1</td>
                <td>Sick-Self</td>
                <td>11/02/2021</td>
                <td>13/02/2021</td>
                <td className="text-right">
                  <button className="btn btn-success mr-2">Approve</button>
                  <button className="btn btn-danger">Decline</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Dorji Dawa</td>
                <td>Drpt 02</td>
                <td>Sick-Self</td>
                <td>23/02/2021</td>
                <td>24/02/2021</td>
                <td className="text-right">
                  <button className="btn btn-success mr-2">Approve</button>
                  <button className="btn btn-danger">Decline</button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Pema Dorji</td>
                <td>Drpt 3</td>
                <td>Paternity</td>
                <td>28/02/2021</td>
                <td>10/03/2021</td>
                <td className="text-right">
                  <button className="btn btn-success mr-2">Approve</button>
                  <button className="btn btn-danger">Decline</button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Tshering Dorji</td>
                <td>Drpt 1</td>
                <td>Sick - Self</td>
                <td>08/03/2021</td>
                <td>10/03/2021</td>
                <td className="text-right">
                  <button className="btn btn-success mr-2">Approve</button>
                  <button className="btn btn-danger">Decline</button>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Dechen Dorji</td>
                <td>Drpt 4</td>
                <td>Sick - Family</td>
                <td>06/03/2021</td>
                <td>10/03/2021</td>
                <td className="text-right">
                  <button className="btn btn-success mr-2">Approve</button>
                  <button className="btn btn-danger">Decline</button>
                </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Dechen Dema</td>
                <td>Drpt 1</td>
                <td>Maternity</td>
                <td>15/03/2021</td>
                <td>15/07/2021</td>
                <td className="text-right">
                  <button className="btn btn-success mr-2">Approve</button>
                  <button className="btn btn-danger">Decline</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Employee;
