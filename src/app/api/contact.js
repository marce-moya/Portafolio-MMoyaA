import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });
        

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER, // enviarlo a mi propio correo o a otro 
            subject: `Nuevo mensaje de contacto de ${name}`,
            text: message,
            html: `<p><strong>Nombre:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Mensaje:</strong> ${message}</p>`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Mensaje enviado con éxito' });
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            res.status(500).json({ message: 'Error al enviar el mensaje' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} no permitido`);
    }
}

