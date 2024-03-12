import { SupplierLayout } from "@/view/layout/SupplierLayout";
import { requestHeaders, requestsMockTableRows } from "@/utils/constants";
import { BaseTable } from "@/components/ui/table/BaseTable";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { NewTicketsInputs } from "@/components/pages/newticketinputs";

export const Support = () => {
  return (
    <SupplierLayout
      title={"1-1 Support"}
      subtitle="Customers support ticket when the encounter."
    >
      <div className="mt-10">
        <div className="flex w-full flex-col items-start justify-center gap-3 rounded-2xl bg-white p-12 pb-10 pt-6 max-[900px]:p-5">
          <div className="flex flex-col items-start gap-0">
            <h3 className="font-sans text-lg  font-bold text-[#23272E]">
              Create New Ticket
            </h3>
            <p className="text-md font-sans font-light leading-tight text-[#606060]">
              Fill up all the information here, they click submit button.
            </p>
          </div>

          <div className="max-[900px]:mt-4 mt-14 w-full">
            <NewTicketsInputs />
          </div>
          <BaseButton
            title="Submit Ticket"
            containerCLassName="py-[23px] mt-6 h-[65px] rounded-[8px] ml-auto px-[48px] bg-[#232323] text-white font-sans font-bold text-sm"
          />
        </div>
        <div className="mt-5">
          <BaseTable
            lastColorChanged={true}
            tableRows={requestsMockTableRows}
            headers={requestHeaders}
            showPagination={true}
          />
        </div>
      </div>
    </SupplierLayout>
  );
};
