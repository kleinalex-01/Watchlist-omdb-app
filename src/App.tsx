import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Watchlist } from './Components/Watchlist/Watchlist';
import { PageNotFound } from './Components/404Error/PageNotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='watchlist' element={<Watchlist />} />
            <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
