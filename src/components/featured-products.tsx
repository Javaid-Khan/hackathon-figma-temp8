import Image from "next/image";
import FeaturedProducts from "../../public/assets/featured-products.svg";

function featuredProducts() {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-15 pt-10 px-4">
      <div className="flex justify-center items-center">
       <Image src={FeaturedProducts} 
       alt="FeaturedProducts" 
       width={5000} 
       height={5000}
      />  
      </div>
    </div>  
 );      
}

export default featuredProducts