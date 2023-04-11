import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export interface RandomImageResponse {
    imagePath: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<RandomImageResponse>) {
    // Get a list of all image file names in the public/images directory
    const imagesDir = path.join(process.cwd(), 'public', 'images/random')
    const imageNames = fs.readdirSync(imagesDir)

    // Select a random image file name
    const randomImageName = imageNames[Math.floor(Math.random() * imageNames.length)]

    // Return the image file path as the API response
    const imagePath = path.join('', '', randomImageName)
    res.status(200).json({ imagePath })
}
