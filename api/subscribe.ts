import { Router, Request, Response } from 'express';
import { fetch } from 'undici';

const router = Router();

router.post('/subscribe', async (req: Request, res: Response) => {
  const { email, type } = req.body;
  if (!email || !type) {
    return res.status(400).json({ error: 'Email and type are required' });
  }

  const groupId = parseInt(process.env.MAILERLITE_GROUP_ID || '', 10);
  if (isNaN(groupId)) {
    return res.status(500).json({ error: 'Invalid group ID' });
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
        groups: [groupId],
      }),
    });

    if (!response.ok) {
      return res.status(500).json({ error: 'MailerLite API error' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
});

export default router; 