/* eslint-disable no-undef */
import check_thumb_image_exist from '../../middleware/validator'
import path from 'path'

describe('check thumb image already exist', function () {
    it('check if image resized', function () {
        const thumb_image_path = path.resolve(
            'assets/images',
            'thumb',
            'encenadaport_20_20.jpg'
        )
        expect(check_thumb_image_exist('encenadaport.jpg', 20, 20)).toBe(
            thumb_image_path
        )
    })
})