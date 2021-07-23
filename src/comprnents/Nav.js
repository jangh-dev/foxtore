import React from 'react';
import logo from '../images/logo.svg';
import '../scss/Nav.scss';
import { MdSearch } from 'react-icons/md';

function Nav() {
    return (
        <header className="navbar">
            <ul className="nav_left">
                <li><img src={logo} /></li>
                <li><a href="#">멋쟁이 제작자</a></li>
                <li><a href="#">먹방 & 레시피</a></li>
                <li><a href="#">건강한 이야기</a></li>
            </ul>
            <ul className="nav_right">
                <li><MdSearch className="search_icon"/><input type="text" placeholder="Search"/></li>
                <li><a href="#">로그인</a></li>
                <li><a href="#">회원가입</a></li>
            </ul>
        </header>
    );
}

export default Nav;