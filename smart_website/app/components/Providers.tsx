"use client";

import {ReactNode} from "react";
import {CartProvider as USCProvider} from "use-shopping-cart";

const stripeKey = "pk_test_51PD6i7LOmm14vLo4disKmqBIOJLUwsd3hcNXNOiwaMkiGVBItKBZzcMjWk6PSI9tWHLl6WgOUXfuX7lnBuBWRNTc00IHQBV2Lv"; // Access the environment variable

export default function CartProvider({children}: {children: ReactNode}) {
    return(
        <USCProvider 
         mode="payment"
         cartMode="client-only"
         stripe={stripeKey}
         successUrl="http://localhost:3000/stripe/success"
         cancelUrl="http://localhost:3000/stripe/error"
         currency="USD"
         billingAddressCollection={false}
         shouldPersist={true}
         language="en-US"
        >
            {children}
            </USCProvider>
    )
}