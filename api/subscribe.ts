export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, type } = req.body;
  if (!email || !type) {
    console.error('Missing email or type in request body:', req.body);
    return res.status(400).json({ error: 'Email and type are required' });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;
  if (!apiKey || !groupId) {
    console.error('Missing MAILERLITE_API_KEY or MAILERLITE_GROUP_ID environment variables.');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const response = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MailerLite-ApiKey': apiKey,
      },
      body: JSON.stringify({
        email,
        fields: { type },
        groups: [groupId],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('MailerLite API error:', response.status, errorText);
      throw new Error('MailerLite API error');
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Failed to subscribe:', error);
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
} 