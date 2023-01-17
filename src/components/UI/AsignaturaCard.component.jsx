
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const AsignaturaCard = (props) => {
	const { asignatura } = props;
	return (
		<div className={
			classNames(asignatura.idx % 2 === 0 ?
				"bg-blue-50 			flex justify-between rounded-xl py-2 px-3 hover:text-orange-600"
				: "bg-indigo-100  flex justify-between rounded-xl py-2 px-3 hover:text-orange-400")}>
			<img
				className="cursor-pointer hover:animate-bounce"
				src={asignatura.icono}
				alt="iconoAsignatura"
			/> 
			<p className="font-semibold text-lg">{asignatura.nombre}</p>
		</div>
	)
}

export default AsignaturaCard;
