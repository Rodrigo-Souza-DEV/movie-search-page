import { Request, Response } from "express";
import {createMenuObject} from "../helpers/createMenuObject";
import {Movies} from "../model/movies";

export const home = (req:Request, res:Response)=>{
    let list = Movies.getAll();
    res.render('pages/page', {
        banner: {
            title: "All Movies",
            background: "allmovie.jpg"
        },
        menu: createMenuObject('all'),
        list
    });
}

export const action = (req:Request, res:Response)=>{
    let list = Movies.getFromtype('Action');
    res.render('pages/page', {
        banner: {
            title: "Action Movies",
            background: "acao.jpg"
        },
        menu: createMenuObject('action'),
        list
    })  
}

export const drama = (req:Request, res:Response)=>{
    let list = Movies.getFromtype('Drama');
    res.render('pages/page', {
        banner: {
            title: "Drama Movies",
            background: "drama.jpg"
        },
        menu: createMenuObject('drama'),
        list
    });
}

export const comedy = (req:Request, res:Response)=>{
    let list = Movies.getFromtype('Comedy');
    res.render('pages/page', {
        banner: {
            title: "Comedy Movies",
            background: "comedia.jpg"
        },
        menu: createMenuObject('comedy'),
        list
    });
}

export const romance = (req:Request, res:Response)=>{
    let list = Movies.getFromtype('Romance');
    res.render('pages/page', {
        banner: {
            title: "Romance Movies",
            background: "romance.jpg"
        },
        menu: createMenuObject('romance'),
        list
    });
}

export const horror = (req:Request, res:Response)=>{
    let list = Movies.getFromtype('Horror');
    res.render('pages/page', {
        banner: {
            title: "Horror Movies",
            background: "terror.jpg"
        },
        menu: createMenuObject('horror'),
        list
    });
}