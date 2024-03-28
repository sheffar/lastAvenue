import { BaseTable } from "@/components/ui/table/BaseTable"

export default function Table() {
    const headers = ['Product name', 'Product ID', 'Transaction Date', 'Transaction ID', 'Amount', 'Status']
    const products = [
        ['Nike airforce 1', 'NKA1234A', '23 Jul 2023', 'ONSXXAGA', '$1,200.00', 'Done'],
        ['Nike airforce 1', 'NKA1234A', '23 Jul 2023', 'ONSXXAGA', '$1,200.00', 'Done'],
        ['Nike airforce 1', 'NKA1234A', '23 Jul 2023', 'ONSXXAGA', '$1,200.00', 'Done'],
        ['Nike airforce 1', 'NKA1234A', '23 Jul 2023', 'ONSXXAGA', '$1,200.00', 'Done'],
        ['Nike airforce 1', 'NKA1234A', '23 Jul 2023', 'ONSXXAGA', '$1,200.00', 'Done'],
        ['Nike airforce 1', 'NKA1234A', '23 Jul 2023', 'ONSXXAGA', '$1,200.00', 'Done'],
        ['Nike airforce 1', 'NKA1234A', '23 Jul 2023', 'ONSXXAGA', '$1,200.00', 'Done'],
    ]
    return (
       <div className="mt-5">
        <BaseTable checkbox={true} headers={headers} tableRows={products}/>
       </div>
    )
}
