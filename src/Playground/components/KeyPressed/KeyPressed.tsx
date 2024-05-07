import { FC, useCallback, useEffect } from "react"
import { MAP_ARROW_CODES } from "../../constants"
import { useAppDispatch } from "../../../app/hooks"
import { setEnteredValue } from "../../store/slices"
import { useKeyPressedElement } from "./hooks"

interface IKeyPressedProps {
  isTimerActive: boolean
}

export const KeyPressed: FC<IKeyPressedProps> = (props) => {
  const { isTimerActive } = props
  const dispatch = useAppDispatch()
  const keyPressedElement = useKeyPressedElement()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      console.log("11", isTimerActive)
      if (MAP_ARROW_CODES.hasOwnProperty(e.key) && isTimerActive) {
        dispatch(setEnteredValue(e.key))
      }
    },
    [dispatch, isTimerActive],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div>
      <h3>Key pressed</h3>
      <span>{keyPressedElement}</span>
    </div>
  )
}
