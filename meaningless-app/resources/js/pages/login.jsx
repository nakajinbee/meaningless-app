import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import CardHeader from "react-bootstrap/esm/CardHeader";

export default function Login() {
    let csrf_token = document.head.querySelector(
        'meta[name="csrf-token"]'
    ).content;

    return (
        <>
            <div className="login-page">
                <Card border="dark" className="login-card">
                    <Card.Header>ログイン</Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
