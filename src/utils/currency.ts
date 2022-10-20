export const formatCurrency =(currency:number)=>{
    const price = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(currency);
   return price
}