import sharp from 'sharp'
import path from 'path'

async function resize(image_name: string, width: number, height: number) {
    if (typeof width === 'string') width = parseInt(width, 10)
    if (typeof height === 'string') height = parseInt(height, 10)
    const image_path = path.resolve('assets/images', 'full', image_name),
        transform = sharp(image_path).resize(width, height),
        image_str = image_name.split('.'),
        new_image_name =
            image_str[0] + '_' + width + '_' + height + '.' + image_str[1],
        new_file = path.resolve('assets/images', 'thumb', new_image_name)
    await transform.toFile(new_file)
    return new_file
}
export default resize
