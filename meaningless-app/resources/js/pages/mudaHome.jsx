import React, { useState, useEffect } from 'react';
import PageTitleArea from "../components/pageTitleArea"
import MudaSummary from "../components/mudaSummary"
import MudaList from "../components/mudaList"
import { Link } from "react-router-dom";

export default function MudaHome() {

    let csrf_token = document.head.querySelector(
        'meta[name="csrf-token"]'
    ).content

    return (
        <>
            <PageTitleArea 
            title={"無駄ホーム画面"}
            subtitle={"無駄な時間を楽しみましょう"}
            isHome={true}
            />
            {/*　ページ部分 */}
            <div className={"main-contents-area"}>
                <div className={"error-message-area"}></div>
                {/* ページサブボタンエリア */}
                <div className={"sub-button-area"}>
                    <Link to={`/muda`}>
                        <button className={"secondary-button sub-button"}>無駄を登録する</button>
                    </Link>
                </div>
                {/* END ページサブボタンエリア */}
                <div style={{paddingTop:'10px'}}>
                    <MudaSummary />
                </div>
                <div style={{paddingTop:'30px'}} >
                    <MudaList />
                </div>
            </div>
            {/*　END ページ部分 */}
        </>
    )
}
