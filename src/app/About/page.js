import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import ClientButton from "@/components/Boton";

export default function App() {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <div className="flex">
        <div className="flex-1">
          <Image
            alt="Home Office"
            className="object-cover w-full h-full"
            src="/image/homeoffice.png"
          />
        </div>
        <div className="flex-1 p-4">
          <p className="text-large text-black/80">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
      
        <CardFooter className="justify-end before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 w-full shadow-small z-10">
          <Button className="text-large text-black bg-orange-300/20" variant="flat" color="default" radius="lg" size="sm">
            Ver más
          </Button>
        </CardFooter>
        <>
        <ClientButton text="Ver proyectos" />
        </>
    </Card>
  );
}















// import React from 'react';

// const About = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold mb-4">Página del About</h1>
//         <p className="text-gray-700">Aquí va el contenido de tu página About.</p>
//       </div>
//     </div>
//   );
// }

// export default About;
