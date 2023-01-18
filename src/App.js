import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <ItemListContainer greeting=" Lista de productos" />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/produtId' element={<ItemDetailContainer/>}/>
          
          
        </Routes>
      </BrowserRouter>
      
      

      
    
 
 
  
      
      
      
      
      
      
      
 
    </div>
  )
}

export default App;
