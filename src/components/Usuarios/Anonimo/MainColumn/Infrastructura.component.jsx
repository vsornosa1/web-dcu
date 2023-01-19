import React from 'react';
import BuildingCard from '../../../UI/Cards/StatsCard.component';
import Header from '../../../UI/Header.component';

import Edificio1 from '../../../../assets/media/edificio1.svg';
import Edificio2 from '../../../../assets/media/edificio2.svg';
import Edificio3 from '../../../../assets/media/edificio3.svg';

const stats = [
  { 
		name: 'Edificios para Primaria',
		stat: '18',
		previousStat: '70,946', 
		change: '5\'01%',
		changeType: 'increase',
		media: Edificio1, 
		idx: 0,
		tieneImg: true
	},
  { 
		name: 'Edificios para ESO',
		stat: '10',
		previousStat: '56.14%', 
		change: '105\'3%',
		changeType: 'increase',
		media: Edificio2, 
		idx: 1,
		tieneImg: true
	},
  { 
		name: 'Edificios para Bachiller',
		stat: '4',
		previousStat: '28.62%', 
		change: '200\'0%',
		changeType: 'increase',
		media: Edificio3, 
		idx: 2,
		tieneImg: true
	},
]


const Infrastructura = () => {
	return (
		<div className="flex flex-col lg:pl-64">
			<main>

				<Header />


				<div className="flex flex-col items-left my-12 mx-8">
					<h3 className="text-lg font-medium leading-6 text-gray-900"> Infrastructura del centro: </h3>
					<dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white md:grid-cols-3 md:divide-y-0 md:divide-x">
						{stats.map((item) => (
							<BuildingCard item={item}/>
						))}
					</dl>
				</div>
			</main>
		</div>
	)
}

export default Infrastructura;
