import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

const handler = nextConnect<NextApiRequest, NextApiResponse>();
import {BLOG_POSTS} from "@/data/posts";

handler.get(async (req, res) => {
    try {
        // Fetch data from Strapi
        const response = await fetch('https://your-strapi-url.com/api/posts');
        const data = await response.json();

        // Return the data
        res.status(200).json(data);
    } catch (error) {
        res.status(200).json(BLOG_POSTS);
    }
});

export default handler;
