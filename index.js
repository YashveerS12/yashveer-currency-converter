import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_983wVtkKyhhaKptwTSSVm8gDcg9PPrM0wcL8RkoO');

convertcurrency("USD","INR",1);

export async function convertcurrency(from,to,units){
    const res= await freecurrencyapi.latest({
        base_currency: from,
        currencies: to
    });
    const multiplier=res.data[to];
    return multiplier*units;
}