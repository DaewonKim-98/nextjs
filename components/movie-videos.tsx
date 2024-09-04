import style from "../styles/movie-vidoes.module.css"

const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getVideos(id:string) {
  const response = await fetch(`${API_URL}/${id}/videos`)
  return response.json()
}

export default async function MovieVideos({id}:{id:string}) {
  const videos = await getVideos(id)
  return (
    <div className={style.container}>
      {videos.map(video => 
        <iframe key={video.id} src={`https://youtube.com/embed/${video.key}`} title={video.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen/>
      )}
    </div>
  )
}