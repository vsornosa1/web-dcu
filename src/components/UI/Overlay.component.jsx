import { Fragment, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { RightbarContext } from '../../contexts/rightbar.context'; 

import Notificacion1Icon from '../../assets/media/Notificacion1Icon.svg';
import Notificacion2Icon from '../../assets/media/Notificacion2Icon.svg';
import Notificacion3Icon from '../../assets/media/Notificacion3Icon.svg';
import Notificacion4Icon from '../../assets/media/Notificacion4Icon.svg';

import AvatarElsa from '../../assets/avatars/AvatarElsa.svg';
import AvatarJoan from '../../assets/avatars/AvatarJoan.svg';
import AvatarEliot from '../../assets/avatars/AvatarEliot.svg';
import Avatar4 from '../../assets/avatars/Avatar4.svg';
import AvatarLana from '../../assets/avatars/AvatarLana.svg';
import AvatarAdria from '../../assets/avatars/AvatarAdria.svg';


const notificaciones = [
  {
    titulo: "Nueva nota de Programación",
    fecha: "Hace 5m",
    icono: Notificacion1Icon,
    colorIcono: "bg-sky-50",
    focusState: "italic",
    focusedContainer: "bg-gray-100 hover:bg-gray-200"
  },
  {
    titulo: "Joan Juan Llopis ha enviado 1 mensaje",
    fecha: "Hoy a las 11:23h",
    icono: Notificacion2Icon,
    colorIcono: "bg-indigo-100",
    focusState: "",
    focusedContainer: "hover:bg-gray-50"
  },
  {
    titulo: "Nueva reunión de Matemáticas",
    fecha: "Ayer a las 12:05h",
    icono: Notificacion3Icon,
    colorIcono: "bg-sky-50",
    focusState: "",
    focusedContainer: "hover:bg-gray-50"
  },
  {
    titulo: "Convocatoria test de Física",
    fecha: "Jue 08/12",
    icono: Notificacion4Icon,
    colorIcono: "bg-indigo-100",
    focusState: "",
    focusedContainer: "hover:bg-gray-50"
  },
];

const chats = [
  {
    nombre: "Elsa Patilla Navarro",
    avatar: AvatarElsa,
    tieneMensaje: "h-2 w-2 bg-blue-600 rounded-full",
    focusedContainer: "bg-gray-100 hover:bg-gray-200"
  },
  {
    nombre: "Joan Juan Llopis",
    avatar: AvatarJoan,
    tieneMensaje: "h-2 w-2 bg-blue-700 rounded-full",
    focusedContainer: "bg-gray-100 hover:bg-gray-200"
  },
  {
    nombre: "Eliot Richard Titmus Mace",
    avatar: AvatarEliot,
    tieneMensaje: "",
    focusedContainer: "hover:bg-gray-50"
  },
  {
    nombre: "Juana Del Arco",
    avatar: Avatar4,
    tieneMensaje: "",
    focusedContainer: "hover:bg-gray-50"
  },
  {
    nombre: "Laia Benavent Benavent",
    avatar: AvatarLana,
    tieneMensaje: "",
    focusedContainer: "hover:bg-gray-50"
  },
  {
    nombre: "Adrià Galdón Galdón",
    avatar: AvatarAdria,
    tieneMensaje: "",
    focusedContainer: "hover:bg-gray-50"
  },
];

const Overlay = () => {
  const { currentRightbar, setCurrentRightbar } = useContext(RightbarContext);

  return (
    <Transition.Root show={currentRightbar} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setCurrentRightbar(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-96">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setCurrentRightbar(false)}
                      >
                        <span className="sr-only"> Tancar overlay </span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-full overflow-y-auto bg-white p-8">
                    <div className="space-y-6 pb-16">
                      <div>
                        <h3 className="font-medium text-lg text-gray-900"> Notificaciones </h3>
                        <div className="mt-2">
                        {
                          notificaciones.map((notificacion, index) => {
                            return <div key={index} className={`flex justify-start space-x-4 p-2 text-sm font-medium rounded-xl cursor-pointer ${notificacion.focusedContainer}`}>
                              <img 
                                className={`h-8 w-8 p-1 bg-blue-100 rounded-lg ${notificacion.colorIcono}`}
                                src={notificacion.icono}
                                alt="Icono Notificacion X"
                              />
                              <div className="flex flex-col items-start">
                                <p className={`truncate text-base text-gray-900 ${notificacion.focusState}`}> { notificacion.titulo } </p>
                                <p className={`truncate text-gray-400 ${notificacion.focusState}`}> { notificacion.fecha } </p>
                              </div>
                            </div>
                          })
                        }
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-gray-900"> Chats </h3>
                        <div className="mt-2">
                        {
                          chats.map((chat, index) => {
                            return <div key={index} className={`flex justify-start items-center space-x-4 my-3 px-4 text-sm font-medium rounded-xl cursor-pointer ${chat.focusedContainer}`}>
                              { chat.tieneMensaje ? <div className={`${chat.tieneMensaje}`} /> : <span className='h-0 w-0'/>}
                              <img 
                                className="h-12 w-12 py-1"
                                src={chat.avatar}
                                alt="Icono chat X"
                              />
                              <div className="flex flex-col items-start">
                                <p className={`truncate text-base text-gray-900 ${chat.focusState}`}> { chat.nombre } </p>
                              </div>
                            </div>
                          
                          })
                        }
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Overlay;
