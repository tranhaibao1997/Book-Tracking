import React from 'react';
import { Form, Button, Col, InputGroup, FormControl } from 'react-bootstrap'
import axios from 'axios'

function Author(props) {
    React.useEffect(() => {
        getAuthor()
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
    async function deleteAuthor(id) {
        try {
            let res = await axios.delete(`http://localhost:5000/author/${id}`)
            console.log(res)
            getAuthor()
        }
        catch (err) {
            console.log(err)
        }
    }


    let [authorName, setAuthorName] = React.useState("")
    let [authorList, setAuthorList] = React.useState(null)
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
            getAuthor()


        }
        catch (err) {
            console.log(err)
        }
    }



    return (
        <>
            {
                authorList ? <div className="add-author">
                    <h1>Add New Author</h1>
                    <Form onSubmit={e => createNewAuthor(e)}>
                        <Form.Row className="align-items-center">

                            <Col xs="auto">
                                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                    Username
</Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl onChange={e => setAuthorName(e.target.value)} id="inlineFormInputGroup" placeholder="Username" />
                                </InputGroup>
                            </Col>

                            <Col xs="auto">
                                <Button type="submit" className="mb-2">
                                    Submit
</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                    <ul>
                        {
                            authorList.map((author, index) => {
                                return (
                                    <li>
                                        {author.name}
                                        <Button onClick={() => deleteAuthor(author._id)} type="button" className="btn btn-danger">X</Button>
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

export default Author;