import React from 'react'
import styles from '../styles/sidebar/sidebar.module.scss'
import SidebarList from './SidebarList'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.covidtracker}>
        Covid 19 Tracker
      </div>
      <SidebarList />
    </div>
  )
}

export default Sidebar
