// import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'
import  Main  from '../page/main'
import  Map   from '../page/map'
const routesList = [
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: 'map',
        element: <Map />,
      },
    ],
  }
]

export default routesList