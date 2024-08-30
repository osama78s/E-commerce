import React from 'react'
import { Sidebar } from "flowbite-react";

const Colors = () => {
  return (
    <div className='border-b-2 border-main'>
    <Sidebar aria-label="Sidebar with multi-level dropdown example" className="font-primary">
        <Sidebar.Items className="custom-sidebar-items">
            <Sidebar.ItemGroup>
                <Sidebar.Collapse label="Colors" className='custom-sidebar-collapse font-primary font-semibold text-[22px] tracking-wide !p-0 text-activeDark'>
                    <Sidebar.Item className='!p-0'>
                        <div className='flex gap-4 flex-wrap justify-center mt-4'>
                            <span className="w-[25px] h-[26px] inline-block rounded-full bg-[#00C12B] cursor-pointer z-[100]" />
                            <span className="w-[26px] h-[26px] rounded-full bg-[#F50606] cursor-pointer z-[100]" />
                            <span className="w-[26px] h-[26px] rounded-full bg-[#F5DD06] cursor-pointer z-[100]" />
                            <span className="w-[26px] h-[26px] rounded-full bg-[#F57906] cursor-pointer z-[100]" />
                            <span className="w-[26px] h-[26px] rounded-full bg-[#06CAF5] cursor-pointer z-[100]" />
                            <span className="w-[26px] h-[26px] rounded-full bg-[#063AF5] cursor-pointer z-[100]" />
                            <span className="w-[26px] h-[26px] rounded-full bg-[#7D06F5] cursor-pointer z-[100]" />
                            <span className="w-[26px] h-[26px] rounded-full bg-[#7D06F5] cursor-pointer z-[100]" />
                            <span className="w-[26px] h-[26px] rounded-full bg-[#eee] cursor-pointer z-[100]" />
                            <span className="w-[26px] h-[26px] rounded-full bg-dark cursor-pointer z-[100]" />
                        </div>
                    </Sidebar.Item>
                </Sidebar.Collapse>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
</div>
  )
}

export default Colors