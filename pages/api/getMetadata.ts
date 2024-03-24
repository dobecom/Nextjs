// pages/api/getMetadata.ts
import { NextApiRequest, NextApiResponse } from 'next';
import og from 'open-graph';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { url } = req.query;
    if (!url || typeof url !== 'string') {
      return res.status(400).json({ error: 'Invalid URL parameter' });
    }

    og(url, (err, meta) => {
      if (err) {
        console.error('Error:', err);
        return res.status(500).json({ error: 'Failed to fetch metadata' });
      }
      res.status(200).json(meta);
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
