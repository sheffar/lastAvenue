export default function TopSelling() {
  return (
    <div className='p-4 bg-white rounded-md shadow-md'>
        <p className='text-base font-bold mb-3'>Top Selling</p>
        <div className="grid h-60 grid-cols-3 gap-3">
            {[1,2,3].map(() => (
                <div className="border-2 rounded-md"></div>
            ))}
        </div>
    </div>
  )
}
