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
const express_1 = __importDefault(require("express"));
const resizeHandler_1 = __importDefault(require("../src/utilities/resizeHandler"));
const validator_1 = require("../middleware/validator");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(validator_1.validator);
app.get('/api/images', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const height = req.query.height, width = req.query.width, image_name = req.query.image;
    try {
        const image_resized = yield (0, resizeHandler_1.default)(image_name, width, height);
        if (image_resized)
            res.sendFile(image_resized);
    }
    catch (err) {
        res.send(err);
    }
}));
app.listen(port);
exports.default = app;
