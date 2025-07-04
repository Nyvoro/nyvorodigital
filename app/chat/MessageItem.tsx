"use client";

import React from "react";
import { Message } from "./ChatWindow";
import TypingDots from "./TypingDots";

interface Props {
  message: Message;
}

export default function MessageItem({ message }: Props) {
  const isUser = message.role === "user";
  const isPlaceholder = message.role === "bot" && message.content === "…";
  return (
    <li
      role="listitem"
      className={`my-1 flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] rounded-md px-3 py-2 text-sm ${
          isUser
            ? "bg-blue-600 text-white shadow"
            : "bg-gray-200 text-gray-900"
        } ${message.role === "bot" ? "animate-fade-in" : ""}`}
      >
        {isPlaceholder ? <TypingDots /> : message.content}
      </div>
    </li>
  );
}

