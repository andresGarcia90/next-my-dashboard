'use client';

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '@/app/store/counterSlice';
import { RootState } from '@/app/store';


export const CartCounter = () => {

  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.counter.value);

  return (
    <>
      <span className="text-9xl"> {value} </span>

      <div className="flex">
        <button
          onClick={() => dispatch(increment())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          +1
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          -1
        </button>
      </div>
    </>
  )
}
