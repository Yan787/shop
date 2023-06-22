// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { CardListType, CardType } from "../../utils/@globalTypes.ts";
// import { RootState } from "../store";

// type initialType = {
//     cardBasket: CardListType,
//     savedCard: CardListType,
// }

// const initialState: initialType = {
//     cardBasket: [],
//     savedCard: [],
// }


// const cardSlice = createSlice({
//     name: "card",
//     initialState,
//     reducers: {
//         setAllCardBasket: (state, action: PayloadAction<{card: CardType}>) => {
//             const {card} = action.payload
// 				const savedPostsIndex = state.cardBasket.findIndex((post)=> post.id === card.id)

// 				if(savedPostsIndex === -1) {
// 					state.cardBasket.push(card)
// 				} else {
// 					state.cardBasket.splice(savedPostsIndex, 1)
// 				}
//         },

//         setSavedCard: (state, action: PayloadAction<{card: CardType}>)=> {
//             const {card} = action.payload
//             const savedPostsIndex = state.savedCard.findIndex((post)=> post.id === card.id)
            
//             if(savedPostsIndex === -1) {
//                 state.savedCard.push(card)
//             } else {
//                 state.savedCard.splice(savedPostsIndex, 1)
//             }
//         },
//     },
// })

// export const {setAllCardBasket, setSavedCard} = cardSlice.actions

// export default cardSlice.reducer

// export const PostSalectors = {
//     getAllCardBasket: (state: RootState) => state.card.cardBasket,
//     getSavedCard: (state: RootState) => state.card.savedCard,
// }
export {}
