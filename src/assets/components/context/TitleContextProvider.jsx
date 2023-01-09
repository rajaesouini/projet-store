import { createContext, useState } from "react";

const TitleContext = createContext();

const TitleContextProvider = ({ children }) => {
	const [value, setValue] = useState([
		// { title: "Product1" },
		// { title: "Product2" },
		// { title: "Product3" },
	]);

	return (
		<TitleContext.Provider
			value={{ data: "id", value: value, setValue: setValue }}
		>
			{children}
		</TitleContext.Provider>
	);
};

export { TitleContext, TitleContextProvider };
