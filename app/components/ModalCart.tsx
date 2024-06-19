'use client'

import React, { useEffect, useRef } from 'react'
import { useCartContext } from '../context/cart'
import Image from 'next/image'

type ModalCartProps = {
    open: boolean,
    onClose: () => void
}

const ModalCart = ({ open, onClose }: ModalCartProps) => {
    const modalRef = useRef<any>(null)
    const { state }: any = useCartContext()

    // const { name, price, quantity } = state?.cart[0]
    // const total = state?.total

    useEffect(() => {
        if (open) {
            modalRef.current.showModal()
        }
    }, [open])


    return (
        <div>

            <dialog ref={modalRef} id="my_modal_2" className="modal">
                <div className={`modal-box space-y-5 absolute top-20 lg:static `}>
                    <div className="space-y-10">
                        <h3 className="font-bold text-lg">Cart</h3>

                        <div className="flex items-center space-x-3">
                            <div>
                                <Image alt="image" height={50} width={50} src="/images/image-product-1-thumbnail.jpg" />
                            </div>
                            <div>
                                <p>{state?.cart[0]?.name}</p>
                                <p>${state?.cart[0]?.price} x {state?.cart[0]?.quantity}  = <span className="font-bold">
                                {state?.total}</span></p>
                            </div>
                        </div>
                    </div>
                    <button  className={`btn bg-orange-400 flex items-center w-full`}>
                        <Image color="black" src="/images/icon-cart.svg" width={20} height={20} alt="user" />

                        Checkout</button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={onClose}>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default ModalCart