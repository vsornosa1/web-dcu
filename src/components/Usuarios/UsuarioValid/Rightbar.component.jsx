import Overlay from '../../UI/Overlay.component';



const Rightbar = () => {
	return (
		<div className="flex flex-col lg:pl-64 ">
      {/* Home */}
      <main className="flex-1">

				<div className="mx-auto max-w-screen-xl px-4 pb-6 py-8 sm:px-6 lg:px-8 lg:pb-16">
					<Overlay />
				</div>
      </main>
		</div>
	)
}

export default Rightbar;
