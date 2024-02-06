interface KeywordProps {
  text: string;
  styles?: string;
}

const Keyword = ({ text, styles }: KeywordProps) => {
  return (
    <div className={`w-max rounded-lg bg-amber-500 px-3 py-2 font-bold ${styles ? styles : ''}`}>
      <p>#{text}</p>
    </div>
  );
};

export default Keyword;
