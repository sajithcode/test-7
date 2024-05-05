import Image from "next/image";

export default function RegisterPage(){
    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl  mb-4">Register</h1>
            <form className="block max-w-xl mx-auto">
                <input type="email"  placeholder="email"/>
                <input type="password" placeholder="password" />
                <button type="submit">Register</button>
                <div className="text-center my-4 text-gray-500">or Login with provider</div>
                <button className="flex gap-4 justify-center ">
                    <Image src={'/google.png'} alt={""} width={30} height={30} />
                    Login with google
                    </button>
            </form>
        </section>
    );
}