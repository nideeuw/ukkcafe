import React from 'react'
import Sidebar from '../../Common/Sidebar'
import image from "../../../assets/image19.png";

const ContainerTable = () => {
  return (
    <div className='flex'>
      <Sidebar />

      <div className='container my-12 px-5'>
        <label className='font semibold'>
          Table A1
        </label>
        <img src={image} alt="" srcset="" />

        <div className='grid grid-cols-12 gap-2'>
          <div style={{ width: `60px`, height: `60px` }} className='bg-gray-900 text-gray-50 rounded'>A1</div>
          <div style={{ width: `60px`, height: `60px` }} className='bg-gray-900 text-gray-50 rounded'>A1</div>
          <div style={{ width: `60px`, height: `60px` }} className='bg-gray-900 text-gray-50 rounded'>A1</div>
          <div style={{ width: `60px`, height: `60px` }} className='bg-gray-900 text-gray-50 rounded'>A1</div>
          <div style={{ width: `60px`, height: `60px` }} className='bg-gray-900 text-gray-50 rounded'>A1</div>
          <div style={{ width: `60px`, height: `60px` }} className='bg-gray-900 text-gray-50 rounded'>A1</div>

        </div>
      </div>
    </div>
  )
}

export default ContainerTable