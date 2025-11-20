import React from "react";

 function Products() {
  return (
    <div className="p-6 flex flex-col gap-10">

      {/* TOP STATS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow p-6 text-center hover:-translate-y-1 transition">
          <h3 className="text-lg font-semibold">Total Products</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">320</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 text-center hover:-translate-y-1 transition">
          <h3 className="text-lg font-semibold">Total Purchases</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">1,842</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 text-center hover:-translate-y-1 transition">
          <h3 className="text-lg font-semibold">Revenue</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">$124,500</p>
        </div>
      </section>

         {/* PERFORMANCE SECTION */}
      <section>
        <h2 className="flex text-2xl font-bold mb-3 justify-center gap-10">Product Performance</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <p className="text-lg">Highest Purchased Product</p>
            <strong className="text-xl text-blue-600">Bluetooth Speaker</strong>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <p className="text-lg">Least Purchased Product</p>
            <strong className="text-xl text-red-600">USB Lamp</strong>
          </div>
        </div>
      </section>

      {/* RECENT PURCHASES */}
      <section>
        <h2 className="text-2xl font-bold mb-3">Recent Purchases</h2>

        <div className="overflow-x-auto bg-white rounded-2xl shadow">
          <table className="w-full min-w-[600px] border-collapse">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="p-4 font-semibold">Product</th>
                <th className="p-4 font-semibold">Price</th>
                <th className="p-4 font-semibold">Buyer</th>
                <th className="p-4 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Wireless Mouse</td>
                <td className="p-4">$25</td>
                <td className="p-4">John Doe</td>
                <td className="p-4">2025-11-19</td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Bluetooth Speaker</td>
                <td className="p-4">$80</td>
                <td className="p-4">Sarah Smith</td>
                <td className="p-4">2025-11-18</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="p-4">Gaming Keyboard</td>
                <td className="p-4">$65</td>
                <td className="p-4">Michael Lee</td>
                <td className="p-4">2025-11-17</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

   

    </div>
  );
}

export {Products}