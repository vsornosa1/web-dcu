import { useState, useEffect } from "react";



const StackedAvatars = (props) => {
	/* const [personas, setPersonas] = useState(props); */
	const { personas } = props;
	let array = [];
	/* useEffect(() => {
		Array.from(props.map((persona) => 
			array.push(persona.fotoPersona);
		));
		setAvatars(array);
	}, []); */

	/* const { AvatarElsa, AvatarJoan, AvatarEliot, Avatar4, AvatarLana, AvatarAdria } = props;

	const avatars = [
		AvatarElsa, AvatarJoan, AvatarEliot, Avatar4, AvatarLana, AvatarAdria
	] */

  return (
		<div className="isolate flex -space-x-2 overflow-hidden">
			{personas.map(persona => (
				<img
					key={persona.fotoPersona}
					className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
					src={persona.fotoPersona}
					alt={persona.fotoPersona}
				/>
			))}
			<div className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"> +74 </div>
		</div>
  )
}

export default StackedAvatars;
