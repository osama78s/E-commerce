import React from 'react'
import { Sidebar } from "flowbite-react";

const Size = () => {
  return (
    <div className='border-b-2 border-main'>
    <Sidebar aria-label="Sidebar with multi-level dropdown example" className="font-primary">
        <Sidebar.Items className="custom-sidebar-items">
            <Sidebar.ItemGroup>
                <Sidebar.Collapse label="Size" className='font-secondry font-semibold text-[22px] tracking-wide !p-0 text-activeDark'>
                    <Sidebar.Item className='!p-0'>
                        <div className='flex gap-4 flex-wrap mt-4'>
                            <button className='rounded-full hover:bg-blue hover:text-white transition-all duration-300 p-[10px] text-gray2 border border-[#0D4056] '>XX-Small</button>
                            <button className='rounded-full hover:bg-blue hover:text-white transition-all duration-300 p-[10px] text-gray2 border border-[#0D4056] '>X-Small</button>
                            <button className='rounded-full hover:bg-blue hover:text-white transition-all duration-300 p-[10px] text-gray2 border border-[#0D4056] '>Small</button>
                            <button className='rounded-full hover:bg-blue hover:text-white transition-all duration-300 p-[10px] text-gray2 border border-[#0D4056] '>Meduim</button>
                            <button className='rounded-full hover:bg-blue hover:text-white transition-all duration-300 p-[10px] text-gray2 border border-[#0D4056] '>Large</button>
                            <button className='rounded-full hover:bg-blue hover:text-white transition-all duration-300 p-[10px] text-gray2 border border-[#0D4056] '>X-Large</button>
                            <button className='rounded-full hover:bg-blue hover:text-white transition-all duration-300 p-[10px] text-gray2 border border-[#0D4056] '>XX-Large</button>
                            <button className='rounded-full hover:bg-blue hover:text-white transition-all duration-300 p-[10px] text-gray2 border border-[#0D4056] '>3xl-Large</button>
                            <button className='rounded-full hover:bg-blue hover:text-white transition-all duration-300 p-[10px] text-gray2 border border-[#0D4056] '>4x-Large</button>
                        </div>
                    </Sidebar.Item>
                </Sidebar.Collapse>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
</div>
  )
}

export default Size