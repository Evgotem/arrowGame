import { FC } from "react"
import s from "./Score.module.scss"
import { useAppSelector } from "../../../app/hooks"

export const Score: FC = () => {
  const state = useAppSelector((state) => state.playground)

  return (
    <div>
      <h3>Score</h3>
      <span>Errors: {state.totalUnsuccessful}</span>
      <br />
      <span>Successful: {state.totalSuccessful}</span>
    </div>
  )
}
