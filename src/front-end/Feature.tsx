import React from 'react'
import FeatureCard from './FeatureCard'
import { TbTruckDelivery, TbDiscount } from 'react-icons/tb'
import { RiRefund2Fill } from 'react-icons/ri'
import { MdSupportAgent } from 'react-icons/md'
import { IconBase } from 'react-icons'

const data = [
    {
        Icon:<TbTruckDelivery className='text-4xl'/>,
        title: 'Free Delivery',
        desc: 'Free delivery on all orders',
    },
    {
        Icon:<TbDiscount className='text-4xl'/>,
        title: 'Discount',
        desc: 'Get 10% off on all orders',
    },
    {
        Icon:<RiRefund2Fill className='text-4xl'/>,
        title: 'Refund',
        desc: 'Get your refund within 24 hours',
    },
    {
        Icon:<MdSupportAgent className='text-4xl'/>,
        title: 'Support',
        desc: '24/7 customer support',
    }
]

const Feature = () => {
  return (
    <div className='container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8'>
        {data.map((item) => (
            <FeatureCard key={item.title} icon={item.Icon} title={item.title} desc={item.desc}/>
        ))}
    </div>
  )
}

export default Feature