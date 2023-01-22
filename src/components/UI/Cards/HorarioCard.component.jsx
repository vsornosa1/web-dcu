
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const HorarioCard = ({item}) => {
  return (
    <div key={item.name} 
      className={
        classNames(item.idx % 2 === 0 ?
        "m-4 rounded-lg bg-blue-50 sm:p-6 flex-1"
        : "m-4 rounded-lg bg-indigo-100 sm:p-6 flex-1")
      }>
			<div className="flex justify-between items-center">
				<span className="text-2xl font-bold text-gray-900"> { item.name } </span>
				<span className="text-4xl font-bold text-gray-900"> { item.stat } </span>
				<ul className="flex flex-col">
				{
					item.listItems?.map((asig, index) => (
						<li className="text-sm" key={index}> ▪️ { asig } </li>
					))
				}
				</ul>
			</div>
    </div>
  )
}

export default HorarioCard;
