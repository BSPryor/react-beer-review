export default function Beer(props) {
  return (
    <li>
      <div className="beerName">
        {props.beer.name}
      </div>
      <div className="beerAbv">
        {props.beer.abv} %
      </div>
      <div className="beerType">
        {props.beer.type}
      </div>
    </li>
  )
}