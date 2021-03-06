import { CaretRight, DiscordLogo, FileArrowDown, ImageSquare, Lightning } from 'phosphor-react';
import { DefaultUi, Player, Youtube } from '@vime/react'

import '@vime/core/themes/default.css'
import { useParams } from 'react-router-dom';
import { useGetLessonBySlugQuery } from '../graphql/generated';

export function Video() {
	const { slug } = useParams<{ slug: string}>();
	const { data } = useGetLessonBySlugQuery({
		variables: {
			slug
		}
	});

	if(!data || !data.lesson) {
		return (
			<h1>Carregando...</h1>
		)
	}

	return (
		<div>
			<div className="bg-black flex justify-center">
				<div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
					<Player>
						<Youtube videoId={data?.lesson.videoId}/>
						<DefaultUi/>
					</Player>
				</div>
			</div>

			<div className="p-8 max-w-[1100px] mx-auto">
				<div className="flex items-start gap-16">
					<main className="flex-1">
						<h1 className="font-bold text-2xl">
							{data.lesson.title}
						</h1>
						<p className="mt-4 text-gray-200 leading-relaxed">
							{data.lesson.description}
						</p>
						{data.lesson.teacher && (
							<div className="mt-6 flex items-center gap-4">
								<img src={data.lesson.teacher.avatarURL} alt="" className="w-16 h-16 rounded-full border-2 border-blue-500" />
								<div className="leading-relaxed">
									<strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
									<span className="text-sm text-gray-200 block">{data.lesson.teacher.bio}</span>
								</div>
							</div>
						)}
					</main>
					<aside className='flex flex-col gap-4'>
						<a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
							<DiscordLogo size={24} />
							Comunidade no Discord
						</a>
						<a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-black transition-colors">
							<Lightning size={24} />
							Acesse o desafio
						</a>
					</aside>
				</div>

				<div className="gap-8 mt-20 grid grid-cols-2">
					<a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
						<div className="bg-green-700 h-full flex p-6 items-center">
							<FileArrowDown size={40} />
						</div>
						<div className="py-6 leading-relaxed">
							<strong className="text-2xl">Material complementar</strong>
							<p className="text-sm text-gray-200">
								Acesse o material complementar para acelerar o seu desenvolvimento
							</p>
						</div>
						<div className="h-full flex p-6 items-center">
							<CaretRight size={24} />
						</div>
					</a>
					<a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
						<div className="bg-green-700 h-full flex p-6 items-center">
							<ImageSquare size={40} />
						</div>
						<div className="py-6 leading-relaxed">
							<strong className="text-2xl">Wallpapers exclusivos</strong>
							<p className="text-sm text-gray-200">
								Baixe wallpapers exclusivos do Ignite Lab e personalize sua m??quina
							</p>
						</div>
						<div className="h-full flex p-6 items-center">
							<CaretRight size={24} />
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}