import React from 'react'

export default function MudaEdit(){
    return(
        <>
            {/* ページタイトル部分 共通部品*/}
            <div className={"page-title-area-style"}>
                <div className={"page-title-text-style"}>
                    <div>無駄登録画面</div>
                    <div>無駄を登録することができます。</div>
                </div>
                    {/* ボタンエリア */}
                    <div className={"page-top-btn-area"}>
                        <div>登録ボタン</div>
                        <div>戻るボタン</div>
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
