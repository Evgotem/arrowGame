import { FC } from "react"
import { useAppSelector } from "../../../app/hooks"
import { MAP_ARROW_CODES } from "../../constants"
import { IMapArrowCodes } from "../../types"

interface IRandomKeysProps {
  isTimerActive: boolean
}

export const RandomKeys: FC<IRandomKeysProps> = (props) => {
  // const { isTimerActive } = props

  const steps = useAppSelector((state) => state.playground.steps)

  return (
    <div>
      {steps.map((element) => (
        <span key={element.step}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}
