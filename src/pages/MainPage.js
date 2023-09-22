import { ScoreBoard } from '../components/ScoreBoard/ScoreBoard'
import { GameBoard } from '../components/GameBoard/GameBoard'
import { Rules } from '../components/Rules/Rules'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { infoActions } from '../store'

export const MainPage = () => {

	const dispatch = useDispatch()
	const localScore = localStorage.getItem('score')
	let points
	
	// Get back your score from localStorage
	if(localScore) {
		points = parseInt(localScore)
	} else {
		points = 0
	}

	useEffect(() => {
		dispatch(infoActions.getBackPoints(points))
	})

	return (
		<>
			<ScoreBoard />
			<GameBoard />
			<Rules />
		</>
	)
}
