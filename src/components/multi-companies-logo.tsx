import React from "react";
import Image from "next/image";
  
function MultiCompaniesLogo() {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-20 pt-10 px-4">
      <div className="flex justify-center items-center">
        <Image
          src="/assets/zapier-logo.png"
          alt="Zapier Logo"
          width={85}
          height={87}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/assets/pipedrive-logo.png"
          alt="Pipe Drive Logo"
          width={107}
          height={109}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/assets/CIBbank-logo.png"
          alt="CIB Bank Logo"
          width={135}
          height={139}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image src="/assets/z-logo.png" alt="Z Logo" width={63} height={65} />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/assets/burnttoast-logo.png"
          alt="Burnt Toast Logo"
          width={98}
          height={101}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/assets/pandadoc-logo.png"
          alt="Panda Doc Logo"
          width={113}
          height={115}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/assets/moz-logo.png"
          alt="Moz Logo"
          width={84}
          height={87}
        />
      </div>
    </div>
  );
}
export default MultiCompaniesLogo;

