import React from "react"

export default function Navbar() {

    return(
        <>
        <div class="navbar">
            <div class="top-navbar">
                <div class="top-navbar-text" id="top-navbar-text">
                    Today: <span class="date" id="date">( Local time 12: 00 )</span>
                </div>
                <div class="social-media"> <a href="http://facebook.com/sirsuccess" target="_blank"
                        rel="noopener noreferrer"><i class="fa fa-facebook-square"></i></a>
                    <a href="http:/twitter.com/AmaniKanu" target="_blank"><i class="fa fa-twitter-square"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                </div>
                <div class="top-navbar-dropdown" id="top-navbar-dropdown">
                    {/* <!-- Eng <i class="fas fa-angle-down"></i> --> */}
                    <select name="lang" class="dropdown">
                        <option value="Eng">Eng</option>
                        <option value="Fr">Fr</option>
                        <option value="Spn">Spn</option>
                    </select>
                </div>
                {/* <!-- end of top navbar --> */}
            </div>
        </div>
        <nav class="navbar navbar-expand-md bg-white navbar-dark">
            {/* <!-- Toggler/collapsibe Button --> */}
            <button class="navbar-toggler bg-dark" type="button" data-toggle="collapse"
                data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Navbar links --> */}
            <div class="collapse navbar-collapse" id="collapsibleNavbar">

                <div class="navbar-link">
                    <ul class="navbar-nav">
                        <li>
                            <a href="/index.html">HOME</a>
                        </li>
                        <li>
                            <a href="#">LATEST</a>
                        </li>
                        <li>
                            <a href="#">SCIENCE</a>
                        </li>
                        <li>
                            {/* <!-- Brand --> */}

                            <a href="/index.html">
                                <div class="logo second">
                                    Tranzact Article
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">ENTERTAINMENT</a>
                        </li>
                        <li>
                            <a href="#">LIFESTYLE</a>
                        </li>
                        <li>
                            <a href="#">FITNESS</a>
                        </li>
                    </ul>
                    {/* <!-- end of navbar-link --> */}
                </div>
                {/* <!-- end of navbar --> */}
            </div>
        </nav>
        </>
    )
    
}