import { Dispatch, FC, SetStateAction } from "react"
import { Button } from "../../../UI"
import s from "./Controls.module.scss"
import clsx from "clsx"
import { PlayArrow, Pause } from "@mui/icons-material"

interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: Dispatch<SetStateAction<boolean>>
}

export const Controls: FC<IControlsProps> = (props) => {
  const { isTimerActive, setIsTimerActive } = props

  return (
    <div>
      <Button
        className={clsx(s.button, s.button_play)}
        onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive}
        endIcon={<PlayArrow />}
      >
        play
      </Button>
      <Button
        className={s.button}
        onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive}
        endIcon={<Pause />}
      >
        pause
      </Button>
    </div>
  )
}
