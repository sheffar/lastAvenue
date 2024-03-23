import { AssetsUtils } from "@/utils/AssetsUtils";
import { SideNavProps } from "@/components/ui/navs/sideNav";

export const sidebarData: SideNavProps[] = [
  { href: "/supplier/home", icon: AssetsUtils.icons.home, text: "Home" },
  { href: "+", icon: AssetsUtils.icons.circlePlus, text: "Add Item" },
  { href: "/supplier/stocklist", icon: AssetsUtils.icons.fileList, text: "StockList" },
  { href: "/supplier/analytic", icon: AssetsUtils.icons.stats, text: "Analytics" },
  { href: "+", icon: AssetsUtils.icons.authenticity, text: "Authenticity" },
  { href: "/supplier/support", icon: AssetsUtils.icons.support, text: "1-1 Support" },
  { href: "/supplier/settings?tab=account_info", icon: AssetsUtils.icons.settings, text: "Settings" },
];
