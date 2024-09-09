const BottomBar: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 px-32">
      <div className="flex justify-between">
        <p className="text-sm whitespace-pre-line">
          DISCLAIMER: The contents of this website are for informational{"\n"}
          purposes only and do not constitute professional advice. Please{"\n"}
          consult with a qualified professional for any specific questions or
          {"\n"}
          concerns.
        </p>
        <p className="text-sm whitespace-pre-line">
          Copyright 2024 Baic - Saudi Arabia
        </p>
      </div>
    </footer>
  );
};

export default BottomBar;
