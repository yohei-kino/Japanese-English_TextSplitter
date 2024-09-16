import { useState } from "react";
import TextInput from "./TextInput";
import Result from "./Result";

export default function FormContainer() {
  const [output, setOutput] = useState("");

  const handleTextSubmit = (text: string) => {
    setOutput(text.repeat(2));
  };

  return (
    <div>
      <TextInput onTextSubmit={handleTextSubmit} />
      <Result output={output} />
    </div>
  );
}
