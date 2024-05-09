import { FC } from "react"
import s from "./WelcomeText.module.scss"

interface IWelcomeTextProps {
  isTimerActive: boolean
}

export const WelcomeText: FC<IWelcomeTextProps> = (props) => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return <span>...Loading</span>
  }

  return (
    <span>
      Press "Play" to start game and wait for the first arrow to appear
    </span>
  )
}
