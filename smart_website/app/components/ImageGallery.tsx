// "use client";

// import { urlFor } from "../lib/sanity"
// import Image from "next/image"
// import { useState } from "react";


// interface iAppProps{
//     images: any;
// }

// export default function ImageGallery({images}:iAppProps){
//     const [bigImage , setBigImage] = useState(images[0]);
//     const handleSmallImageClick = (image:any)=>{
//         setBigImage(image);
//     };
//     return (
//         <div className="grid gap-4 lg:grid-cols-5">
//             <div className="order-last flex gap-4 lg:order-none lg:flex-col">
//                 {images.map((image:any,idx:any)=>(
//                     <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
//                          <Image 
//                               src={urlFor(image).url()}
//                               alt="photo"
//                               className="w-full h-full object-cover object-center cursor-pointer"
//                               onClick={()=> handleSmallImageClick(image)}
//                               width={200}
//                               height={200}
//                             />
//                     </div>
//                 ))}
//             </div>
//             <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
//             <Image 
//                   src={urlFor(bigImage).url()}
//                   alt="Photo"
//                   className="w-full h-full object-cover object-center "
//                   width={500}
//                   height={500}
//                  />
//                  <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider ">Sale</span>
//             </div>

//         </div>
//     )

// }
'use client';

import { urlFor } from "../lib/sanity"
import Image from "next/image"
import { useState } from "react";

interface iAppProps{
    images: any;
}

export default function ImageGallery({images}:iAppProps){
    const [bigImage , setBigImage] = useState(images[0]);
    const [isZoomed, setIsZoomed] = useState(false);

    const handleSmallImageClick = (image:any)=>{
        setBigImage(image);
    };

    const handleMouseEnter = () => {
        setIsZoomed(true);
    };

    const handleMouseLeave = () => {
        setIsZoomed(false);
    };

    return (
        <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {images.map((image:any,idx:any)=>(
                    <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
                         <Image 
                              src={urlFor(image).url()}
                              alt="photo"
                              className="w-full h-full object-cover object-center cursor-pointer"
                              onClick={()=> handleSmallImageClick(image)}
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                              width={200}
                              height={200}
                            />
                    </div>
                ))}
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <Image 
                    src={urlFor(bigImage).url()}
                    alt="Photo"
                    className={`w-full h-full object-cover object-center ${isZoomed ? 'transform scale-125' : ''}`}
                    width={500}
                    height={500}
                />
                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider ">Sale</span>
            </div>
        </div>
    )
}