import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import './index.scss'

export default function Header(){
  return (
    <header>
      <Sidebar />
      <Navbar />
    </header>
  )
}