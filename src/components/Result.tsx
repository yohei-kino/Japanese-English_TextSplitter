interface ResultProps {
  output: string;
}

export default function Result({ output }: ResultProps) {
  return (
    <div className="mt-[20px] text-center">{output && <p>{output}</p>}</div>
  );
}
