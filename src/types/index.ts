export interface IProduct {
    id: number;
    title: string;
    price: number;
    image: string;
    qty?: number;
    rating: {
        rate:number;
        count:number
    }
  }