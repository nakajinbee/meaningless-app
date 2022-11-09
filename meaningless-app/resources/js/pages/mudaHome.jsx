import React, { useState, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import PageTitleArea from "../components/pageTitleArea"
import MudaSummary from "../components/mudaSummary"

export default function MudaHome() {

    let csrf_token = document.head.querySelector(
        'meta[name="csrf-token"]'
    ).content

    return (
        <>
            <PageTitleArea 
            title={"無駄ホーム画面"}
            subtitle={"無駄な時間を楽しみましょう"}
            // submitAction={createMuda}
            isHome={true}
            />
            {/*　ページ部分 */}
            <div className={"main-contents-area"}>
                <div className={"error-message-area"}></div>
                {/* ページサブボタンエリア */}
                <div className={"sub-button-area"}>
                    <button className={"secondary-button sub-button"}>無駄を登録する</button>
                </div>
                {/* END ページサブボタンエリア */}

                {/* サマリー表示 */}
                <MudaSummary />

                {/* END サマリー表示 */}

                {/* 履歴表示 */}

                {/* END 履歴表示 */}

            </div>
            {/*　END ページ部分 */}
        </>
    )
}
