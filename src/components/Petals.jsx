import petal1 from '../assets/hero/petals/petal-1.png'
import petal2 from '../assets/hero/petals/petal-2.png'
import petal3 from '../assets/hero/petals/petal-3.png'
import petal4 from '../assets/hero/petals/petal-4.png'
import petal5 from '../assets/hero/petals/petal-5.png'
import petal6 from '../assets/hero/petals/petal-6.png'
import petal7 from '../assets/hero/petals/petal-7.png'
import petal8 from '../assets/hero/petals/petal-8.png'

const PETALS = [
  { src: petal1, className: 'left-[8%] top-[22%] w-10 opacity-70 md:w-12', blur: 'blur-[0.5px]' },
  { src: petal2, className: 'left-[18%] top-[56%] w-8 opacity-50 md:w-10', blur: 'blur-[1.5px]' },
  { src: petal3, className: 'left-[38%] top-[18%] w-6 opacity-55', blur: 'blur-[2.5px]' },
  { src: petal4, className: 'right-[34%] top-[24%] w-12 opacity-75 md:w-14', blur: '' },
  { src: petal5, className: 'right-[18%] top-[12%] w-5 opacity-40', blur: 'blur-[3px]' },
  { src: petal6, className: 'right-[8%] bottom-[26%] w-10 opacity-55 md:w-12', blur: 'blur-[1px]' },
  { src: petal7, className: 'right-[42%] bottom-[18%] w-7 opacity-35', blur: 'blur-[2.5px]' },
  { src: petal8, className: 'left-[30%] bottom-[32%] w-6 opacity-30', blur: 'blur-[3.5px]' },
  { src: petal1, className: 'left-[5%] top-[68%] w-5 opacity-28', blur: 'blur-[4px]' },
  { src: petal4, className: 'right-[26%] top-[52%] w-8 opacity-45', blur: 'blur-[2px]' },
]

export default function Petals() {
  return (
    <div
      data-hero="petal-layer"
      className="pointer-events-none absolute inset-0 z-30 overflow-hidden will-change-transform"
      aria-hidden="true"
    >
      {PETALS.map((petal, i) => (
        <img
          key={i}
          src={petal.src}
          alt=""
          data-hero="petal"
          className={`absolute ${petal.className} ${petal.blur} select-none`}
          draggable={false}
        />
      ))}
    </div>
  )
}
