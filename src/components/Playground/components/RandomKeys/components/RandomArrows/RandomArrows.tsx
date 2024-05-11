import clsx from "clsx"

import { useAppSelector } from "../../../../../../app/hooks"
import { IPlaygroundStepsState } from "../../../../store/types"
import { MAP_ARROW_CODES } from "../../../../constants"
import { IMapArrowCodes } from "../../../../types"

import stylesCommon from "../../RandomKeys.module.scss"
import s from "./RandomArrows.module.scss"
import { FC } from "react"

export const RandomArrows: FC = () => {
  const state = useAppSelector((state) => state.playground)

  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    return clsx(
      element?.success !== null && s.iconSuccess,
      !element.success && element.success !== null && s.iconUnsuccess,
      stylesCommon.icon,
    )
  }

  return (
    <div className={stylesCommon.wrapper}>
      {state.steps.map((element) => (
        <span key={element.step} className={getStylesRandomKeys(element)}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}
