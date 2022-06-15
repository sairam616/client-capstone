import Navigation from "../Management/Navigation/Navigation";
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getSalesData } from "../../../server/admin-api";
import "../Styles/ManagementPagesStyles.css";

function SalesData() {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    console.log("inside use effect");
    getSalesData().then((sales) => {
      setSales(sales);
    });
  }, [setSales]);
  // const mt_3_style={
  // margin-left:"2rem"
  // };
  console.log("Sales data is:", sales);
  console.log("Sales data is:");
  return (
    <>
      <Navigation />
      <div className="sales-data-container">
        <h1 className="sales-data-heading">Sales Data</h1>
        <div className="mt-3 container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <Table responsive>
                <thead>
                  <tr>
                    <th colSpan={3}>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Items Purchased</th>
                    <th>Item No.</th>
                    <th>PaymentType</th>
                    <th>Total Cost</th>
                    <th>DateOfPurchase</th>
                  </tr>
                </thead>
                <tbody>
                  {sales.map((sale) => (
                    <tr key={sale["_id"]}>
                      <td colSpan={3}>{sale.firstname}</td>
                      <td>{sale.email}</td>
                      <td>{sale.phone}</td>
                      <td>{sale.itemPurchased}</td>
                      <td>{sale.itemNumber}</td>
                      <td>{sale.paymentType}</td>
                      <td>{sale.totalCost}$</td>
                      <td>{sale.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SalesData;
