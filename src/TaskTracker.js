import React from 'react';
import clipboard from './images/clipboard.png';
import add from './images/add.png';

const TaskTracker = () => {
  return (
    <div>
        <h1 className='text-4xl font-semibold'>Task Tracker App</h1>
        <div className='w-[90%] relative mx-auto my-5 p-6 h-auto flex flex-row border border-black rounded-md'>
            <img className='w-7 max-h-8 m-2 absolute' src={clipboard} alt='clipboard image' />
            <input type='text' className='w-full rounded-md h-12 pl-12 text-lg' placeholder='Type your tasks'/>
            <img className='w-7 max-h-8 mt-[10px] absolute right-8' src={add} />
        </div>
    </div>
  )
}

export default TaskTracker
