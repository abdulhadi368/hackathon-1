import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="h-[58px] w-full bg-[#252B42] hidden md:block">
      <div className="h-[46px] w-full pt-[9px] pl-[2px] flex justify-between">
        <div className="h-[46px] w-[415px] gap-[10px] flex">
          <div className="h-[44px] w-[145px] flex gap-[10px] justify-center items-center">
            <div className="h-[16px] w-[16px]">
              <Image src="/image/phone/icn settings icn-xs.svg" alt="Phone"  height={100} width={100}/>
            </div>
               <h6 style={{ fontWeight: '700' }} className="h-[24px] w-[104px] text-[14px] text-[#FFFFFF] font-montserrat">(225) 555-0118</h6>
            </div>
          <div className="h-[44px] w-[260px] gap-[10px] flex justify-center items-center">
            <div className="h-[16px] w-[16px]">
              <Image src="/image/message/icn settings icn-xs (1).svg" alt="Message" height={100} width={100}/>
            </div>
            <h6 style={{ fontWeight: '700' }} className="h-[24px] w-[219px] text-[14px] text-[#FAFAFA] font-montserrat">michelle.rivera@example.com</h6>
          </div>
        </div>
        <div className="h-[44px] w-[332px] flex justify-center items-center">
          <h6 style={{ fontWeight: '700' }} className="h-[24px] w-[312px] text-[14px] text-[#FAFAFA] font-montserrat">Follow Us and get a chance to win 80% off</h6>
        </div>
        <div className="h-[46px] w-[233px] gap-[10px] flex items-center justify-center">
            <h6 style={{ fontWeight: '700' }} className="h-[24px] w-[83px] font-montserrat text-[14px] text-[#FAFAFA]">Follow Us :</h6>
          <div className="h-[26px] w-[120px] flex gap-[5px]">
            <Image className="h-[26px] w-[26px]" src="/image/insta/a.svg" alt="insta"  height={100} width={100}/>
            <Image className="h-[26px] w-[26px]" src="/image/youtube/a (1).svg" alt="yt" height={100} width={100}/>
            <Image className="h-[26px] w-[26px]" src="/image/facebook/a (2).svg" alt="fb" height={100} width={100}/>
            <Image className="h-[26px] w-[26px]" src="/image/twitter/a (3).svg" alt="twit"  height={100} width={100}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
