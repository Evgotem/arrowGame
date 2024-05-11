import { FC } from "react"
import clsx from "clsx"
import {
  Typography as MaterialTypography,
  TypographyProps as MaterialTypographyProps,
} from "@mui/material"
import s from "./TypographyText.module.scss"

export interface ITypographyTextProps extends MaterialTypographyProps {}

export const TypographyText: FC<ITypographyTextProps> = (props) => {
  const { children, className = "" } = props

  return (
    <MaterialTypography {...props} className={clsx(s.text, className)}>
      {children}
    </MaterialTypography>
  )
}
