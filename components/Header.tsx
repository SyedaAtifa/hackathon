"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="h-[100px] w-screen flex items-center justify-center">
        <header className="h-10 w-[1286px] flex justify-between">
            <div className="w-[160px] flex">
                <Image src={"/images/logo.svg"} alt='logo' width={50} height={32} />
                <h1 className="text-4xl font-bold font-Montserrat">furniro</h1>
            </div>
            <ul className="relative h-[21px] w-[430px] flex justify-between pt-3 font-medium font-poppins xsm:hidden">
                <Link href={"/Home"}>
                  <li>
                    Home
                  </li>
                </Link>
                <Link href={"/shop"}>
                  <li>
                    Shop
                  </li>
                </Link>
                <Link href={"/blog"}>
                  <li>
                    Blog
                  </li>
                </Link>
                <Link href={"/contact"}>
                  <li>
                    Contact
                  </li>
                </Link>
            </ul>
            <div className="w-[200px] flex justify-between xsm:justify-evenly">
                <Image className="xsm:hidden" src={"/images/account.svg"} alt='account' width={28} height={28} />
                <Image src={"/images/search.svg"} alt='search' width={28} height={28} />
                <Image src={"/images/wishlist.svg"} alt='wishlist' width={28} height={28} />
                <Link href={"/cart"}>
                  <Image src={"/images/cart.svg"} alt='cart' width={28} height={28} />
                </Link>
              <div className="hidden xsm:block">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md focus:outline-none"
            >
              <Image
                src={"/images/Column.svg"}
                alt="column"
                width={56}
                height={56}
              />

            </button>

            <div
              className={`fixed top-20 z-50 right-0 h-60 w-64 bg-white shadow-lg transform transition-transform ${open ? "translate-x-0" : "translate-x-full"
                }`}
            >
              <div className="p-4 text-lg font-bold">Furniro</div>
              <ul className="flex flex-col space-y-4 p-4">
                <Link href={"/shop"}>
                  <li>
                    Shop
                  </li>
                </Link>
                <Link href={"/blog"}>
                  <li>
                    Blog
                  </li>
                </Link>
                <Link href={"/contact"}>
                  <li>
                    Contact
                  </li>
                </Link>
              </ul>
            </div>

            {open && (
              <div
                className="fixed"
                onClick={() => setOpen(false)}
              ></div>
            )}
          </div>
            </div>
        </header>
    </div>
  )
}

export default Header
