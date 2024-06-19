"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useCartContext } from '../context/cart';
import ModalCart from './ModalCart';

const links = ['Collections', 'Men', 'Women', 'About', 'Contact'];

const Nav = () => {
    const {state}:any = useCartContext()
    const [cartOpen, setCartOpen] = useState(false)
    const [largeScreen, setLargeScreen] = useState(false)


    const openCart = useCallback(()=>{
        setCartOpen(true)
    },[])

    const closeModal = useCallback(()=>{
        setCartOpen(false)
    },[])

    const handleResize = () => {
        const w = window.innerWidth;
        if(w >= 800){
            setLargeScreen(true)
        }
    }

    useEffect(()=>{
        if(window.innerWidth >= 800){
            setLargeScreen(true)
        }
    },[])

    useEffect(()=>{
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])

    const MobileView = () => {
        return (
            <div className="drawer p-3">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex items-center  justify-between">
                    {/* Page content here */}

                    <div className="flex items-center">
                        <label htmlFor="my-drawer" className="drawer-button">
                            <Icon icon="mdi:hamburger-menu" fontSize={25} />
                        </label>
                        <a className="btn btn-ghost text-2xl font-bold">sneakers</a>
                    </div>
                    <div className="flex-none gap-5 flex items-center">
                        <div className="relative flex items-center">
                            {/* <Icon icon="mdi:cart" fontSize={22} /> */}
                            <Image onClick={openCart} src="/images/icon-cart.svg" width={20} height={20} alt="user"/>

                            {state?.cart?.length !== 0 && <div className="badge badge-secondary absolute -top-3 left-3">
                                {state?.cart?.length}
                            </div>}
                            
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <Image src="/images/image-avatar.png" width={50} height={50} alt="user"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 min-h-full bg-base-200 text-base-content w-[70%] ">

                        {links?.map((item: string) => (
                            <li key={item}>
                                <a href="#" className="text-black text-sm">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
              <ModalCart onClose={closeModal} open={cartOpen}/>
            </div>
        )
    }



    return (
        <div>
           {largeScreen &&  <div className="flex navbar bg-base-100  items-center max-w-[1600px] m-auto p-5">
                <div className="flex-1 flex items-center space-x-10">
                    <a className="btn btn-ghost text-3xl font-bold">sneakers</a>
                    <div>
                        <ul tabIndex={0} className=" flex items-center space-x-5">

                            {links?.map((item: string) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-500">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div className="flex-none gap-5">
                <div className="relative flex items-center">
                           
                            <Image onClick={openCart} src="/images/icon-cart.svg" width={20} height={20} alt="user"/>

                            {state?.cart?.length !== 0 && <div className="badge badge-secondary absolute -top-3 left-3">
                                {state?.cart?.length}
                            </div>}
                            
                        </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image width={25} height={25} alt="Tailwind CSS Navbar component" src="/images/image-avatar.png" />
                            </div>
                        </div>

                    </div>
                </div>
                <ModalCart onClose={closeModal} open={cartOpen}/>
            </div>}
            {!largeScreen && <div className="lg:hidden">
                <MobileView />
            </div>}
        </div>
    )
}

export default Nav