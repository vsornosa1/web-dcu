
const asignaturas = [
	{},
	{
		nombre: "Mat. II",
		css: "bg-green-200 flex-1 rounded-r-full border-l-4 border-h-3 border-gray-200 h-2.5 w-full",
		hora: "08:00"
	},
	{
		nombre: "Física",
		css: "bg-green-200 flex-1 rounded-r-full h-2.5 w-full",
		hora: "11:30"
	},
	{
		nombre: "Química",
		css: "bg-slate-800 flex-1 rounded-r-full h-2.5 w-full",
		hora: "13:00"
	},
	{
		nombre: "Comida!",
		css: "bg-slate-300 flex-1 rounded-r-full h-2.5 w-0",
		hora: "14:30"
	},
	{
		nombre: "Plástica",
		css: "bg-slate-300 flex-1 rounded-r-full h-2.5 w-full",
		hora: "16:00"
	},
	{
		nombre: "Prog. II",
		css: "bg-slate-300 flex-1 rounded-r-full h-2.5 w-full",
		hora: "17:30"
	},
	{
		nombre: "Historia",
		css: "bg-slate-300 flex-1 rounded-r-full h-2.5 w-full",
		hora: "19:00"
	},
];


const HorarioGraph = () => {
  return (
		<div className="flex-1">
			<div className="bg-slate-100 flex flex-1 flex-col h-full space-y-2 justify-between rounded-xl p-6">

				<p className="font-semibold text-lg"> Mi Horario de hoy: </p>


				<div className="flex flex-col justify-start px-6 space-x-9">
						{
							asignaturas.map((asig, index) => (

								<div key={index} className="grid grid-cols-10 space-y-7 space-x-4">
									<div className="mt-6 col-span-1"> { asig.nombre } </div>
									<span className={`col-span-9 ${asig.css}`} />
								</div>
							))
						}
				</div>
			</div>
		</div>
  )
}

export default HorarioGraph;
