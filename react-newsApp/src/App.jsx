import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import SharedLayout from './pages/dashboard/SharedLayout';
import Explore from './pages/dashboard/Explore';
import Profile from './pages/dashboard/Profile';
import Register from './pages/Register';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <SharedLayout />
          }
        >
          <Route index element={<Explore />} />
          <Route path='profile' element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
