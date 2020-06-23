import React from 'react';
import { Form, Button, Col, InputGroup, FormControl } from 'react-bootstrap'
import axios from 'axios'

function Genres(props) {
    React.useEffect(() => {
        getGenres()
        return () => {

        }
    }, [])

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
    async function deleteGenres(id) {
        try {
            let res = await axios.delete(`http://localhost:5000/genres/${id}`)
            console.log(res)
            getGenres()
        }
        catch (err) {
            console.log(err)
        }
    }


    let [genresName, setGenresName] = React.useState("")
    let [genresList, setGenresList] = React.useState(null)
    async function createNewGenres(e) {
        e.preventDefault()
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',

                }
            };
            let body = {
                "name": genresName
            }

            let res = await axios.post("http://localhost:5000/genres/createGenres", body, config)
            getGenres()


        }
        catch (err) {
            console.log(err)
        }
    }



    return (
        <>
            {
                genresList ? <div className="add-author">
                    <h1>Add New Genres</h1>
                    <Form onSubmit={e => createNewGenres(e)}>
                        <Form.Row className="align-items-center">

                            <Col xs="auto">
                                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                    Genres
</Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl onChange={e => setGenresName(e.target.value)} id="inlineFormInputGroup" placeholder="Username" />
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
                            genresList.map((genres, index) => {
                                return (
                                    <li>
                                        {genres.name}
                                        <Button onClick={() => deleteGenres(genres._id)} type="button" className="btn btn-danger">X</Button>
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

export default Genres;