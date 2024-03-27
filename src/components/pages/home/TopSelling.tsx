import Img1 from '../../../assets/icons/200.svg'
import Img2 from '../../../assets/icons/trouser.svg'
import Img3 from '../../../assets/icons/shoe.svg'


export default function TopSelling() {
  const images = [Img2, Img3, Img1]
  return (
    <div className='p-4 bg-white mt-3 rounded-md shadow-md'>
        <p className='text-base font-bold mb-3'>Top Selling</p>
        <div className="grid h-56 grid-cols-3 gap-3">
            {images.map((image, key: number) => (
                <div className="overflow-hidden rounded-md" key={key}>
                  <img src={image} alt="" className='h-full w-full object-cover'/>
                </div>
            ))}
        </div>
    </div>
  )
}
