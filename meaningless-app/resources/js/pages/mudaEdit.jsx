import React, { useState, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export default function MudaEdit() {

    let csrf_token = document.head.querySelector(
        'meta[name="csrf-token"]'
    ).content

    const [mudaText, setMudaText] = useState('');
    const [mudaTime, setMudaTime] = useState(0);

    function addMuda() {
        setMudaText(mudaText + "無駄");
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setMudaTime(mudaTime => mudaTime + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    function registMuda() {
        alert("無駄を登録しました");
    }

    return (
        <>
            {/* ページタイトル部分 共通部品*/}
            <div className={"page-title-area"}>
                <div className={"page-title-text-area"}>
                    <div className={"page-title-text"}>無駄登録画面</div>
                    <div className={"page-subtitle-text"}>無駄テキスト登録することができます。</div>
                </div>
                {/* ボタンエリア */}
                <div className={"page-top-btn-area"}>
                    <button className={"primary-button form-main-button"} onClick={registMuda}>登録</button>
                    <button className={"secondary-button form-main-button"}>戻る</button>
                </div>
                {/* ボタンエリア */}
            </div>
            {/* END ページタイトル部分 */}
            {/*　ページ部分 */}
            <div className={"main-contents-area"}>
                <div className={"error-message-area"}></div>
                {/* ページサブボタンエリア */}
                <div className={"sub-button-area"}>
                    <button className={"secondary-button sub-button"} onClick={addMuda}>無駄生成</button>
                    <div className={"muda-display-time"}>
                        無駄にした時間：{mudaTime}
                    </div>
                </div>
                {/* END ページサブボタンエリア */}
                {/* フォームエリア */}
                <div className={"form-area"}>
                    <form>
                        <input type="hidden" name="_token" value={csrf_token}/>
                        <TextareaAutosize className={"muda-textarea"} name="mudaText" value={mudaText} onChange={(e) =>setMudaText(e.target.value)}/>
                        <input type="hidden" name="mudaTime" value={mudaTime}></input>
                    </form>
                </div>
                {/* END フォームエリア */}
            </div>
            {/*　END ページ部分 */}
        </>
    )
}
