import { SupplierLayout } from "@/view/layout/SupplierLayout";
import { SearchBar } from "@/components/ui/SearchBar";
import { SelectInput } from "@/components/ui/data-inputs/select-input";
import { stockHeaders, stockMockTableRows } from "@/utils/constants";
import { BaseTable } from "@/components/ui/table/BaseTable";

export const SupplierStockList = () => {
  return (
    <SupplierLayout title={"Stocklist"}>
      <div className="mt-10">
        <div className="flex w-full flex-row items-start justify-between gap-3 max-sm:flex-col sm:items-center">
          <SearchBar
            className="bg-[#FFFFFF]] w-[200px] max-w-full flex-row-reverse rounded-[4px] border-none bg-white pr-3"
            inputClassName="border-none pl-3 font-sans font-medium text-sm text-[#606060] py-2 w-full"
            hideinput={false}
            iconClassName="text-[#8B909A]"
            placeholder="Search..."
          />

          <SelectInput
            defaultValue="View by date range"
            selectClassName="adjust_select_arrow_angle text-sm pr-3 bg-[#FFFFFF] py-0 w-[185px] h-[40px] max-w-full flex-row-reverse rounded-[4px] border-none bg-white pr-3"
            optionClassname="text-[#8B909A] "
          />
        </div>
        <div className="mt-5">
          <BaseTable
            lastColorChanged={true}
            tableRows={stockMockTableRows}
            headers={stockHeaders}
            showPagination={true}
          />
        </div>
      </div>
    </SupplierLayout>
  );
};
