import Header from "../../../UI/Header.component";
import RamaCard from "../../../UI/RamaCard.component";
import AsignaturaCard from "../../../UI/AsignaturaCard.component";

import Brujula from "../../../../assets/media/Brujula.svg";
import Cohete from   "../../../../assets/media/Cohete.svg";
import Biologia from "../../../../assets/media/Biologia.svg";
import Plastica from "../../../../assets/media/Plastica.svg";
import Quimica from "../../../../assets/media/Quimica.svg";
import EdFisica from "../../../../assets/media/EdFisica.svg";
import Estadistica from "../../../../assets/media/Estadistica.svg";
import Programacion from "../../../../assets/media/Programacion.svg";
import Historia from "../../../../assets/media/Historia.svg";
import Literatura from "../../../../assets/media/Literatura.svg";

import LetrasArtes1 from "../../../../assets/media/LetrasArtes1.svg";
import LetrasArtes2 from "../../../../assets/media/LetrasArtes2.svg";
import CienciasIngenieria1 from "../../../../assets/media/CienciasIngenieria1.svg";
import CienciasIngenieria2 from "../../../../assets/media/CienciasIngenieria2.svg";



const asignaturas = [
	{
		icono: Brujula,
		nombre: "Geografía",
		idx: 2
	},
	{
		icono: Cohete,
		nombre: "Física",
		idx: 1
	},
	{
		icono: Biologia,
		nombre: "Biología",
		idx: 1
	},
	{
		icono: Plastica,
		nombre: "Plástica",
		idx: 2
	},
	{
		icono: Quimica,
		nombre: "Química",
		idx: 2
	},
	{
		icono: EdFisica,
		nombre: "Ed. Física",
		idx: 1
	},
	{
		icono: Estadistica,
		nombre: "Estadística",
		idx: 1
	},
	{
		icono: Programacion,
		nombre: "Programación",
		idx: 2
	},
	{
		icono: Historia,
		nombre: "Historia",
		idx: 2
	},
	{
		icono: Literatura,
		nombre: "Literatura",
		idx: 1
	},
];

const ramas = [
	{
		icono1: LetrasArtes1,
		icono2: LetrasArtes2,
		nombre: "Letras y Artes",
		descripcion: "La rama ideal para estudiar BBAA, historia y cultura.",
		asignaturas1: ["Historia", "Arte", "Plástica"],
		asignaturas2: ["Literatura Española", "Drama y Teatro", "Filosofía"],
		idx: 1
	},
	{
		icono1: CienciasIngenieria1,
		icono2: CienciasIngenieria2,
		nombre: "Ciencias e Ingeniería",
		descripcion: "La rama ideal para estudiar carreras con futuro.",
		asignaturas1: ["Programación II", "Emprendimiento", "Química II"],
		asignaturas2: ["Física II", "Dibujo Técnico", "Matemáticas II"],
		idx: 2
	},
];



const AsignaturasRamas = () => {
	return (
		<div className="flex flex-col lg:pl-64">
      <main>
        <Header />

        <div className=" my-12 mx-6 space-y-12">
          <div className="grid grid-cols-11">
						<div className="col-span-5">
							<p className="flex flex-col space-around text-lg font-medium leading-6 text-gray-900"> Asignaturas de ESO: </p>
							<p className="mt-6 mb-1 text-slate-600"> 
									La Educación Secundaria Obligatoria (ó ESO), es la primera etapa donde 
									nuestro alumnado aprenderá a que hay que estudiar cosas que no les 
									gustan.
							</p>
							<p className="mb-4 text-slate-600"> 
							Por eso contamos con una variedad de asignaturas en que la mayoría no 
							les servirán para absolutamente nada y algunas les ayudará de cara a su 
							futuro profesional: 
							</p>
							<div className="grid grid-cols-1 gap-x-8 gap-y-4 p-6 md:grid-cols-2">
								{
									asignaturas.map(asignatura => (
										<AsignaturaCard asignatura={asignatura} />
									))
								}
							</div>
						</div>

						<div className="relative col-span-1">
								<div class="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-gray-400"></div>
						</div>

            <div className="col-span-5">
							<p className="flex flex-col space-around text-lg font-medium leading-6 text-gray-900"> Asignaturas por ramas de Bachillerato: </p>
							<p className="mt-6 mb-1 text-slate-600"> 
								Bachiller es una época de cambio para el perfil del estudiante, y de
								cara a presentarse al Selectivo debe orientarse para definir por
								primera vez su carrera profesional.
							</p>
							<p className="mb-4 text-slate-600"> 
								Actualmente, en el centro, tenemos las siguientes ramas:
							</p>
							<div className="grid grid-cols-1 gap-x-8 gap-y-4 py-6">
								{
									ramas.map(rama => (
										<RamaCard rama={rama} />
									))
								}
							</div>
						</div>
          </div>

          </div>
      </main>
    </div>
	)
}


export default AsignaturasRamas;
