import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'




export const MapContext = createContext<any>(undefined)

interface Props {
    children: React.ReactNode;  // children can be any type of React component or JSX code.
}

export const MapProvider = ({ children }: Props) => {
    const [isOpenMapArea, setIsOpenMapArea] = useState<any>(true);
    return (
        <MapContext.Provider value={{ isOpenMapArea, setIsOpenMapArea }}>
            {children}
        </MapContext.Provider>
    )
}

