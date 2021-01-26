import React from 'react'
import { Tour } from './Tour'



export interface ITour {
	id: string,
	name: string,
	info: string,
	image: string,
	price: number
}

interface ITours {
	tours: ITour[],
	removeTour: ( id: string ) => void
}



export const Tours: React.FC<ITours>   =  ({ tours, removeTour }) => {
	return (
<section>
	<div className="title">
		<h2> ours tours </h2>
		<div className="underline"> </div>
		<div>
			{ tours.map((tour) => <Tour removeTour={ removeTour  } key={ tour.id } tour={ tour } /> )}
		</div>
	</div>
</section>
	)
}
