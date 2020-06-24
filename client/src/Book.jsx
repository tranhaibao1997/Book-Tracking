import React from 'react';
import { Form, Button, Col, InputGroup, FormControl } from 'react-bootstrap'
import axios from 'axios'

function Book(props) {
    React.useEffect(() => {
        getBook();
        getAuthor();
        getGenres()
        return () => {

        }
    }, [])

    async function getAuthor() {
        try {
            let res = await axios.get("http://localhost:5000/author")
            // let data = await res.data()
            setAuthorList(res.data.data)
        }
        catch (err) {
            console.log(err)
        }

    }
    async function getGenres() {
        try {
            let res = await axios.get("http://localhost:5000/genres")
            // let data = await res.data()
            setGenresList(res.data.data)
        }
        catch (err) {
            console.log(err)
        }

    }
    async function getBook() {
        try {
            let res = await axios.get("http://localhost:5000/book")
            // let data = await res.data()
            setBookList(res.data.data)
        }
        catch (err) {
            console.log(err)
        }

    }
    async function deleteBook(id) {
        try {
            let res = await axios.delete(`http://localhost:5000/book/${id}`)
            console.log(res)
            getBook()
        }
        catch (err) {
            console.log(err)
        }
    }


    let [authorName, setAuthorName] = React.useState("")
    let [bookList, setBookList] = React.useState(null)
    let [authorList, setAuthorList] = React.useState(null)
    let [genresList, setGenresList] = React.useState(null)
    async function createNewAuthor(e) {
        e.preventDefault()
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',

                }
            };
            let body = {
                "name": authorName
            }

            let res = await axios.post("http://localhost:5000/author/createAuthor", body, config)
            getBook()


        }
        catch (err) {
            console.log(err)
        }
    }

    console.log(authorList)


    return (
        <>
            {
                bookList ? <div className="add-author">
                    <h1>Add New Book </h1>
                    <Form onSubmit={e => createNewAuthor(e)}>
                        <Form.Row className="align-items-center">

                            <Col xs="auto">
                                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                    Book Name
</Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl onChange={e => setAuthorName(e.target.value)} id="inlineFormInputGroup" placeholder="Username" />
                                </InputGroup>
                            </Col>


                            <Form.Control
                                as="select"
                                className="mr-sm-2"
                                id="inlineFormCustomSelect"
                                custom
                            >


                                <option selected>Choose...</option>
                                {
                                    authorList ? authorList.map(author => {
                                        return (
                                            <option value="1">{author.name}</option>
                                        )
                                    })
                                        : ""
                                }
                            </Form.Control>
                          
                            {
                              genresList ?genresList.map(genres=>{
                                    return(
                                        <Form.Check
                                        type="checkbox"
                                        id="customControlAutosizing"
                                        label={genres.name}
                                    
                                    />
                                    )
                                
                                    
                                })
                                :""
                            }


                            <Col xs="auto">
                                <Button type="submit" className="mb-2">
                                    Submit
</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                    <ul>
                        {
                            bookList.map((book, index) => {
                                return (
                                    <li>
                                        {book.title}
                                        <Button onClick={() => deleteBook(book._id)} type="button" className="btn btn-danger">X</Button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div> : <h1>Loading</h1>
            }

        </>
    );
}

export default Book;