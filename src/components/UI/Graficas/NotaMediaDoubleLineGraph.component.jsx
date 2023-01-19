import GraficoNotaMedia from '../../../assets/media/graficas/notaMedia.svg';
import EllipsisIcon from '../../../assets/media/EllipsisIcon.svg';

const NotaMediaDoubleLineGraph = () => {
  return (
    <div className="bg-slate-100 flex flex-col space-x-1 rounded-xl px-6 py-3">
			<div className="flex justify-between items-center space-x-2 py-2">
				<div className="flex justify-center items-center space-x-8">
					<p className="font-semibold text-lg"> Nota Media </p>
					<p className="text-slate-400"> Rendimiento Global </p>
				</div>

				<div className="relative col-span-1">
					<div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-gray-400"></div>
				</div>

				<div className="flex justify-center items-center space-x-8">
					<div className="flex justify-center items-center space-x-2">
						<div className="h-2 w-2 rounded-full bg-slate-900" />
						<p className="text-slate-600"> Mi Media </p>
					</div>
					<div className="flex justify-center items-center space-x-2">
						<div className="h-2 w-2 rounded-full bg-slate-400" />
						<p className="text-slate-600"> Media General </p>
					</div>
				</div>
				
				<img 
					src={EllipsisIcon}
					alt="Ellipsis, 3 puntos horizontales (...)"
				/>
			</div>

			<div>
				<img 
					src={GraficoNotaMedia}
					alt="Grafico de linea de Nota Media y Rendimiento"
				/>
			</div>
			
		</div>
  )
}

export default NotaMediaDoubleLineGraph;
