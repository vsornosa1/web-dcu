import Building from "../../../assets/media/buildingContacto.svg";
import PinMapa from "../../../assets/media/pinMapa.svg";


const ContactBuildingCard = () => {
	return (
		<div className="space-y-6 xl:space-y-10 rounded-2xl bg-blue-50 py-6 px-6 text-center xl:px-10 xl:text-left">
			{/* Logo mail */}
			<div className="flex justify-end space-x-5">
				<a href="# " className="cursor-pointer text-gray-600 hover:text-orange-300">
					<span className="sr-only">Correu</span>
					<svg className="h-8 w-8" aria-hidden="true" fill="currentColor" viewBox="0 0 50 50"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"
						/>
					</svg>
				</a>
			</div>
			

			{/* Edificio */}
			<div className="flex flex-col justify-center items-center">
				<img className="" src={Building} alt="Edificio contacto" />
			</div>

			{/* Nombre + info */}
			<div className="space-y-2 flex items-center justify-between">
				<div className="space-y-3 text-lg font-medium leading-6">
					<h3 className="text-black-400 font-bold text-2xl text-center"> CIPFP COSTA DE AZAHAR </h3>
					<div className="flex justify-center space-x-4">
						<img 
							src={PinMapa}
							alt="Pin del mapa"
						/>
						<p className="text-gray-600 text-sm text-left">
							Lorem ipsum dolor sit amet, 
							consectetur adipiscing elit, 
							Sed do eiusmod tempor incididunt ut 
							labore et dolore magna aliqua.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactBuildingCard;
