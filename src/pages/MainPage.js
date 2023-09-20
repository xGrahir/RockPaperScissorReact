import styles from './MainPage.module.css'
import { ScoreBoard } from '../components/ScoreBoard/ScoreBoard'
import { GameBoard } from '../components/GameBoard/GameBoard'

export const MainPage = () => {
	return (
		<>
			<ScoreBoard />
            <GameBoard />
		</>
	)
}
