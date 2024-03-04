import React from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { RouterConstantUtil } from "@/utils/constants/RouterConstantUtil";

type AuthRequiredProps = {
  isAuth: boolean;
  elem: React.JSX.Element;
  path: string;
};

export const AuthNavigator = ({
  // isAuth,
  elem,
  // path,
}: AuthRequiredProps) => {
//   const location = useLocation();

//   if (auth_required) {
//     return isAuth ? (
//       elem
//     ) : (
//       <Navigate
//         to={RouterConstantUtil.routes.auth.login}
//         state={{ from: location }}
//         replace={true}
//       />
//     );
//   }

//   if (isAuth && path == RouterConstantUtil.routes.auth.login) {
//     return (
//       <Navigate
//         to={RouterConstantUtil.routes.page.home}
//         state={{ from: location }}
//         replace={true}
//       />
//     );
//   }

  return elem;
};
