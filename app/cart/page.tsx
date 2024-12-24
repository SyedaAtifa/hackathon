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
                <div className="w-full mt-16 flex gap-10">
                    <Image src={"/images/cartimage.svg"} alt='cart' width={108} height={105} />
                    <div className="w-[573px] mt-12 flex justify-between text-[#9F9F9F]">
                      <p>Asgaard sofa</p>
                      <span>Rs. 250,000.00</span>
                      <span className="h-8 w-8 border rounded-[5px] flex items-center justify-center">1</span>
                      <p className="text-black">Rs. 250,000.00</p>
                    </div>
                    <div className="w-7 h-7 mt-12">
                      <Image src={"/images/del.svg"} alt='delete' width={21} height={21}/>
                    </div>
                </div>
            </div>

           <div className="w-[393px] h-[390px] border bg-[#F9F1E7] flex flex-col items-center gap-10">
                <h6 className="h-12 my-7 text-[32px] font-semibold">Cart Totals</h6>
                <p className="font-medium flex gap-12">Subtotal 
                    <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
                </p>
                <p className="font-medium flex gap-20">Total
                    <span className="text-[#B88E2F]">Rs. 250,000.00</span>
                </p>
                <Link href={"/checkout"}>
                    <button className="w-[222px] h-[59px] border border-black rounded-[15px] text-xl">Checkout</button>
                </Link>
            </div>
        </div>

        <Foot />
        <Footer />
    </div>
  )
}

export default page
