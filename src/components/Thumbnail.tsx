import React from "react"
import { Movie } from "../typings"
import Image from "next/image"

interface Props{
    movie: Movie 
    //When using friebase
    //movie: Movie | DocumentData
}


function Thumbnail({movie}: Props) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w-[260px] md:hover:scale-105">
        <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
        alt="Movie Cover Image"
        className="rounded-sm object-cover md:rounded"
        fill
        />
    </div>
  )
}

export default Thumbnail