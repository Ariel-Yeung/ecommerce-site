import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I6juEEKehSMY01N2VyqXsStAwjlkLiF28JMsmWfiSpcgUyPg62uQvKg4x3MZgs8clG10vmMjVUmV9ZjuF9qYacC004LXPGYY1';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };
    
      return (
        <StripeCheckout
          label='Pay Now'
          name='Ecommerce Company Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    );
};
    
export default StripeCheckoutButton;