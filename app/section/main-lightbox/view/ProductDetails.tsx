import Image from 'next/image'
import React from 'react'
import { Icon } from '@iconify/react';
import ItemQuantity from '../_component/ItemQuantity';

const ProductDetails = () => {
    return (
        <div>
            <div className="space-y-5 p-5">
                <h6 className="uppercase text-gray-600 text-sm">Sneaker Company</h6>
                <h1 className="capitalize font-bold text-3xl">Fall Limited Edition Sneakers</h1>
                <p className="text-sm text-gray-500">These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div className="flex items-center justify-between lg:flex-col lg:items-start lg:space-y-3">
                    <div className="flex items-center space-x-3">
                        <span className="font-bold text-2xl text-black">$125.00</span>
                        <span className="bg-black text-white px-3 rounded-lg">50%</span>
                    </div>
                    <div>
                        <span className="line-through text-gray-600 font-semibold text-md">$250.00</span>
                    </div>
                </div>
                <div className="space-y-5">
                    {/* increment and decreemnt btn */}
                    <ItemQuantity/>
                   
                </div>
            </div>
        </div>
    )
}

export default ProductDetails