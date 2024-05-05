import Image from "next/image";
import Link from "next/link";
import Header from './../components/layout/Header';
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";


export default function Home() {
  return (
    <>
      
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
        subHeader={'Our story bro'}
        mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex-col gap-4">
        <p className="my-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

        <p className="my-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>
        
      </section>
      <section className="text-center my-8">
        <SectionHeaders 
          subHeader={'Don \'t hestigate'}
          mainHeader={'Contacts us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">+46 738 123 123</a>
        </div>
      </section>
      
    </>
  );
}
