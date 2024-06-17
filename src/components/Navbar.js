import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navbar = () => {
  return (
    <div>
      <Image
      src="/image/icono_gato.png"
      alt="Logo"
      width={50}
      height={50}
      />
      <div>
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/About">
          <p>About</p>
        </Link>
        <Link href="/Contacto">
          <p>Contacto</p>
        </Link>
        <Link href="/Catalogo">
          <p>Catálogo</p>
        </Link>
        <Link href="/Feedback">
          <p>Feedback</p>
        </Link>
      </div>
    </div>
  );
}

export default navbar
