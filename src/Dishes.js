import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
import { listDishes } from './graphql/queries';
import { createDish as createDishMutation, deleteDish as deleteDishMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '', isVeg: false}

function Dishes() {

    const [dishes, setDishes] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => fetchDishes(), []);

    async function fetchDishes() {
        const apiData = await API.graphql({ query: listDishes });
        const dishesFromApi = apiData.data.listDishes.items;
        await Promise.all(
            dishesFromApi.map(
                async dish => {
                    if (dish.image) {
                        const image = await Storage.get(dish.image);
                        dish.image = image;
                    }
                    return dish;
                }
            )
        )
        setDishes(apiData.data.listDishes.items);
    }

    async function createDish() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ 
            query: createDishMutation, 
            variables: { input: formData } 
        });
        if (formData.image) {
            const image = await Storage.get(formData.image);
            formData.image = image;
        }
        setDishes([ ...dishes, formData ]);
        setFormData(initialFormState);
    }

    async function deleteDish({ id }) {
        const newDishesArray = dishes.filter(dish => dish.id !== id);
        setDishes(newDishesArray);
        await API.graphql({ 
            query: deleteDishMutation, 
            variables: { input: { id } }
        });
    }

    async function onChange(e) {
        if (!e.target.files[0]) 
            return
        const file = e.target.files[0];
        setFormData({ ...formData, image: file.name });
        await Storage.put(file.name, file);
        fetchDishes();
    }

    return (
        <div className='Dishes'>
            <h1 className='mb-3 p-5'>Dish List</h1>
            <input onChange={e => setFormData({ ...formData, 'name': e.target.value})} placeholder="Name" value={formData.name}/>
            <input onChange={e => setFormData({ ...formData, 'description': e.target.value})} placeholder="Description" value={formData.description}/>
            <input type="file" onChange={onChange}/>
            <button onClick={createDish}>Save</button>
            <div style={{marginBottom: 30}}>
                {
                    dishes.map(dish => (
                        <div key={dish.id || dish.name}>
                            <h2>{dish.name}</h2>
                            <p>{dish.description}</p>
                            <button onClick={() => deleteDish(dish)}>Delete</button>
                            {
                                dish.image && <img src={dish.image} style={{width: 400}} />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );

}

export default Dishes;