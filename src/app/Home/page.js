import React from 'react';
import { Image } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import ClientButton from '../../components/Boton';
import DateDisplay from '../../components/Date';

const Home = () => {
    return (
        <div className="flex">

            <div className="flex-1">
                <Image
                    alt="Home Office"
                    className="object-cover w-full h-full"
                    src="/image/homeoffice.png"
                />
            </div>


            <div className="flex-1 p-4 flex flex-col justify-center items-center">
                <div className="text-center mx-auto m-6">
                    <div>Hola,</div>
                    <DateDisplay />
                    <ClientButton text="Contacto" />


                    <div className="flex mt-4 justify-center">
                        <FontAwesomeIcon icon={faTwitter} size="2x" className="mx-2 text-blue-500 hover:text-blue-700 cursor-pointer" />
                        <FontAwesomeIcon icon={faFacebook} size="2x" className="mx-2 text-blue-500 hover:text-blue-700 cursor-pointer" />
                        <FontAwesomeIcon icon={faInstagram} size="2x" className="mx-2 text-blue-500 hover:text-blue-700 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
