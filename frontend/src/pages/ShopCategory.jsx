import React, { useContext } from 'react';
import './css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../components/assets/dropdown_icon.png';
import Item from '../components/Items/Item';

function ShopCategory(props) {
    const { allProducts } = useContext(ShopContext);

    return (
        <div className="shop-category">
            <img src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {allProducts.map((item, idx) => {
                    if (props.category == item.category)
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
                    else return null;
                })}
            </div>
            <div className="shopcategory-learnmore">Explore more!</div>
        </div>
    );
}

export default ShopCategory;
