import React from 'react'
import { useAppSelector } from '../redux/hooks';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';

interface PropsType {
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({setShowCart}:PropsType) => {

    const cartCount = useAppSelector((state) => state.cartReducer.length)

  return (
    <div className='pt-4 bg-white top-0 sticky'>
        <div className='container'>
            <div className="flex justify-between items-center">
            <img className="size-20 rounded-lg" src="/bingung.jpg" alt="logo" />
            <h2 className="text-[20px] font-semibold">AhmadDiaz</h2>
                <div className='lg:flex hidden w-full max-w-[500px]'>
                    <input type="text" className='border-2 border-blue-600 px-6 py-2 w-full' placeholder='seacrh for product...' />
                    <div className='bg-blue-500 text-white text-[26px] grid place-items-center px-4'>
                    <BsSearch />
                </div>
                </div>

            <div className='flex gap-4 md:gap-8 items-center'>
                <div className='md:flex hidden gap-3'>
                    <div className='rounded-full border-2 border-gray-300 text-gray-500 text-[32px] w-[50px] h-[50px] grid place-items-center'>
                        <AiOutlineUser />
                    </div>
            <div>
                <p className='text-lg text-gray-500'>hello sign in</p>
                <p className='font-medium'>your profile</p>
            </div>
            </div>

            <div className='text-gray-500 text-[32px] relative cursor-pointer' onClick={() => setShowCart(true)}>
                <AiOutlineShoppingCart />
            <div className='text-white top-[-15px] right-[-10px] bg-red-600 2-[25px] h-[25px]w-[25px] grid text-[14px] place-items-center rounded-full'>
                {cartCount}
            </div>
            </div>
            </div>

            </div>

            <div className='border-b border-gray-300 pt-4'></div>
        </div>
    </div>
  )
}

export default Navbar