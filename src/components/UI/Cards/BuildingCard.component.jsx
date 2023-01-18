import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import Edificio1 from '../../../assets/media/edificio1.svg';
import Edificio2 from '../../../assets/media/edificio2.svg';
import Edificio3 from '../../../assets/media/edificio3.svg';


const stats = [
  { name: 'Edificios para Primaria', stat: '18', previousStat: '70,946', change: '5\'01%', changeType: 'increase', media: Edificio1, idx: 0 },
  { name: 'Edificios para ESO', stat: '10', previousStat: '56.14%', change: '105\'3%', changeType: 'increase', media: Edificio2, idx: 1 },
  { name: 'Edificios para Bachiller', stat: '4', previousStat: '28.62%', change: '200\'0%', changeType: 'increase', media: Edificio3, idx: 2 },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const BuildingCard = () => {
  return (
    <div className="flex flex-col items-left my-12 mx-8">
      <h3 className="text-lg font-medium leading-6 text-gray-900"> Infrastructura del centro: </h3>
      <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white md:grid-cols-3 md:divide-y-0 md:divide-x">
        {stats.map((item) => (
          <div key={item.name} 
            className={
              classNames(item.idx % 2 === 0 ?
              "m-4 rounded-lg bg-blue-50 sm:p-6"
              : "m-4 rounded-lg bg-indigo-100 sm:p-6")
            }>
            <dt className="text-base font-semibold text-gray-900">{item.name}</dt>

            {/* Change tipo -> % del increase */}
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-3xl font-bold text-black-900">
                {item.stat}
              </div>

              {/* Change tipo -> % del increase */}
              <div
                className={classNames(
                  item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                  'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </div>

              
            </dd>
            
            {/* Img del edifici */}
            <dd className="mt-8 flex justify-center items-center align-middle md:block lg:flex">
              <img 
                className="rounded-md"
                src={item.media}
                alt={item.name} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default BuildingCard;