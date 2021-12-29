import resize from '../utilities/resizeHandler'
import path from 'path'

describe('Test resize image', function () {
    it('get resized image', async function () {
        const resized_image = await resize('encenadaport.jpg', 20, 20)
        const thumb_image_path = path.resolve(
            'assets/images',
            'thumb',
            'encenadaport_20_20.jpg'
        )
        expect(resized_image).toBe(thumb_image_path)
    })
})
