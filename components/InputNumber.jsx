import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import { useState, useCallback, useEffect } from "react";

function InputNumber({ value, minCount, maxCount, inputName }) {

    const [count, setCount] = useState(value || minCount)
    
         
    const _disabledDecrement = useCallback(() => {
        return (count === minCount) ? true : false
    },[count, minCount]);
    
    const _disabledIncrement = useCallback(() => {
        return (count === maxCount) ? true : false
    },[count, maxCount]);
    
    const _incrementCount = () => {
        const x = (count < maxCount) ? (1 + count) : maxCount;
        setCount(x)
    }

    const _decrementCount = () => {
        const x = (count > minCount) ? (count - 1) : minCount;
        setCount(x)
    }

    const _onNumberChange = (e) => {
        const value = e.target.value;
        const updateCount = Number((minCount <= value <= maxCount) ? value : count);
        setCount(updateCount)
        _disabledDecrement()
        _disabledIncrement()
    }

    return (
        <div className='flex w-full h-full items-center text-black max-w-[120px] space-x-3'>
            <button 
                className="input-number-button" 
                disabled={_disabledDecrement()} 
                onClick={_decrementCount}
            >
                <MinusSmIcon className="w-[65%]" />
            </button>
            <input 
                className='input-number-style'
                type='number' 
                min='1'
                max={maxCount}
                name={inputName}
                value={count}
                onChange={_onNumberChange}
            />
            <button 
                className="input-number-button" 
                disabled={_disabledIncrement()} 
                onClick={_incrementCount}
            >
                <PlusSmIcon className="w-[65%]" />
            </button>
        </div>
    ) 
}

export default InputNumber;