import {TypedUseSelectorHook, useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {AppDispatch, RootState} from "./store.ts";

export const useAppDispatch =()=>useDispatch<AppDispatch>();
export  const  useAppSelector :TypedUseSelectorHook<RootState> = useSelector