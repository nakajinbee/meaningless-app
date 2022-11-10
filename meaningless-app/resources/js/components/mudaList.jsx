import React, { useState, useEffect } from 'react';


export default function MudaList() {
        
    const [mudaList, setMudaList] = useState([]);
  
    useEffect(() => {
        axios
        .get("http://localhost/api/muda", {
        })
        .then((response) => {
            console.log(response.data);
            setMudaList(response.data);
            
        })
        .catch((error) => {
          console.log(error);
        });
    }, [])

    return (
        <>
            <table>
                <tr>
                    <th></th>
                    <th>id</th>
                    <th>入力文字数</th>
                    <th>無駄にした時間</th>
                    <th>登録日時</th>
                    <th>更新日時</th>
                </tr>
                {mudaList.map((muda,idx)=>(
                    <tr>
                        <th><button>更新</button></th>
                        <td>{muda.id}</td>
                        <td>{muda.muda_text}</td>
                        <td>{muda.waste_time}</td>
                        <td>{muda.created_dt}</td>
                        <td>{muda.updated_dt}</td>
                    </tr>
                )
                )}
                <tr></tr>
            </table>
        </>
    )
}
