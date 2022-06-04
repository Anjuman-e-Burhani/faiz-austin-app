import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
import { listItems } from './graphql/queries';
import { createItem as createItemMutation, deleteItem as deleteItemMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '', isVeg: false}

function Items() {

    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => fetchItems(), []);

    async function fetchItems() {
        const apiData = await API.graphql({ query: listItems });
        const itemsFromApi = apiData.data.listItems.items;
        await Promise.all(
            itemsFromApi.map(
                async item => {
                    if (item.image) {
                        const image = await Storage.get(item.image);
                        item.image = image;
                    }
                    return item;
                }
            )
        )
        setItems(apiData.data.listItems.items);
    }

    async function createItem() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ 
            query: createItemMutation, 
            variables: { input: formData } 
        });
        if (formData.image) {
            const image = await Storage.get(formData.image);
            formData.image = image;
        }
        setItems([ ...items, formData ]);
        setFormData(initialFormState);
    }

    async function deleteItem({ id }) {
        const newItemsArray = items.filter(item => item.id !== id);
        setItems(newItemsArray);
        await API.graphql({ 
            query: deleteItemMutation, 
            variables: { input: { id } }
        });
    }

    async function onChange(e) {
        if (!e.target.files[0]) 
            return
        const file = e.target.files[0];
        setFormData({ ...formData, image: file.name });
        await Storage.put(file.name, file);
        fetchItems();
    }

    return (
        <div className='Items'>
            <h1 className='mb-3 p-5'>Menu Items</h1>
            <input onChange={e => setFormData({ ...formData, 'name': e.target.value})} placeholder="Item name" value={formData.name}/>
            <input onChange={e => setFormData({ ...formData, 'description': e.target.value})} placeholder="Item description" value={formData.description}/>
            <input type="file" onChange={onChange}/>
            <button onClick={createItem}>Save Item</button>
            <div style={{marginBottom: 30}}>
                {
                    items.map(item => (
                        <div key={item.id || item.name}>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <button onClick={() => deleteItem(item)}>Delete item</button>
                            {
                                item.image && <img src={item.image} style={{width: 400}} />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );

}

export default Items;