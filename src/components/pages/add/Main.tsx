import { SelectInput } from "@/components/ui/data-inputs/select-input";
import { BaseInput } from "@/components/ui/data-inputs/text-input";
import SupplierLayout from "@/view/layout/SupplierLayout";
import { ChangeEvent, useState } from "react";
import Left from "./Left";
import Right from "./Right";

export default function Main() {


  return (
    <SupplierLayout title="Add New Product" subtitle="When adding products, make sure to fill in completely all the required details.">
      <div className="min-h-screen text-black p-4 mt-4 rounded-md bg-white grid gap-7 grid-cols-1 lg:grid-cols-2">
        <Left />
        <Right />
      </div>
    </SupplierLayout>
  )
}
