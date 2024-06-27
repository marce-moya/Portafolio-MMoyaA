import React from 'react'
import { Image } from '@nextui-org/react'; // Asegúrate de importar Image desde el paquete correcto

const Home = () => {
    return(
        <>
            <div>Página del Home</div>
            <div className="flex">
                <div className="flex-1">
                    <Image
                        alt="Home Office"
                        className="object-cover w-full h-full"
                        src="/image/homeoffice.png"
                    />
                </div>
            </div>
        </>
    )
}
export default Home
