import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

function CartItems() {
    const { getTotalCartAmount, allProducts, cartItems, removeFromCart } =
        useContext(ShopContext);
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {allProducts.map((event) => {
                if (cartItems[event.id] > 0) {
                    return (
                        <div>
                            <div className="cartitems-format cartitems-format-main">
                                <img
                                    className="carticon-product-icon"
                                    src={event.image}
                                    alt=""
                                />
                                <p>{event.name}</p>
                                <p>${event.new_price}</p>
                                <button className="cartitems-quantity">
                                    {cartItems[event.id]}
                                </button>
                                <p>${event.new_price * cartItems[event.id]}</p>
                                <img
                                    onClick={() => removeFromCart(event.id)}
                                    src={remove_icon}
                                    alt=""
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Card Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promocode, enter here:</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="Promocode" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
