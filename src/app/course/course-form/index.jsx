"use client"

import { useState } from 'react'

export default function CourseForm() {

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitMessage, setSubmitMessage] = useState('')
	const [formData, setFormData] = useState({
		Name: '',
		Email: '',
		Number: '',
		Interested: '',
		Feedback: ''
	})

	function handleChange(e) {

		setFormData({

			...formData,
			[e.target.name]: e.target.value

		})
		
	}

	async function Submit(e) {

		e.preventDefault()
		if (isSubmitting) return

		setIsSubmitting(true)
		const formEle = e.target
		const formDatab = new FormData(formEle)

		try {

			const response = await fetch(
				"https://script.google.com/macros/s/AKfycbw2iAXxIUUMJI0HHoWs5B7jgblMKpOmLVmauDYCXhLZbVmu9qLiwUJhsFU06mhH3EAb/exec",
				{
					method: "POST",
					body: formDatab,
				}
			)
		
			setSubmitMessage('Your response has been submitted!!!')
			setFormData({
				Name: '',
				Email: '',
				Number: '',
				Interested: '',
				Feedback: ''
			})
			formEle.reset()
		
			setTimeout(() => {

				setSubmitMessage('')

			}, 3000)

		}
		catch (error) {

			console.log(error)

		}
		finally {

			setIsSubmitting(false)

		}

	}

  	return (

		<form className="flex flex-col gap-4 max-w-[700px] w-full" onSubmit={Submit}>
			<div className="flex gap-4">
				<input
					placeholder="Enter your name"
					name="Name"
					type="text"
					required
					minLength="2"
					value={formData.Name}
					onChange={handleChange}
					title="Name must be at least 2 characters"
					className="px-4 py-2 border-2 border-neutral-600 rounded-lg w-full bg-white placeholder:text-neutral-500"
				/>
				<input
					placeholder="Enter your email"
					name="Email"
					type="email"
					required
					value={formData.Email}
					onChange={handleChange}
					pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
					title="Invalid email address"
					className="px-4 py-2 border-2 border-neutral-600 rounded-lg w-full bg-white placeholder:text-neutral-500"
				/>
			</div>
			<div className="flex gap-4">
				<input
					placeholder="Enter your phone number"
					name="Number"
					type="number"
					required
					value={formData.Number}
					onChange={handleChange}
					pattern="\d{10,}"
					title="Phone number must be at least 10 digits"
					className="px-4 py-2 border-2 border-neutral-600 rounded-lg w-full bg-white placeholder:text-neutral-500"
				/>
				<select 
					name="Interested" 
					required
					value={formData.Interested}
					onChange={handleChange}
					className="border-2 border-neutral-600 rounded-lg px-4 py-2 w-full bg-white placeholder:text-neutral-500"
				>
					<option value="">Select Interest</option>
					<option value="Courses">Courses</option>
					<option value="Services">Services</option>
				</select>
			</div>
			<div className="step active">
				<textarea
					placeholder="Share any additional information or questions"
					className="px-4 py-2 border-2 border-neutral-600 rounded-lg resize-none w-full bg-white placeholder:text-neutral-500"
					name="Feedback"
					rows={ 5 }
					value={formData.Feedback}
					onChange={handleChange}
				></textarea>
			</div>
			<button type="submit" disabled={isSubmitting} className="flex items-center gap-4 rounded-full border-2 border-blue_light text-blue_light hover:bg-blue_light hover:text-white duration-200 px-6 py-2 font-semibold font-sora w-fit">
				{isSubmitting ? 'Submitting...' : 'Submit'}
			</button>
        </form>
    
  	)

}
