import express from 'express'
import path from 'path'
import fs from 'fs'

export const validator = function (
    req: express.Request,
    res: express.Response,
    next: () => void
): unknown {
    if (!req.query)
        return res.status(400).send('Please set Image Query Parameters')
    if (!req.query.height) return res.status(400).send('NO height Parameter')
    if (!req.query.width) return res.status(400).send('NO width Parameter')
    if (!req.query.image) return res.status(400).send('NO image Parameter')
    else {
        const image_path = path.resolve(
            'assets/images',
            'full',
            req.query.image as unknown as string
        )
        if (!fs.existsSync(image_path)) res.status(400).send('NO image Found')
        else {
            const exist_thumb_image = check_thumb_image_exist(
                req.query.image as unknown as string,
                req.query.height as unknown as number,
                req.query.width as unknown as number
            )
            if (exist_thumb_image) return res.sendFile(exist_thumb_image)
        }
    }
    next()
}

export function check_thumb_image_exist(
    image: string,
    height: number,
    width: number
): string {
    const image_str: string[] = image.split('.'),
        image_new_name: string =
            image_str[0] + '_' + width + '_' + height + '.' + image_str[1],
        thumb_image_path: string = path.resolve(
            'assets/images',
            'thumb',
            image_new_name
        )
    if (fs.existsSync(thumb_image_path)) {
        return thumb_image_path
    } else return ''
}
