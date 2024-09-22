import React, { useState } from "react";


type SheetContext = {
    editingMode: boolean
    setEditingMode: (editingMode: boolean) => void
    activeSheet: string
    setActiveSheet: (activeSheet: string) => void
}

export const SheetContext = React.createContext<SheetContext>({} as SheetContext);



export const SheetProvider = ({children} : {children: React.ReactNode}) => {
    const [editingMode, setEditingMode] = useState(false)
    const [activeSheet, setActiveSheet] = useState('stats')

    return (
        <SheetContext.Provider value={{editingMode, setEditingMode, activeSheet, setActiveSheet}}>
            {children}
        </SheetContext.Provider>
    )
}
