function Heading({ children }) {
  return (
    <div className="flex flex-col justify-center gap-y-2 mt-10 mb-10">
      <div className="w-[50px] mt-2 h-[8px] bg-primary"></div>
      <div className="text-black font-bold text-4xl">
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Heading;
