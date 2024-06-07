import contact from '../assets/contact.jpg';

const Contact = () => {
    return (
        <div className='grid grid-cols-1 px-10 container mx-auto lg:grid-cols-2 items-center'>
            {/* --------------------------- */}
            <section className="p-6 bg-black bg-opacity-40 rounded-md ">
	<form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ">
		<h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25  " />
		</div>
		<div>
			<label htmlFor="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25  " />
		</div>
		<div>
			<label htmlFor="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25  "></textarea>
		</div>
		<div>
			<button type="submit" className="w-full bg-blue-600 px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50    ">Send</button>
		</div>
	</form>
</section>
            {/* --------------------------- */}
            <div>
                <img src={contact} alt="" />
            </div>
        </div>
    );
};

export default Contact;