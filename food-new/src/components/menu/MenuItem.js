export default function MenuItem(){
    return(
        <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-2xl/25 hover:shadow-black">
            <div className="text-center">
                <img src="/pizza.png" className="max-h-auto max-h-24 block mx-auto" alt="pizza"/>
            </div>
                <h4 className="font-semibold text-xl leading-4 my-2">Peperoni Pizza</h4>
                <p className="text-gray-500 text-sm p-4">
                Lorem Ipsum has been the industry's standard dummy text ever since the 
                </p>
                <button className="mt-4 bg-primary text-white px-8 py-2 rounded-full">Add to card $12</button>
            </div>
    );
}