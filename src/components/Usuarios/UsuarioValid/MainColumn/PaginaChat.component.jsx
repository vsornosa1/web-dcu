import Chat from '../../../UI/Chat.component';
import Header from '../../../UI/Header.component';


const PaginaChat = () => {
	return (
		<div className="flex flex-col lg:pl-64 ">
      {/* Home */}
      <main className="flex-1">
        
        {/* Header de dalt */}
        <Header />

				<div className="mx-auto max-w-screen-xl px-4 pb-6 py-8 sm:px-6 lg:px-8 lg:pb-16">
					<Chat />
				</div>
      </main>
		</div>
	)
}

export default PaginaChat;
