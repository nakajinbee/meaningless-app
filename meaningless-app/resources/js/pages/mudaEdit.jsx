import React from 'react'

export default function MudaEdit() {
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
                    <button className={"primary-button form-main-button"}>登録</button>
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
                    <button className={"secondary-button sub-button"}>無駄生成</button>
                    <div className={"muda-display-time"}>
                        無駄にした時間：{ }
                    </div>
                </div>
                {/* END ページサブボタンエリア */}
                {/* フォームエリア */}
                <div className={"form-area"}>
                    <form>
                        <textarea className={"muda-textarea"}></textarea>
                    </form>
                </div>
                {/* END フォームエリア */}
            </div>
            {/*　END ページ部分 */}
        </>
    )
}
