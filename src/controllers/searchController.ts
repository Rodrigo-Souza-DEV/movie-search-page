import { Request, Response } from "express";
import {Movies} from "../model/movies";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req:Request, res:Response)=>{
    let query = req.query.q as string;

    if(!query) {
        res.redirect('/');
        return
    }
    let list = Movies.getFromName(query);

    res.render('pages/page',{
        banner2: {
            title: list.length > 0 ? "All movies found" : "No movies found",
            background: "allmovie.jpg"
        },
        menu: createMenuObject(""),
        list,
        query
    })
  //  let list = Movies.getFromName()
}