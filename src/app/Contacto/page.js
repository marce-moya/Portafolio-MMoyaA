"use client";
import React, {useState} from 'react'

const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });


      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            alert('Mensaje enviado con éxito');
            setFormData({
              name: '',
              email: '',
              message: '',
            });
          } else {
            alert('Error al enviar el mensaje');
          }
        } catch (error) {
          console.error('Error al enviar el mensaje:', error);
          alert('Error al enviar el mensaje');
        }
      };

      return (
        <div className="container mx-auto p-4">
          <h3 className="text-2xl text-orange-950  font-semibold mb-4">Contáctame</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font text-gray-700">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-gray-700">Mensaje</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-orange-800 text-white text-xs  px-2 py-2 rounded-md"
            >
              Enviar
            </button>
          </form>
        </div>
      );
    };



export default Contacto






// return (
//     <div className="min-h-screen flex items-center justify-center">
//     <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold mb-4">Página del Contacto</h1>
//       <p className="text-gray-700">Aquí va el formulario de Contacto</p>
//     </div>
//   </div>
//   )
// }