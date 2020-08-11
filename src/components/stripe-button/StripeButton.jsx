import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import './stripe-button.scss'

const StripeButton = ({ price}) => {
    const priceForStripe = price*100
    const publicKey = process.env.PUBLIC_KEY
    const onToken  = token => {
        console.log(token)
        alert('Payment successful');
    }
    return (
        <div>
           <StripeCheckout
           name='myAPp'
           billingAddress
           shippingAddress
           image='../../assets/4.3 crown.svg.svg'
           description={`Your total ${price}`}
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey ={publicKey}
           /> 
        </div>
    )
}

export default StripeButton
