import MenuIcon from '../../assets/media/MenuIcon.svg';
import Tick from '../../assets/media/tick.svg';
import TelefonoIcon from '../../assets/media/TelefonoIcon.svg';
import EmojiIcon from '../../assets/media/EmojiIcon.svg';
import EnviarIcon from '../../assets/media/EnviarIcon.svg';

import ChatAvatar1 from '../../assets/avatars/ChatAvatar1.svg';
import ChatAvatar2 from '../../assets/avatars/ChatAvatar2.svg';
import ChatAvatar3 from '../../assets/avatars/ChatAvatar3.svg';
import ChatGrupo4 from '../../assets/avatars/ChatGrupo4.svg';
import ChatGrupo5 from '../../assets/avatars/ChatGrupo5.svg';


const chats = [
	{
		nombre: "Mónica Martínez Alonso",
		mensaje: "Ok, luego revisamos el test",
		hora: "18:30",
		avatar: ChatAvatar1
	},
	{
		nombre: "José García García",
		mensaje: "Mi hermano no hace nada en clase 😄 ",
		hora: "18:16",
		avatar: ChatAvatar2
	},
	{
		nombre: "Carlos García García",
		mensaje: "Tú: Por fín hemos terminado DCU 🎉 🚀  ",
		hora: "18:02",
		avatar: ChatAvatar3
	},
	{
		nombre: "Grupo de Repaso - Física",
		mensaje: "Adrià: ¡Hola grupo! 👋",
		hora: "16:15",
		avatar: ChatGrupo4
	},
	{
		nombre: "Clase de Arte y plástica",
		mensaje: "Emily: Editorial",
		hora: "Jue",
		avatar: ChatGrupo5
	},
];

const mensajes = [
	{
		contenido: "Hola buenas tardes José !!",
		hora: "18:16",
		tieneTick: true,
		css1: "flex justify-end mb-2",
		css2: "rounded-xl py-1 px-3 bg-lime-200"
	},
	{
		contenido: "Tengo cita este Lunes y no podré dar clase... Me puedes echar un cable?",
		hora: "18:16",
		tieneTick: true,
		css1: "flex justify-end mb-2",
		css2: "rounded-xl py-1 px-3 bg-lime-200"
	},
	{
		contenido: "Claro, faltaría más Ana! 😄",
		hora: "❤️ 18:19",
		tieneTick: false,
		css1: "flex mb-2",
		css2: "rounded-xl py-1 px-3 bg-white"
	},
];

const Chat = () => {
	return (
	<div className="h-full">
		<div className="container mx-auto">
				<div className="py-6 h-auto">
						<div className="flex border-grey-100 rounded shadow-lg h-auto">
								{/* Sidebar */}
								<div className="w-1/3 border flex flex-col pb-52">

										{/* Header */}
										<div className="flex space-x-4 items-center py-2 px-3">
												<div>
														<img className="w-10 h-10 cursor-pointer"
															alt=""
															src={MenuIcon}
														/>
												</div>

												{/* Buscar */}
												<div className="relative flex-1">
													<div className="absolute inset-y-0 left-0 flex items-center pl-3">
														<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
													</div>
													<input id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Buscar..." />
												</div>
										</div>


										{/* Chats */}
										<div className="bg-grey-lighter flex-1 overflow-auto">
											{
												chats.map((chat, index) => (
													<div ley={index} className="bg-white px-3 flex items-center hover:bg-gray-100 cursor-pointer">
														<div>
																<img className="h-12 w-12 rounded-full"
																	alt="Avatar del alumno"		
																	src={chat.avatar} />
														</div>
														<div className="ml-4 flex-1 border-b border-grey-lighter py-4">
															<div className="flex items-bottom justify-between">
																<p className="font-semibold">
																		{ chat.nombre }
																</p>
																<p className="text-xs text-gray-500">
																	{ chat.hora }
																</p>
															</div>
															<p className="text-gray-500 mt-1 text-sm">
																{ chat.mensaje }
															</p>
														</div>
													</div>
												))
											}
										</div>
								</div>


								{/* Espacio de chat */}
								<div className="w-2/3 border flex flex-col">

										{/* Header */}
										<div className="py-2 px-3 bg-grey-lighter flex justify-between items-center">
												<div className="flex items-center">
														<div>
																<img className="w-10 h-10 rounded-full"
																src={ChatAvatar2}
																alt="" />
														</div>
														<div className="ml-4">
																<p className="font-semibold">
																	José García García
																</p>
																<p className="text-grey-darker text-xs mt-1">
																	Visto por ult. vez a las 18:16
																</p>
														</div>
												</div>

												<div className="flex items-center space-x-3">
														<div>
																<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".5" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path></svg>
														</div>
														<div className="">
														<img 
																src={TelefonoIcon}
																alt="Telefono icono"
															/>
														</div>
														<div className="">
																<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".6" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
														</div>
												</div>
										</div>

										{/* Mensajes */}
										<div className="flex-1 flex items-end overflow-auto bg-chatPrint">
												<div className="py-2 px-3 flex-1">

														<div className="flex justify-center mb-2">
																<div className="rounded-xl px-3 py-1 bg-sky-600">
																		<p className="text-sm text-white">
																			Today
																		</p>
																</div>
														</div>

														{
															mensajes.map((mensaje, index) => (
																<div key={index} className={mensaje.css1}>
																	<div className={mensaje.css2}>
																		<p className="text-sm mt-1">
																			{mensaje.contenido}
																		</p>
																		<div className="flex space-x-1 justify-end items-end">
																			<p className="text-right text-xs text-grey-dark mt-1">
																				{mensaje.hora}
																			</p>
																			
																		{
																			mensaje.tieneTick ?
																			<img 
																				className="mb-1"
																				src={Tick} 
																				alt="Tick" />
																			: <span />
																		}
																		</div>
																	</div>
																</div>
															))
														}

												</div>
										</div>

										{/* Input */}
										<div className="bg-grey-lighter px-4 py-4 flex items-center">
											<img 
												src={EmojiIcon}
												alt="Emoji icono"
											/>
											<div className="flex-1 mx-4">
													<input className="w-full border-none p-2" type="text" placeholder="Escribe un mensaje ..." />
											</div>
											<img 
												src={EnviarIcon}
												alt="Enviar icono"
											/>
										</div>
								</div>
						</div>
				</div>
		</div>
	</div>
	)
}

export default Chat;
