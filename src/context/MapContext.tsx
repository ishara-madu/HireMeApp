import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'

interface MapContextType {
    isOpenMapArea: boolean;
    setIsOpenMapArea: (vlaue: boolean) => void;
}


const MapContext = createContext<MapContextType | undefined>(undefined)

interface Props {
    children: React.ReactNode;  // children can be any type of React component or JSX code.
}

const MapProvider = ({ children }: Props) => {
    const [isOpenMapArea, setIsOpenMapArea] = useState<any>(false);
    return (
        <MapContext.Provider value={{ isOpenMapArea, setIsOpenMapArea }}>
            {children}
        </MapContext.Provider>
    )
}

export default MapProvider