import { useInView } from 'react-intersection-observer'

export default function Services() {
	const { ref, inView } = useInView({
		threshold: 0.4,
		triggerOnce: true,
	})

	return (
		<div className="py-16 bg-gray-100" ref={ref}>
			<div className="container mx-auto px-6 md:px-20 text-center">
				<h2 className="text-3xl font-bold text-gray-800 mb-10 font-montserrat">How I Can Help You</h2>

				<div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-6">
					<div
						className={`flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-all duration-300  ${
							inView ? 'animate-fade-up opacity-100' : 'opacity-0 '
						} hover:shadow-2xl`}>
						<div className="bg-green-100 p-4 rounded-full mb-4">
							<img src="/img/gym.svg" alt="" className="size-8" />
						</div>

						<h3 className="text-xl font-semibold text-gray-800 mb-2 font-montserrat">Personal Training</h3>
						<p className="text-gray-600 font-opensans">One-on-one coaching tailored to your goals.</p>
					</div>

					<div
						className={`flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-all duration-300  ${
							inView ? 'animate-fade-up opacity-100 animate-delay-150' : 'opacity-0 '
						} hover:shadow-2xl`}>
						<div className="bg-green-100 p-4 rounded-full mb-4">
							<img src="/img/web.svg" alt="" className="size-8" />
						</div>

						<h3 className="text-xl font-semibold text-gray-800 mb-2 font-montserrat">Online Programs</h3>
						<p className="text-gray-600 font-opensans">One-on-one coaching tailored to your goals.</p>
					</div>

					<div
						className={`flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-all duration-300  ${
							inView ? 'animate-fade-up opacity-100 animate-delay-300' : 'opacity-0 '
						} hover:shadow-2xl`}>
						<div className="bg-green-100 p-4 rounded-full mb-4">
							<img src="/img/plan.svg" alt="" className="size-8" />
						</div>

						<h3 className="text-xl font-semibold text-gray-800 mb-2 font-montserrat">Nutrition Plans</h3>
						<p className="text-gray-600 font-opensans">One-on-one coaching tailored to your goals.</p>
					</div>
				</div>
			</div>
		</div>
	)
}
