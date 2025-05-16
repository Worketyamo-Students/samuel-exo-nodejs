import { Router } from "express";
import bookController from "../controllers/controller.js";

const router = Router()
 

router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);
router.post('/books', bookController.createBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBo);

export default router