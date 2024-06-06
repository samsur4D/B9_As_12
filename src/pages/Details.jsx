import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../components/Modal'; 
const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    const singleData = details.find((detail) => detail._id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch("http://localhost:5000/pet")
            .then((res) => res.json())
            .then((data) => {
                setDetails(data);
            });
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            {singleData && (
                <section className='grid grid-cols-1 lg:grid-cols-2   items-center justify-center'>
                    <div className="">
                        <div className="container bg-[#aaa69d] flex flex-col items-center px-5 py-16 pb-24 mx-auto text-center lg:pb-72 md:py-32 md:px-10 lg:px-32">
                            <h1 className="text-5xl font-bold leading-none font-samu sm:text-6xl  ">{singleData.name}</h1>
                            <div className='flex gap-10 mt-5 '>
                                <h1 className="text-5xl font-bold  leading-none sm:text-6xl  lg:text-2xl  ">Breed: {singleData.breed} </h1>
                                <h1 className="text-5xl font-bold leading-none sm:text-6xl   lg:text-2xl">Location: {singleData.location} </h1>
                            </div>
                            <p className="mt-10 mb-3 text-3xl font-semibold sm:mb-12  ">{singleData.details}</p>
                            <p className="mt-3 mb-3 text-3xl font-semibold sm:mb-12  ">{singleData.longDescription
}</p>
                          
                            <div className="flex flex-wrap justify-center">
                                <button
                                    
                                    type="button"
                                    onClick={openModal}
                                    className="px-8 py-3 m-2 text-lg font-semibold rounded"
                                >{`Do you want to adopt ${singleData.name}?`}</button>
                                <button
                                    
                                    type="button"
                                    onClick={openModal}
                                    className="px-8 py-3 m-2 text-lg border rounded"
                                >{`Adopt ${singleData.name}`}</button>
                            </div>
                        </div>
                    </div>
                    <img src={singleData.image} alt="" className="w-full h-[950px] mx-auto    shadow-md " />
                </section>
            )}
            <Modal isOpen={isModalOpen} onClose={closeModal} singleData={singleData} /> {/* Include Modal */}
        </>
    );
};

export default Details;
