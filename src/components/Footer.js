import React from 'react'

const footer = () => {
  return (
    <footer className='bg-orange-950 text-white p-4 text-center fixed bottom-0 w-full text-xs'>
      <div className='container mx-auto flex justify-between'>
        <div className='w-1/3 text-left'>
        <p> ® 2024 Todos los derechos reservados </p>
        <p> Teléfono: +569 95009098 </p>
        <p> Santiago - Chile </p>         
        </div>
        <div className='w-1/3 gap-3'>
        <span className='text-orange-700  '>Políticas de uso - Términos y condiciones</span> 
        </div>
        <div className='w-1/3 text-right'>
        <p>Redes Sociales Instagram - Facebook - Linkedin</p>
        <p>mail: marcelamoya@gmail.com</p>  
        </div>
      </div>
    </footer>
  );
}

export default footer
