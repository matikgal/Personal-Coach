import { useInView } from 'react-intersection-observer'

export default function Testimonials() {
	const { ref, inView } = useInView({
		threshold: 0.4,
		triggerOnce: true,
	})

	return (
		<div className="bg-gray-50 py-16 px-6 md:px-20">
			<h2 className="text-3xl font-bold text-center text-green-600 mb-8 font-montserrat">What My Clients Say</h2>
			<div
				ref={ref}
				className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-8 md:space-y-0 container items mx-auto">
				<div
					className={`bg-white shadow-lg rounded-lg p-6 md:w-1/3 mx-auto transition-all duration-300 font-opensans hover:shadow-2xl ${
						inView ? 'animate-fade-up opacity-100' : 'opacity-0'
					}`}>
					<p className="text-lg text-gray-700 italic">
						"Jack helped me reach my goals faster than I ever thought possible. His customized approach keeps me
						motivated every step of the way!"
					</p>
					<p className="mt-4 text-green-600 font-bold">~ Sarah M.</p>
				</div>

				<div
					className={`bg-white shadow-lg rounded-lg p-6 md:w-1/3 mx-auto transition-all duration-300 font-opensans hover:shadow-2xl ${
						inView ? 'animate-fade-up opacity-100 animate-delay-150' : 'opacity-0'
					}`}>
					<p className="text-lg text-gray-700 italic">
						"The online programs are perfect for my busy schedule. I’ve seen amazing results in just a few months."
					</p>
					<p className="mt-4 text-green-600 font-bold">~ John D.</p>
				</div>

				<div
					className={`bg-white shadow-lg rounded-lg p-6 md:w-1/3 mx-auto transition-all duration-300 font-opensans hover:shadow-2xl ${
						inView ? 'animate-fade-up opacity-100 animate-delay-300' : 'opacity-0'
					}`}>
					<p className="text-lg text-gray-700 italic">
						"Jack’s nutrition plan has changed the way I approach food. I feel healthier and more energetic than ever."
					</p>
					<p className="mt-4 text-green-600 font-bold">~ Lisa K.</p>
				</div>
			</div>
		</div>
	)
}
