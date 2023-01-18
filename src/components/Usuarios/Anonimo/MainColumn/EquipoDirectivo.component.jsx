import Header from "../../../UI/Header.component";
import EquipoCard from "../../../UI/Cards/EquipoCard.component";
import SearchBar from "../../../UI/SearchBar.component";
import StackedAvatars from "../../../UI/StackedAvatars.component";

import AvatarElsa from '../../../../assets/avatars/AvatarElsa.svg';
import AvatarJoan from '../../../../assets/avatars/AvatarJoan.svg';
import AvatarEliot from '../../../../assets/avatars/AvatarEliot.svg';
import Avatar4 from '../../../../assets/avatars/Avatar4.svg';
import AvatarLana from '../../../../assets/avatars/AvatarLana.svg';
import AvatarAdria from '../../../../assets/avatars/AvatarAdria.svg';


const personas = [
  {
    name: 'Elsa Patilla Navarro',
    rol: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    fotoPersona: AvatarElsa,
    mailUrl: '#',
    linkedinUrl: '#',
    cursoTutor: '2º',
    etapaTutor: 'ESO',
    idx: 0 
  },
  {
    name: 'Joan Juan Llopis',
    rol: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    fotoPersona: AvatarJoan,
    mailUrl: '#',
    linkedinUrl: '#',
    cursoTutor: '4º',
    etapaTutor: 'ESO',
    idx: 1 
  },
  {
    name: 'Eliot Titmus Richard Mace',
    rol: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    fotoPersona: AvatarEliot,
    mailUrl: '#',
    linkedinUrl: '#',
    cursoTutor: '2º',
    etapaTutor: 'ESO',
    idx: 2 
  },
  {
    name: 'Eliot Titmus Richard Mace',
    rol: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    fotoPersona: Avatar4,
    mailUrl: '#',
    linkedinUrl: '#',
    cursoTutor: '1º',
    etapaTutor: 'Bach',
    idx: 3 
  },
  {
    name: 'Joana Juana de Arco',
    rol: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    fotoPersona: AvatarLana,
    mailUrl: '#',
    linkedinUrl: '#',
    cursoTutor: '1º',
    etapaTutor: 'ESO',
    idx: 4 
  },
  {
    name: 'Adria Galdon Arlandis',
    rol: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    fotoPersona: AvatarAdria,
    mailUrl: '#',
    linkedinUrl: '#',
    cursoTutor: '3º',
    etapaTutor: 'ESO',
    idx: 5
  },
]


const EquipoDirectivo = () => {
  return (
    <div className="flex flex-col lg:pl-64">
      <main>
        <Header />

        <div className=" my-12 mx-6 space-y-12">
          <div className="flex flex-row justify-between">
            <p className="text-lg font-medium leading-6 text-gray-900"> Equipo directivo del centro: </p>
            <div className="flex flex-row space-x-3">
              <StackedAvatars personas={personas}/> 
              <SearchBar />
            </div>
          </div>

          <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            {personas.map((p) => (
              <EquipoCard persona={p} />
            ))}
            </ul>
          </div>
      </main>
    </div>
  )
}

export default EquipoDirectivo;
