import React, { useState, useEffect, useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import Message from "./Message";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    // clean-up 함수: useEffect()에서 parameter로 넣은 함수의 return 함수
    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <>
      <div className="Messages">
        {messages.map((m) => {
          return <Message message={m} key={m.id} />;
        })}
      </div>
    </>
  );
};

export default Messages;
