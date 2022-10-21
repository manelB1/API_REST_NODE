import { Request, Response } from "express"
import { Phrase } from '../models/Phrase';

export const ping = (req: Request, res: Response) => {
    res.json({ pong: true })
}

export const random = (req: Request, res: Response) => {
    let nRand: number = Math.floor(Math.random() * 10)
    res.json({ number: nRand })
}

export const nome = (req: Request, res: Response) => {
    let nome: String = req.params.nome;
    res.json({ nome: `Você enviou o nome ${nome}` });
}

export const createPhrase = async (req: Request, res: Response) => {
    let author: string = req.body.author;
    let txt: string = req.body.txt;

    let newPhrase = await Phrase.create({
        author, txt
    });

    res.json({id: newPhrase.id, author, txt});
}