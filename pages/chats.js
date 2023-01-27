import React, { useContext, useState, useEffect } from "react";
import { Context } from "../context/index";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() => import("react-chat-engine").then((module) => module.ChatEngine));
const MessageFormSocial = dynamic(() => import("react-chat-engine").then((module) => module.MessageFormSocial));

export default function Chats() {
  const { username, secret } = useContext(Context);
  const router = useRouter();
  const [showChat, setShowChat] = useState(false);


  useEffect(() => {
    if(typeof document !== null) setShowChat(true);
  })

  useEffect(() => {
    if(username.length === 0 || secret.length === 0) router.push("/")
  })

  if(!showChat) return <div />

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
        height='calc(100vh - 200px)'
        projectID = '9f99270d-15b3-403c-b9d3-17cc837b2b6f'
        userName={username}
        userSecret = {secret}
        renderNewMessageForm={() => <MessageFormSocial/>}
        />
      </div>
    </div>
  );
}
