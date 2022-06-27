import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
	title: string;
	slug: string;
	avaliableAt: Date;
	type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
	const { slug } = useParams<{ slug: string}>();
	const avaliableDateFormatted = format(props.avaliableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
		locale: ptBR
	})
	const isReleased = isPast(props.avaliableAt);
	const isSelected = slug === props.slug;

	return (
		<Link to={`/event/lesson/${props.slug}`} className={isReleased ? 'group relative' : 'pointer-events-none cursor-not-allowed'}>
			<span className="text-gray-300">
				{avaliableDateFormatted}
			</span>

			<div className={` ${isSelected ? 'bg-green-500 before:h-[14px] before:w-[14px] before:bg-green-500 before:rotate-45 before:absolute before:top-1/2 before:left-0 before:-translate-x-1/2 before:translate-y-full' : ''} rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500`}>
				<header className="flex items-center justify-between">
					{isReleased ? (
						<span className={`${isSelected ? 'text-white' : 'text-blue-500'} text-sm font-medium flex gap-2 items-center`}>
							<CheckCircle size={20}/>
							Conteúdo liberado
						</span>
					): (
						<span className="text-sm text-orange-500 font-medium flex gap-2 items-center">
							<Lock size={20}/>
							Em breve
						</span>
					)}
					<span className={`${isSelected ? 'border-white' : 'border-green-300'} text-xs rounded py-[0.125rem] px-2 text-white border  font-bold `}>
						{props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
					</span>
				</header>
				<strong className={`${isSelected ? 'text-white' : 'text-gray-200'} mt-5 block`}>
					{props.title}
				</strong>
			</div>
		</Link>
	)
}