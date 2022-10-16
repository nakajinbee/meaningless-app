import React from 'react'

export default function MudaEdit(){
    return(
        <>
            {/* ページタイトル部分 共通部品*/}
            <div className={"page-title-area"}>
                <div className={"page-title-text-area"}>
                    <div className={"page-title-text"}>無駄登録画面</div>
                    <div className={"page-subtitle-text"}>無駄を登録することができます。</div>
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
                {/* ページサブボタンエリア */}
                {/* END ページサブボタンエリア */}
                {/* フォームエリア */}
                {/* END フォームエリア */}
            {/*　END ページ部分 */}
        </>
    )
}
