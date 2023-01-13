import React from 'react'
import { Outlet } from 'react-router-dom';

import Sidebar from '../../components/Usuarios/UsuarioValid/Sidebar.component';
import TransitionRoot from '../../components/Usuarios/UsuarioValid/TransitionRoot.component';

import SidebarAnonimo from '../../components/Usuarios/Anonimo/SidebarAnonimo.component';
import TransitionRootAnonimo from '../../components/Usuarios/Anonimo/TransitionRootAnonimo.component';

const Home = (props) => {
	const { isAnonimo } = props;

	return (
		<>
			{ 
				isAnonimo ? (
					<div>
						<TransitionRootAnonimo />
						<SidebarAnonimo />
						<Outlet />
					</div>
			) 
			: (
				<div>
					<TransitionRoot />
					<Sidebar />
					<Outlet />
				</div>
			)}
		</>
	)
}

export default Home