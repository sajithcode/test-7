import Image from "next/image";
import Right from "../Icons/Right";

export default function Hero(){
    return (
        <section className="hero mt-4">
            <div className="py-8">
            <h1 className="text-4xl font-semibold">Everything<br /> is better <br /> with <span className="text-primary">pizza</span> </h1>
            <p className="my-6 text-gray-600 text-sm">
                Pizza is missing piece that makes everyday complete, a simple yet delicios joy in life
            </p>
            <div className="flex gap-4 text-sm">
                <button className="bg-primary uppercase flex items-center gap-2 text-white px-8 py-2 rounded-full">
                    Order Now
                    <Right />
                </button>
                <button className="flex items-center gap-2 text-gray-600 font-semibold" >
                    Learn more
                    <Right />
                </button>

            </div>
            </div>
            <div className="relative">
                <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'}/>
            </div>
            
        </section>
    );
}