interface ResultProps {
  output: {
    japaneseText: string;
    englishText: string;
  };
}

export default function Result({ output }: ResultProps) {
  // 日本語の文字数をカウント
  const japaneseCharacterCount = output.japaneseText.length;

  // 英語の単語数をカウント
  const englishWordCount = output.englishText
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  return (
    <div>
      <h2>日本語のテキスト:</h2>
      <p>{output.japaneseText}</p>
      <p>文字数: {japaneseCharacterCount}</p>

      <h2>英語のテキスト:</h2>
      <p>{output.englishText}</p>
      <p>単語数: {englishWordCount}</p>
    </div>
  );
}
