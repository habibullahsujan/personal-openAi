"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0a964530-1ca4-4c8d-96f8-e7e31f96a4b5");
  }, []);
  return null;
};
