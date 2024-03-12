import { RouterConstantUtil } from "@/utils/constants/RouterConstantUtils";
import { ForgotPasswordView } from "@/view/auth/ForgotPassword";
import { LoginView } from "@/view/auth/LoginView";
import { PasswordResetSuccessfulView } from "@/view/auth/PasswordResetSuccessfull";
import { PasswordResetTokenView } from "@/view/auth/PasswordResetToken";
import { RegistrationSuccessfulView } from "@/view/auth/RegistrationSuccessful";
import { RegistrationView } from "@/view/auth/RegistrationView";
import { SetNewPasswordView } from "@/view/auth/SetNewPassword";
import { HomePage } from "@/view/home/HomePage";
<<<<<<< HEAD
import BuyersInterface from "@/view/product/BuyersInterface";
import ProductOverview from "@/view/product/ProductOverview";
=======
import { Settings } from "@/view/supplier/Settings";
import { SupplierStockList } from "@/view/supplier/StockListView";
import { Support } from "@/view/supplier/Support";
>>>>>>> add465ee12940d07cd85733d602b36eb77c18bb1

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
  {
    component: RegistrationView,
    path: RouterConstantUtil.routes.auth.register,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: ForgotPasswordView,
    path: RouterConstantUtil.routes.auth.forgot_password,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: PasswordResetSuccessfulView,
    path: RouterConstantUtil.routes.auth.password_reset_successful,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: PasswordResetTokenView,
    path: RouterConstantUtil.routes.auth.password_reset_token,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: RegistrationSuccessfulView,
    path: RouterConstantUtil.routes.auth.registration_successful,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: SetNewPasswordView,
    path: RouterConstantUtil.routes.auth.set_new_passsword,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: HomePage,
    path: RouterConstantUtil.routes.page.home_page,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: BuyersInterface,
    path: RouterConstantUtil.routes.product.buyer_interface,
    meta: {
      isAuth: true,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: ProductOverview,
    path: RouterConstantUtil.routes.product.product_oveview,
    meta: {
      isAuth: true,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: Support,
    path: RouterConstantUtil.routes.supplier.support,
    meta: {
      isAuth: true,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: Settings,
    path: RouterConstantUtil.routes.supplier.settings,
    meta: {
      isAuth: true,
      redirectTo: undefined,
    },
    options: {},
  },
];
