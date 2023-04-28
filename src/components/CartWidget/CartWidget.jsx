import cart from './assests/cart.svg'
const CartWidget = () => {
    return(
        <div  className='navBar_cartDiv'>
            <p className='navBar_cartItemsCounter'>0</p>
            <img className='navBar_cartWidget' src={cart} alt="cart-widget"/>
        </div>
    )

}

export default CartWidget