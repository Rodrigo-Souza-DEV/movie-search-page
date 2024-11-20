"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.horror = exports.romance = exports.comedy = exports.drama = exports.action = exports.home = void 0;
const createMenuObject_1 = require("../helpers/createMenuObject");
const movies_1 = require("../model/movies");
const home = (req, res) => {
    let list = movies_1.Movies.getAll();
    res.render('pages/page', {
        banner: {
            title: "All Movies",
            background: "allmovie.jpg"
        },
        menu: (0, createMenuObject_1.createMenuObject)('all'),
        list
    });
};
exports.home = home;
const action = (req, res) => {
    let list = movies_1.Movies.getFromtype('Action');
    res.render('pages/page', {
        banner: {
            title: "Action Movies",
            background: "acao.jpg"
        },
        menu: (0, createMenuObject_1.createMenuObject)('action'),
        list
    });
};
exports.action = action;
const drama = (req, res) => {
    let list = movies_1.Movies.getFromtype('Drama');
    res.render('pages/page', {
        banner: {
            title: "Drama Movies",
            background: "drama.jpg"
        },
        menu: (0, createMenuObject_1.createMenuObject)('drama'),
        list
    });
};
exports.drama = drama;
const comedy = (req, res) => {
    let list = movies_1.Movies.getFromtype('Comedy');
    res.render('pages/page', {
        banner: {
            title: "Comedy Movies",
            background: "comedia.jpg"
        },
        menu: (0, createMenuObject_1.createMenuObject)('comedy'),
        list
    });
};
exports.comedy = comedy;
const romance = (req, res) => {
    let list = movies_1.Movies.getFromtype('Romance');
    res.render('pages/page', {
        banner: {
            title: "Romance Movies",
            background: "romance.jpg"
        },
        menu: (0, createMenuObject_1.createMenuObject)('romance'),
        list
    });
};
exports.romance = romance;
const horror = (req, res) => {
    let list = movies_1.Movies.getFromtype('Horror');
    res.render('pages/page', {
        banner: {
            title: "Horror Movies",
            background: "terror.jpg"
        },
        menu: (0, createMenuObject_1.createMenuObject)('horror'),
        list
    });
};
exports.horror = horror;
