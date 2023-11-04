import { Link } from 'react-router-dom';
import React from "react";



export default function Header() {
    return (
        <div className="Header">
            <div className="regist">
                <Link to="/regist" className="link">사용자 등록</Link>
            </div>
            <div className="list">
                <Link to="/users" className="link">사용자 목록</Link>
            </div>
        </div>
    );
}