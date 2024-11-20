"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObject = void 0;
const createMenuObject = (activeMenu) => {
    let returnObject = {
        all: false,
        action: false,
        drama: false,
        comedy: false,
        romance: false,
        horror: false,
    };
    if (activeMenu !== "") {
        returnObject[activeMenu] = true;
    }
    return returnObject;
};
exports.createMenuObject = createMenuObject;
