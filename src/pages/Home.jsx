import Header from "../Componenets/Header"
import { FaWifi } from "react-icons/fa6";
import { MdPeople } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";

function Home() {
    return (
        <>
        
       <div className="bg-gray-200 w-auto h-auto">
        <div className="pt-30 pl-40">

            <FaWifi className="text-8xl ml-90" />
            <h1 className="text-7xl mt-5 ml-45 ">Welcome to InternetPay</h1>
            <p className="text-2xl text-center mt-5">Your convenient solution for managing and paying internet bills online. <br />
            Fast, secure, and hassle-free.</p>
            <button className="mt-5 mr-10 ml-90 bg-black text-white shadow-2xs text-center w-35 h-10 border-1 rounded-2xl">Get started</button>
            <button className=" bg-white shadow-2xs text-center w-25 h-10 border-1 rounded-2xl">Login</button>

        </div>


        <div className=" flex gap-10">
            <div className="ml-20 mt-20">
                <h1><MdPeople className="text-6xl ml-5 text-blue-500 mt-2" /></h1>
                <h1 className="text-4xl">10,000+</h1>
                <p className="text-2xl mt-3">Happy costomers</p>

            </div>
            <div className="ml-30 mt-20">
                <h1><MdOutlineAccessTime  className="ml-2 text-6xl text-blue-500 mt-2" /></h1>
                <h1 className="text-4xl ml-2">99.9%</h1>
                <p className="text-2xl mt-3">Uptime</p>

            </div>
            <div className="ml-30 mt-20">
                <h1><FaArrowTrendUp className="text-6xl ml-5 text-blue-500 mt-2" /></h1>
                <h1 className="text-4xl ml-5">50+</h1>
                <p className="text-2xl mt-2">Cities served</p>

            </div>
            <div className="ml-30 mt-20">
                <h1><FaRegStar className="text-6xl ml-5 text-blue-500 mt-2" /></h1>
                <h1 className="text-4xl ml-5">4.9/5</h1>
                <p className="text-2xl mt-3">Costomer Rating</p>

            </div>
        </div>
        <div className="flex gap-5 mt-20 w-300 mb-40">
            <div className="bg-white w-75 h-35 ml-2 mt-10 px-2 py-2">
                <h1><FaRegStar className="text-3xl ml-2" /></h1>
                <h1 className="text-2xl font-bold mt-2">Easy payment</h1>
                <p className="text-gray-500 mt-2">Multiple payment methods including EVC Plus, Zaad, and cards</p>
            </div>
            <div className="bg-white w-75 h-35 ml-20 mt-10 p-2 ">
                <h1><MdOutlineAccessTime className="text-3xl ml-2" /></h1>
                <h1 className="text-2xl font-bold mt-2">24/7 access</h1>
                <p className="text-gray-500 mt-2">Pay your bills anytime, anywhere with our online platform</p>
            </div>
            <div className="bg-white w-75 h-35 ml-20 mt-10 p-2">
                <h1><MdOutlineSecurity className="text-3xl ml-2" /></h1>
                <h1 className="text-2xl font-bold mt-2">Secure</h1>
                <p className="text-gray-500 mt-2">Bank-level security to protect your transactions</p>
            </div>
            <div className="bg-white w-75 h-35 ml-20 mt-10 p-2">
                <h1><FaWifi className="text-3xl ml-2" /></h1>
                <h1 className="text-2xl font-bold mt-2">Truck History</h1>
                <p className="text-gray-500 mt-2">View all your payment history in one place</p>
            </div>
        </div>




        <div>

            <h1 className="text-center text-3xl font-bold">What Our Customers Say</h1>
            <p className="ml-80 mt-2">Join thousands of satisfied customers who trust InternetPay for their internet bill payments</p>
            <div className="flex gap-10">

            <div className="bg-white w-95 h-58 mt-10 p-2 ml-5">
                <div className="flex gap-2 text-yellow-500 py-5 text-2xl">                    
                <h1><FaRegStar/></h1>
                <h1><FaRegStar/></h1>
                <h1><FaRegStar/></h1>
                <h1><FaRegStar/></h1>
                <h1><FaRegStar/></h1>
                </div>
                <p className="">"InternetPay has made managing my internet bills so much easier.
                    The payment process is quick and I love the history tracking!"</p>

                    <h1 className="text-xl font-bold mt-5">Ahmed Hassan</h1>
                    <p>Small Business Owner</p>


            </div>
            <div className="bg-white w-95 h-58 mt-10 p-2">
                <div className="flex gap-2 text-yellow-500 py-5 text-2xl">                    
                <h1><FaRegStar/></h1>
                <h1><FaRegStar/></h1>
                <h1><FaRegStar/></h1>
                <h1><FaRegStar/></h1>
                <h1><FaRegStar/></h1>
                </div>
                <p className="">"The mobile money integration is fantastic.
                    I can pay my bills directly from my phone without any hassle."</p>

                    <h1 className="text-xl font-bold mt-5">Fatima ali</h1>
                    <p>freelencer</p>


            </div>
            <div className="bg-white w-95 h-58 mt-10 p-2">
                <div className="flex gap-2 text-yellow-500 py-5 text-2xl">                    
                <h1><FaRegStar/></h1>
                <h1><FaRegStar/></h1>
                <h1><FaRegStar/></h1>
                <h1><FaRegStar/></h1>
                <h1><FaRegStar/></h1>
                </div>
                <p className="">"Reliable service and transparent billing.
                    The customer support is always helpful when I need assistance."</p>

                    <h1 className="text-xl font-bold mt-5">Mohamed Abdi</h1>
                    <p>Home User</p>


            </div>
            </div>
        </div>




        <div>

            <h1 className="mt-30 text-5xl text-center font-bold">How its work</h1>
            <div className="flex gap-10 mt-10">

            <div className="w-80 h-45 text-center">
                <h1 className="bg-blue-600 w-20 ml-25 h-20 rounded-full text-white text-4xl text-center pt-4">1</h1>
                <h1 className="text-2xl mt-3 font-bold">Create Account</h1>
                <p className="mt-3">Sign up with your email and basic information</p>
            </div>
            <div className="w-80 h-45 text-center">
                <h1 className="bg-blue-600 w-20 ml-25 h-20 rounded-full text-white text-4xl text-center pt-4">2</h1>
                <h1 className="text-2xl mt-3 font-bold">Create Account</h1>
                <p className="mt-3">Sign up with your email and basic information</p>
            </div>
            <div className="w-80 h-45 text-center">
                <h1 className="bg-blue-600 w-20 ml-25 h-20 rounded-full text-white text-4xl text-center pt-4">3</h1>
                <h1 className="text-2xl mt-3 font-bold">Create Account</h1>
                <p className="mt-3">Sign up with your email and basic information</p>
            </div>
            <div className="w-80 h-45 text-center">
                <h1 className="bg-blue-600 w-20 ml-25 h-20 rounded-full text-white text-4xl text-center pt-4">4</h1>
                <h1 className="text-2xl mt-3 font-bold">Create Account</h1>
                <p className="mt-3">Sign up with your email and basic information</p>
            </div>
            </div>
        </div>


        <div className="mt-20">
            <footer>footer</footer>
        </div>



       </div>
        
        </>
    )
}

export default Home