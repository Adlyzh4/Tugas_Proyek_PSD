import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setLoading } from '../redux/features/loadingSlice';
import axios from 'axios';
import { makeToast } from '../utils/helper';
import { IoIosCloseCircleOutline } from 'react-icons/io';

interface PropsType {
    setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
    setUpdateTable: React.Dispatch<React.SetStateAction<boolean>>;
    }

const Popup = ({setOpenPopup, setUpdateTable}:PropsType) => {

    const productData = useAppSelector((state) => state.productReducer);
    const dispatch = useAppDispatch();

    const [inputData, setInputData] = React.useState({
        name: productData.name,
        price: productData.price,
        category: productData.category,
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setLoading(true));

        axios.put(`/api/edit_product/${productData._id}`, inputData).then((res) => {
            makeToast("Product updated successfully");
            setUpdateTable((prevState) => !prevState);
        }).catch((err) => {
            makeToast("Something went wrong");
        }).finally(() => {
            dispatch(setLoading(false));
            setOpenPopup(false);
        });
    };

  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-black grid place-items-center'>
        <div className='bg-white w-[700px] py-8 rounded-lg text-center relative'>
            <IoIosCloseCircleOutline
                onClick={() => setOpenPopup(false)}
                className='absolute top-0 right-0 text-2xl cursor-pointer hover:text-red-600'/>
            <h2 className='text-3xl mt-3'>Edit Product</h2>
            <form action="" className='mt-6 w-fit space-y-4 mx-auto' onSubmit={handleSubmit}>

                <input type="text" className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit' placeholder='name' value={inputData.name} onChange={(e) => setInputData({ ...inputData, name: e.target.value})}required />

                <input type="text" className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit' placeholder='category' value={inputData.category} onChange={(e) => setInputData({ ...inputData, category: e.target.value})}required />

                <input type="text" className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit' placeholder='price' value={inputData.price} onChange={(e) => setInputData({ ...inputData, price: e.target.value})}required />

                <div className='flex justify-end'>
                    <button className='bg-blue-500 block text-white px-8 py-2 rounded-lg self-center'> Save </button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Popup