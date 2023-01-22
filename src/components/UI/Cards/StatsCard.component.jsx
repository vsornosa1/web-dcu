import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const StatsCard = ({item}) => {
  return (
    <div key={item.name} 
      className={
        classNames(item.idx % 2 === 0 ?
        "m-4 rounded-lg bg-blue-50 sm:p-6 flex-1"
        : "m-4 rounded-lg bg-indigo-100 sm:p-6 flex-1")
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
      

      {/* Img del edifici */
        item.tieneImg ? 
        <dd className="mt-8 flex justify-center items-center align-middle md:block lg:flex">
          <img 
            className="rounded-md"
            src={item.media}
            alt={item.name} />
        </dd>
        : <span></span>
    }
    </div>
  )
}

export default StatsCard;