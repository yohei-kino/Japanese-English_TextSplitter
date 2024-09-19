interface ResultProps {
  output: {
    japaneseText: string;
    englishText: string;
  };
}

export default function Result({ output }: ResultProps) {
  // outputが空の場合は何も表示しない
  if (!output.japaneseText && !output.englishText) {
    return null;
  }

  // 日本語の文字数をカウント
  const japaneseCharacterCount = output.japaneseText.length;

  // 英語の単語数をカウント
  const englishWordCount = output.englishText
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  return (
    <div className="mx-auto block w-3/4 p-[8px] mt-[24px] text-[18px]">
      <div className="flex gap-[8px] justify-center mb-[8px]">
        <img src="./jp_flag.webp" alt="japan flag" width={25} height={25} />
        <h2>日本語のテキスト:</h2>
        <p>文字数 {japaneseCharacterCount}</p>
      </div>
      <div className="border-[1px] border-[#000] border-solid text-[15px] bg-blue-50">
        <p className="p-[2px]">{output.japaneseText}</p>
      </div>

      <div className="mt-[24px]">
        <div className="flex gap-[8px] justify-center mb-[8px]">
          <img src="./uni_flag.webp" alt="japan flag" width={25} height={25} />
          <h2>英語のテキスト:</h2>
          <p>単語数 {englishWordCount}</p>
        </div>
        <div className="border-[1px] border-[#000] border-solid text-[15px] bg-red-50">
          <p className="p-[2px]">{output.englishText}</p>
        </div>
      </div>
    </div>
  );
}
