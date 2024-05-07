import React, { FC, useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { Controls } from "./components/Controls/Controls"
import { INTERVAL_TIME } from "./constants"
import { setCurrentStep, setSteps, setUnsuccess } from "./store/slices"
import { RandomKeys } from "./components/RandomKeys"
import { KeyPressed } from "./components/KeyPressed"

export const Playground: FC = () => {
  const state = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()
  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setUnsuccess())
        dispatch(setCurrentStep())
        dispatch(setSteps())
      }, INTERVAL_TIME)
    } else {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }

    return () => clearInterval(refreshIntervalId.current as NodeJS.Timeout)
  }, [dispatch, isTimerActive])

  return (
    <div>
      {state.currentStep}
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <RandomKeys isTimerActive={isTimerActive} />
      <KeyPressed isTimerActive={isTimerActive} />
    </div>
  )
}
