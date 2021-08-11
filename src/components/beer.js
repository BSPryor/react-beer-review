export default function Beer(beer) {
  return (
    <li>
      <div className="beerName">
        {beer.name}
      </div>
      <div className="beerAbv">
        {beer.abv} %
      </div>
      <div className="beerType">
        {beer.type}
      </div>
    </li>
  )
}