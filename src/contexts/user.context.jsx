import { createContext, useState, useEffect } from "react";



// Actual value we want to access
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: (x) => x,
});


// Used in route file (index.js) to handle context
export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	useEffect(()=>{
		console.log(currentUser)
	} ,[currentUser]);
	return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}
