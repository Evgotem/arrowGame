import { FC } from "react"
import { Chip, Stack } from "@mui/material"
import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader, TypographyText } from "../../../UI"
import s from "./Score.module.scss"

export const Score: FC = () => {
  const state = useAppSelector((state) => state.playground)

  return (
    <>
      <TypographyHeader>Score</TypographyHeader>
      <TypographyText>
        On error, the "Consecutive successful hits" value is reset to zero
      </TypographyText>

      <Stack direction="row" spacing={1}>
        <Chip
          className={s.chipUnsuccess}
          variant="outlined"
          label={
            <>
              Errors:{" "}
              <span className={s.counter}>{state.totalUnsuccessful}</span>
            </>
          }
        />

        <Chip
          className={s.chipSuccessful}
          variant="outlined"
          label={
            <>
              Successful:{" "}
              <span className={s.counter}>{state.totalSuccessful}</span>
            </>
          }
        />
      </Stack>
    </>
  )
}
