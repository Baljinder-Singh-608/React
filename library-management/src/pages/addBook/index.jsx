
import { useState } from "react";
import { ValidateBook } from "../../validation/validateBook";

const AddBook = () => {
    const [book, setBook] = useState([]);
    const [err, setErr] = useState("");


    const addNewBook = (e) => {
        e.preventDefault();
        setBook({...book, rented:0, availableBook:book.totalBook, editable:false});
        const validate = ValidateBook(book);
        if(!validate.success){
            setErr(validate.error)
        }
        else{
            let books = JSON.parse(localStorage.getItem('books'));
            let totalBooks = books.concat(book);
            if(totalBooks.length)
            localStorage.setItem('books', JSON.stringify(totalBooks));
            
            setTimeout(() =>{
                setBook({
                    book:'',
                    author:'',
                    totalBooks:''
                });
            }, 1000)

        }
    }
    
    
    return (
        <div className="mt-9 w-2/6 m-auto">
            <form onSubmit={addNewBook}>
                <div className="overflow-hidden shadow sm:rounded-md">
                    {/* Page Header */}
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 items-center flex">
                        <h1 className="font-bold text-lg">Add New Book to the Library</h1>
                    </div>
                    <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            {/* Book Title */}
                            <div className="col-span-12">
                                <label htmlFor="book-title" className="block text-sm font-medium text-gray-700">
                                    Book Title
                                </label>
                                <input
                                    type="text"
                                    name="book-title"
                                    id="book-title"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-0.5 px-2 focus:border-indigo-500"
                                    value={book.book || ''}
                                    onChange={(e) => setBook({...book, book:e.target.value})}
                                />
                                <span className={err.book ? "text-xs text-red-600" : "hidden"}>{err.book}</span>
                            </div>
                            {/* Book Author */}
                            <div className="col-span-12">
                                <label htmlFor="book-author" className="block text-sm font-medium text-gray-700">
                                    Book Author
                                </label>
                                <input
                                    type="text"
                                    name="author"
                                    id="book-author"
                                    className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-0.5 px-2 focus:border-indigo-500"
                                    value={book.author || ''}
                                    onChange={(e) => setBook({...book, author:e.target.value})}
                                />
                                <span className={err.author ? "text-xs text-red-600" : "hidden"}>{err.author}</span>
                            </div>
                            {/* Number of Books */}
                            <div className="col-span-12">
                                <label htmlFor="book-count" className="block text-sm font-medium text-gray-700">
                                    Number of Books
                                </label>
                                <input
                                    type="number"
                                    name="book-count"
                                    id="book-count"
                                    className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-0.5 px-2 focus:border-indigo-500"
                                    value={book.totalBook || ''}
                                    onChange={(e) => setBook({...book, totalBook:e.target.value})}
                                   
                                />
                                <span className={err.totalBook ? "text-xs text-red-600" : "hidden"}>{err.totalBook}</span>
                            </div>
                        </div>
                    </div>
                    {/* Button */}
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 items-center flex">
                        <button
                            type="submit"
                            className="ml-auto inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Add New Book
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddBook