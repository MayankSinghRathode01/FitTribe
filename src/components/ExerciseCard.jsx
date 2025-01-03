import { useState } from "react";

export default function ExerciseCard(props) {
  const { exercise, i } = props;

  const [setsCompleted, setSetsComplete] = useState(0);

  function handleSetIncrement() {
    setSetsComplete((setsCompleted + 1) % 6);
  }

  return (
    <div className="p-4 rounded-md flex flex-col gap-4 bg-slate-950">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* First Column: Image */}
        <div className="flex justify-center items-center">
          <img
            src={exercise.gifUrl}
            alt={`${exercise.name} GIF`}
            className="rounded-md max-w-full h-auto"
          />
        </div>

        {/* Second Column: Description */}
        <div className="flex flex-col gap-2">
          <h4 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-400">
            0{i + 1}
          </h4>
          <h2 className="text-red-500 capitalize whitespace-nowrap truncate text-lg sm:text-xl md:text-2xl">
            {exercise.name.replaceAll("_", " ")}
          </h2>
          <p className="text-sm text-red-500 capitalize">{exercise.type}</p>
          <h3 className="text-gray-400 text-sm">Muscle Groups</h3>
          <p className="capitalize text-red-500">
            {exercise.muscles.join(" & ")}
          </p>
          <div className="flex flex-col bg-slate-950 rounded gap-2">
            {exercise.description.split("___").map((val, index) => (
              <div key={index} className="text-sm">
                {val}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row: Details */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {["reps", "rest", "tempo"].map((info) => (
          <div
            key={info}
            className="flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full"
          >
            <h3 className="capitalize text-slate-400 text-sm">
              {info === "reps" ? `${exercise.unit}` : info}
            </h3>
            <p className="font-medium text-red-500">{exercise[info]}</p>
          </div>
        ))}
        <button
          onClick={handleSetIncrement}
          className="flex flex-col p-2 rounded border-[1.5px] border-solid border-gray-400 hover:border-red-500 w-full duration-200"
        >
          <h3 className="text-slate-400 text-sm capitalize">Sets completed</h3>
          <p className="font-medium text-red-500">{setsCompleted} / 5</p>
        </button>
      </div>
    </div>
  );
}
