import { View, Text } from 'react-native'
import React, { createContext, ReactNode, useState } from 'react'


export const SearchAreaContext = createContext<any>(false);

interface Props {
  children: ReactNode;
}

export const SearchAreaProvider =({children}:Props) => {
  const [isFocusSearch, setIsFocusSearch] = useState<any>(false);

  return (
    <SearchAreaContext.Provider value={{isFocusSearch, setIsFocusSearch}}>
      {children}
    </SearchAreaContext.Provider>
  )
}

