import { SelectInput } from '@/components/ui/data-inputs/select-input';
import { SearchBar } from '@/components/ui/SearchBar';
import { SelectInput2 } from '../ui/data-inputs/select-input2';

export const NewTicketsInputs = () => {
    return (
      <div className="flex w-full flex-row items-center justify-between gap-3 max-[1200px]:flex-col max-[900px]:px-1">
        <div className="grid grid-cols-2 flex-wrap items-center justify-between gap-x-20 gap-y-5 max-[1400px]:gap-x-10 max-[1310px]:gap-x-2 max-[900px]:flex">
          <div className="flex w-full flex-col items-center gap-1">
            <p className="fomt-sans text-sm font-normal text-[#606060]">
              Choose Refund Reason
            </p>
            <SelectInput2
              defaultValue="Mismatched order"
              selectClassName="adjust_select_arrow_angle max-[900px]:w-full font-semibold text-sm pr-3 bg-[#C4C4C4] py-0 w-[185px] text-[#232323] h-[36px] max-w-full flex-row-reverse rounded-[4px] border-none  pr-3"
              optionClassname="text-[#232323] "
            />
          </div>
          <div className="flex w-full flex-col items-center gap-1">
            <p className="fomt-sans text-sm font-normal text-[#606060]">
              Select Request Type
            </p>
            <SearchBar
              className="w-[185px] max-w-full flex-row-reverse rounded-[4px] border-none bg-[#C4C4C4] pr-3 max-[900px]:w-full"
              inputClassName="border-none placeholder:text-[#232323] text-[#232323] pl-3 font-sans font-semibold text-sm py-2 w-full"
              hideinput={false}
              iconClassName="text-[#000]"
              placeholder="NK09AD7"
            />
          </div>
          <div className="flex w-full flex-col items-center gap-1">
            <p className="fomt-sans text-sm font-normal text-[#606060]">
              Choose Refund Reason
            </p>
            <SelectInput2
              containerClassname="max-[900px]:w-full"
              defaultValue="Mismatched order"
              selectClassName="adjust_select_arrow_angle max-[900px]:w-full font-semibold text-[#232323] text-sm pr-3 bg-[#C4C4C4] py-0 w-[185px] h-[36px] max-w-full flex-row-reverse rounded-[4px] border-none  pr-3"
              optionClassname="text-[#232323] "
            />
          </div>
          <div className="flex w-full flex-col items-center gap-1">
            <p className="fomt-sans text-sm font-normal text-[#606060]">Date Acquired</p>
            <SearchBar
              className="w-[185px] max-w-full flex-row-reverse rounded-[4px] border-none bg-[#C4C4C4] pr-3 max-[900px]:w-full"
              inputClassName="border-none mx-9 text-[#232323] pl-3 font-sans font-semibold text-sm py-2 w-full"
              hideinput={false}
              iconClassName="text-[#000] hidden"
              placeholder="Search..."
              value="03 AUG 2023"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 flex-wrap items-center justify-between gap-x-20 gap-y-5  max-[1400px]:gap-x-10 max-[1310px]:gap-x-2 max-[900px]:flex">
          <div className="flex w-full flex-col items-center gap-1">
            <p className="fomt-sans text-sm font-normal text-[#606060]">Customer Name</p>
            <SearchBar
              className="w-[185px] max-w-full flex-row-reverse rounded-[4px] border-none bg-[#C4C4C4] pr-3 max-[900px]:w-full"
              inputClassName="border-none mx-9 text-[#232323] pl-3 font-sans font-semibold text-sm py-2 w-full"
              hideinput={false}
              iconClassName="text-[#000] hidden"
              placeholder="Search..."
              value="Philip Kings"
            />
          </div>
          <div className="flex w-full flex-col items-center gap-1">
            <p className="fomt-sans text-sm font-normal text-[#606060]">Ticket Number</p>
            <SearchBar
              className="w-[185px] max-w-full flex-row-reverse rounded-[4px] border-none bg-[#C4C4C4] pr-3 max-[900px]:w-full"
              inputClassName="border-none mx-9 text-[#232323] pl-3 font-sans font-semibold text-sm py-2 w-full"
              hideinput={false}
              iconClassName="text-[#000] hidden"
              placeholder="Search..."
              value="123340987636"
            />
          </div>
          <div className="flex w-full flex-col items-center gap-1">
            <p className="fomt-sans text-sm font-normal text-[#606060]">Time</p>
            <SearchBar
              className="w-[185px] max-w-full flex-row-reverse rounded-[4px] border-none bg-[#C4C4C4] pr-3 max-[900px]:w-full"
              inputClassName="border-none mx-9 text-[#232323] pl-3 font-sans font-semibold text-sm py-2 w-full"
              hideinput={false}
              iconClassName="text-[#000] hidden"
              placeholder="Search..."
              value="13:30pm"
            />
          </div>
          <div className="flex w-full flex-col items-center gap-1">
            <p className="fomt-sans text-sm font-normal text-[#606060]">Remark</p>
            <SelectInput2
              containerClassname="max-[900px]:w-full"
              defaultValue="Attended"
              selectClassName="adjust_select_arrow_angle max-[900px]:w-full font-semibold text-sm pr-3 bg-[#C4C4C4] py-0 w-[185px] text-[#232323] h-[36px] max-w-full flex-row-reverse rounded-[4px] border-none  pr-3"
              optionClassname="text-[#232323] "
            />
          </div>
        </div>
      </div>
    );
}
