import React, { useState, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import PageTitleArea from "../components/pageTitleArea"

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

    const createMuda = () => {
        alert("asdf");
        axios
          .post("http://localhost/api/mudaedit/create", {
            title: title,
            author: author,
          })
          .then((response) => {
          })
          .then(() => {
          })
          .catch((error) => {
            console.log(error);
          });
      };

    return (
        <>
            <PageTitleArea 
            title={"無駄登録画面"}
            subtitle={"無駄を登録することができます。"}
            submitAction={createMuda}
            />
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
                    <form id="mudaForm">
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
