const { Resend } = require('resend');

// Note: In production, use process.env.RESEND_API_KEY
const resend = new Resend('re_9kfsuYSN_4BarZAww9vMpJ4QMtntcUS1J');

exports.handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { name, email, subject, message } = JSON.parse(event.body);

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

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, data }),
        };
    } catch (error) {
        console.error('Email Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
