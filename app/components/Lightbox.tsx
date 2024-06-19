import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { Icon } from '@iconify/react';

type LightboxProps = {
    images: any
}

const Lightbox = ({ images }: LightboxProps) => {
    const [dataImages, setDataImages] = useState(images);
    const [thumbnail, setThumbnail]: any = useState(null);

    const getActiveImage = () => {
        const img = dataImages?.find((item:any) => item.active);
        return img;
    }

    useEffect(() => {
        const thumbnail: any = getActiveImage()
        setThumbnail(thumbnail)
    }, [getActiveImage])

    const handlePrev = useCallback(() => {
        let newImages = [...dataImages];
        const target = dataImages.findIndex((item: any) => item.active);
        const isLast = dataImages.findIndex((item: any) => item.active) === dataImages.length;

        if (!isLast) {
            newImages[target].active = false;
            if (target === 0) {
                newImages[newImages?.length - 1].active = true
            } else {
                newImages[target - 1].active = true
            }
        }
        setDataImages(newImages)
    }, [])

    const handleNext = useCallback(() => {
        let newImages = [...dataImages];
        const target = dataImages.findIndex((item: any) => item.active);
        const isLast = dataImages.findIndex((item: any) => item.active) === dataImages.length - 1;


        newImages[target].active = false;

        if (target === newImages.length - 1) {
            newImages[0].active = true
        } else {
            newImages[target + 1].active = true;
        }

        setDataImages(newImages)
    }, [dataImages])



    const MobileView = () => {
        return (
            <div className="relative">
                <Image alt="" width={500} height={500} src={thumbnail?.path} />
                <div className='absolute w-full top-[50%]'>
                    <div className="flex items-center justify-between px-3">
                        <Icon onClick={handlePrev} color="white" fontSize={28} icon="icon-park-solid:left-c" />
                        <Icon onClick={handleNext} color="white" fontSize={28} icon="icon-park-solid:right-c" />
                    </div>
                </div>
            </div>
        )
    }

    const RenderInactive = dataImages?.filter((item:any)=>item)

    const handleSelect = useCallback((item:any)=>{
       
       const target = item?.id;

       const newData = dataImages?.map((item:any)=>{
        if(Number(item?.id) === Number(target)){
            return {...item, active:true}
        }else{
            if(item?.active){
                return {...item, active:false}
            }else{
                return item
            }
        }
       })

       setDataImages(newData)
    },[dataImages])

    return (
        <div>
            <div className="lg:hidden">
                <MobileView />
            </div>
            <div className="hidden lg:block">
                <Image className="rounded-lg" width={1000}  height={1000}  alt="active" src={thumbnail?.path}/>
                <div className="flex justify-between mt-10">
                {RenderInactive?.map((item:any)=>(
                    <div onClick={()=>{
                        handleSelect(item)
                    }} className="relative cursor-pointer" key={item?.id}>
                        <div className={item?.active && 'absolute top-0 right-0 left-0 bottom-0 bg-white opacity-75 border-red-300 border-2 rounded-lg'}></div>
                        <Image className="rounded-lg" width={100} height={100} src={item?.path} alt={item?.id}/>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Lightbox