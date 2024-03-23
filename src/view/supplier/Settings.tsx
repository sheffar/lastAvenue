import { SupplierLayout } from "@/view/layout/SupplierLayout";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TopDetailsTab } from "@/components/ui/tabs/TopDetailsTab";
import { AccountInfo } from "@/components/pages/settings/accountInfo";
import { Securuty } from "@/components/pages/settings/security";
import { Notifications } from "@/components/pages/settings/notifications,";
import Billing from "@/components/pages/settings/billings";

export const Settings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("");

  const handleActiveTab = (slug: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("tab", slug);
    setSearchParams(params);
    setActiveTab(slug);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const tab = params.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <SupplierLayout title={"Settings"}>
      <div className="mt-5 sm:mt-10 rounded-2xl bg-white px-2 py-5 sm:p-7">
        <TopDetailsTab setActiveTab={handleActiveTab} activeTab={activeTab} />
        {activeTab == "account_info" && <AccountInfo />}
        {activeTab == "security" && <Securuty />}
        {activeTab == "notifications" && <Notifications />}
        {activeTab == "billing" && <Billing />}
      </div>
    </SupplierLayout>
  );
};
