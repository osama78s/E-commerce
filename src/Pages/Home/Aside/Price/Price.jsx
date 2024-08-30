import React, { useState } from 'react'
import { Sidebar } from "flowbite-react";
import { FaCheck } from "react-icons/fa";
import '../Aside.css';

const Price = () => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    return (
        <div className='border-b-2 border-main'>
            <Sidebar aria-label="Sidebar with multi-level dropdown example" className="font-primary">
                <Sidebar.Items className="custom-sidebar-items">
                    <Sidebar.ItemGroup>
                        <Sidebar.Collapse label="Price" className='font-primary font-semibold text-[22px] tracking-wide !p-0 text-activeDark'>
                            {/* Checkbox 1 */}
                            <Sidebar.Item className={`${isChecked1 ? 'text-dark' : 'text-gray'} hover:text-dark transition-all duration-300 !pl-1 mt-2`}>
                                <label className="custom-checkbox">
                                    <input type="checkbox" checked={isChecked1} onChange={() => setIsChecked1(!isChecked1)} />
                                    <span className="checkmark">
                                        {isChecked1 && <FaCheck color="white" size={11} />}
                                    </span>
                                    $100.00 - $300.00
                                </label>
                            </Sidebar.Item>
                            {/* Checkbox 2 */}
                            <Sidebar.Item className={`${isChecked2 ? 'text-dark' : 'text-gray'} hover:text-dark transition-all duration-300 !pl-1 mt-2`}>
                                <label className="custom-checkbox">
                                    <input type="checkbox" checked={isChecked2} onChange={() => setIsChecked2(!isChecked2)} />
                                    <span className="checkmark">
                                        {isChecked2 && <FaCheck color="white" size={11} />}
                                    </span>
                                    $300.00 - $500.00
                                </label>
                            </Sidebar.Item>
                            {/* Checkbox 3 */}
                            <Sidebar.Item className={`${isChecked3 ? 'text-dark' : 'text-gray'} hover:text-dark transition-all duration-300 !pl-1 mt-2`}>
                                <label className="custom-checkbox">
                                    <input type="checkbox" checked={isChecked3} onChange={() => setIsChecked3(!isChecked3)} />
                                    <span className="checkmark">
                                        {isChecked3 && <FaCheck color="white" size={11} />}
                                    </span>
                                    $500.00 - $700.00
                                </label>
                            </Sidebar.Item>
                            {/* Checkbox 4 */}
                            <Sidebar.Item className={`${isChecked4 ? 'text-dark' : 'text-gray'} hover:text-dark transition-all duration-300 !pl-1 mt-2`}>
                                <label className="custom-checkbox">
                                    <input type="checkbox" checked={isChecked4} onChange={() => setIsChecked4(!isChecked4)} />
                                    <span className="checkmark">
                                        {isChecked4 && <FaCheck color="white" size={11} />}
                                    </span>
                                    $700.00 - $900.00
                                </label>
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}

export default Price