import Header from "../../../UI/Header.component";
import NormativaTable from "../../../UI/NormativaTable.component";

const normasESO = [
  {
    idx: 1,
    nombre: 'Regla 1  - ...',
    nProfesores: '8',
    aprobada: 'Jan 1 2020',
    aplica: '1º ESO',
		color: 'red'
  },
	{
    idx: 2,
    nombre: 'Regla 2  - ...',
    nProfesores: '6',
    aprobada: 'Jan 2 2020',
    aplica: '2º ESO',
		color: 'blue'
  },
	{
    idx: 3,
    nombre: 'Regla 3  - ...',
    nProfesores: '4',
    aprobada: 'Jan 3 2020',
    aplica: '3º ESO',
		color: 'green'
  },
	{
    idx: 4,
    nombre: 'Regla 4  - ...',
    nProfesores: '5',
    aprobada: 'Jan 4 2020',
    aplica: '4º ESO',
		color: 'yellow'
  },
	{
    idx: 5,
    nombre: 'Regla 5  - ...',
    nProfesores: '6',
    aprobada: 'Jan 5 2020',
    aplica: '1º ESO',
		color: 'red'
  },
	{
    idx: 6,
    nombre: 'Regla 6  - ...',
    nProfesores: '7',
    aprobada: 'Jan 6 2020',
    aplica: '2º ESO',
		color: 'blue'
  },
	{
    idx: 7,
    nombre: 'Regla 7  - ...',
    nProfesores: '9',
    aprobada: 'Jan 7 2020',
    aplica: '3º ESO',
		color: 'green'
  },
	{
    idx: 8,
    nombre: 'Regla 8  - ...',
    nProfesores: '7',
    aprobada: 'Jan 8 2020',
    aplica: '4º ESO',
		color: 'red'
  },
	{
    idx: 9,
    nombre: 'Regla 9  - ...',
    nProfesores: '7',
    aprobada: 'Jan 9 2020',
    aplica: '1º ESO',
		color: 'blue'
  },
	{
    idx: 10,
    nombre: 'Regla 10  - ...',
    nProfesores: '9',
    aprobada: 'Jan 10 2020',
    aplica: '2º ESO',
		color: 'green'
  },
	{
    idx: 11,
    nombre: 'Regla 11  - ...',
    nProfesores: '8',
    aprobada: 'Jan 11 2020',
    aplica: '3º ESO',
		color: 'yellow'
  },
]

const normasBach = [
  {
    idx: 1,
    nombre: 'Regla 1  - ...',
    nProfesores: '8',
    aprobada: 'Jan 1 2020',
    aplica: '1º Bach',
		color: 'green'
  },
	{
    idx: 2,
    nombre: 'Regla 2  - ...',
    nProfesores: '6',
    aprobada: 'Jan 2 2020',
    aplica: '2º Bach',
		color: 'blue'
  },
	{
    idx: 3,
    nombre: 'Regla 3  - ...',
    nProfesores: '4',
    aprobada: 'Jan 3 2020',
    aplica: '1º Bach',
		color: 'green'
  },
	{
    idx: 4,
    nombre: 'Regla 4  - ...',
    nProfesores: '5',
    aprobada: 'Jan 4 2020',
    aplica: '1º Bach',
		color: 'green'
  },
	{
    idx: 5,
    nombre: 'Regla 5  - ...',
    nProfesores: '6',
    aprobada: 'Jan 5 2020',
    aplica: '1º Bach',
		color: 'green'
  },
	{
    idx: 6,
    nombre: 'Regla 6  - ...',
    nProfesores: '7',
    aprobada: 'Jan 6 2020',
    aplica: '2º Bach',
		color: 'blue'
  },
	{
    idx: 7,
    nombre: 'Regla 7  - ...',
    nProfesores: '9',
    aprobada: 'Jan 7 2020',
    aplica: '1º Bach',
		color: 'green'
  },
	{
    idx: 8,
    nombre: 'Regla 8  - ...',
    nProfesores: '7',
    aprobada: 'Jan 8 2020',
    aplica: '2º Bach',
		color: 'blue'
  },
	{
    idx: 9,
    nombre: 'Regla 9  - ...',
    nProfesores: '7',
    aprobada: 'Jan 9 2020',
    aplica: '2º Bach',
		color: 'blue'
  },
	{
    idx: 10,
    nombre: 'Regla 10  - ...',
    nProfesores: '9',
    aprobada: 'Jan 10 2020',
    aplica: '1º Bach',
		color: 'green'
  },
	{
    idx: 11,
    nombre: 'Regla 11  - ...',
    nProfesores: '8',
    aprobada: 'Jan 11 2020',
    aplica: '2º Bach',
		color: 'blue'
  },
]


const Normas = () => {
	return (
		<div className="flex flex-col lg:pl-64">
      <main>
        <Header />

        <div className=" my-12 mx-6 space-y-12">
          <div className="lg:grid lg:grid-cols-11 flex flex-col">
						<div className="col-span-5">
							<p className="flex flex-col space-around text-lg font-medium leading-6 text-gray-900"> Normativa para Alumno de ESO: </p>
							<p className="mt-6 mb-1 text-slate-600"> 
								Estas son las reglas y modos de funcionamiento para el grupo que alberga
								estudiantes y profesores desde 1º ESO hasta 4º ESO. 
							</p>
							<p className="mb-4 text-slate-600"> 
								¡Las normas deben ser respetadas en todo momento en nuestro centro!
							</p>
							<div className="grid grid-cols-1 gap-x-8 gap-y-4 py-6">
								<NormativaTable normas={normasESO}/>
							</div>
						</div>

						<div className="relative col-span-1">
								<div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-gray-400"></div>
						</div>

            <div className="col-span-5">
							<p className="flex flex-col space-around text-lg font-medium leading-6 text-gray-900"> Normativa para Alumno de Bachillerato: </p>
							<p className="mt-6 mb-1 text-slate-600"> 
								Estas son las reglas y modos de funcionamiento para el grupo que alberga estudiantes y profesores desde 1º Bach hasta 2º Bach. 
							</p>
							<p className="mb-4 text-slate-600"> 
								¡Las normas deben ser respetadas en todo momento en nuestro centro!
							</p>
							<div className="grid grid-cols-1 gap-x-8 gap-y-4 py-6">
								<NormativaTable normas={normasBach}/>
							</div>
						</div>
          </div>

          </div>
      </main>
    </div>
	)
}

export default Normas;
