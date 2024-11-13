import { View, Text } from 'react-native'
import React, { createContext, ReactNode, useState } from 'react'


export const SearchAreaContext = createContext<any>(false);

interface Props {
  children: ReactNode;
}

export const SearchAreaProvider =({children}:Props) => {
  const [isFocusSearch, setIsFocusSearch] = useState<any>(false);
  const [isFilterShow, setIsFilterShow] = useState<any>(false);
  const [isSearchEmpty,setIsSearchEmpty] = useState<any>(false);

  return (
    <SearchAreaContext.Provider value={{isFocusSearch, setIsFocusSearch,isFilterShow, setIsFilterShow,isSearchEmpty,setIsSearchEmpty}}>
      {children}
    </SearchAreaContext.Provider>
  )
}

