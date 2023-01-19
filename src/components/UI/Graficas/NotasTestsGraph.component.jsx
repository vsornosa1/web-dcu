import GraficoNotasTests from '../../../assets/media/graficas/notasTests.svg';

const tests = [
	"Linux",
	"Mac",
	"iOS",
	"Windows",
	"Android",
	"Other",
];

const NotasTestsGraph = () => {
  return (
		<div className="flex-1">
			<div className="bg-slate-100 flex-1 flex flex-col h-full space-y-2 justify-between rounded-xl p-6">
				<div>
					<p className="font-semibold text-lg"> Rendimiento Total </p>
				</div>

				<div className="flex flex-col w-full items-center">
					<div>
						<img 
							src={GraficoNotasTests}
							alt="Grafico de Notas de Tests"
						/>
					</div>

					<div className="flex space-x-4 ml-16">
						{
							tests.map(test => (
								<p className='text-sm'> { test } </p>
							))
						}
					</div>
				</div>

				
			</div>
		</div>
  )
}

export default NotasTestsGraph;
