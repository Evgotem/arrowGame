import clsx from "clsx"
import { Modal as MaterialModal } from "@mui/material"

import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"
import { Button } from "../../../UI"

import s from "./Modal.module.scss"
import { Dispatch, FC, SetStateAction } from "react"

interface IModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isSuccessEndGame: boolean
}

export const Modal: FC<IModalProps> = (props) => {
  const { setIsOpen, isSuccessEndGame } = props

  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(resetStore())
    setIsOpen(false)
  }

  return (
    <MaterialModal open onClose={handleClose} className={s.wrapper}>
      <div
        className={clsx(
          s.container,
          isSuccessEndGame ? s.modalSuccess : s.modalUnsuccess,
        )}
      >
        <p>
          {isSuccessEndGame ? "Winner winner chicken dinner!" : "Game over!"}
        </p>
        <Button onClick={handleClose} className={s.button}>
          Start New Game
        </Button>
      </div>
    </MaterialModal>
  )
}
