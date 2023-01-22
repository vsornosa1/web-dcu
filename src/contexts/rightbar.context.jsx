import { createContext, useState, useEffect } from "react";


export const RightbarContext = createContext(
	{
		currentRightbar: null,
		setCurrentRightbar: () => null,
	}
);


export const RightbarProvider = ({ children }) => {
	const [currentRightbar, setCurrentRightbar] = useState(false);
	const value = { currentRightbar, setCurrentRightbar };

	useEffect(()=>{
		console.log(currentRightbar)
	}, [currentRightbar]);

	return <RightbarContext.Provider value={value}> {children} </RightbarContext.Provider>
}
