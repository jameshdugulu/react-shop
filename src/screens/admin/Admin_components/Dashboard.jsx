import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell,
  LineChart, Line
} from "recharts";
import styles from "./Dashboard.module.css";

export function Dashboard() {

  // Updated Bar Graph (Customers, Purchases, Products)
  const barData = [
    { name: "Jan", Customers: 400, Purchases: 240, Products: 100 },
    { name: "Feb", Customers: 300, Purchases: 139, Products: 150 },
    { name: "Mar", Customers: 200, Purchases: 980, Products: 200 },
    { name: "Apr", Customers: 278, Purchases: 390, Products: 180 },
  ];

  // Pie Chart
  const pieData = [
    { name: "In Stock", value: 400 },
    { name: "Out Stock", value: 150 }
  ];

  const COLORS = ["#0088FE", "#FF8042"];

  // Line Chart (Monthly Sales)
  const lineData = [
    { month: "Jan", Sales: 4000 },
    { month: "Feb", Sales: 3000 },
    { month: "Mar", Sales: 5000 },
    { month: "Apr", Sales: 2500 },
    { month: "May", Sales: 6000 },
  ];

  // Horizontal Bar Graph (Sum Purchase + Price)
  const horizontalData = [
  { name: "iPhone 15", price: 999 },
  { name: "Samsung S23", price: 899 },
  { name: "MacBook Pro", price: 1999 },
  { name: "AirPods Pro", price: 249 },
  { name: "Smart Watch", price: 349 }
];

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>

      <div className={styles.chartWrapper}>

        {/* ---------- Bar Graph Updated ---------- */}
        <div className={styles.chartBox}>
          <h3>Customers, Purchases & Products</h3>
          <BarChart width={550} height={300} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Customers" fill="#8884d8" />
            <Bar dataKey="Purchases" fill="#82ca9d" />
            <Bar dataKey="Products" fill="#ffc658" />
          </BarChart>
        </div>

        {/* ---------- Pie Chart ---------- */}
        <div className={styles.chartBox}>
          <h3>Stock Status</h3>
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
              dataKey="value"
            >
              {pieData.map((entry, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* ---------- Line Chart ---------- */}
        <div className={styles.chartBox}>
          <h3>Monthly Sales</h3>
          <LineChart width={600} height={300} data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Sales" stroke="#8884d8" />
          </LineChart>
        </div>

      {/* ---------- Horizontal Bar Graph ---------- */}
      <div className={styles.chartBox}>
        <h3>Top 5 Products by Price</h3>
        <BarChart
          width={550}
          height={300}
          data={horizontalData}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" width={120} />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#82ca9d" />
        </BarChart>
      </div>


      </div>
    </div>
  );
}
