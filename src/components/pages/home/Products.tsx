
export default function Products() {
  return (
    <div className="h-full bg-white rounded-md shadow-md w-full p-3">
      <p className="text-base font-semibold mb-2 ">Top Products</p>
      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map(() => (
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="h-10 w-10 border-2"></div>
              <div className="">
                <p className="text-sm">Nike</p>
                <p className='text-11 text-gray-400 text-[13px]'>Airforce 1</p>
              </div>
            </div>
            <p className='font-semibold text-[13px]'>$2,467.53</p>
          </div>
        ))}
      </div>
    </div>
  );
}
