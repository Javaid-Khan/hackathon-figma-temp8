import Link from 'next/link'
import Image from "next/image"
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Check, ChevronDown, CircleAlert, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';

function Header() {
  return (
    <>
      <div className="w-full flex flex-col">
        {/* Top Header */}
        <div className="h-[45px] bg-[#272343] text-[#FFFFFF] flex items-center justify-between py-[14px]">
          <div className="flex items-center gap-[8px]">
            <span>
              <Check size={16} />
            </span>
            <p className="text-[13px] leading-[14.3px]">
              Free shipping on all orders over $50
            </p>
            {/* <span>
                    Free shipping on all orders over $50</span> */}
          </div>

          {/* DropDown */}

          <div>
            <div className="flex gap-[24px] text-[13px] leading-[16px]">
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className="flex items-center gap-1] 
             focus: outline-none"
                  >
                    English
                    <ChevronDown size={9} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>English</DropdownMenuItem>
                    <DropdownMenuItem>Urdu</DropdownMenuItem>
                    <DropdownMenuItem>Arabic</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <span>Faqs</span>

              <div className="flex items-center gap-[6px]">
                <CircleAlert size={17} />
                  <p>Need Help</p>
              </div>

            </div>
          </div>
        </div>

        {/* Middle Header */}
        <div className="flex items-center bg-[#F0F2F3] py-[20px] justify-between ">
          <div className="flex items-center gap-[8px]">
            <Image src={"/assets/logo.png"} alt="logo" width={40} height={40} />
            <h2 className="text-[26px] leading-[31px] font-medium">Comforty</h2>
          </div>

          <div className="flex items-center gap-[8px] py-[11px] px-[16px] bg-white rounded-[8px] ">
            <ShoppingCart size={22} />
            <p className="text-[12px] leading-[13px] font-medium">Cart</p>
            <Button
              size={"icon"}
              className="h-[20px] w-[20px] rounded-full bg-[#007580]"
            >2
            </Button>
          </div>
        </div>

        {/* Bottom Header */}
        <div className="flex items-center justify-between py-[29.5px] border-b-[1px]">
          <ul className="flex gap-[32px]">
            <Link href={"/"}>
              <li className="text-[14px] leading-[15px] font-medium hover:text-[#007580] ">
                Home
              </li>
            </Link>
            <Link href={"/shop"}>
              <li className="text-[14px] leading-[15px] font-medium hover:text-[#007580] ">
                Shop
              </li>
            </Link>
            <Link href={"/products"}>
              <li className="text-[14px] leading-[15px] font-medium hover:text-[#007580] ">
                Product
              </li>
            </Link>
            <Link href={"/pages"}>
              <li className="text-[14px] leading-[15px] font-medium hover:text-[#007580] ">
                Pages
              </li>
            </Link>
            <Link href={"/about-us"}>
              <li className="text-[14px] leading-[15px] font-medium hover:text-[#007580] ">
                About
              </li>
            </Link>
            <Link href={"/contact"}>
              <li className="text-[14px] leading-[15px] font-medium hover:text-[#007580] ">
                Contact
              </li>
            </Link>
          </ul>

          <div className="flex gap-[8px] items-center">
            <p className="text-[14px] leading-[15px] text-[#636270]">
              Contact:
            </p>
            <p className="text-[14px] leading-[15px] font-medium">
              (808) 555-0111
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header