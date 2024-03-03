import { RouterConstantUtil } from "@/utils/constants/RouterConstantUtils"
import { LoginView } from "@/view/auth/LoginView"

export const allRoutes = [
  {
    component: LoginView,
    path: RouterConstantUtil.routes.auth.login,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
]