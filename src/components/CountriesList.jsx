import { Link } from "react-router-dom";

export default function CountriesList({countries}) {

    return(
        countries.map((country)=>(
            
              <div className="col-5">
                <div className="list-group">
                <Link
                key={country.alpha3Code}
                className="list-group-item list-group-item-action"
                to={country.alpha3Code}
              >
                <img
                  src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
                  alt=""
                  width="100px"
                  height="auto"
                />
                <p>{country.name.official}</p>
              </Link>
                </div>
              </div>
    
        )
        
    ))
}