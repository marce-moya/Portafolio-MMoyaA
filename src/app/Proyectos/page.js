import React from "react";
import {Card, CardHeader, Image } from "@nextui-org/react";

export default function App() {
  return (
    <div className="max-w-[900px] grid grid-cols-12 gap-4 px-8">
      <Card className="relative col-span-12 sm:col-span-6 h-[200px]">
        <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
          <p className="text-2xl text-blue-200 uppercase font-bold">Funcionalidades básicas</p>
          <h4 className="text-white font-bold text-large">CRUD JAVASCRIPT</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/image/CRUDJAVASCRIPT.png"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </Card>
      <Card className="relative col-span-12 sm:col-span-3 h-[200px]">
        <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
          <p className="text-2xl text-blue-200 uppercase font-bold">Landing Page</p>
          <h4 className="text-white font-bold text-large">HTML y CSS</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/image/Breakintires.png"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </Card>
      <Card className="relative col-span-12 sm:col-span-3 h-[200px]">
        <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
          <p className="text-xl text-blue-200 uppercase font-bold">Funcionalidades</p>
          <h4 className="text-white font-bold text-large">MINI APP</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/image/TipodeCambioUSDaCLP.png"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </Card>
      <Card isFooterBlurred className="relative col-span-12 sm:col-span-5 h-[250px]">
        <CardHeader className="absolute z-10 bottom-1 flex-col items-start">
          <p className="text-2xl text-blue-100 uppercase font-bold">Web para negocio</p>
          <h4 className="text-white font-bold text-large">HTML REACT</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="/image/webrestaurante.png"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </Card>
      <Card isFooterBlurred className="relative col-span-12 sm:col-span-7 h-[250px]">
        <CardHeader className="absolute z-10 bottom-1 flex-col items-start">
          <p className="text-xl text-blue-200 uppercase font-bold">FRONTEND-BACKEND</p>
          <h4 className="text-white font-bold text-large">REACTJS API NODE EXPRESSJS MONGODB</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="/image/petshop.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </Card>
    </div>
  );
}









// import React from 'react'

// const Proyectos = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold mb-4">Página del Catálogo</h1>
//         <p className="text-gray-700">Aquí va el contenido de tu Catálogo</p>
//       </div>
//     </div>
//   )
// }

// export default Proyectos