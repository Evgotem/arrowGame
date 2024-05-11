import { TypographyText } from "../../../../../UI"
import loader from "./img/loader.svg"
import stylesCommon from "../../RandomKeys.module.scss"
import s from "./WelcomeText.module.scss"
import { FC } from "react"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

export const WelcomeText: FC<IWelcomeTextProps> = (props) => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return (
      <div className={stylesCommon.wrapper}>
        <span className={stylesCommon.icon}>
          <img className={s.loader} src={loader} alt="Loader" />
        </span>
      </div>
    )
  }

  return (
    <TypographyText>
      Press "Play" to start the game and wait for the first arrow to appear
    </TypographyText>
  )
}
