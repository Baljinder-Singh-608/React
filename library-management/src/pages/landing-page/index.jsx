import React, { useState } from "react";
import Books from "../../components/books";
import SearchBox from "../../components/search";
import booklist from '../../data/books.json'

const HomePage = () => {
    const booklisting = JSON.stringify(booklist);
    localStorage.setItem("books", booklisting)
    // Search Books Function
    const [search, setSearch] = useState();
    const handleClick = (event) => {
        const searchVal = event.target.value.toLocaleLowerCase();
        setSearch(searchVal);
    }
    let books = "";
    if (search) {
        books = booklist.filter((item) => {
            return item.book.toLocaleLowerCase().includes(search);
        })
    }
    else {
        books = booklist;
    }
    return (
        <>
            <SearchBox onchange={handleClick} placeholder="Filter Books..." />
            <Books books={books} />
        </>
    )
}

export default HomePage;