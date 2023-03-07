import React, { useState } from 'react';
// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_USER, QUERY_ME } from '../../utils/queries';
// import { ADD_LIST, ADD_ITEM, REMOVE_LIST } from '../../utils/mutations';

const ListComponent = () => {
    // const [newItem, setNewItem] = useState("");
    // const [items, setItems] = useState([]);
    // const [addList] = useMutation(ADD_LIST);
    // const [removeList] = useMutation(REMOVE_LIST);
    // const [addItem] = useMutation(ADD_ITEM);
    // const { loading, data } = useQuery(QUERY_USER);
    // const userData = data?.user || {};

    // const handleNewItem = (e) => {

    //     setNewItem(e.target.value);

    // }

    // const handleAddItem = () => {
    //     addItem({
    //         variables: {
    //             itemName: newItem,
    //             itemUser: userData._id,
    //             listId: userData.lists[0]._id,
    //         }

    //     })

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
    const handleStrikethrough = (e) => {
        e.target.style.textDecoration = "line-through";
        
    }



    // if (loading) {
    //     return <div>Loading...</div>;

    // }

    return (
        <div>
            <h1>My Lists</h1>
            <div>
                {/* <h2>{userData.lists[0].listName}</h2>
                <ul>
                    {userData.lists[0].listItems.map((item) => (
                        <li key={item._id} onClick={handleStrikethrough}>{item.itemName}</li>
                    ))}
                </ul> */}
                {/* <input type="text" value={newItem} onChange={handleNewItem} />
                <button onClick={handleAddItem}>Add Item</button> */}
            </div>
        </div>
    )
}


export default ListComponent;

//
//<h3
// style={{
//     textDecoration: elem.strike ? 'line-through' : 'none',
//   }}
// >