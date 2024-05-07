import { Dispatch, FC, SetStateAction } from "react"

interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: Dispatch<SetStateAction<boolean>>
}

export const Controls: FC<IControlsProps> = (props) => {
  const { isTimerActive, setIsTimerActive } = props

  return (
    <div>
      <button onClick={() => setIsTimerActive(true)} disabled={isTimerActive}>
        play
      </button>
      <button onClick={() => setIsTimerActive(false)} disabled={!isTimerActive}>
        pause
      </button>
    </div>
  )
}
