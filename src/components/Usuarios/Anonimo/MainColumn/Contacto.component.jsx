import Header from "../../../UI/Header.component";
import Mapa from "../../../../assets/media/mapaContacto.svg";
import ContactBuildingCard from "../../../UI/Cards/ContactBuildingCard";
import InstagramLogo from "../../../../assets/media/instagram.svg";
import TwitterLogo from "../../../../assets/media/twitter.svg";
import LinkedInLogo from "../../../../assets/media/linkedin.svg";
import RedSocialCard from "../../../UI/Cards/RedSocialCard.component";

const redesSociales = [
	{
		idx: 2,
		icono: InstagramLogo,
		nombre: "Instagram"
	},
	{
		idx: 1,
		icono: TwitterLogo,
		nombre: "Twitter"
	},
	{
		idx: 2,
		icono: LinkedInLogo,
		nombre: "LinkedIn"
	},
];


const Contacto = () => {
	return (
		<div className="flex flex-col lg:pl-64">
      <main>
        <Header />

        <div className="my-12 mx-6 space-y-12">
          <div className="lg:grid lg:grid-cols-11 flex flex-col">
						<div className="col-span-4">
							<p className="text-lg mb-6 font-medium leading-6 text-gray-900"> Contacto del Centro: </p>
							{/* Contacto del centro card */}
							<ContactBuildingCard />
							<div className="grid grid-cols-1 gap-x-8 gap-y-4 py-6">
								<p className="text-lg mb-6 font-medium leading-6 text-gray-900"> Redes Sociales del Centro: </p>
								<div className="flex justify-between space-x-4">
									{
										redesSociales.map(rs => (
											<RedSocialCard redesSociales={rs} />
										))
									}
								</div>
								
							</div>
						</div>

						{/* Separador Eje-X del grid */}
						<div className="col-span-1" />

            <div className="col-span-6">
							<p className="text-lg mb-6 font-medium leading-6 text-gray-900"> Ubicación del centro: </p>
							<img
								src={Mapa}
								alt="Mapa del centro"
							/>
						</div>
          </div>

          </div>
      </main>
    </div>
	)
}

export default Contacto;
