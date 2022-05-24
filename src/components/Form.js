import { useState } from 'react'
import React, { useContext } from 'react'
import AddContext from '../store/form-context'
import styles from './Form.module.css'

const Form = () => {
	const contextData = useContext(AddContext)
	const [data, setData] = useState('')

	const dataChangeHandler = (event) => {
		setData(event.target.value)
	}
	function submitDataHandler(event) {
		event.preventDefault()

		const formData = {
			id: Math.random().toString(),
			title: data,
		}
		if (formData.title.trim().length !== 0) {
			{
				contextData.onSaveData(formData)
			}
		}
		setData('')
	}
	return (
		<div>
			<form onSubmit={submitDataHandler}>
				<input
					className={styles.input}
					value={data}
					type='text'
					onChange={dataChangeHandler}
				/>
				<button>Add</button>
			</form>
		</div>
	)
}

export default Form
