"use client"

import React, { useState } from 'react'
import Lightbox from '@/app/components/Lightbox'
import ProductDetails from './ProductDetails'

const images = [
  {
    id: 1,
    path: "/images/image-product-1.jpg",
    thumbnail: "/images/image-product-1-thumbnail.jpg",
    active: true,
  },
  {
    id: 2,
    path: "/images/image-product-2.jpg",
    thumbnail: "/images/image-product-2-thumbnail.jpg",
    active: false,
  },
  {
    id: 3,
    path: "/images/image-product-3.jpg",
    thumbnail: "/images/image-product-3-thumbnail.jpg",
    active: false,
  },
  {
    id: 4,
    path: "/images/image-product-4.jpg",
    thumbnail: "/images/image-product-4-thumbnail.jpg",
    active: false,
  },
]

const LightBoxPage = () => {
  const [imagesData, setImagesData] = useState(images)


  return (
    <div className=" flex items-center flex-1">
      <div className="lg:flex lg:items-start gap-20  ">
        <Lightbox images={imagesData} />
        <ProductDetails />
      </div>
    </div>
  )
}

export default LightBoxPage