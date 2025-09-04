import { useState } from "react";

const  Header = () => {

const [btnName, setbtnName] = useState("Login")


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" />
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>Cart</li>
                        <li>About</li>
                        <li>Contact US</li>
                        <button className="login" onClick={() => {setbtnName("logout");}} 
                            >{btnName}
                        </button>
                    </ul>

                </div>
        
        </div>)}

export default Header;
