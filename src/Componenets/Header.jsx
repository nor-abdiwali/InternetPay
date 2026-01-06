import { Link } from "react-router-dom";
import { FaWifi } from "react-icons/fa6";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="
          bg-blue-100 shadow-2xl font-sans
          px-3 py-4
          sm:px-5
          md:px-8
          lg:px-14
        "
      >
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <FaWifi className="text-3xl text-blue-500" />
            <h1 className="font-bold text-xl sm:text-2xl">
              InternetPay
            </h1>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          <ul
            className={`
              absolute left-0 w-full bg-blue-100 px-6 py-6
              flex flex-col gap-4 text-sm
              transition-all duration-300

              ${open ? "top-20" : "-top-96"}

              sm:static sm:w-auto sm:flex-row sm:items-center
              sm:gap-5 sm:p-0 sm:text-base
              md:gap-7
              lg:gap-10
            `}
          >
            <Link to="/"><li className="hover:text-blue-600">Home</li></Link>
            <Link to="/about"><li className="hover:text-blue-600">About</li></Link>
            <Link to="/services"><li className="hover:text-blue-600">Services</li></Link>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 md:gap-5">
              <button className="bg-white shadow px-5 py-2 rounded-2xl">
                <Link to="/login"><li>Login</li></Link>
              </button>

              <button className="bg-black text-white shadow px-5 py-2 rounded-2xl">
                <Link to="/register"><li>Register</li></Link>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
