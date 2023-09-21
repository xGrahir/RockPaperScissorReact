import styles from './MainPage.module.css'
import { ScoreBoard } from '../components/ScoreBoard/ScoreBoard'
import { GameBoard } from '../components/GameBoard/GameBoard'
import { GameBoardResult } from '../components/GameBoardResult/GameBoardResult'
import { Rules } from '../components/Rules/Rules'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

export const MainPage = () => {
	

	return (
		<>
			<ScoreBoard />
			<GameBoard /> 
			<Rules />
		</>
	)
}
