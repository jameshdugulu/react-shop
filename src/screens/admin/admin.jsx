import React from "react";
import styles from "./admin.module.css";
import { Link, Outlet } from "react-router-dom";

function Admin() {
  return (
    <div className={styles.layout}>
      
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>Admin Panel</h2>

        <nav className={styles.nav}>
          <Link to="dashboard" className={styles.navItem}>Dashboard</Link>
          <Link to="products" className={styles.navItem}>Products</Link>
          <Link to="orders" className={styles.navItem}>Orders</Link>
          <Link to="users" className={styles.navItem}>Users</Link>
          <Link to="settings" className={styles.navItem}>Settings</Link>
        </nav>
      </aside>

      {/* Main Content (sub-router outlet) */}
      <main className={styles.content}>
        {/* <-- Outlet renders the child routes here -->
        All child routes will appear inside this main section */}
        <Outlet />
      </main>

    </div>
  );
}

export { Admin };
