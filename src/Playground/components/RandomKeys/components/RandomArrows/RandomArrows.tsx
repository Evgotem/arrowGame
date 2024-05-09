import { FC } from "react"
import s from "./RandomArrows.module.scss"
import { MAP_ARROW_CODES } from "../../../../constants"
import { IMapArrowCodes } from "../../../../types"
import { useAppSelector } from "../../../../../app/hooks"
import { IPlaygroundStepsState } from "../../../../store/types"

interface IRandomArrowsProps {}

export const RandomArrows: FC<IRandomArrowsProps> = (props) => {
  const {} = props

  const steps = useAppSelector((state) => state.playground.steps)

  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    if (element.success) {
      return s.success
    }
    if (!element.success && element.success !== null) {
      return s.unsuccess
    }
    return s.icon
  }
  return (
    <>
      {steps.map((element) => (
        <span className={getStylesRandomKeys(element)} key={element.step}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </>
  )
}
