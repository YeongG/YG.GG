import React from 'react';
import './Normal.css'

function Normal () {
    return (
        <React.Fragment>
            <nav>
                <div className="logo">
                    <div className="logo-text">
                        <span>YG.GG</span>
                    </div>
                </div>
                <div className="nav-right">
                    <img src="https://opgg-static.akamaized.net/images/icon-language@2x.png" alt="logo" />
                    <div className="language">한국어</div>
                    <button className="login">로그인</button>
                </div>
            </nav>
            <div className="menu">
                <ul>
                    <li className="active"><span href="#">홈</span></li>
                    <li><span href="#">챔피언 분석</span></li>
                    <li><span href="#">통계</span></li>
                    <li><span href="#">랭킹</span></li>
                    <li><span href="#">프로관전</span></li>
                    <li><span href="#">커뮤니티</span></li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default Normal;