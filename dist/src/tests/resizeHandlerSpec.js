"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resizeHandler_1 = __importDefault(require("../utilities/resizeHandler"));
const path_1 = __importDefault(require("path"));
describe('Test resize image', function () {
    it('get resized image', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const resized_image = yield (0, resizeHandler_1.default)('encenadaport.jpg', 20, 20);
            const thumb_image_path = path_1.default.resolve('assets/images', 'thumb', 'encenadaport_20_20.jpg');
            expect(resized_image).toBe(thumb_image_path);
        });
    });
});
