import YouTube from 'react-youtube'

interface VideoProps {
	title: string;
	description: string;
	teacher: {
		name: string;
		avatar: string;
		bio: string;
	}

}

export function Video() {
	return (
		<div className="flex flex-1 flex-col">
			<YouTube videoId='cUT665tW4v8'/>
			<div className="flex flex-1 p-8 gap-[60px]">
				<main className="flex flex-col">
					<span className="font-bold text-2xl">
						Aula 01 - Criando o projeto e realizando o setup inicial
					</span>
					<span className="pt-4 text-gray-200">
						Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
					</span>
					<div className="pt-6 flex items-center gap-4">
						<img src="https://avatars.githubusercontent.com/u/3437672?v=4" alt="" className="w-16 h-16 rounded-full border-solid border-2 border-blue-500"/>
						<div className="flex flex-col">
							<span className="font-bold text-2xl">Fernando Barros</span>
							<span className="text-sm text-gray-200">Co-fundador e CTO na Delta</span>
						</div>
					</div>
				</main>
				<aside>
					<button> Comunidade no Discord</button>
					<button> Acesse o desafio</button>
				</aside>

			</div>
		</div>
	)
}