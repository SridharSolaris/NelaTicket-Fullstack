import React from "react";
import { Link } from "react-router-dom";

function Bookings() {
  return (
    <>
      <div className="flex justify-between mb-2">
        <h3>Bookings</h3>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-sm" to="/portal/movies">
          Back
        </Link>
      </div>

      <table className="table-auto">
        <thead>
          <tr className="bg-primary">
            <th className="px-4 py-2">Booking ID</th>
            <th className="px-4 py-2">Customer ID</th>
            <th className="px-4 py-2">Movie ID</th>
            <th className="px-4 py-2">Theatre ID</th>
            <th className="px-4 py-2">Seats</th>
            <th className="px-4 py-2">Seats number</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Booking </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">Mark</td>
            <td className="border px-4 py-2">Otto</td>
            <td className="border px-4 py-2">@mdo</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Bookings;
