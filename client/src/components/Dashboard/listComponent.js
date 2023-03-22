import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Form, Button } from "react-bootstrap";
import { GET_ME, ALL_LISTS } from '../../utils/queries';
import { ADD_LIST, ADD_LIST_ITEM, REMOVE_LIST } from '../../utils/mutations';
import './dashboard.css';
import Auth from "../../utils/auth";

const ListComponent = () => {

    // testing ALL_LISTS query to see that there is some connection between the front end and database
    //const { loading, data } = useQuery(ALL_LISTS)
    //const allListData = data?.allListData || [];
    //console.log('All List Data', allListData)

    const [userFormData, setUserFormData] = useState({
        listTitle: "",
        listContent: ""
    });

    const [addList] = useMutation(ADD_LIST);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
      };
let listTitleOnPage = ''
let listContentOnPage = ''
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(userFormData);
        addList({ variables: {listTitle: userFormData.listTitle, listContent: userFormData.listContent}})
        alert('List added!') 
    };

    return (
        <>
            <div className="list">
                <h1>Create a List</h1>
            </div>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                    <Form.Label htmlFor="listTitle">List Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="List Title"
                        name="listTitle"
                        onChange={handleInputChange}
                        value={userFormData.listTitle}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="listContent">List Content</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="List content"
                        name="listContent"
                        onChange={handleInputChange}
                        value={userFormData.listContent}
                    />

            </Form.Group>
            <Button
                type="submit"
                variant="success"
            >
                Submit
            </Button>
        </Form>
         <div>
            <h2></h2>
            <h4></h4>
        </div>
    </>
}


export default ListComponent;
