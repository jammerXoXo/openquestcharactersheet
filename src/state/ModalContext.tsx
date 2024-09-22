import React, { useState } from "react";
import { loadModalState, rollModalState, storyModalState } from "../types/types";


type ModalContext = {
    rollModalState: rollModalState
    setRollModalState: (newState: rollModalState) => void
    storyModalState: storyModalState
    setStoryModalState: (newState: storyModalState) => void
    loadModalState: loadModalState
    setLoadModalState: (newState: loadModalState) => void
}

export const ModalContext = React.createContext<ModalContext>({} as ModalContext);


export const ModalProvider = ({children} : {children: React.ReactNode}) => {
    const [rollModalState, setRollModalState] = useState({open: false} as rollModalState)
    const [storyModalState, setStoryModalState] = useState({open: false} as storyModalState)
    const [loadModalState, setLoadModalState] = useState({open: false} as loadModalState)

    return (
        <ModalContext.Provider value={{rollModalState: rollModalState, setRollModalState: setRollModalState, storyModalState: storyModalState, setStoryModalState: setStoryModalState, loadModalState: loadModalState, setLoadModalState: setLoadModalState}}>
            {children}
        </ModalContext.Provider>
    )
}