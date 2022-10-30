
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../Button";
import Input from "../input";
import Modal from "../modal";
import SearchBox from "../search";
import './book.component.css'




const Books = (props) => {
    const [books, setBooks] = useState(props.books);
    const [editValue, setEditValue] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [issueIndex, setIssueIndex] = useState(0);

    // Edit Book Name and Author Name
    const handleEditBook = (e) => {
        e.editable = true;
        setBooks([...books]);
        setEditValue({ editBook: e.book, editAuthor: e.author })
    }
    // Edit input Book Name and Author
    const handleEditChange = (e) => {
        setEditValue({ ...editValue, [`${e.target.name}`]: e.target.value })
    }

    // Save Edited Book Name
    const handleSaveBook = (e) => {
        e.editable = false;
        e.book = editValue.editBook;
        e.author = editValue.editAuthor;
        setBooks([...books]);
    }
    //Delete Book from list
    const handleDeleteBook = (item) => {
        let removedBook = books.filter((i) => i.book !== item.book);
        setBooks(removedBook);
    }
    // Issue Book
    const handleIssueBook = (e) => {
        setIssueIndex(e);
        setShowModal(true);
    }
    // Close Modal
    const closeModal = () => {
        setShowModal(false);
    }
    return (
        <div className="all-books mt-4">
            {/* Modal Issue book*/}
            <Modal showModal={showModal} closeModal={closeModal} minWidth="w-1/2" buttonName="Issue Book" header="Issue Book">
                {/* Book Detail */}
                <div className="block">
                    <label className="block font-bold">Book Detail</label>
                    <span>{books[issueIndex].book} <small className="text-gray-500">({books[issueIndex].author})</small></span>
                </div>
                <SearchBox placeholder="Search Member" />
            </Modal>
            {/* Books Container*/}
            <div className="grid grid-cols-4 gap-8">
                {/* Book Information*/}
                {
                    books && books.map((item, index) => {
                        return (
                            <div key={index} className="book-info border border-slate-400 rounded overflow-hidden">
                                {/* Book Title */}
                                <div className="book-title flex p-2 bg-gray-200">
                                    <div className={`editableCon ${!item.editable ? 'hidden' : ''}`}>
                                        <Input type="text" name="editBook" id="editBook" value={editValue.editBook || ''} onChange={(e) => handleEditChange(e)} />
                                        <Input type="text" name="editAuthor" id="editAuthor" value={editValue.editAuthor || ''} onChange={(e) => handleEditChange(e)} />
                                    </div>
                                    <h2 className={`font-bold ${item.editable ? 'hidden' : ''}`}>{item.book}<span className="text-sm text-gray-500 block font-normal">{item.author}</span></h2>
                                    <span className="ml-auto pt-0.5">
                                        {/* Edit icon */}
                                        <Link to='#' className={`hover:text-indigo-600 ${item.editable ? 'hidden' : ''}`} onClick={() => handleEditBook(item)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </Link>
                                        {/* Save Icon */}
                                        <Link to='#' className={`hover:text-indigo-600 ${!item.editable ? 'hidden' : ''}`} onClick={() => handleSaveBook(item)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                            </svg>
                                        </Link>
                                        {/* Trash icon */}
                                        <Link to='#' className='block mt-2 hover:text-indigo-600' onClick={() => handleDeleteBook(item)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </Link>
                                    </span>
                                </div>
                                {/* Books Record */}
                                <ul className="border-t border-slate-400 px-4 py-3">
                                    <li className="grid grid-flow-col grid-cols-3 gap-10 py-1">
                                        <span className="col-span-2">Total Books in Library:</span><span className="col-start-3 text-right">{item.totalBook}</span>
                                    </li>
                                    <li className="grid grid-flow-col grid-cols-3 gap-8 py-1">
                                        <span className="col-span-2">Available Books:</span><span className="col-start-3 text-right">{item.availbaleBook}</span>
                                    </li>
                                    <li className="grid grid-flow-col grid-cols-3 gap-8 py-1">
                                        <span className="col-span-2">Rented Books:</span><span className="col-start-3 text-right">{item.totalBook - item.availbaleBook}</span>
                                    </li>
                                </ul>
                                {/* Book Action */}
                                <div className="bookAction bg-gray-400 bg-opacity-30 w-full border-t border-gray-400 transition-all duration-500 ease-out shadow-inner-xl">
                                    <span className="p-4 flex justify-end">
                                        <ButtonComponent text="Issue Book" buttonClass="mr-auto" handler={() => handleIssueBook(index)} />
                                        <ButtonComponent text="Return Book" />
                                    </span>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
            {/* No Record */}
            <div className={`grid gap-4 ${books.length ? "hidden" : ""}`} >
                <div className='border border-red-400 text-center rounded p-4 grid-col text-gray-600'>No record! Please add a book <Link className='text-blue-800 hover:text-blue-900' to="/newbook">Add Book</Link>.</div>
            </div>
        </div>
    )
}

export default Books