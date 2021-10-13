import PropTypes from 'prop-types'

function Movie(id, title, year, summary, poster) {
    return (
        <h1>{title}</h1>
    )
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.number.isRequired,
    summary: PropTypes.number.isRequired,
    poster: PropTypes.number.isRequired,
}

export default Movie