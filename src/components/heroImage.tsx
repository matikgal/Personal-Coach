export default function heroImage() {
	return (
		<div className="bg-[url('public/img/heroimage.jpg')] relative h-screen bg-cover bg-center flex items-center justify-center">
			<div className="absolute bg-black inset-0 opacity-40"></div>
			<div className="realative z-10 text-center text-white space-y-10">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-montserrat">
					Transform Your Body and Mind with Personal Coaching
				</h1>
				<p className="text-lg sm:text-xl mt-4 font-opensans ">
					Personalized fitness plans and guidance to reach your potential.
				</p>

				<a
					href="#contact"
					className="inline-block mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105 font-montserrat">
					Start Now
				</a>
			</div>
		</div>
	)
}
