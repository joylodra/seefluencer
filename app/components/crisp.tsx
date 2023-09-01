"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5402b49a-be1a-424c-8b80-cf6acd5ed97b");
  });

  return null;
};

export default CrispChat;
