"use client";

import { useState } from "react";
import TextInput from "./TextInput";
import Result from "./Result";

export default function FormContainer() {
  const [output, setOutput] = useState<{
    japaneseText: string;
    englishText: string;
  }>({
    japaneseText: "",
    englishText: "",
  });

  const handleTextSubmit = (text: string) => {
    // 日本語の文字を抽出
    const japaneseMatches = text.match(
      /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]+/gu
    );
    const japaneseText = japaneseMatches ? japaneseMatches.join("") : "";

    // 英語の文字を抽出
    const englishMatches = text.match(/[A-Za-z]+/g);
    const englishText = englishMatches ? englishMatches.join(" ") : "";

    // 状態を更新
    setOutput({ japaneseText, englishText });
  };

  return (
    <div>
      <TextInput onTextSubmit={handleTextSubmit} />
      <Result output={output} />
    </div>
  );
}
