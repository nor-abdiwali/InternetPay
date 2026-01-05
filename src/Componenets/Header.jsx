import { Link } from "react-router-dom"
import { FaWifi } from "react-icons/fa6";
function Header() {
    return (
        <>
        <div className="flex gap-40 bg-gray-100 justify-between font-sans shadow-2xl h-20 py-6 px-5">
            <div className="flex gap-5">
                <p><FaWifi className="mt-2 text-4xl text-blue-500 mt-[-1px]" /></p>
            <h1 className="font-bold text-2xl">InternetPay</h1>
            </div>
            <ul className="flex gap-10 pt-2">

                <Link to = "/"><li>Home</li></Link>
                <Link to = "/about"><li>About</li></Link>
                <Link to = "/services"><li>Services</li></Link>
                <div className="flex gap-10 ml-59 text-xl">
                <button className="bg-white text-[18px] shadow-2xs text-center w-25 h-12 border-1 rounded-2xl mt-[-10px]"><Link to = "/login"><li>Login</li></Link></button>
                <button className="bg-black text-[18px] text-white shadow-2xs text-center w-30 h-12 border-1 rounded-2xl mt-[-10px]"><Link to = "/register"><li>Register</li></Link></button>

                </div>
               
            </ul>
        </div>
        
        </>
    )
}

export default Header