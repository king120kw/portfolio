const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { name, email, subject, message } = JSON.parse(event.body);
        console.log(`Sending email for inquiry: ${subject} from ${name} (${email})`);

        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not set in environment variables');
            throw new Error('Server configuration error');
        }

        const data = await resend.emails.send({
            from: 'onboarding@resend.dev', // Resend "Testing" domain (works for Verified email)
            to: 'ismailabdirahman1767@gmail.com', // Your verified email
            subject: `New Project Inquiry: ${subject}`,
            html: `
        <h1>New Collaboration Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message}</p>
      `
        });

        console.log('Email sent successfully:', data);

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, data }),
        };
    } catch (error) {
        console.error('Email Error Details:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error.message,
                details: error.response ? error.response.data : 'No additional details'
            }),
        };
    }
};
