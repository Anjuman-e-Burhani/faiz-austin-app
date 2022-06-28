import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { API, Storage } from 'aws-amplify';
import { listMenus } from './graphql/queries';
import DaySignup from './forms/DaySignup';

function AllSignups() {

    const [menus, setMenus] = useState([]);
    useEffect(() => fetchMenus(), []);

    async function fetchMenus() {
        const menuData = await API.graphql({ query: listMenus });
        const menusFromApi = menuData.data.listMenus.items;
        const filteredMenus = menusFromApi.filter(plan => plan.isPublished);
        const mapOfMenus = filteredMenus.reduce(
            (menuMap, plan) => ((menuMap[plan.serveOn] = menuMap[plan.serveOn] || []).push(plan), menuMap), {}
        )
        const allMenus = Object.values(mapOfMenus);
        await Promise.all(allMenus.map(async menu => {
            await Promise.all(
                menu.map(async item => {
                    if (item.dish.image) {
                        const image = await Storage.get(item.dish.image);
                        item.dish.image = image;
                    }
                })    
            )
        }))
        setMenus(allMenus);
    }

    return (
        <div className='DaySignup'>
            {
                menus.map(menu => {
                    return (
                        <Row xs={1} md={2} className="g-2">
                            <DaySignup menu={menu} />
                        </Row>
                    )
                })
            }
        </div>
    )
}

export default AllSignups;