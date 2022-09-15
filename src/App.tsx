import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './Presentation/Components/NavigationBar/NagivationBar';
import { Home } from './Presentation/Views/Home/Home';
import { HelloName } from './Presentation/Views/HelloName/HelloName';
import { AllNames } from './Presentation/Views/AllNames/AllNames';

import './App.css';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <NavigationBar /> } >
          <Route index element={ <Home /> } />
          <Route path='/hello/:id' element={ <HelloName /> } />
          <Route path='/all-names' element={ <AllNames /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
