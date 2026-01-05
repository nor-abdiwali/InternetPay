import { Link } from "react-router-dom"
import { FaWifi } from "react-icons/fa6";
function Header() {
    return (
        <>
        <div className="flex gap-40 bg-white shadow-2xs h-15 py-2 px-5 text-2xl">
            <div className="flex gap-5">
                <p><FaWifi className="mt-2 text-3xl text-blue-500" /></p>
            <h1 className="font-bold text-3xl">InternetPay</h1>
            </div>
            <ul className="flex gap-10">

                <Link to = "/"><li>Home</li></Link>
                <Link to = "/about"><li>About</li></Link>
                <Link to = "/services"><li>Services</li></Link>
                <div className="flex gap-10 ml-59 text-xl">
                <button className="bg-white shadow-2xs text-center w-25 h-10 border-1 rounded-2xl"><Link to = "/login"><li>Login</li></Link></button>
                <button className="bg-black text-white shadow-2xs text-center w-35 h-10 border-1 rounded-2xl"><Link to = "/register"><li>Register</li></Link></button>

                </div>
               
            </ul>
        </div>
        
        </>
    )
}

export default Header