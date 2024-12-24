import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'
import Foot from '@/components/Foot'
import Footer from '@/components/Footer'

function page() {
  return (
    <div>
        <Header />
        <div className="back w-full h-[316px] flex flex-col items-center justify-center gap-3">
            <Image src={"/images/logo.svg"} alt='logo' width={77} height={77} />
            <h5 className="text-5xl font-medium">Checkout</h5>
            <p className="font-medium">Home  /
            Checkout</p>
        </div>

        <div className="w-full h-[1550px] flex justify-center py-20 xsm:flex-col">
            <div className="w-[708px] h-full flex flex-col gap-6 font-medium xsm:w-screen xsm:justify-center xsm:items-center">
                <h5 className="h-14 text-4xl font-semibold">Billing details</h5>
                
                <div className="w-full h-[121px] flex gap-4">
                  <div className="w-[212px] h-[121px] flex flex-col gap-3 xsm:w-auto">
                      <label>First Name</label>
                      <input className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]"></input>
                  </div>

                  <div className="w-[212px] h-[121px] flex flex-col gap-3 xsm:w-auto">
                      <label>last Name</label>
                      <input className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]"></input>
                  </div>
                </div>

                <div className="w-[453px] h-[121px] flex flex-col gap-3 xsm:w-[340px]">
                    <label>Company Name (Optional)</label>
                    <input className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]"></input>
                </div>

                <div className="w-[453px] h-[121px] flex flex-col gap-3 xsm:w-[340px]">
                    <label>Country / Region</label>
                    <select className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-5">
                        <option disabled selected className='text-[#9F9F9F]'>Srilanka</option>
                        <option value="pakistan">Pakistan</option>
                        <option value="india">India</option>
                        <option value="bangladesh">Bangladesh</option>
                    </select>
                </div>

                <div className="w-[453px] h-[121px] flex flex-col gap-3 xsm:w-[340px]">
                    <label>Street address</label>
                    <input className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]"></input>
                </div>

                <div className="w-[453px] h-[121px] flex flex-col gap-3 xsm:w-[340px]">
                    <label>Town / City</label>
                    <input className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]"></input>
                </div>

                <div className="w-[453px] h-[121px] flex flex-col gap-3 xsm:w-[340px]">
                    <label>Province</label>
                    <select className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-5">
                        <option disabled selected className='text-[#9F9F9F]'>Western Province</option>
                        <option value="central">Central Province</option>
                        <option value="eastern">Eastern Province</option>
                        <option value="northern">Northern Province</option>
                    </select>
                </div>

                <div className="w-[453px] h-[121px] flex flex-col gap-3 xsm:w-[340px]">
                    <label>ZIP code</label>
                    <input className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]"></input>
                </div>

                <div className="w-[453px] h-[121px] flex flex-col gap-3 xsm:w-[340px]">
                    <label>Phone</label>
                    <input className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]"></input>
                </div>

                <div className="w-[453px] h-[121px] flex flex-col gap-3 xsm:w-[340px]">
                    <label>Email address</label>
                    <input className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]"></input>
                </div>

                <div className="w-[453px] h-[121px] flex flex-col gap-3 xsm:w-[340px]">
                    <input className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]" placeholder='Additional information'></input>
                </div>
            </div>

            <div className="w-[608px] h-[790px]">
                
            </div>
        </div>

        <Foot />
        <Footer />
    </div>
  )
}

export default page
