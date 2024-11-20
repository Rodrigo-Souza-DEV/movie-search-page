"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const movies_1 = require("../model/movies");
const createMenuObject_1 = require("../helpers/createMenuObject");
const search = (req, res) => {
    let query = req.query.q;
    if (!query) {
        res.redirect('/');
        return;
    }
    let list = movies_1.Movies.getFromName(query);
    res.render('pages/page', {
        banner2: {
            title: list.length > 0 ? "All movies found" : "No movies found",
            background: "allmovie.jpg"
        },
        menu: (0, createMenuObject_1.createMenuObject)(""),
        list,
        query
    });
    //  let list = Movies.getFromName()
};
exports.search = search;
