import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from '@/utils/helpers';
import { AuthNavigator } from '@/router/layout/AuthNavigator';
import { Toaster } from "react-hot-toast";
import { allRoutes } from "./routes";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {allRoutes.map((item, index) => {
            const Element = item!.component;
            // if (item.meta.redirectTo !== undefined) {
            //   // console.log("redirect ", item!.meta.redirectTo);
            //   return (
            //     <Route  
            //       key={index}
            //       path={item.path}
            //       element={<Navigate to={item!.meta.redirectTo} />}
            //     />
            //   );
            // }

            return (
              <Route
                key={index}
                path={item.path}
                element={
                  <AuthNavigator
                    isAuth={item.meta.isAuth}
                    path={item.path}
                    elem={<Element />}
                  />
                }
              />
            );
          })}
        </Routes>
        <Toaster containerStyle={{ zIndex: "1000000000000000000" }} />
      </BrowserRouter>
    </>
  );
};
