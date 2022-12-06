import React  from 'react';
import { _cities } from "./data/data";
import { ListSort } from "./components/listSort/ListSort";
import {FilterList} from "./components/filterList/FilterList";

function App() {
    return (
      <>
        <ListSort array = { _cities }/>
        <FilterList />
     </>
    );
}
export default App;
