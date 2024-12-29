import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/exercises";
import { useState } from "react";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 justify-center">
        <p className="text-red-500 text-3xl sm:text-4xl md:text-5xl font-semibold">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl ">{title}</h4>
      </div>
      <p className="text-base sm:text-lg mx-auto">{description}</p>
    </div>
  );
}

function Generator({
  muscles,
  setMuscles,
  poison,
  setPoison,
  goal,
  setGoal,
  updateWorkout,
}) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }

  return (
    <SectionWrapper
      id={"generate"}
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setMuscles([]);
                setPoison(type);
              }}
              className={`${
                type === poison ? "bg-red-500 text-slate-950" : "bg-slate-950"
              } border border-red-500 py-3 hover:bg-red-500 hover:text-slate-950 rounded-lg duration-200 px-4`}
              key={typeIndex}
            >
              <p className="capitalize font-medium">
                {type.replaceAll("_", " ")}
              </p>
            </button>
          );
        })}
      </div>

      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation."}
      />
      <div className=" bg-slate-950 border border-solid border-red-500 rounded-lg flex flex-col">
        <button
          onClick={toggleModal}
          className="relative flex justify-center p-3 items-center"
        >
          <p
            className={`${
              muscles.length === 0 ? "capitalize" : "capitalize text-red-500"
            }`}
          >
            {muscles.length === 0 ? "Select muscle groups" : muscles.join(", ")}
          </p>
          <i className="fa-sharp absolute right-3 top-1/2 -translate-y-1/2 fa-solid fa-caret-down"></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  key={muscleGroupIndex}
                  onClick={() => updateMuscles(muscleGroup)}
                  className={`hover:text-red-500 duration-200 ${
                    muscles.includes(muscleGroup) ? "text-red-500" : ""
                  }`}
                >
                  <p className="uppercase">
                    {muscleGroup.replaceAll("_", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Header
        index={"03"}
        title={"Beast Mode On!"}
        description={"Select your ultimate objective."}
      />
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoal(scheme);
              }}
              className={`${
                scheme === goal ? "bg-red-500 text-slate-950" : "bg-slate-950"
              } border border-red-500 py-3 hover:bg-red-500 hover:text-slate-950 rounded-lg duration-200 px-3  overflow-auto `}
              key={schemeIndex}
            >
              <p className="capitalize font-medium">
                {scheme.replaceAll("_", " ")}
              </p>
            </button>
          );
        })}
      </div>

      <Button func={updateWorkout} text={"Formulate"} />
    </SectionWrapper>
  );
}

export default Generator;
