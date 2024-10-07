import {FC} from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom";
import {AboutPage} from "./pages/AboutPage.tsx";
import {ListFetch} from "./components/List/ListFetch.tsx";
import {SinglePage} from "./pages/SinglePage.tsx";
import {HomePage} from "./pages/HomePage.tsx";
import {NotFoundPage} from "./pages/NotFoundPage.tsx";
import {Layout} from "./components/Layout/Layout.tsx";
import {QueryClient} from "@tanstack/react-query";
export const queryClient = new QueryClient();

export const App:FC = () => {

  return (
    <>
      <div className="content">
        <Routes>
          <Route path={"/"} element={<Layout/>}>
            <Route index element={<HomePage />}/>
            <Route path={"about"} element={<AboutPage />}/>
            <Route path={"posts"} element={<ListFetch />}/>
            <Route path={"posts/:id"} element={<SinglePage />}/>
            <Route path={"*"} element={<NotFoundPage />}/>
          </Route>
        </Routes>
      </div>
    </>
  )
}

