import React from 'react'

import Sidebar from '../../components/Usuarios/UsuarioValid/Sidebar.component';
import TransitionRoot from '../../components/Usuarios/UsuarioValid/TransitionRoot.component';
import Dashboard from '../../components/Usuarios/UsuarioValid/MainColumn/Dashboard.component';

import SidebarAnonimo from '../../components/Usuarios/Anonimo/SidebarAnonimo.component';
import TransitionRootAnonimo from '../../components/Usuarios/Anonimo/TransitionRootAnonimo.component';
import DashboardAnonimo from 			'../../components/Usuarios/Anonimo/MainColumn/DashboardAnonimo.component';

const Home = (props) => {
	const { isAnonimo } = props;

	return (
		<>
			{ 
				isAnonimo ? (
					<div>
						<TransitionRootAnonimo />
						<SidebarAnonimo />
						<DashboardAnonimo />
					</div>
			) 
			: (
				<div>
					<TransitionRoot />
					<Sidebar />
					<Dashboard />
				</div>
			)}
		</>
	)
}

export default Home