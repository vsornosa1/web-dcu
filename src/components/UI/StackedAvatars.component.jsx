

const StackedAvatars = (props) => {
	const { personas } = props;

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
