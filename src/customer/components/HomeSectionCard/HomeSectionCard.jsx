import React from 'react'

const HomeSectionCard = () => {
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
            <div className='w-full h-[10rem]'>
                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1626865792236-1c2d8e7d6f9e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fHl1ZmZlZSUyMGNvZGV8ZW58MHx8fHwxNjM0NjA5NjQ5&ixlib=rb-1.2.1' />
            </div>
            <div className='flex flex-col items-center justify-center w-full h-[10rem]'>
                <div className='text-2xl font-bold'>Title</div>
                <div className='text-sm'>Description</div>
            </div>

        </div>
    )
}

export default HomeSectionCard