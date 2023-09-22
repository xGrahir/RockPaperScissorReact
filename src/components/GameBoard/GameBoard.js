import { GameBoardPick } from "./GameBoardPick"
import { GameBoardResult } from "./GameBoardResult"
import { useSelector } from "react-redux"
import styles from './GameBoard.module.css'

export const GameBoard = () => {
    const isButtonClicked = useSelector(state => state.info.isClicked)

    return (
        <main className={styles['game-board']}>
			{!isButtonClicked ? <GameBoardPick /> : <GameBoardResult />}
		</main>
    )
}
