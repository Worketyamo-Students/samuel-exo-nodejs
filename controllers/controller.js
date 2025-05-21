import fs,{ readFileSync } from "fs";
// import { readFile } from "fs/promises"
import path from "path";
import { title } from "process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const dbpath = path.join(__dirname, "../config/database.json");

function readDb(){
    const data = fs.readFileSync(dbpath,"utf-8");
    return JSON.parse(data);
}
function writeDb(data){
    fs.writeFileSync(dbpath, JSON.stringify(data,null,2), "utf-8")
}
const bookController = {
    createBook: (req,res)=>{
        const db = readDb();
        const newBook = {
            id:db.books.length +1,
            title:req.body.title,
            author:req.body.author
        };

        db.books.push(newBook);
        writeDb(db);
        res.status(201).json(newBook)

    },
    getAllBooks : (req,res)=>{
       const db = readDb();
       res.json(db.books)
    },
        getBookById : (req,res)=>{
        const books = readDb();
        const book = books.books.find((book)=> book.id === parseInt(req.params.id))
        if(!book){
            return res.status(404).json({message: "book not found"})
        }else{
            res.json(book)
        }
    },
    updateBook: (req,res)=>{
        
    },
    deleteBo : (req,res)=>{
        
    }
}

export default bookController
