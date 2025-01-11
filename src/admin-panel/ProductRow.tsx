import { IProduct } from '@/app/admin/dashboard/page';
import { Dispatch, SetStateAction } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { setProduct } from '../redux/features/productSlice';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { setLoading } from '../redux/features/loadingSlice';
import axios from 'axios';
import { makeToast } from '../utils/helper';
interface PropsType {
    srNo: number;
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
    setUpdateTable: Dispatch<SetStateAction<boolean>>;
    product: IProduct;
}

const ProductRow = ({srNo, setOpenPopup, setUpdateTable, product}:PropsType) => {

    const dispatch = useAppDispatch();

    const onEdit = () => {
        dispatch(setProduct(product));
        setOpenPopup(true);
    }

    const onDelete = () => {
        dispatch(setLoading(true));

        const payload = {
            fileKey: product.fileKey
        }
        
        axios.delete("/api/uploadthing", {data: payload}).then((res) => {
            console.log(res);

        axios.delete(`/api/delete_product/${product._id}`, {data: payload}).then((res) => {
            console.log(res);
            makeToast("Product deleted successfully");
            setUpdateTable((prevState) => !prevState);

        }).catch((err) => {
            makeToast("Something went wrong dihandle di delete");
            console.log(err);
        }).finally(() => dispatch(setLoading(false)));

        }).catch((err) => console.log(err))
    }

  return (
    <tr>
        <td>
            <div>{srNo}</div>
        </td>
        <td>
            <div>{product.name}</div>
        </td>
        <td>
            <div>$ {product.price}</div>
        </td>
        <td className='py-2'>
            <img src={product.imgSrc} alt={product.name} className='w-10 h-10'/>
        </td>
        <td>
            <div className='text-2xl flex items-center gap-2 text-gray-600'>
               <CiEdit onClick={onEdit} className='cursor-pointer hover:text-black'/>
               <RiDeleteBin5Line onClick={onDelete} className='cursor-pointer hover:text-red-600'/>
            </div>
        </td>   
    </tr>
  )
}

export default ProductRow