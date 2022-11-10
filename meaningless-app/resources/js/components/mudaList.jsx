import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

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
            <Table striped bordered>
                <thead>
                    <tr>
                        <th></th>
                        <th>＃</th>
                        <th>入力文字数</th>
                        <th>無駄にした時間</th>
                        <th>登録日時</th>
                        <th>更新日時</th>
                    </tr>
                </thead>
                <tbody>
                    {mudaList.map((muda,idx)=>(
                        <tr>
                            <td style={{textAlign:'center', width:'100px'}}><button className={'secondary-button list-button'}>更新</button></td>
                            <td style={{textAlign:'right',width:'50px'}}>{muda.id}</td>
                            <td style={{textAlign:'right'}}>{muda.muda_text}</td>
                            <td style={{textAlign:'right'}}>{muda.waste_time}秒</td>
                            <td>{muda.created_dt}</td>
                            <td>{muda.updated_dt}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </Table>
        </>
    )
}
