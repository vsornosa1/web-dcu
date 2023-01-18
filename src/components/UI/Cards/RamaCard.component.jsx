import Star from '../../../assets/media/Star.svg';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const RamaCard = (props) => {
	const { rama } = props;
	return (
		<div className={
			classNames(rama.idx % 2 === 0 ?
				"bg-blue-50 			flex space-x-4 rounded-xl py-12 px-3 hover:text-orange-600"
				: "bg-indigo-100  flex space-x-4 rounded-xl py-12 px-3 hover:text-orange-400")}>
			<div className="flex mr-12 hover:animate-bounce">
				<img 
					className="-mb-8"
					src={rama.icono1}
					alt="Icono1"
				/> 
				<img
					className="-ml-8"
					src={rama.icono2}
					alt="Icono2"
				/> 
			</div>
			<div className="flex flex-col justify-start">
				<p className="font-bold text-lg">{rama.nombre}</p>
				<p className="text-slate-600">{rama.descripcion}</p>
				<p className="text-slate-600">Incluye:</p>
				<ul className="flex justify-between">
					<div>
					{
						rama.asignaturas1.map(asignatura1 => (
								<li className="text-slate-600 ml-4 list-disc"> {asignatura1} </li>
						))
					}	
					</div>
					<div>
					{
						rama.asignaturas2.map(asignatura2 => (
								<li className="text-slate-600 list-disc"> {asignatura2} </li>
						))
					}
					</div>
				</ul>
			</div>
			{
				rama.idx % 2 === 1 ? 
				<div className="flex">
					<img
						className="-mt-60 -ml-8 hover:animate-spin"
						src={Star}
						alt="Star21"
					/>
					<img
						className="-mt-60 hover:animate-spin"
						src={Star}
						alt="Star22"
					/>
					<img
						className="-mt-60 hover:animate-spin"
						src={Star}
						alt="Star23"
					/>
				</div>
					:	<div className="flex">
							<img
								className="-mt-56 -ml-16 hover:animate-spin"
								src={Star}
								alt="Star11"
							/> 
							<img
								className="-mt-56 hover:animate-spin"
								src={Star}
								alt="Star12"
							/> 
							<img
								className="-mt-56 hover:animate-spin"
								src={Star}
								alt="Star13"
							/> 
							<img
								className="-mt-56 hover:animate-spin"
								src={Star}
								alt="Star14"
							/> 
							<img
								className="-mt-56 hover:animate-spin"
								src={Star}
								alt="Star15"
							/> 
						</div>
			}
		</div>
	)
}


export default RamaCard;
