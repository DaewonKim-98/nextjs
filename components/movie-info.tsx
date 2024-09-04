import { API_URL } from "../app/(home)/page"
import style from "../styles/movie-info.module.css"

export async function getMovie(id:string) {
  const response = await fetch(`${API_URL}/${id}`)
  return response.json()
}

export default async function MovieInfo({id}:{id:string}) {
  const movie = await getMovie(id)
  return (
    <div className={style.container}>
      <img src={movie.poster_path} alt="" />
      <div>
        <h1>{movie.title}</h1>
        <h3>✨{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
      </div>
    </div>
  )
}