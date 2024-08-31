import { Link, NavLink, useNavigate } from "react-router-dom";
// import download from "../../assets/img/download.jpeg";
import frimages from "../../assets/img/images/freshcart-logo.svg";
import { useContext, useState } from "react";
import { authContextProvider } from "../../context/AuthContext";
import { CartContextProvider } from "../../context/CardContext";

export default function NavBar() {
  const { token, setToken } = useContext(authContextProvider);
  const { cartProductsItem } = useContext(CartContextProvider);
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("tkn");
    setToken(null);
    navigate("/sign in");
  }
  const [open, setopen] = useState(false);
  function toggle() {
    setopen(!open);
  }

  return (
    <>
      <div className="fixed top-0 z-50 w-full mb-[5vh]">
        <nav className=" bg-slate-500 md:p-2 ">
          <div
            className={` flex items-center justify-around bg-slate-500 container  mx-auto h-16 text-white font-bold ${
              open ? "w-full absolute " : ""
            }`}
          >
            <div
              className={` md:flex items-center gap-5 ${
                open ? "w-full absolute " : ""
              }`}
            >
              <Link to="/products" className=" bg-slate-200 rounded-xl">
                <img className="w-40 rounded-xl" src={frimages} alt="Cart" />
              </Link>
              {token ? (
                <ul
                  className={`md:flex md:items-center md:space-x-4 ${
                    open
                      ? "flex flex-col absolute top-[6.3vh] py-5 w-full bg-slate-400 space-y-2 space-x-4"
                      : "hidden"
                  }`}
                >
                  <div
                    className={`md:flex items-center md:space-x-4 ${
                      open
                        ? "w-full flex flex-col bg-slate-400 space-y-2 space-x-4"
                        : "hidden"
                    }`}
                  >
                    {" "}
                    <li>
                      <NavLink to="/products">Products</NavLink>
                    </li>
                    <li>
                      <NavLink to="/category">Categories</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Brands">Brands</NavLink>
                    </li>
                  </div>

                  <div
                    className={`md:flex items-center md:space-x-4 ${
                      open
                        ? "w-full flex flex-col   bg-slate-400 space-y-2 space-x-4"
                        : "hidden"
                    }`}
                  >
                    <li>
                      <Link to="/cart">
                        {" "}
                        <div className="relative w-[50px] h-[50px]  flex justify-center items-center -ml-3">
                          <i className="fas fa-shopping-cart absolute text-[26px] font-serif  text-center">
                            {" "}
                          </i>
                          <span
                            className={`text-center text-[13px] absolute top-[1.5vh] md:end-[1vw] text-cyan-700 font-extrabold ${
                              open ? " end-[3vw]" : ""
                            }`}
                          >
                            {cartProductsItem}
                          </span>
                        </div>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist" className="">
                        <div className="relative w-[50px] h-[50px]  flex justify-center items-center -ml-5">
                          <i className="absolute fa-solid fa-heart text-[25px] font-serif  text-center">
                            {" "}
                          </i>
                        </div>{" "}
                      </Link>
                    </li>
                  </div>
                </ul>
              ) : (
                ""
              )}
            </div>
            <div className=" flex items-center  gap-5 me-5 ">
              {token ? (
                <ul
                  className={` flex items-center gap-3 md:me-[2vw] md:ml-[5vw] ${
                    open ? "ml-[13vw]" : ""
                  }`}
                >
                  <li>
                    <i className="fa-brands curser-pointer fa-facebook-f"></i>
                  </li>
                  <li>
                    <i className="fa-brands  curser-pointer fa-twitter"></i>
                  </li>
                  <li>
                    <i className="fa-brands curser-pointer fa-linkedin"></i>
                  </li>
                  <li>
                    <i className="fa-brands  curser-pointer fa-behance"></i>
                  </li>
                </ul>
              ) : (
                ""
              )}
           
              <ul className="flex items-center gap-3">
                {token ? (
                  <li>
                    <span className="cursor-pointer" onClick={handleLogout}>
                      Logout
                    </span>
                  </li>
                ) : (
                  <>
                    <li>
                      <NavLink to="/sign up">Sign up</NavLink>
                    </li>
                    <li>
                      <NavLink to="/sign in"> Sign in</NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
            {token ? (
              <div className="md:hidden block absolute top-[3vh] right-[2vw] cursor-pointer ">
                {" "}
                <i
                  onClick={toggle}
                  className={`   ${
                    open ? " fas fa-close " : "fas fa-bars"
                  } hidden fa-xl  cursor-pointer text-red-50`}
                ></i>
              </div>
            ) : (
              ""
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
