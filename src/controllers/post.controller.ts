import { Request, Response } from 'express';
import { connect } from '../database';
import { Post } from '../interface/Post';


// Controlador GET (sin retorno explícito)
export async function getPosts(req: Request, res: Response): Promise<void> {
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT * FROM posts');
        res.json(posts[0]); // Envío directo sin "return"
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los posts" });
    }
}

// Controlador POST (sin retorno explícito)
export async function createPost(req: Request, res: Response): Promise<void> {
    try {
        const newPost: Post = req.body;
        const conn = await connect();
        await conn.query('INSERT INTO posts SET ?', [newPost]);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el post" });
    }
}

export async function getPost(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.postId;
        const conn = await connect();
        const posts = await conn.query('SELECT * FROM posts WHERE id = ?', [id]);
        res.json(posts[0]);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los posts" });
    }
}

export async function deletePost(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.postId;
        const conn = await connect();
        conn.query('DELETE FROM posts WHERE id = ?', [id]);
        res.json({
           message: 'Post Delete'
        });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los posts" });
    }
}

export async function updatePost(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.postId;
        const updatePost: Post = req.body;
        const conn = await connect();
        conn.query('UPDATE posts SET ? WHERE id = ?', [updatePost, id]);
        res.json({
           message: 'Post update'
        });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los posts" });
    }
}

