import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const PUBLISHABLE_KEY = 'pk_test_51HVO28Aa3o0HCfWElGEpcHwh7tIgbIm1Hntpu9gwC1AFIEg9nUvzkTbeq8tOOh7ZmylSPVTYgTU3HPZL25UPH5Zc00c1zhIBaN';

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;

  const tokenHandler = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      amount={priceInCents}
      billingAddress
      description={`Your total is $${price}`}
      image='https://svgshare.com/i/CUz.svg'
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      panelLabel='Pay Now'
      shippingAddress
      stripeKey={PUBLISHABLE_KEY}
      token={tokenHandler}
    />
  );
};

export default StripeCheckoutButton;
