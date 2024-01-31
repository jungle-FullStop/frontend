import { atom } from "recoil";

const cardListState = atom({
    key : "cardList",
    default : []

})

const todayState = atom({
    key : "today",
    default : false
})
const todayTILState = atom({
    key : "todayTIL",
    default : 0
})

export {cardListState, todayState, todayTILState}