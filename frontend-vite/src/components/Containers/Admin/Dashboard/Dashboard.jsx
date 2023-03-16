import React from 'react'
import Sidebar from '../../../Common/Sidebar'

const ContainerDashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <h1 className="px-4 text-gray-900 text-xl font-medium">Selamat Datang Admin</h1>
    </div>
  )
}

export default ContainerDashboard