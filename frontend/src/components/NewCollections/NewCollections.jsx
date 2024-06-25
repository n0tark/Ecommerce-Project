import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import Item from '../Items/Item';

function NewCollections() {
    const [newCollection, setNewCollection] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/newcollections')
            .then((res) => res.json())
            .then((data) => setNewCollection(data));
    }, []);

    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {newCollection.map((item, idx) => {
                    return (
                        <Item
                            key={idx}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default NewCollections;
