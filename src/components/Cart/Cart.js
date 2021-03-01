import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    // const total=cart.reduce((total,prd)=>total+prd.price,0);
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total=total+product.price;
        
    }

    let shipping=0;
    if(total>15){
        shipping=12;
    }
    else if(total>0){
        shipping=4;
    }
    const tax=((total/10).toFixed(2));

    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Items Order:{cart.length}</h5>
            <h5>Product Price:{Math.round(total)}</h5>
            <h5>Shipping Cost:{shipping}</h5>
            <h5>Tax:{tax}</h5>
            <h5>Total Price:{Math.round((total+shipping+Number(tax)))}</h5>
        </div>
    );
};

export default Cart;