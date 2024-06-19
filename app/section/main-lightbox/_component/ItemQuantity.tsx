"use client"

import React, { useCallback, useState } from 'react'
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useCartContext } from '@/app/context/cart';

const ItemQuantity = () => {
    const [val, setVal] = useState<number>(0);
    const { state, addToCart }: any = useCartContext()

    const handleIncrement = () => {
        setVal(prev => prev += 1)


    }
    const handleDecrement = useCallback(() => {
        setVal((prev) => {
            if (prev !== 0) {
                return prev -= 1;
            }
            return 0
        })
    }, [val])

    const handleAdd = useCallback(() => {
        addToCart({
            quantity: val,
            price: 125,
            name: "Fall Limited Edition Sneakers",
        })
    }, [val])


    return (
        <div className="w-full lg:flex lg:items-center gap-3">
            <div className="bg-slate-50 p-3 flex flex-1 items-center justify-between">
                <Icon fontSize={22} color="orange" onClick={handleDecrement} icon="ic:baseline-minus" />
                <p className="font-semibold">{val}</p>
                <Icon className="cursor-pointer" fontSize={22} color="orange" onClick={handleIncrement} icon="ic:baseline-plus" />
            </div>

            <div className="flex-1">
                <button onClick={handleAdd} className={`btn bg-orange-400 flex items-center w-full ${val === 0 && 'btn-disabled'}`}>
                    <Image color="black" src="/images/icon-cart.svg" width={20} height={20} alt="user" />

                    Add to cart</button>
            </div>
        </div>
    )
}

export default ItemQuantity