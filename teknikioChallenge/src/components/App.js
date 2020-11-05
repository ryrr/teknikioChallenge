import { useBetween } from "use-between";
import React, { useEffect, useState } from "react";
import Timer from './Timer.js'
import Trigger from './Trigger.js'
import Debug from './Debug.js'


const blockState = () => {
  const [trigger, setTrigger] = useState(false);
  const [timer, setTimer] = useState(false);
  return {
    trigger, setTrigger, timer, setTimer
  };
};

const useSharedState = () => useBetween(blockState);

export default () => (
  <>
    <h1>TEKNIKO blockState</h1>
    <Trigger sharedState={useSharedState()}></Trigger>
    <Timer sharedState={useSharedState()}></Timer>
    <Debug sharedState={useSharedState()}></Debug>
  </>
);
