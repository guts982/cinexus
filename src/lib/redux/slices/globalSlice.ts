import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

export interface IGlobalState {
    showNav:boolean,
    mobNavOpen:boolean,
    navHeight:number | string,
    mobNavHeight:number | string,
}


const initialState: IGlobalState = {
    showNav:true,
    mobNavOpen:false,
    navHeight:"",
    mobNavHeight:"",
}


export const globalSlice = createSlice({
    name:"global",
    initialState,
    reducers: {
        setShowNav:(state, action:PayloadAction<boolean>) => {
            state.showNav = action.payload
        },
        setMobNavOpen:(state, action:PayloadAction<boolean>) => {
            state.mobNavOpen = action.payload
        },
        setNavHeight:(state, action:PayloadAction<string|number>)=>{
            console.log("changing nav height to",action.payload);
            state.navHeight = action.payload
        },
        setMobNavHeight:(state, action:PayloadAction<string|number>)=>{
            console.log("changing mob nav height to",action.payload);
            state.mobNavHeight = action.payload
        }
    }
});


export const {setShowNav, setMobNavOpen, setNavHeight, setMobNavHeight} = globalSlice.actions
export default globalSlice.reducer







