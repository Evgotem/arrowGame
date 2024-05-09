import { Dispatch, FC, SetStateAction } from "react"
import s from "./Modal.module.scss"
import { useAppDispatch } from "../../../app/hooks"
import { resetStore } from "../../store/slices"

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
    <div>
      <h3>modal</h3>
      <p>{isSuccessEndGame ? "You won!" : "Game over!"}</p>
      <button onClick={handleClose}>Start new game</button>
    </div>
  )
}
