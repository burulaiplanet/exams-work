import React, { useContext } from 'react'
import AddContext from '../store/form-context'

const NewForm = () => {
	const newContext = useContext(AddContext)
	return (
		<div>
			{newContext.onData.map((el) => {
				return (
					<ul key={el.id}>
						<li>{el.title}</li>
						<button onClick={() => newContext.onDelete(el.id)}>
							Delete
						</button>
					</ul>
				)
			})}
		</div>
	)
}
export default NewForm
