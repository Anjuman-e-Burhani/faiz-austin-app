import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
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
        setMenus(Object.values(mapOfMenus));
    }

    return (
        <div className='DaySignup'>
            {
                menus.map(menu => {
                    return(
                        <DaySignup menu={menu} />
                    );
                })
            }
        </div>
    )
}

export default AllSignups;