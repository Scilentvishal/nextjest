"use client";
import React, { useState } from "react";
import { fetch } from "whatwg-fetch";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isDisabled = () => !username || !password;
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the content type
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setSuccess("Success Logging In");
      })
      .catch((err) => {
        setError("Error Logging In");
      });
  };
  return (
    <form>
      <div>{error}</div>
      <div>{success}</div>
      <label htmlFor="username">Username</label>
      <input
        value={username}
        type="text"
        id="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <label htmlFor="password">password</label>
      <input
        value={password}
        type="password"
        id="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button onClick={handleLogin} disabled={isDisabled()}>
        Login
      </button>
    </form>
  );
};

export default RegisterForm;
