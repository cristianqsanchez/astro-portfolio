import {
	Html5,
	CssThree,
	Javascript,
	Nodedotjs,
	ReactJs,
	Tailwindcss,
	Astro,
	Visualstudiocode,
	Linux,
	Figma,
	Python,
	Gnubash,
	Mysql,
	Git,
	Github,
} from '@icons-pack/react-simple-icons'

const size = 30

export default function Hero() {
	return (
		<div className='hero min-h-[32rem] bg-gray-900'>
			<div className='hero-content flex-col gap-12 md:flex-row'>
				<div className='max-w-7xl flex-1'>
					<h1 className='text-4xl lg:text-6xl font-bold text-white'>
						Hey{' '}
						<span className='bg-clip-text text-transparent bg-gradient-to-l from-blue-300 to-green-400'>
							Gradient
						</span>
					</h1>
					<p className='py-6'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum ipsum, tenetur libero
						veniam nostrum eius deserunt enim obcaecati voluptas adipisci possimus, praesentium, est
						debitis. Obcaecati blanditiis laborum fuga quibusdam.
					</p>
					<a href='#' className='btn btn-outline'>
						Button
					</a>
				</div>
				<div className='flex-1 relative aspect-square w-full p-4'>
					<div className='w-full aspect-square relative'>
						<div className='w-full h-full absolute animate-[spin_40s_linear_infinite] border border-white rounded-full'>
							<Html5
								color='#fff'
								size={size}
								className='absolute -top-5 left-[50%] translate-x-[-50%] h-8'
							/>
						</div>
						<div className='absolute rotate-[240deg] w-full h-full'>
							<div className='h-full w-full animate-[spin_40s_linear_infinite] rounded-full'>
								<CssThree
									color='#fff'
									size={size}
									className='absolute -top-5 left-[50%] translate-x-[-50%] h-8'
								/>
							</div>
						</div>
						<div className='absolute rotate-[120deg] w-full h-full'>
							<div className='h-full w-full animate-[spin_40s_linear_infinite] rounded-full'>
								<Javascript
									color='#fff'
									size={size}
									className='absolute -top-5 left-[50%] translate-x-[-50%] h-8'
								/>
							</div>
						</div>
						<div className='absolute rotate-[90deg] w-[80%] h-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
							<div className='h-full w-full animate-[spin_44s_linear_infinite] border border-white rounded-full'>
								<ReactJs
									color='#fff'
									size={size}
									className='absolute -top-5 left-[50%] translate-x-[-50%] h-8'
								/>
							</div>
						</div>
						<div className='absolute rotate-[180deg] w-[80%] h-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
							<div className='h-full w-full animate-[spin_44s_linear_infinite] rounded-full'>
								<Astro
									color='#fff'
									size={size}
									className='absolute -top-5 left-[50%] translate-x-[-50%] h-8'
								/>
							</div>
						</div>
						<div className='absolute rotate-[270deg] w-[80%] h-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
							<div className='h-full w-full animate-[spin_44s_linear_infinite] rounded-full'>
								<Nodedotjs
									color='#fff'
									size={size}
									className='absolute -top-5 left-[50%] translate-x-[-50%] h-8'
								/>
							</div>
						</div>
						<div className='absolute rotate-[360deg] w-[80%] h-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
							<div className='h-full w-full animate-[spin_44s_linear_infinite] rounded-full'>
								<Tailwindcss
									color='#fff'
									size={size}
									className='absolute -top-5 left-[50%] translate-x-[-50%] h-8'
								/>
							</div>
						</div>
						<div className='absolute rotate-[120deg] w-[60%] h-[60%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
							<div className='h-full w-full animate-[spin_32s_linear_infinite] border border-white rounded-full'>
								<Visualstudiocode
									color='#fff'
									size={size}
									className='absolute -top-5 left-[50%] translate-x-[-50%] h-8'
								/>
							</div>
						</div>
						<div className='absolute rotate-[240deg] w-[60%] h-[60%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
							<div className='h-full w-full animate-[spin_32s_linear_infinite] rounded-full'>
								<Figma
									color='#fff'
									size={size}
									className='absolute -top-5 left-[50%] translate-x-[-50%] h-8'
								/>
							</div>
						</div>
						<div className='absolute rotate-[360deg] w-[60%] h-[60%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
							<div className='h-full w-full animate-[spin_32s_linear_infinite] rounded-full'>
								<Linux
									color='#fff'
									size={size}
									className='absolute -top-5 left-[50%] translate-x-[-50%] h-8'
								/>
							</div>
						</div>
						<div className='absolute rotate-[120deg] w-[40%] h-[40%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
							<div className='h-full w-full animate-[spin_24s_linear_infinite] border border-white rounded-full'>
								<Python
									color='#fff'
									size={size}
									className='absolute -top-5 left-[50%] translate-x-[-50%] h-8'
								/>
							</div>
						</div>
							<div className='absolute rotate-[240deg] w-[40%] h-[40%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
							<div className='h-full w-full animate-[spin_24s_linear_infinite] rounded-full'>
								<Mysql
									color='#fff'
									size={50}
									className='absolute -top-5 left-[50%] translate-x-[-50%] h-8'
								/>
							</div>
						</div>
							<div className='absolute rotate-[360deg] w-[40%] h-[40%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
							<div className='h-full w-full animate-[spin_24s_linear_infinite] rounded-full'>
								<Gnubash
									color='#fff'
									size={size}
									className='absolute -top-5 left-[50%] translate-x-[-50%] h-8'
								/>
							</div>
						</div>
							<div className='absolute rotate-[120deg] w-[20%] h-[20%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
							<div className='h-full w-full animate-[spin_20s_linear_infinite] border border-white rounded-full'>
								<Git
									color='#fff'
									size={size}
									className='absolute -top-5 left-[50%] translate-x-[-50%] h-8'
								/>
							</div>
						</div>
							<div className='absolute rotate-[300deg] w-[20%] h-[20%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
							<div className='h-full w-full animate-[spin_20s_linear_infinite] rounded-full'>
								<Github
									color='#fff'
									size={size}
									className='absolute -top-5 left-[50%] translate-x-[-50%] h-8'
								/>
							</div>
						</div>
						<div className='absolute h-full w-full flex items-center justify-center'>
							<h2 className='text-white'>Yo</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
