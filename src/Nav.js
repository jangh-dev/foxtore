import React from 'react';
import logo from './images/logo.svg';

function Nav() {
    return (
        <header className="navbar">
            <nav className="nav">
                <ul>
                    <img src={logo} />
                    <li><a href="#">멋쟁이 제작자</a></li>
                    <li><a href="#">먹방 & 레시피</a></li>
                    <li><a href="#">건강한 이야기</a></li>
                </ul>
            </nav>
            <div className="nav_right">
                <input type="text" placeholder="Search" />
                <a href="#">로그인</a>
                <a href="#">회원가입</a>
            </div>
        </header>
    );
}

export default Nav;