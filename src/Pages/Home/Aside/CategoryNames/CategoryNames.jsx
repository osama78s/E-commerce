import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import '../Aside.css';

const CategoryNames = () => {

    const [isChecked5, setIsChecked5] = useState(false);
    const [isChecked6, setIsChecked6] = useState(false);
    const [isChecked7, setIsChecked7] = useState(false);
    const [isChecked8, setIsChecked8] = useState(false);
    const [isChecked9, setIsChecked9] = useState(false);

  return (
    <div className='border-b-2 border-main font-secondry text-gray py-4'>
    <div className={`${isChecked5 ? 'text-dark' : 'text-gray'} hover:text-dark transition-all duration-300 px-5 pb-3`}>
        <label
            className="flex items-center justify-between custom-checkbox pr-2"
        >
            <div className="text-[19px]">T-Shitrs</div>
            <input
                type="checkbox"
                checked={isChecked5}
                onChange={() => setIsChecked5(!isChecked5)}
            />
            <span className="checkmark">
                {isChecked5 && <FaCheck color="white" size={11} />}
            </span>
        </label>
    </div>

    <div className={`${isChecked6 ? 'text-dark' : 'text-gray'} hover:text-dark transition-all duration-300 px-5 pb-3`}>
        <label
            className="flex items-center justify-between custom-checkbox pr-2"
        >
            <div className="text-[19px]">Shorts</div>
            <input
                type="checkbox"
                checked={isChecked6}
                onChange={() => setIsChecked6(!isChecked6)}
            />
            <span className="checkmark">
                {isChecked6 && <FaCheck color="white" size={11} />}
            </span>
        </label>
    </div>

    <div className={`${isChecked7 ? 'text-dark' : 'text-gray'} hover:text-dark transition-all duration-300 px-5 pb-3`}>
        <label
            className="flex items-center justify-between custom-checkbox pr-2"
        >
            <div className="text-[19px]">Shirts</div>
            <input
                type="checkbox"
                checked={isChecked7}
                onChange={() => setIsChecked7(!isChecked7)}
            />
            <span className="checkmark">
                {isChecked7 && <FaCheck color="white" size={11} />}
            </span>
        </label>
    </div>


    <div className={`${isChecked8 ? 'text-dark' : 'text-gray'} hover:text-dark transition-all duration-300 px-5 pb-3`}>
        <label
            className="flex items-center justify-between custom-checkbox pr-2"
        >
            <div className="text-[19px]">Hoodie</div>
            <input
                type="checkbox"
                checked={isChecked8}
                onChange={() => setIsChecked8(!isChecked8)}
            />
            <span className="checkmark">
                {isChecked8 && <FaCheck color="white" size={11} />}
            </span>
        </label>
    </div>

    <div className={`${isChecked9 ? 'text-dark' : 'text-gray'} hover:text-dark transition-all duration-300 px-5`}>
        <label
            className="flex items-center justify-between custom-checkbox pr-2"
        >
            <div className="text-[19px]">Jeans</div>
            <input
                type="checkbox"
                checked={isChecked9}
                onChange={() => setIsChecked9(!isChecked9)}
            />
            <span className="checkmark">
                {isChecked9 && <FaCheck color="white" size={11} />}
            </span>
        </label>
    </div>

</div>
  )
}

export default CategoryNames