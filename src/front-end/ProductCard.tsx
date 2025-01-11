import React from 'react'
import { makeToast } from '../utils/helper';
import { addToCart } from '../redux/features/cartSlice';
import { AiFillStar, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai';
import { useAppDispatch } from '../redux/hooks';

interface PropsType {
    id: string;
    img: string;
    title: string;
    price: number;
    category: string;
}

const ProductCard = ({ id, img, category, title, price }: PropsType) => {

    const dispatch = useAppDispatch()

    const addProductToCart = () => {
        const payload = {
            id,
            img,
            title,
            price,
            quantity: 1
        }
        dispatch(addToCart(payload))
        makeToast("Product added to cart")
    }

  return (
    <div className='border border-gray-200'>
        <div className="text-center border-b border-gray-200">
            <img className='inline-block' src={img} alt={title} />
        </div>

        <div className='px-8 py-4'>
            <p className='text-gray-500 text-[14px] font-medium'>{category}</p>
            <h2 className="font-medium">{title}</h2>

            <div className="mt-4 flex text-[#FFB21D] items-center">
                <AiFillStar className=''/>
                <AiFillStar className=''/>
                <AiFillStar className=''/>
                <AiFillStar className=''/>
                <AiOutlineStar className=''/>
                <p className="text-gray-600 text-[14px] ml-2">(3 review)</p>
            </div>

            <div className="flex justify-between items-center mt-4">
                <h2 className=" font-medium text-accent text-xl">${price}</h2>
                <div className="flex gap-2 items-center bg-pink-500 text-white px-4 py-2 cursor-pointer hover:bg-accent" onClick={addProductToCart}>
                    <AiOutlineShoppingCart/> Add to cart
                </div>
            </div>

        </div>

    </div>
  )
}

export default ProductCard