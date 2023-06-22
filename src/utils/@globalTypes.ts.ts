export type CardType = {
    id: number
    img: string;
    title: string;
    price: string;
};

export type CardListType = CardType[]

export enum CardSize {
    Small,
    liked,
}