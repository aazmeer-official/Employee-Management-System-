import React from 'react'

const AllTask = () => {
  return (
    <div id='tasks-col' className='p-5 mt-5 backdrop-brightness-50 rounded-2xl overflow-auto h-80 flex flex-col justify-between'>
        <h2 className='text-2xl'>Active Tasks: </h2>
        <div className='bg-red-400 py-2 px-4 rounded-2xl flex justify-between mb-3'>
            <h2>Aazmeer</h2>
            <h3>Make UI</h3>
            <h5>Status : </h5>
        </div>
    </div>
  )
}

export default AllTask