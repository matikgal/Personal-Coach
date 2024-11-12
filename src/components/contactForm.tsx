export default function contactForm() {
	return (
		<div className="py-16 bg-white">
			<div className="max-w-xl mx-auto text-center">
				<h2 className="text-3xl font-bold text-gray-800 mb-6 font-montserrat">Get in Touch</h2>
				<form action="" className="space-y-4 px-4 font-opensans">
					<input
						type="text"
						placeholder="Your Name"
						className="w-full border border-green-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
					/>
					<input
						type="email"
						placeholder="Your Email"
						className="w-full border border-green-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
					/>
					<textarea
						name=""
						id=""
						placeholder="Your Message"
						className="w-full border border-green-600 rounded-lg px-4 py-2 min-h-32 h-32 focus:outline-none focus:ring-2 focus:ring-green-500 transition"></textarea>
					<button
						type="submit"
						className="inline-block bg-green-600 hover:bg-green-700 focus:bg-green-700 text-white font-semibold rounded-lg px-6 py-3 shadow-lg tranistion transform hover:scale-105 focus:sclae-105 duration-300">
						Send Message
					</button>
				</form>
			</div>
		</div>
	)
}
