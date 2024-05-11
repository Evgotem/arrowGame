import { FC } from "react"
import clsx from "clsx"
import {
  Typography as MaterialTypography,
  TypographyProps as MaterialTypographyProps,
} from "@mui/material"
import s from "./TypographyHeader.module.scss"

export interface ITypographyHeaderProps extends MaterialTypographyProps {}

export const TypographyHeader: FC<ITypographyHeaderProps> = (props) => {
  const { children, className = "" } = props

  return (
    <MaterialTypography
      variant="h3"
      {...props}
      className={clsx(s.text, className)}
    >
      {children}
    </MaterialTypography>
  )
}
