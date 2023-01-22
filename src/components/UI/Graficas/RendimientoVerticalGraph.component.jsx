
const asignaturas = [
	{},
	{
		nombre: "Mat. II",
		css: "bg-slate-300 flex-1 rounded-r-full h-2.5 w-2/3"
	},
	{
		nombre: "Física",
		css: "bg-slate-300 flex-1 rounded-r-full h-2.5 w-1/2"
	},
	{
		nombre: "Química",
		css: "bg-slate-800 flex-1 rounded-r-full h-2.5 w-3/5"
	},
	{
		nombre: "Arte",
		css: "bg-slate-300 flex-1 rounded-r-full h-2.5 w-1/3"
	},
	{
		nombre: "Plástica",
		css: "bg-slate-300 flex-1 rounded-r-full h-2.5 w-5/6"
	},
	{
		nombre: "Prog. II",
		css: "bg-slate-300 flex-1 rounded-r-full h-2.5 w-1/2"
	},
	{
		nombre: "Historia",
		css: "bg-slate-300 flex-1 rounded-r-full h-2.5 w-3/4"
	},
];


const RendimientoVerticalGraph = () => {
  return (
		<div className="flex-1">
			<div className="bg-slate-100 flex flex-1 flex-col h-full space-y-2 justify-between rounded-xl p-6">

				<p className="font-semibold text-lg"> Rendimiento Total </p>


				<div className="flex flex-col justify-start px-6 space-x-9">
						{
							asignaturas.map((asig, index) => (

								<div key={index} className="grid grid-cols-10 space-y-7 space-x-4">
									<div className="mt-6 col-span-1"> { asig.nombre } </div>
									<div className={`col-span-9 ${asig.css}`} />
								</div>
							))
						}
				</div>
			</div>
		</div>
  )
}

export default RendimientoVerticalGraph;
