"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_thumb_image_exist = exports.validator = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const validator = function (req, res, next) {
    if (!req.query)
        return res.status(400).send('Please set Image Query Parameters');
    if (!req.query.height)
        return res.status(400).send('NO height Parameter');
    else if (!validate_dimension(req.query.height))
        return res.status(400).send('Not valid Value for height');
    if (!req.query.width)
        return res.status(400).send('NO width Parameter');
    else if (!validate_dimension(req.query.width))
        return res.status(400).send('Not valid Value for width');
    if (!req.query.image)
        return res.status(400).send('NO image Parameter');
    else {
        const image_path = path_1.default.resolve('assets/images', 'full', req.query.image);
        if (!fs_1.default.existsSync(image_path))
            res.status(400).send('NO image Found');
        else {
            const exist_thumb_image = check_thumb_image_exist(req.query.image, req.query.height, req.query.width);
            if (exist_thumb_image)
                return res.sendFile(exist_thumb_image);
        }
    }
    next();
};
exports.validator = validator;
function check_thumb_image_exist(image, height, width) {
    const image_str = image.split('.'), image_new_name = image_str[0] + '_' + width + '_' + height + '.' + image_str[1], thumb_image_path = path_1.default.resolve('assets/images', 'thumb', image_new_name);
    if (fs_1.default.existsSync(thumb_image_path)) {
        return thumb_image_path;
    }
    else
        return '';
}
exports.check_thumb_image_exist = check_thumb_image_exist;
function validate_dimension(dimension) {
    let valid = false;
    if (typeof dimension === 'string') {
        const dimension_num = parseInt(dimension);
        if (!isNaN(dimension_num) && dimension_num > 0)
            valid = true;
    }
    return valid;
}
