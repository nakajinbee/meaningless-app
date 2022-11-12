import React, { useState, useEffect } from 'react';


export default function MudaSummary() {
        
    const [sumMudaText, setSumMudaText] = useState(0);
    const [sumMudaTime, setSumMudaTime] = useState(0);

    useEffect(() => {
        axios
        .get("http://localhost/api/muda-summary", {
        })
        .then((response) => {
            setSumMudaText(response.data.muda_summary);
            setSumMudaTime(response.data.waste_time);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [])

    return (
        <>
            <div>
                <div>無駄な入力合計：{sumMudaText}文字</div>
                <div>無駄にした合計時間：{sumMudaTime}秒</div>
            </div>
        </>
    )
}
