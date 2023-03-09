import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Form, Button} from "react-bootstrap";
import { GET_ME, ALL_LISTS } from '../../utils/queries';
import { ADD_LIST, ADD_LIST_ITEM, REMOVE_LIST } from '../../utils/mutations';
import './dashboard.css';
import Auth from "../../utils/auth";

const ListComponent = () => {

    // testing ALL_LISTS query to see that there is some connection between the front end and database
    const { loading, data } = useQuery(ALL_LISTS)
    const allListData = data?.allListData || [];
    console.log('All List Data', allListData)





    const [userFormData, setUserFormData] = useState({
        listTitle: "",
        listContent: ""
    });

    const [addList] = useMutation(ADD_LIST);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
      };
/* MICHAEL LOOK HERE

Running the addList mutation in sandbox works correctly
-remember to switch to headers tab
      -add in Authorization and "BEARER xxx"
      -xxx = copy the token from localstorage once you log into the site

-can't figure out how to correctly setup front end request to send data to server
-so far userFormData contains the two things we needed to get sandbox to work
      -but we're getting a 400 error in console after clicking submit

-List creation works on backend
-List creation does not work from frontend
-Next step is generate list on page by destructuring current user
      -username.lists.[0]

*/
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(userFormData);
        try {
            const data = await addList({ variables: {userFormData} })
        }
        catch (err) {
            console.error(err)
        }
        };

    
    //const [newItem, setNewItem] = useState("");
    //const [items, setItems] = useState([]);
    
    //const [removeList] = useMutation(REMOVE_LIST);
    //const [addItem] = useMutation(ADD_LIST_ITEM);
    //const { loading, data } = useQuery(GET_ME);
    //const userData = data?.user || {};
/*
    const handleNewItem = (e) => {

         setNewItem(e.target.value);

    }
*/
/*
     const handleAddItem = () => {
         addItem({
             variables: {
                 itemName: newItem,
                 itemUser: userData._id,
                 listId: userData.lists[0]._id,
             }

         })
         */

    //     setItems([...items, newItem]);
    //     setNewItem("");
    // }

    // const handleAddList = () => {
    //     addList({
    //         variables: {
    //             listName: "New List",
    //             listUser: userData._id,
    //         }
    //     })


    // }

    // const handleRemoveList = (listId) => {
    //     removeList({
    //         variables: {
    //             listId: listId,
    //         }
    //     })
    // }

    //strikethrough list item on click
    //const handleStrikethrough = (e) => {
    //    e.target.style.textDecoration = "line-through";
        
    //}



    // if (loading) {
    //     return <div>Loading...</div>;

    // }

    return (
        <>
        <div className="list">
            <h1>My Lists</h1>
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
            {/*<div>
                <h2>{userData.lists[0].listName}</h2>
                <ul>
                    {userData.lists[0].listItems.map((item) => (
                        <li key={item._id} onClick={handleStrikethrough}>{item.itemName}</li>
                    ))}
                </ul>
                
                    </div>*/}
    </>
    )
}


export default ListComponent;

//
//<h3
// style={{
//     textDecoration: elem.strike ? 'line-through' : 'none',
//   }}
// >