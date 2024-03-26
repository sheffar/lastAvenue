import { BsFilter } from "react-icons/bs"

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
        <div className="">
            <div className="flex font-semibold h-12 bg-white px-3 mt-5 rounded-md items-center justify-between">
                <p>Order Details</p>
                <div className="flex gap-4 items-center">
                    <div className="flex text-sm bg-gray-100 p-2 rounded-md gap-2 items-center">
                        <BsFilter />
                        <p>Filter</p>
                    </div>
                    <div className="flex text-sm bg-gray-100 p-2 rounded-md gap-2 items-center">
                        <BsFilter />
                        <p>Download Report</p>
                    </div>
                </div>
            </div>
            <div className="p-3 overflow-x-auto w-full bg-white rounded-md shadow-md mt-3 text-sm">
                <div className="w-[800px] lg:w-full">
                    <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr] mb-4 font-semibold lg:w-full">
                        {headers.map((data, key) => (
                            <div className="flex items-center gap-2 justify-center" key={key}>
                                {key === 0 && <div className="h-6 w-6 border-2 rounded-sm"></div>}
                                <p> {data}</p>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-5">
                        {products.map((product, key) => (
                            <div key={key} className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr] ">
                                {product.map((data, key) => (
                                    <div className="flex items-center gap-2 justify-center" key={key}>
                                        {key === 0 && <div className="h-6 w-6 border-2 rounded-sm"></div>}
                                        <p> {data}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
