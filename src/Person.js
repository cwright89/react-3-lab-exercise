import './Person.css'
const Person = (props) => {
    const {name, city, title, employer, id, favoriteMovies, country} = props.person
    const {data, i} = props
    const lastI = data.length - 1
    return (
    <div>
        <section>
        <h1>{name.first} {name.last} </h1><br></br>
        <div><h1>Location:</h1> {city}, {country}</div><br></br>
        <div><h1>Job Title:</h1> {title} </div><br></br>
        <div><h1>Employer:</h1> {employer}</div><br></br>
        <h2>Favorite Movies:</h2>
        <ol>
        <li>{favoriteMovies[0]}</li>
        <li>{favoriteMovies[1]}</li>
        <li>{favoriteMovies[2]}</li>
        </ol>
        </section>
        <button 
        className={i === 0 ? 'dec-none' :null}
        onClick={() =>props.dec()}>
            previous</button>
        <button 
        className={i === lastI ? 'inc-none' : null}
        onClick={() =>props.inc()}>
            next</button>
    </div>
)}

export default Person