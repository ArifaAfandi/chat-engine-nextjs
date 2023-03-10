import React, { useContext } from "react";
import { Context } from "../context/index";
import { useRouter } from "next/router";
import axios from "axios";

export default function Auth() {
  const { setUsername, username, secret, setSecret } = useContext(Context)
  const router = useRouter()
  function onSubmit(e) {
    e.preventDefault()

    if(username.length === 0 || secret.length === 0) return

    axios.put('https://api.chatengine.io/users/', {username, secret},
    {headers: {"Private-key": "8a1e9cbf-a656-4b8e-8714-9bbb6307677f"}}
    ).then(res => router.push('/chats'))
  }
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={e => onSubmit(e)}>
          <div className="auth-title">NextJS Chat</div>
          <div className="input-container">
            <input
              placeholder="Email or Username"
              className="text-input"
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={e => setSecret(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="submit-button"
          >
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
