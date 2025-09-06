import { useState } from "react";

const  Header = () => {

const [btnName, setbtnName] = useState("Login")


    return (
        <div className="flex justify-between bg-orange-100 shadow-lg m-2" >
            <div className="logo-container">
                <img className="w-40" src="https://static.vecteezy.com/system/resources/previews/050/816/833/non_2x/swiggy-transparent-icon-free-png.png" />
                </div>
                <div className="flex items-center padding">
                    <ul className="flex p-8 m-12 px-20">
                        <li className="px-4 font-bold" >Home</li>
                        <li className="px-4 font-bold" >Cart</li>
                        <li className="px-4 font-bold">About</li>
                        <li className="px-4 font-bold">Contact US</li>
                        <button className="login font-bold" onClick={() => {setbtnName("logout");}} 
                            >{btnName}
                        </button>
                    </ul>

                </div>
        
        </div>)}

export default Header;
