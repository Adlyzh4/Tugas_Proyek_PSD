"use client"
import React from 'react'
import { useAppDispatch } from '../redux/hooks';
import axios from 'axios';
import { setLoading } from '../redux/features/loadingSlice';
import { makeToast } from '../utils/helper';
// import { UploadButton } from '@uploadthing/react';
import{ UploadButton } from '../utils/uploadthing';

interface IPayload {
    imgSrc: null | string;
    fileKey: null | string;
    name: string;
    price: string;
    category: string;
}

const ProductForm = () => {

    const[payload, setPayload] = React.useState<IPayload>({
        imgSrc: null,
        fileKey: null,
        name: "",
        price: "",
        category: "",
    })

    const dispatch = useAppDispatch()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(setLoading(true))
        axios.post("/api/add_product", payload).then((res) => {
            makeToast("Product added successfully")
            setPayload({
                imgSrc: null,
                fileKey: null,
                name: "",
                price: "",
                category: "",
            })
        }).catch((err) => {
            makeToast("Something went wrong dihandle")
            console.log(err)
        }).finally(() => dispatch(setLoading(false)))
    }

  return (
    <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <img alt="productimage" className='max-h-[200px] w-auto object-contain rounded-md' src={payload.imgSrc ? payload.imgSrc : "/bingung.jpg"} width={800} height={500} />

        <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
            setPayload({ ...payload,
                 imgSrc: res[0].url,
                 fileKey: res[0].key });
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

        {/* Product Name */}
        <div>
        <label htmlFor="" className='block ml-1'>product name</label>
        <input
            type="text"
            placeholder="Product Name"
            className="border rounded px-4 py-2 w-full bg-gray-300"
            value={payload.name}
            onChange={(e) => setPayload({ ...payload, name: e.target.value })}
            required
        />
        </div>

        {/* Product Price */}
        <div>
        <label htmlFor="" className='block ml-1'>product price</label>
        <input
            type="number"
            placeholder="Product Price"
            className="border rounded px-4 py-2 w-full bg-gray-300"
            value={payload.price}
            onChange={(e) => setPayload({ ...payload, price: e.target.value })}
            required
        />
        </div>

        {/* Product Category */}
        <div>
        <label htmlFor="" className='block ml-1'>product category</label>
        <input
            type="text"
            placeholder="Product Category"
            className="border rounded px-4 py-2 w-full bg-gray-300"
            value={payload.category}
            onChange={(e) => setPayload({ ...payload, category: e.target.value })}
            required
        />
        </div>

        {/* Submit Button */}
        <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
        >
            Add Product
        </button>
    </form>
  )
}

export default ProductForm