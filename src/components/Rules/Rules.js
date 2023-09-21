import styles from './Rules.module.css'
import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { infoActions } from '../../store'

export const Rules = () => {
	const [isActive, setIsActive] = useState(false)
	const rulesActive = useSelector(state => state.info.isActive)
    const dispatch = useDispatch()
	const modal = document.getElementById('modal')
    const shadow = document.getElementById('modal-shadow')
    
    const closeModalHandler = () => {
        dispatch(infoActions.activeState())
    }

	useEffect(() => {
		if (rulesActive) {
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	}, [rulesActive])

	return (
		<>
			{isActive &&
				createPortal(
					<div className={styles.rules}>
						<h3>Rules</h3>
						<div className={styles['rules-image']}></div>
						<div className={styles.action}>
							<button onClick={closeModalHandler} className={styles.button}></button>
						</div>
					</div>,
					modal
				)}
            {isActive && createPortal(
                <div onClick={closeModalHandler} className={styles.shadow}></div>
            ,shadow)}
		</>
	)
}
