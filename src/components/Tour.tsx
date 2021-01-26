import React, { useState } from 'react'


import { ITour } from './Tours'

interface ITourItem {
	tour: ITour,
	removeTour: ( id: string) => void
}



export const Tour: React.FC<ITourItem>  = ({ tour, removeTour }) => {
const [readMore, setReadMore] = useState(false)


	return (
		<div className="single-tour">
			<img src={ tour.image } alt="tourImage" />
			<footer>
				<div className="tour-info">
					<h4> { tour.name } </h4>
					<h4 className="tour-price"> ${ tour.price } </h4>
				</div>
				<p> { readMore ? tour.info : `${ tour.info &&  tour.info.substring(0, 200)}... ` }
				<button onClick={ ()=> setReadMore( !readMore ) }> { readMore ? 'hide' : 'show more' } </button> 
				 </p>
				<button onClick={ ()=> 	removeTour(tour.id) } className="delete-btn" > not interested </button> 
			</footer>
		</div>
	)
}
