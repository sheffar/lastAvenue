import { AssetsUtils } from "@/utils/AssetsUtils";
import { SideNavProps } from '@/components/ui/navs/sideNav';

export const sidebarData: SideNavProps[] = [
  { href: "#", icon: AssetsUtils.icons.home, text: "Home" },
  { href: "#", icon: AssetsUtils.icons.circlePlus, text: "Add Item" },
  { href: "#", icon: AssetsUtils.icons.fileList, text: "StockList" },
  { href: "#", icon: AssetsUtils.icons.stats, text: "Analytics" },
  { href: "#", icon: AssetsUtils.icons.authenticity, text: "Authenticity" },
  { href: "#", icon: AssetsUtils.icons.support, text: "1-1 Support" },
  { href: "#", icon: AssetsUtils.icons.settings, text: "Settings" },
];
