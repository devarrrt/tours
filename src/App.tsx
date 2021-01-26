import React, { useState, useEffect } from 'react'
import { Loading } from './components/Loading'
import { Tours } from './components/Tours'
 

// interface Props { }


const url = 'https://course-api.com/react-tours-project'

export const App = () => {
	const [loading, setLoading] = useState(false)
	const [tours, setTour] = useState([])


const fetchTours = async () => {
	setLoading( true )

	try {
		const response = await fetch( url ) 
		const tours = await response.json()
		setLoading( false )
		setTour(tours)
	} catch(error) {
		setLoading( false )
		console.log( error )
	}}


const removeTour = ( id: string ) => {
	//@ts-ignore
	const newTour = tours.filter( (tour)  => tour.id !== id )
	setTour( newTour )
}


 useEffect(() => {
	fetchTours()
 }, [])


	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		)
	}

if ( tours.length === 0 ) {
	return <main> 
		<div className="title">
		<h2> no touts, sorry </h2>
			<button className="btn" onClick={ fetchTours }> refresh  </button>
		</div>
		 </main>
}

	return (
		<main>
			<Tours tours = { tours } removeTour = { removeTour } />
		</main>
	)
}
