
import Image from "next/image";
import Link from "next/link";

export default function TopCategories() {
  const categories = [
    {
      image: "/products-category/cat-1.png", // Path relative to public folder
      href: "/products-category/",
    },
    {
      image: "/products-category/cat-2.png",
      href: "/products-category/",
    },
    {
      image: "/products-category/cat-3.png",
      href: "/products-category/",
    },
  ];

  return (
    <section className="w-full px-4 py-[7rem] md:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8">
          Top Categories
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] w-full">
                <Image
                  src={category.image}
                  alt="Top Category"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                  width={400}
                  height={400}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}



// import Image from "next/image";
// import Link from "next/link";

// export default function TopCategories() {
//   const categories = [
//     {
//       name: "Wing Chair",
//       products: "3,584 Products",
//       image: "/products-category/cat-1.png", // Path relative to public folder
//       href: "/products-category/",
//     },
//     {
//       name: "Wooden Chair",
//       products: "157 Products",
//       image: "/products-category/cat-2.png",
//       href: "/products-category/",
//     },
//     {
//       name: "Desk Chair",
//       products: "154 Products",
//       image: "/products-category/cat-3.png",
//       href: "/products-category/",
//     },
//   ];

//   return (
//     <section className="w-full px-4 py-[7rem] md:px-6">
//       <div className="mx-auto max-w-7xl">
//         <h2 className="text-3xl font-bold tracking-tight mb-8">
//           Top Categories
//         </h2>
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {categories.map((category) => (
//             <Link
//               key={category.name}
//               href={category.href}
//               className="group relative overflow-hidden rounded-lg"
//             >
//               <div className="aspect-[4/3] w-full">
//                 <Image
//                   src={category.image}
//                   alt={category.name}
//                   className="object-cover transition-transform duration-300 group-hover:scale-105"
//                   priority
//                   width={400}
//                   height={400}
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
//                 <div className="absolute bottom-0 p-6">
//                   <h3 className="mb-2 font-inter text-xl font-medium text-white">
//                     {category.name}
//                   </h3>
//                   <p className="font-inter text-sm text-gray-200">
//                     {category.products}
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// import Image from "next/image";
// import Link from "next/link";

// export default function TopCategories() {
//   const categories = [
//     {
//       name: "Wing Chair",
//       products: "3,584 Products",
//       image: "/cat-1.png",
//       href: "/products-category/"
//     },
//     {
//       name: "Wooden Chair",
//       products: "157 Products",
//       image: "/cat-2.png",
//       href: "/products-category/"
//     },
//     {
//       name: "Desk Chair",
//       products: "154 Products",
//       image: "/cat-3.png",
//       href: "/products-category/"
//     }
//   ];

//   return (
//     <section className="w-full px-4 py-[7rem] md:px-6">
//       <div className="mx-auto max-w-7xl">
//         <h2 className="text-3xl font-bold tracking-tight  mb-8">
//           Top Categories
//         </h2>
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {categories.map((category) => (
//             <Link
//               key={category.name}
//               href={"../components/productDescription/description"}
//               className="group relative overflow-hidden rounded-lg"
//             >
//               <div className="aspect-[4/3] w-full">
//                 <Image
//                   src={category.image}
//                   alt={category.name}
//                   className="object-cover transition-transform duration-300 group-hover:scale-105"
//                   priority
//                   width={400}
//                   height={400}
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
//                 <div className="absolute bottom-0 p-6">
//                   <h3 className="mb-2 font-inter text-xl font-medium text-white">
//                     {category.name}
//                   </h3>
//                   <p className="font-inter text-sm text-gray-200">
//                     {category.products}
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import Image from "next/image";
// import { category_data } from "@/components/cards/categories";

// function TopCategories() {
//   return (
//     <section className="w-full mt-[136]">
//       {/* heading */}
//       <h1 className="text-[32px] leading-[35px] font-semibold text-[#272343]">
//         Top categories
//       </h1>
//       {/* Images main div */}
//       {/* <div className="w-full h-[424px] flex gap-[24px] mt-[40px]"> */}
//         {category_data.map((item, index) => {
//           return (
//             <div className="h-full w-[424px] relative " key={index}>
//               <Image src={item.src} alt="image" width={424} height={424} />

//               <div className="w-[424px] h-[85px] text-white bg-[#000000B2] absolute bottom-0 rounded-[4px] left-0 p-[20px]">
//                 <h2 className="text-[20px] leading-[22px] font-semibold ">
//                   {item.name}
//                 </h2>
//                 <p className="text-[14px] leading-[15px] mt-[8px]">
//                   {item.stock}
//                 </p>
//               </div>
//             </div>
//           );
//         })}

//         {/* bottom pictures */}
//         <div className="w-full h-[648px] grid grid-cols-2 gap-[24px] mt-[229px]">
//           {/* first large size image */}
//           <div>
//             <Image
//               src={"/products-category/card-1.png"}
//               alt={"picture"}
//               width={648}
//               height={648}
//             />
//           </div>

//           {/* half size images */}
//           <div className="grid grid-cols-2 grid-rows-2 gap-[24px]">
//             <div>
//               <Image
//                 src={"/products-category/card-2.png"}
//                 alt="chair1"
//                 width={312}
//                 height={312}
//               />
//             </div>

//             <div>
//               <Image
//                 src={"/products-category/card-3.png"}
//                 alt="chair 2"
//                 width={312}
//                 height={312}
//               />
//             </div>

//             <div>
//               <Image
//                 src={"/products-category/card-4.png"}
//                 alt="chair 3"
//                 width={312}
//                 height={312}
//               />
//             </div>

//             <div>
//               <Image
//                 src={"/products-category/card-5.png"}
//                 alt="chair 4"
//                 width={312}
//                 height={312}
//               />
//             </div>
//           </div>
//         </div>
//       {/* </div> */}
//     </section>
//   );
// }
// export default TopCategories;
