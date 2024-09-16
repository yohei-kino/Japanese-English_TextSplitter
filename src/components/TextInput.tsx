import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Start } from "@mui/icons-material";

// TextInputコンポーネントにonTextSubmitをプロパティとして受け取るように
interface TextInputProps {
  onTextSubmit: (text: string) => void;
}

export default function TextInput({ onTextSubmit }: TextInputProps) {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onTextSubmit(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-[60px] text-center">
        <label htmlFor="textInput" className="text-[18px]">
          テキストを入力してください
        </label>
        <textarea
          id="textInput"
          value={text}
          onChange={handleChange}
          rows={10}
          cols={50}
          className="border-[1px] border-[#000] border-solid mx-auto block w-3/4 p-[8px] mt-[8px]"
        />
      </div>
      <div className="text-center mt-[20px]">
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          endIcon={<Start />}
        >
          実行
        </Button>
      </div>
    </form>
  );
}
