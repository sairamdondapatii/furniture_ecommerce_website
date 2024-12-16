import axios from 'axios'
const Url = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create(
    {
        baseURL:Url
    }
)


export const formatedPrice = (price)=>{
    const IndianAmount = new Intl.NumberFormat('en-IN',{
        style:'currency',
        currency:'INR',
    }).format((price/100).toFixed(0))
    return IndianAmount;
}


