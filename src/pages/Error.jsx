import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/error.jpg'

const Error = () => {
    return (
        <div className=''>
            <section className="flex items-center h-full p-16  ">
	<div className="container flex items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl ">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
			<Link to='/' rel="noopener noreferrer" href="#" className="px-8 bg-black text-white py-3 font-semibold rounded ">Back to homepage</Link>
			<Link to='/dashboard/addapet' rel="noopener noreferrer" href="#" className="px-8 ml-4 bg-black text-white py-3 font-semibold rounded ">Back to Dashboard</Link>
		</div>
        <div>
            <img className='w-[600px]' src={error} alt="" />
        </div>
	</div>
</section>
        </div>
    );
};

export default Error;