import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import './stripe-button.scss'

const StripeButton = ({ price}) => {
    const priceForStripe = price*100
    const publicKey = "pk_test_51HD0klJf07tY7BpOi1xLPM8atMo1XQouX4DTYnMQwhYF12zFOX8TvGwGQEYSj8ZnePc498rpQuzlvi5j53nWGI77009FZPt0hF"
    const onToken  = token => {
        console.log(token)
        alert('Payment successful');
    }
    return (
        <div>
           <StripeCheckout
           name='My App'
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
