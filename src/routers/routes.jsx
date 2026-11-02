import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import Team from "../Pages/Team";
import Achievement from "../Pages/Achievements";

import ScrollToTop from "../component/ScrollToTop";
import SharedLayOut from "../component/layOut/SharedLayOut";
import NotFound from "../Pages/NotFound";

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
          element: <ContactUs />,
        },
        {
          path: "team",
          element: <Team />,
        },
        {
          path: "achievements",
          element: <Achievement />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ];
  return useRoutes(routes);
}
