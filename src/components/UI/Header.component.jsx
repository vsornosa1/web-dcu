import { useContext } from 'react';
import { RightbarContext } from '../../contexts/rightbar.context'; 

import Breadcrumb from './Breadcrumb.component';
import SolIcon from '../../assets/media/SolIcon.svg';
import RightbarIcon from '../../assets/media/RightbarIcon.svg';
import SearchBar from './SearchBar.component';


const Header = () => {
	const { setCurrentRightbar } = useContext(RightbarContext);

	return (
		<div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
			<div className="min-w-0 flex-1 flex flex-row">
				<Breadcrumb />
			</div>
			<div className="mt-4 flex sm:mt-0 sm:ml-4 space-x-4">
				<SearchBar />
				<img
					className="cursor-pointer hover:animate-spin"
					src={SolIcon}
					alt="Icono de light y dark mode"
				/>
				<img
					className="cursor-pointer rotate-180 hover:rotate-180 hover:animate-bounce"
					src={RightbarIcon}
					onClick={() => setCurrentRightbar(true)}
					alt="Icono del rightbar"
				/>
			</div>
		</div>
	)
}

export default Header