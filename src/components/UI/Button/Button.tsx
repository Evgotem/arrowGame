import { FC } from "react"
import s from "./Button.module.scss"
import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
} from "@mui/material"
import clsx from "clsx"

interface IButtonProps extends MaterialButtonProps {}

export const Button: FC<IButtonProps> = (props) => {
  const { children, className = "" } = props
  return (
    <MaterialButton
      variant={"contained"}
      size={"small"}
      {...props}
      className={clsx(className, s.button)}
    >
      {children}
    </MaterialButton>
  )
}
