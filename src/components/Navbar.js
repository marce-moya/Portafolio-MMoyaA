import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex items-center bg-orange-950 p-4'>
      <div className='mr-4 rounded-lg overflow-hidden lex items-center w-1/3'>
        <Image
          src="/image/icono_gato.png"
          alt="Logo"
          width={50}
          height={50}
        />
        <Link href="/About">
          <p className='text-white hover:text-orange-700 cursor-pointer align-middle text-xs'>Acerca de mi</p>
        </Link>
        <Link href="/Proyectos">
          <p className='text-white hover:text-orange-700 cursor-pointer align-middle text-xs'>Proyectos</p>
        </Link>
        <Link href="/contacto">
          <p className='text-white hover:text-orange-700 cursor-pointer align-middle text-xs'>Contacto</p>
        </Link>
        <Link href="/Feedback">
          <p className='text-white hover:text-orange-700 cursor-pointer align-middle text-xs'>Feedback</p>
        </Link>
      </div>
      <div className='flex flex-grow justify-end w-2/3'>
        <a
          href="/doc/CV Marcela Alejandra Moya Arellano.pdf"
          download
          className='text-yellow-500 hover:text-orange-700 cursor-pointer font-semibold align-middle text-xs'
        >
          Descargar CV
        </a>
      </div>
    </div>
  );
}

export default Navbar


     