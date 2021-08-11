import Beer from "./beer";

export default function List(props) {
  const beersList = props.beers.map((beer, index) => {
    return (
      <Beer
      key={index} 
      beer={beer}
      />
    )
  })

  return(
    <ul className="col-md-6 offset-md-3">
     {beersList}
    </ul>
    
  )
}