import React from 'react';

const Cart = (props) => {
    return (
        <div>
               <h3>this is product summary</h3>
                 <p>selected Items: {props.cart.length}</p>
        </div>
    );
};

export default Cart;