import GraficoTotalTestsCompletados from '../../../assets/media/graficas/totalTestsCompletados.svg';

const notasTests = [
	{
		css: "h-2 w-2 rounded-full bg-slate-800",
		asignatura: "Matematicas II",
		nota: "68"
	},
	{
		css: "h-2 w-2 rounded-full bg-indigo-200",
		asignatura: "Física y Química",
		nota: "49"
	},
	{
		css: "h-2 w-2 rounded-full bg-green-200",
		asignatura: "Arte y Plástica III",
		nota: "13"
	},
	{
		css: "h-2 w-2 rounded-full bg-indigo-300",
		asignatura: "Other",
		nota: "8.1%"
	},
];


const TotalTestsPieGraph = () => {
	return (
		<div className="flex-1">
			<div className="bg-slate-100 flex-1 flex flex-col h-full space-y-2 justify-between rounded-xl p-6">
				<div>
					<p className="font-semibold text-lg"> Total de Tests Completados </p>
				</div>

				<div className="flex justify-around items-center">
					<div>
						<img 
							src={GraficoTotalTestsCompletados}
							alt="Grafico de Notas de Tests"
						/>
					</div>

					<div className="flex flex-col space-y-6">
						{
							notasTests.map(notaTest => (
								<div className="flex justify-between items-center space-x-6">
									<div className="flex justify-between items-center space-x-2">
										<div className={ notaTest.css } />
										<p className="text-sm"> { notaTest.asignatura } </p>
									</div>
									<p className="text-sm"> { notaTest.nota } </p>
								</div>
							))
						}
					</div>
				</div>
				
			</div>
		</div>
	)
}

export default TotalTestsPieGraph;





