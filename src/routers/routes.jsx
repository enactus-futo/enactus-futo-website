import { useRoutes } from "react-router-dom";
import Home from "../Pages/home";
import About from "../Pages/about";
import ContactUs from "../Pages/contactUs";
import Team from "../Pages/team";


import ScrollToTop from "../component/ScrollToTop";
import  SharedLayOut  from "../component/layOut/SharedLayOut";

export function Routes() {
  const routes = [
    {
      path: "/",
      element: (
        <>
          <SharedLayOut />
          <ScrollToTop />
        </>
      ),
      children: [
        { index: true, element: <Home /> },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <ContactUs/>,
        },
        {
          path: "team",
          element: <Team/>,
        },
       
        
      ],
    },
  ];
  return useRoutes(routes);
}


