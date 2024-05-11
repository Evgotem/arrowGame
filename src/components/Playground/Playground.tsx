import React, { FC, useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { Controls } from "./components/Controls"
import { END_GAME_CONDITIONS, INTERVAL_TIME } from "./constants"
import { setCurrentStep, setSteps, setUnsuccess } from "./store/slices"
import { RandomKeys } from "./components/RandomKeys"
import { KeyPressed } from "./components/KeyPressed"
import { Score } from "./components/Score"
import { Modal } from "./components/Modal"
import { Description } from "./components/Description"
import s from "./Playground.module.scss"

export const Playground: FC = () => {
  const state = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()
  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)
  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false)

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

  useEffect(() => {
    const isSuccessful =
      state.totalSuccessful === END_GAME_CONDITIONS.SUCCESS_COUNT
    const isUnsuccessful =
      state.totalUnsuccessful === END_GAME_CONDITIONS.UNSUCCESS_COUNT

    isSuccessful && setIsSuccessEndGame(true)
    isUnsuccessful && setIsSuccessEndGame(false)

    if (isSuccessful || isUnsuccessful) {
      setIsShowModal(true)
      setIsTimerActive(false)
    }
  }, [state.totalSuccessful, state.totalUnsuccessful])

  return (
    <div className={s.container}>
      <div className={s.column}>
        <RandomKeys isTimerActive={isTimerActive} />
        <KeyPressed isTimerActive={isTimerActive} />
        <Score />
      </div>

      <div className={s.column}>
        <Description />
        <Controls
          isTimerActive={isTimerActive}
          setIsTimerActive={setIsTimerActive}
        />
      </div>

      {isShowModal && (
        <Modal setIsOpen={setIsShowModal} isSuccessEndGame={isSuccessEndGame} />
      )}
    </div>
  )
}
