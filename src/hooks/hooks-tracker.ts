import {useContext} from "react";
import {TrackerContext} from "../context/tracker-context";


export const useTracker = () => {
    const context = useContext(TrackerContext);
    if(!context) throw new Error('useTracker must be used inside a Tracker');
    return context;
}