import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";

export default function Login() {
    let csrf_token = document.head.querySelector(
        'meta[name="csrf-token"]'
    ).content;

    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div className="login-page">
                <Card border="dark" className="login-card">
                    <Card.Header>ログインフォーム</Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            <form>
                                <div>
                                    <h5>ログインID</h5>
                                    <input
                                        name="loginId"
                                        placeholder="ログインIDを入力してください"
                                        onChange={(e) =>
                                            setLoginId(e.target.value)
                                        }
                                    />
                                </div>
                                <div style={{ marginTop: "10px" }}>
                                    <h5>パスワード</h5>
                                    <input
                                        name="password"
                                        placeholder="パスワードを入力してください"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <button className="">LOGIN</button>
                            </form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
