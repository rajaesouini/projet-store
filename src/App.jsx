
import { useState } from "react";
import "./App.css";
import { RouterProvider } from 'react-router-dom';
import router from './assets/services/Router';

function App() {
	const [count, setCount] = useState('');

  return (
    <>
<RouterProvider router={ router } />

 </>

  )
}

export default App;
