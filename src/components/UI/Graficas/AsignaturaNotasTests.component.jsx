
const AsignaturaNotasTests = ( { infoCard } ) => {
	const { titulo, grafica } = infoCard;

	return (
		<div className="flex-1">
			<div className="bg-slate-100 flex flex-1 flex-col h-full space-y-2 justify-between rounded-xl p-6">
				<p className="font-semibold text-lg"> { titulo } </p>
				<img 
					className="object-cover w-full h-full"
					src={grafica}
					alt="Grafica de notas de la card"
				/>
			</div>
		</div>
	)
}

export default AsignaturaNotasTests;
