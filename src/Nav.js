import React from 'react';
import logo from './images/logo.svg';

function Nav() {
    return (
        <header className="navbar">
            <img src={logo} />
            <nav className="nav">
                <ul>
                    <li>멋쟁이 제작자</li>
                    <li>먹방 & 레시피</li>
                    <li>건강한 이야기</li>
                </ul>
                <input type="text" placeholder="Search" />
                <div>
                    <a href="#">로그인</a>
                    <a href="#">회원가입</a>
                </div>
            </nav>
        </header>
    );
}

export default Nav;