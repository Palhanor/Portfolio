import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        // Create a transporter using environment variables
        // For development without env vars, this might fail or we can use a fallback (like console logging)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: Boolean(process.env.SMTP_SECURE) || false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Check if configuration is missing to avoid crashing if env vars aren't set
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.warn('⚠️ SMTP configuration missing. Using mock mode (logging to console).');
            console.log('--- MOCK EMAIL ---');
            console.log(`From: ${name} <${email}>`);
            console.log(`Message: ${message}`);
            console.log('------------------');

            // Simulate network delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            return res.status(200).json({ message: 'Message sent successfully (mock mode)' });
        }

        // Send email
        await transporter.sendMail({
            from: process.env.SMTP_FROM || `"${name}" <${process.env.SMTP_USER}>`, // Sender address
            replyTo: email,
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // List of receivers
            subject: `Novo contato de: ${name}`, // Subject line
            text: message, // plain text body
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>Novo contato através do portfólio</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <h3>Mensagem:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        });

        return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Failed to send message' });
    }
}
