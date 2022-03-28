import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNav from './DashboardNav'

export default function DashboardHome() {
  return (
    <>
    <DashboardNav/>
        <Outlet/>
    </>
  )
}
