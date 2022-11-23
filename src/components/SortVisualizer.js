import React, { useEffect, useState } from "react";
import BubbleSort from "../SortFunctions/BubbleSort";
import Bar from "./Bar";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import "./styles.css";
import InsertionSort from "../SortFunctions/InsertionSort";
const arr = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 45 + 5)
);
const initial_state = {
  array: arr,
};
const SortVisualizer = () => {
  const [size, setSize] = useState(10);
  //const [array, setArray] = useState(arr);
  //const [steps, setSteps] = useState([]);
  const [animation, setAnimation] = useState(initial_state);
  const [timeouts, setTimeOuts] = useState([]);

  const generateRandomArray = () => {
    const arr = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 45 + 5)
    );
    setAnimation({
      array: arr,
    });
  };

  //console.log(animation);

  const clearTimeOuts = () => {
    timeouts.forEach((item) => clearTimeout(item));
    setTimeOuts([]);
  };
  //function runs bubble sort
  const Bubble = (e) => {
    e.preventDefault();
    console.log("running bubblesort");
    const animations = BubbleSort([...animation.array]);
    console.log("here", animations);
    clearTimeOuts();
    let t = []; //variable stores timeouts

    for (var i = 0; i < animations.length; i++) {
      const step = animations[i];
      let delayStep = setTimeout(() => {
        setAnimation({
          method: "Bubble",
          array: step.arr,
          bubble: { curr: step.curr, comp: step.comp, swap: step.swap },
        });
        t.push(delayStep);
      }, 1000 * (i + 1));
    }

    setTimeOuts(t);
  };

  const Insertion = (e) => {
    e.preventDefault();
    console.log("running insertion sort");
    const animations = InsertionSort([...animation.array]);
    console.log("here", animations);
    clearTimeOuts();
    let t = []; //variable stores timeouts

    for (var i = 0; i < animations.length; i++) {
      const step = animations[i];
      let delayStep = setTimeout(() => {
        setAnimation({
          method: "Insertion",
          array: step.arr,
          insertion: {
            curr: step.curr,
            comp: step.comp,
            swap: step.swap,
            sorted: step.sorted,
            key: step.skey,
          },
        });
        t.push(delayStep);
      }, 1000 * (i + 1));
    }

    setTimeOuts(t);
  };

  console.log(animation);
  return (
    <div className="sort-visualizer-container">
      <div className="sort-visualizer-header">SortVisualizer</div>
      <div className="controls">
        <button onClick={Bubble} style={{ marginRight: "5px" }}>
          Bubble Sort
        </button>
        <button onClick={Insertion} style={{ marginRight: "5px" }}>
          Insertion Sort
        </button>
        <div className="size">
          <AiOutlineMinusCircle
            size={40}
            onClick={() => {
              setSize((prev) => (prev == 1 ? 1 : prev - 1));
            }}
          />
          <input
            value={size}
            type="number"
            onChange={(e) => {
              setSize(e.target.value);
            }}
          />
          <AiOutlinePlusCircle
            size={40}
            onClick={() => {
              setSize((prev) => (prev == 45 ? 45 : prev + 1));
            }}
          />
        </div>
        <button onClick={generateRandomArray} style={{ marginLeft: "5px" }}>
          Generate Array
        </button>
      </div>

      <h2>{animation.method ? animation.method + " Sort" : ""}</h2>
      <div>
        {animation.method == "Insertion" ? (
          <h2>Selected Key = {animation.insertion.key}</h2>
        ) : (
          ""
        )}
      </div>
      <div className="bars">
        {animation.array.map((value, index) => (
          <Bar
            index={index}
            height={value}
            width={9 + Math.floor(60 / animation.array.length)}
            type={animation.bubble || animation.insertion}
          />
        ))}
      </div>
    </div>
  );
};

export default SortVisualizer;
