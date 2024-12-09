import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'
import Foot from '@/components/Foot'
import Footer from '@/components/Footer'

function page() {
  return (
    <div className="">
        <Header />
        <div className="back w-full h-[316px] flex flex-col items-center justify-center gap-3">
            <Image src={"/images/logo.svg"} alt='logo' width={77} height={77} />
            <h5 className="text-5xl font-medium">Cart</h5>
            <p className="font-medium">Home  /
            Cart</p>
        </div>

        <div className="w-full h-[525px] mt-16 flex items-center justify-center">
            <div className="w-[817px] h-[215px]">
                <div className="bg-[#F9F1E7] h-[55px] flex items-center">
                    <ul className="w-[700px] flex items-center justify-between font-medium">
                        <li>Product</li>
                        <li>Price</li>
                        <li>Quantity</li>
                        <li>Subtotal</li>
                    </ul>
                </div>
            </div>
        </div>

        <Foot />
        <Footer />
    </div>
  )
}

export default page