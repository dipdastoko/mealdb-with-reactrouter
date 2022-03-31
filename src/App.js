import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MealDetails from './components/MealDetails/MealDetails';
import NotFound from './components/NotFound/NotFound';
import Resturant from './components/Resturant/Resturant';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/resturant' element={<Resturant></Resturant>}></Route>
          <Route path='/' element={<Header></Header>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          <Route path='/resturant/:mealdb' element={<MealDetails></MealDetails>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
