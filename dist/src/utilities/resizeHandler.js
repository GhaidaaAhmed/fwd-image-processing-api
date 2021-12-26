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
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
function resize(image_name, width, height) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof width === 'string')
            width = parseInt(width, 10);
        if (typeof height === 'string')
            height = parseInt(height, 10);
        const image_path = path_1.default.resolve('assets/images', 'full', image_name), transform = (0, sharp_1.default)(image_path).resize(width, height), image_str = image_name.split('.'), new_image_name = image_str[0] + '_' + width + '_' + height + '.' + image_str[1], new_file = path_1.default.resolve('assets/images', 'thumb', new_image_name);
        yield transform.toFile(new_file);
        return new_file;
    });
}
exports.default = resize;
