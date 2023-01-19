
const asignaturas = [
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
			<div className="bg-slate-100 flex-1 flex flex-col h-full space-y-2 justify-between rounded-xl p-6">
				<div>
					<p className="font-semibold text-lg"> Rendimiento Total </p>
				</div>

				<div className="flex flex-col justify-start px-6 space-x-9">
						{
							asignaturas.map(asig => (
								<div className="grid grid-cols-2 space-y-7 space-x-4">
									<div className="mt-6"> { asig.nombre } </div>
									<div className={asig.css} />
								</div>
							))
						}
				</div>
			</div>
		</div>
  )
}

export default RendimientoVerticalGraph;
