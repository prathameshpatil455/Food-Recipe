import './Components/style.css';
import Meal from './Components/Meal';
import Recipe from './Components/Recipe';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route exact path="/:recipeId" element={<Recipe />} />          
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
