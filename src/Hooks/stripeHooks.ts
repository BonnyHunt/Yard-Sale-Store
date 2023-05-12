import { useEffect, useState } from "react";
import { stripe } from "../shared/api/stripeApi";
import Stripe from "stripe";

export const useCreateStripeCustomer = (email: string) => {
    const [customer, setCustomer] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    useEffect(() => {
        console.log('Iniciando peticion');
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await stripe.customers.create({ email: email });
                setCustomer(response);
                console.log('response', response);
                setLoading(false)
            } catch (error) {
                console.log(error);
                setError(error);
            };
        };

        fetchData();
    }, [email]);

    return {
        customer,
        loading,
        error
    }

};

export const useFetchStripeCustom = (email: string) => {
    const [customer, setCustomer] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    useEffect(() => {
        console.log('Iniciando peticion');
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await stripe.customers.retrieve(email);
                setCustomer(response);
                console.log('response', response);
                setLoading(false)
            } catch (error) {
                console.log(error);
                setError(error);
            };
        };

        fetchData();
    }, [email]);

    return {
        customer,
        loading,
        error
    }

};

type ProductData = {
    price: number,
    name: string,
    description: string,
    currency: string
};
export const useCreateStripeProduct = (product: ProductData) => {
    const [stripeProduct, setStripeProduct] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    useEffect(() => {
        console.log('Iniciando peticion');
        const fetchData = async () => {
            let stripePrice: Stripe.Price;
            //let stripeProduct: Stripe.Product;
            setLoading(true);
            try {
                const response = await stripe.prices.create({
                    currency: product.currency,
                    unit_amount: product.price * 100,

                });
                stripePrice = response
                console.log(stripePrice);
            } catch (error) {
                console.log(error);
                setError(error);
            };
            try {
                const response = await stripe.products.create(
                    {
                        name: product.name,
                        description: product.description,
                        default_price_data: {
                            currency: product.currency,
                            unit_amount: product.price * 100
                        }
                    }
                );
                setStripeProduct(response);
                console.log('response', response);
                setLoading(false)
            } catch (error) {
                console.log(error);
                setError(error);
            };
        };

        fetchData();
    }, [product]);

    return {
        stripeProduct,
        loading,
        error
    }

};