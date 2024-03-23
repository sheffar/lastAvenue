import CountryCard from "./CountryCard";

export default function Countries() {
  return (
    <div className="bg-white p-3">
      <p className="font-semibold">Users in last 14 days</p>
      <p className="text-xl font-semibold">30</p>
      <p className="text-[11px]">User per Minute</p>
      <div className="flex text-sm font-semibold items-center justify-between">
        <p>Top Countries</p>
        <p>Users</p>
      </div>
      <div className="space-y-3 mt-2">
        {[1, 4, 5, 5, 6, 6].map(() => (
          <CountryCard />
        ))}
      </div>
    </div>
  );
}
