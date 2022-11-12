import React, { useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import PageTitleArea from "../components/pageTitleArea";
import { useNavigate, useParams } from "react-router-dom";

export default function MudaEdit() {
    let csrf_token = document.head.querySelector(
        'meta[name="csrf-token"]'
    ).content;

    const params = useParams();
    const navigate = useNavigate();

    const [mudaText, setMudaText] = useState("");
    const [mudaTime, setMudaTime] = useState(0);

    function addMuda() {
        setMudaText(mudaText + "無駄");
    }

    const getMuda = (id) => {
        axios
            .get(`http://localhost/api/muda/${id}`)
            .then((response) => {
                setMudaText(response.data.muda_text);
                setMudaTime(response.data.waste_time);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (params.id) {
            getMuda(params.id);
        }
        const interval = setInterval(() => {
            setMudaTime((mudaTime) => mudaTime + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const updateMuda = () => {
        console.log("updateを実行");
        console.log("↓idの値");
        console.log(params.id);
        axios
            .put(`http://localhost/api/muda/${params.id}`, {
                id : params.id,
                mudaText: mudaText,
                mudaTime: mudaTime,
            })
            .then((response) => {
                alert("更新しました");
                navigate(-1);

            })
            .catch((error) => {
                console.log(error);
            });
    };

    const createMuda = () => {
        console.log("登録ボタン押下");
        axios
            .post("http://localhost/api/muda", {
                mudaText: mudaText,
                mudaTime: mudaTime,
            })
            .then((response) => {
                alert(response.data);
                navigate(-1);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <PageTitleArea
                title={params.id ? "無駄更新画面" : "無駄登録画面"}
                subtitle={
                    params.id
                        ? "無駄を更新することができます。"
                        : "無駄を登録することができます。"
                }
                submitAction={params.id ? updateMuda : createMuda}
                updateId={params.id}
            />
            {/*　ページ部分 */}
            <div className={"main-contents-area"}>
                <div className={"error-message-area"}></div>
                {/* ページサブボタンエリア */}
                <div className={"sub-button-area"}>
                    <button
                        className={"secondary-button sub-button"}
                        onClick={addMuda}
                    >
                        無駄生成
                    </button>
                    <div className={"muda-display-time"}>
                        無駄にした時間：{mudaTime}
                    </div>
                </div>
                {/* END ページサブボタンエリア */}
                {/* フォームエリア */}
                <div className={"form-area"}>
                    <form id="mudaForm">
                        <input type="hidden" name="_token" value={csrf_token} />
                        <TextareaAutosize
                            className={"muda-textarea"}
                            name="mudaText"
                            value={mudaText}
                            onChange={(e) => setMudaText(e.target.value)}
                        />
                        <input
                            type="hidden"
                            name="mudaTime"
                            value={mudaTime}
                        ></input>
                    </form>
                </div>
                {/* END フォームエリア */}
            </div>
            {/*　END ページ部分 */}
        </>
    );
}
