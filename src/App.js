import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomeLayout from './Pages/HomeLayout';
import About from './Pages/About';
import Landing from './Pages/Landing';
import Newsletter from './Pages/Newsletter';
import {loader as DataLoader} from './Pages/Landing'
import {loader as DetailsLoader} from './Pages/Cocktail'
import Cocktail from './Pages/Cocktail';
const router= createBrowserRouter(
  [
    {
      path:'/',
      element: < HomeLayout/>,
      errorElement: <h1>error</h1>,
      children:[
        {
          index: true,
          element: <Landing/>,
          loader: DataLoader
        },
        {
          path:'/cocktail/:id',
          element:<Cocktail/>,
          loader: DetailsLoader
        },
        {
          path: 'about',
          element: <About/>
        },{
          path: 'newsletter',
          element:<Newsletter/>
        }
      ]
    },
    {
      path:'/login',
      element: < HomeLayout/>,
      errorElement: <h1>error</h1>
    }
  ]
)
function App() {
  
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
