export default function aboutMe() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-20">
			<div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
				<img
					src="public/img/trainer.jpg"
					alt="Personal coach"
					className="rounded-lg shadow-lg w-3/4 md:w-4/5 transform md:scale-90 md:translate-x-4"
				/>
			</div>

			<div className="w-full md:w-1/2 text-center md:text-left md:px-8 space-y-8">
				<h2 className="text-3xl font-bold text-green-600 mb-4 font-montserrat">Meet Your Coach</h2>
				<p className="text-lg text-gray-700 font-opensans">
					I’m Jack, a certified fitness coach specializing in personal and online training. I focus on holistic fitness
					approaches to empower clients physically, mentally, and nutritionally.
				</p>

				<ul className="space-y-2 mt-4 text-left font-opensans">
					<li className="flex items-start">
						<span className="text-green-600 mr-3">
							<svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
								<path d="M9 16.2L4.8 12l1.4-1.4 2.8 2.8L18.6 7l1.4 1.4L9 16.2z" />
							</svg>
						</span>
						<p className="text-gray-700">Customized training plans tailored to individual goals.</p>
					</li>
					<li className="flex items-start">
						<span className="text-green-600 mr-3">
							<svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
								<path d="M9 16.2L4.8 12l1.4-1.4 2.8 2.8L18.6 7l1.4 1.4L9 16.2z" />
							</svg>
						</span>
						<p className="text-gray-700">24/7 support and motivation to stay on track.</p>
					</li>
					<li className="flex items-start">
						<span className="text-green-600 mr-3">
							<svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
								<path d="M9 16.2L4.8 12l1.4-1.4 2.8 2.8L18.6 7l1.4 1.4L9 16.2z" />
							</svg>
						</span>
						<p className="text-gray-700">Proven track record with numerous success stories.</p>
					</li>
				</ul>
			</div>
		</div>
	)
}
