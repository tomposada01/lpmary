import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, type } = req.body;
  if (!email || !type) {
    return res.status(400).json({ error: 'Email and type are required' });
  }

  try {
    const response = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MailerLite-ApiKey': process.env.MAILERLITE_API_KEY || '',
      },
      body: JSON.stringify({
        email,
        fields: { type },
        groups: [process.env.MAILERLITE_GROUP_ID],
      }),
    });

    if (!response.ok) {
      throw new Error('MailerLite API error');
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
} 