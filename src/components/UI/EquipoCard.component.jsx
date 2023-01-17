
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const EquipoCard = (props) => {
	const { persona } = props;

	return (
		<li key={persona.name} 
			className={
				classNames(persona.idx % 2 === 0 ?
					"rounded-lg bg-blue-50 py-10 px-6 text-center xl:px-10 xl:text-left"
					: "rounded-lg bg-indigo-100 py-10 px-6 text-center xl:px-10 xl:text-left")}>
			
			<div className="space-y-6 xl:space-y-10">
				{/* Logos */}
				<ul className="flex justify-end space-x-5">
					<li>
						<a href={persona.twitterUrl} className="cursor-pointer text-gray-600 hover:text-orange-300">
							<span className="sr-only">Correu</span>
							<svg className="h-8 w-8" aria-hidden="true" fill="currentColor" viewBox="0 0 50 50"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"
								/>
							</svg>
						</a>
					</li>
					<li>
						<a href={persona.linkedinUrl} className="text-gray-600 hover:text-orange-300">
							<span className="sr-only">LinkedIn</span>
							<svg className="h-8 w-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					</li>
				</ul>

				{/* Avatar */}
				<div className="font-bold text-3xl flex flex-col items-start">
					<div className="flex flex-col items-start -my-12 mx-6 z-10 lg:mx-2 drop-shadow-lg">
						<p> {persona.cursoTutor} </p>
						<p> {persona.etapaTutor} </p>
					</div>
					<img className="mx-auto h-48 w-48 rounded-full xl:h-60 xl:w-60" src={persona.fotoPersona} alt="" />
				</div>

				{/* Nombre + info */}
				<div className="space-y-2 xl:flex xl:items-center xl:justify-between">
					<div className="space-y-1 text-lg font-medium leading-6">
						<h3 className="text-black-400 text-bold text-xl">{persona.name}</h3>
						<p className="text-gray-600 text-sm">{persona.rol}</p>
					</div>
				</div>
			</div>
		</li>	
	)
}

export default EquipoCard;