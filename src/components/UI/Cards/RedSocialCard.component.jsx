
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const RedSocialCard = ({ redesSociales }) => {
	const { idx, icono, nombre } = redesSociales;

	return (
		<div className={
			classNames(idx % 2 === 0 ?
				"bg-blue-50 flex flex-1 flex-col justify-center items-center space-y-6 xl:space-y-10 rounded-2xl p-6 text-center"
				: "bg-blue-100 flex flex-1 flex-col justify-center items-center space-y-6 xl:space-y-10 rounded-2xl p-6 text-center"
			)
		}>
			{/* Logo Red Social (RS) */}
			<img 
				className="mt-2 hover:animate-bounce"
				src={icono} 
				alt="Icono de la Red Social" 
			/>

			{/* NombreRS + @usuarioRS */}
			<div className="space-y-1 flex flex-col items-center justify-center">
				<h3 className="text-black-400 font-semibold text-lg text-center"> { nombre } </h3>
				<p className="text-gray-600 text-sm text-left"> @centroEd </p>
			</div>
		</div>
	)
}

export default RedSocialCard;
