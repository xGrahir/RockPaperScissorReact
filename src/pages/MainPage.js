import { ScoreBoard } from '../components/ScoreBoard/ScoreBoard'
import { GameBoard } from '../components/GameBoard/GameBoard'
import { Rules } from '../components/Rules/Rules'

export const MainPage = () => {
	return (
		<>
			<ScoreBoard />
			<GameBoard /> 
			<Rules />
		</>
	)
}
