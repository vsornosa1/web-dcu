import { createContext, useState } from "react";


export const RightbarContext = createContext(
	{
		currentRightbar: null,
		setCurrentRightbar: () => null,
	}
);


export const RightbarProvider = ({ children }) => {
	const [currentRightbar, setCurrentRightbar] = useState(false);
	const value = { currentRightbar, setCurrentRightbar };

	return <RightbarContext.Provider value={value}> {children} </RightbarContext.Provider>
}
