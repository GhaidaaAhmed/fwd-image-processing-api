"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = require("../../middleware/validator");
const path_1 = __importDefault(require("path"));
describe('check thumb image already exist', function () {
    it('check if image resized', function () {
        const thumb_image_path = path_1.default.resolve('assets/images', 'thumb', 'encenadaport_20_20.jpg');
        expect((0, validator_1.check_thumb_image_exist)('encenadaport.jpg', 20, 20)).toBe(thumb_image_path);
    });
});
