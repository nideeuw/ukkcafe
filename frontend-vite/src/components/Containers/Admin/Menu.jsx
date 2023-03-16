import React from 'react'
import Sidebar from '../../Common/Sidebar'

const ContainerMenu = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className="container mx-4">
        <div className='flex justify-center grid grid-cols-3 gap-4'>
          <section>
            <div className='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg'>
              <img className='w-full h-48 md:h-auto py-8 pl-2 object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg' src='https://www.superlive.id/storage/superadventure/2018/04/30/fd05198f6ea9.jpg' alt="" />
              <div className='p-6 flex flex-col justify-start'>
                <h5 className='text-gray-900 text-xl font-medium mb-2'>Espresso</h5>
                <p className='text-gray-700 text-base mb-4'>
                  this is a wider card with supporting
                </p>
                <p className='text-gray-600 text-xs'>Last update 3 minute ago
                </p>
                <button type='button' className='inline-block px-6 py-2.5 mb-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Add to Order</button>
              </div>
            </div>
          </section>
          <section>
            <div className='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg'>
              <img className='w-full h-96 md:h-auto py-8 pl-2 object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg' src='https://www.superlive.id/storage/superadventure/2018/04/30/fd05198f6ea9.jpg' alt="" />
              <div className='p-6 flex flex-col justify-start'>
                <h5 className='text-gray-900 text-xl font-medium mb-2'>Americano</h5>
                <p className='text-gray-700 text-base mb-4'>
                  this is a wider card with supporting
                </p>
                <p className='text-gray-600 text-xs'>Last update 3 minute ago
                </p>
                <div className='p-6 flex flex-col justify-end'>
                  <h5 className='text-gray-900 text-xl font-medium mb-2'>Mood</h5>
                </div>
                <button type='button' className='inline-block px-6 py-2.5 mb-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Button</button>
                <button type='button' className='inline-block px-6 py-2.5 mb-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Button</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ContainerMenu