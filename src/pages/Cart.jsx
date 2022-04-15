import React, { useEffect } from 'react'
import { useCart } from '../contexts/cart-context'
import '../styles/cart.css'
import CartBill from './CartBill'
import CartCard from './CartCard'
import Header from './Header'

const Cart = () => {
    useEffect(() => {
        document.title = "Cart | FakeSea"
    }, [])
    const {cartItemsState, cartItemsDispatch} = useCart();
    const { cartProducts } = cartItemsState;
    const qtyReducer = (prev, curr) => curr.qty + prev;
    const cartProductsQty = cartProducts.reduce(qtyReducer, 0);
    return (
        <>
            <Header />
            <p className="cart-title text-l">My cart: ({cartProductsQty})</p>
            <section className="cart-container">
                {cartProducts.map((item) => {
                    return <CartCard key={item.id} item={item} />
                })}
            </section>
            <section className='cart-amount-card'>
                <CartBill />
            </section>
        </>
  )
}

export default Cart