"use client"
import React, { useEffect, useState } from 'react'
import "../../../app/globals.css"
import { useAppDispatch } from '@/src/redux/hooks';
import { setLoading } from '@/src/redux/features/loadingSlice';
import axios from 'axios';
import ProductRow from '@/src/admin-panel/ProductRow';
import Popup from '@/src/admin-panel/Popup';


export interface IProduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  price: string;
  category: string;
}

const Dashboard = () => {

  const [products, setProducts] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [UpdateTable, setUpdateTable] = useState(false);
  
  const dispatch= useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    axios
    .get("/api/get_products")
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err))
    .finally(() => dispatch(setLoading(false)))
  }, [UpdateTable]) 


  return (
    <div>
      <div className='bg-white h-[calc(100vh-96px)] rounded-lg p-4'>
        <h2 className='text-3xl'>All products</h2>

        <div className='mt-4 h-[calc(100vs-180px)] overflow-y-auto'>
          <table className='w-full'>
            <thead>
              <tr className='text-gray-500 border-t border-[#ececec]'>
                <th>SR.No</th>
                <th>name</th>
                <th>price</th>
                <th>picture</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((product: IProduct, index) => 
                  <ProductRow
                    key={product._id}
                    srNo={index + 1}
                    setOpenPopup={setOpenPopup}
                    setUpdateTable={setUpdateTable}
                    product={product}
                  />)
              }
            </tbody>
          </table>
        </div>
      </div>
      {openPopup && <Popup setOpenPopup={setOpenPopup} setUpdateTable={setUpdateTable} />}
    </div>
  )
}

export default Dashboard