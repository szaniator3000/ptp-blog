import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-unfetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Fetch the file URL from Strapi
        const response = await fetch('https://your-strapi-url.com/api/files/1', {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch file from Strapi');
        }

        const fileData = await response.arrayBuffer();
        const fileType = response.headers.get('Content-Type') || 'application/octet-stream';
        const fileName = response.headers.get('Content-Disposition')?.split('=')[1] || 'file';

        // Set the headers for the file download
        res.setHeader('Content-Type', fileType);
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);

        // Send the file data to the client
        res.status(200).send(fileData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to download file' });
    }
}
