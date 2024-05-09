import { FC } from "react"
import { useAppSelector } from "../../../app/hooks"
import { RandomArrows } from "./components/RandomArrows"
import { WelcomeText } from "./components/WelcomeText"

interface IRandomKeysProps {
  isTimerActive: boolean
}

export const RandomKeys: FC<IRandomKeysProps> = (props) => {
  const { isTimerActive } = props

  const steps = useAppSelector((state) => state.playground.steps)

  return (
    <div>
      <h3>Random keys</h3>
      {steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </div>
  )
}
