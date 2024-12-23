import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex gap-[70px]'>
      <div className='h-[63px] w-[187px] flex items-center justify-center'>
        <div className='h-[58px] w-[187px] flex justify-center items-center'>
          <h3 style={{fontWeight:'700'}} className='h-[32px] w-[108px] text-[24px] text-[#000000] font-montserrat'>Bandage</h3>
        </div>
      </div>
     <div className='h-[58px] w-[1155px] flex justify-between'>
      <div className='h-[25px] w-[361px] flex gap-[15px] items-center pt-[35px]'>
        <div className='h-[24px] w-[43px] flex items-center justify-center'>
          <Link href={"./"} ><h1 style={{fontWeight:'700'}} className='h-[24px] w-[43px] text-[14px] text-[#737373]'>Home</h1></Link>
        </div>
        <div className='h-[25px] w-[63px] gap-[10px] flex justify-center items-center'>
            <Link href="./Shop"><h1 style={{fontWeight:'500'}} className='h-[24px] w-[38px] text-[14px] text-[#252B42]'>Shop</h1></Link>
            <Image src="/images/down/Vector.svg" alt="DownDrop" height={100} width={100}/>
        </div>
        <Link href="./About"><h1 style={{fontWeight:'700'}} className='h-[24px] w-[45px] text-[14px] text-[#737373]'>About</h1></Link>
        <Link href=""><h1 style={{fontWeight:'700'}} className='h-[24px] w-[33px] text-[14px] text-[#737373]'>Blog</h1></Link>
        <Link href="./Contact"><h1 style={{fontWeight:'700'}} className='h-[24px] w-[58px] text-[14px] text-[#737373]'>Contact</h1></Link>
        <Link href="./"><h1 style={{fontWeight:'700'}} className='h-[24px] w-[44px] text-[14px] text-[#737373]'>Pages</h1></Link>
      </div>
      <div className='h-[54px] w-[324px] justify-center items-center flex'>
        <div className='h-[54px] w-[166px] flex gap-[5px] justify-center items-center'>
          <Image src="/images/user/icn settings icn-xs (2).svg" alt=""  height={16} width={16}/>
          <Link href=""><h1 style={{fontWeight:'700'}} className='h-[24px] w-[119px] font-montserrat text-[14px] text-[#23A6F0] pt-[3px]' >Login / Register</h1></Link>
        </div>
        <Image src="/images/search/li.svg" alt="search"  height={60} width={60}/>
        <Image src="/images/cart/li (1).svg" alt="cart"  height={60} width={60}/>
        <Image src="/images/wishlist/li (2).svg" alt="wish list"  height={60} width={60}/>
      </div>
     </div>
      
    </div>
  )
}

export default Navbar;
