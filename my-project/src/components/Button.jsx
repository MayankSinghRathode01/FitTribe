function Button({ text }) {
  return (
    <button className="px-8 mx-auto py-4 rounded-md border-[2px] text-red-500 border-solid border-red-500 bg-slate-950 redShadow duration-200 hover:text-white">
      {" "}
      <p>{text}</p>{" "}
    </button>
  );
}

export default Button;
