const Book = require('../model/Book')



const getAllBooks = async (req,res,next) =>{
    let books;
    try{
        books = await Book.find();
    }catch(err){
        console.log(err);
    }

    if(!books){
        return res.status(404).json({message:"No books found"})
    }
    return res.status(200).json({
        books:books
    })
}

const getbyId = async (req,res,next)=>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findById(id);
    } catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(404).json({
            message:"No Book Found"
        })
    }
    return res.status(200).json({book})
}
const addBook = async (req,res,next) =>{
    const {name,author,description,price,available,image,publicationImg} = req.body;
    let book;
    try{
      book = new Book({
        name,
        author,
        description,
        price,
        available,
        image
      });
      await book.save();
    } catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(500).json({
            message:"unable to Add"
        });
    }
    return res.status(201).json({book});
};

const updateBook = async (req,res,next)=>{
    const {name,author,description,price,available,image} = req.body;
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            available,
            image
        });
        book = await book.save();
    } catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(400).json({
            message:"unable to update by this id"
        })
    }
    return res.status(200).json({book})
}

const deleteBook = async (req,res,next)=>{
    const id = req.params.id;
    let book ;
    try{
        book = await Book.findByIdAndRemove(id);
    } catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(400).json({message:"Unable to delete by this id"});
    }
    return res.status(200).json({message:"Product deleted successfully!"});
}



exports.getAllBooks = getAllBooks;
exports.getbyId = getbyId;
exports.addBook = addBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
