import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeBtn = () => {
    const publishableKey = "pk_test_lp8BmFIO2cR5VLED0xJMLNqY00jqSmId7g";

    const onToken = token => {
        const body = {
            amount: 999,
            token: token,
        };

        axios.post("http://localhost:9000/api/payments", body)
        .then(res => {
            console.log(res);
            alert("Payment Success");
        })
        .catch(err => {
            console.log("Payment Error: ", err);
            alert("Payment Error!");
        })
    }

    return (
        <StripeCheckout
            label="Rent Stall" // button text
            name="Vendme" // modal header
            description="Rent a stall today!"
            panelLabel="Submit Payment" // Submit button in modal
            amount={999} // amount in cents $9.99
            token={onToken}
            stripeKey={publishableKey}
            // the image below has to be a url 
            image={"https://assets.website-files.com/5cd091cfb5499f22bdf72905/5cd0922159aa32213d6fd7d4_lambda-newlogo.png"} // pop-in header image
        />
    )
}

export default StripeBtn;