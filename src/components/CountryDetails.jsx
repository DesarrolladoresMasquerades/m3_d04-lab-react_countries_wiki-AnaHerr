import { Link } from "react-router-dom";

export default function CountryDetails(props){
console.log(props);
    return(
   <div className="col-7">
      <img src={`https://flagpedia.net/data/flags/w580/${props.country.alpha2Code.toLowerCase()}.png`}
        alt="" width="50px" height="auto" />
            <h1>{props.country.name.official}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td >Capital</td>
                        <td>{props.country.capital[0]}</td>
                    </tr>
                    <tr>
                        <td >Area</td>
                        <td>{props.country.area} km <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                            
                                {props.country.borders.map((border)=>{
                                   const borderCountry = props.countries.find((country)=>country.alpha3Code === border)
                                    return(
                                        <li key={"id" + border}> 
                                        <Link to={`/${border}`}>
                                        {borderCountry.name.official}</Link>
                                        </li>
                                    )}
                                    )}
                                
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}