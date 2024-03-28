import { Avatar } from "@/components/ui/avatar/index";
import { PaginationTabs } from "@/components/ui/tabs/PaginationTabs";
import { cn, statusColorCode } from "@/utils/helpers";
import { Badge } from "../badge";

interface IBaseTable {
  showPagination?: boolean;
  lastColorChanged?: boolean;
  headers: string[];
  checkbox?:boolean
  headersClassName?: string;
  tableRows: (string | Record<string, string | boolean | undefined>)[][];
}

export const BaseTable = ({
  showPagination = false,
  lastColorChanged = false,
  headers,
  checkbox,
  headersClassName,
  tableRows,
}: IBaseTable) => {
  function handleTableRowAppend(
    row: string | Record<string, string | boolean | undefined>,
  ) {
    if (typeof row === "string") {
      return row;
    } else {
      if (row.isStatus && row.statusText) {
        return (
          <Badge
            status={statusColorCode(row?.statusText?.toString())}
            text={row?.statusText?.toString() || ""}
          />
        );  
      } else if (row.hasAvatar) {
        return (
          <Avatar
            // img={row?.name?.toString() || ""}
            name={row.name!.toString()}
            avatarClassName="h-10 w-14"
            textClassName="none hidden"
            avatarTextContainerClassName="w-full"
            rounded={true}
          >
            <p className="text-md w-full">{row.name!.toString()}</p>
          </Avatar>
        );
      }
    }
  }

  return (
    <div className="rounded-2xl bg-white pb-10">
      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          <thead className="">
            <tr
              className={cn(
                "text-md border-b border-b-[#E9E7FD] font-medium text-[#8B909A]",
                headersClassName,
              )}
            >
              {headers.map((headr: string, idx: number) => (
                <th key={idx} className="pb-4 pt-5">
                  {checkbox && idx === 0 &&<input type="checkbox" name="" className="mr-2" />}
                  {headr.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map(
              (
                row: (string | Record<string, string | boolean | undefined>)[],
                idx: number,
              ) => (
                <tr
                  key={idx}
                  className={cn(
                    "border-b border-b-[#E9E7FD] font-sans text-sm font-normal text-[#23272E] ",
                    // lastColorChanged,xt
                  )}
                >
                  {row.map((item, _i) => (
                    <td
                      key={_i}
                      className={cn(
                        lastColorChanged &&
                          tableRows[idx].length == _i + 1 &&
                          "cursor-pointer py-5 text-[#0F60FF]",
                      )}
                    >
                  {checkbox && _i === 0 &&<input type="checkbox" name="" className="mr-2" />}
                      {handleTableRowAppend(item)}
                    </td>
                  ))}
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
      {showPagination && <PaginationTabs />}
    </div>
  );
};
