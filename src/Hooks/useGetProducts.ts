import { useEffect, useState } from "react";
import axios from "axios";

export const useGetProducts = (API: string) => {
    const [products, setProducts] = useState<any []>([]);

    useEffect(() => {
        const fetchData= async () => {
        const response = await axios(API);
        setProducts(response.data);
        };

        fetchData();
    }, [API]);

    return products
};