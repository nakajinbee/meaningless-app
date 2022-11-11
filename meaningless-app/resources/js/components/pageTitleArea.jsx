import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function PageTitleArea({ title, subtitle, hasData =false, submitAction, isHome=false}) {
    const buttonLabel = hasData ? "更新": "登録";
    const navigate = useNavigate();

    return(
        <>
            {/* ページタイトル部分 共通部品*/}
            <div className={"page-title-area"}>
                <div className={"page-title-text-area"}>
                    <div className={"page-title-text"}>{title}</div>
                    <div className={"page-subtitle-text"}>{subtitle}</div>
                </div>
                {/* ボタンエリア */}
                {isHome ? (""):
                <div className={"page-top-btn-area"}>
                    <button className={"primary-button form-main-button"} onClick={submitAction}>{buttonLabel}</button>
                    <button className={"secondary-button form-main-button"} onClick={()=> navigate(-1)}>戻る</button>
                </div>
                }
                {/* ボタンエリア */}
            </div>
            {/* END ページタイトル部分 */}
        </>
    )
}