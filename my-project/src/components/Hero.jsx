import Button from "./Button";

function Hero() {
  return (
    <div className="min-h-screen z-10 flex flex-col gap-12 items-center justify-center text-center max-w-[950px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4 ">
        <p className="font-semibold text-base md:text-lg">WELCOME TO YOUR</p>
        <h1 className="uppercase  font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl ">
          FIT<span className="text-red-500">TRIBE</span>{" "}
        </h1>
      </div>
      <p className="text-base md:text-lg font-medium">
        I hereby acknowledgement that by becoming a{" "}
        <span className="text-red-500 font-semibold">FitTriber</span>, I accept
        all the risks of becoming the local{" "}
        <span className="text-red-500 font-semibold">
          friendly neighborhood hulk
        </span>
        , unable to fit through doors, filled with an insatiable desire to
        become the{" "}
        <span className="text-red-500 font-semibold">best version</span> of
        myself.
      </p>
      <Button text={"Accept & Begin"} />
    </div>
  );
}

export default Hero;
