import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

export default function Home({results}) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push({
      pathname: `/movies/${title}/${id}`,
      query: {
        title
      }
    }, `/movies/${id}`)//2번째 인자는 쿼리를 숨기기 위함
  }
  
  return (
    <div className="container">
      <Seo title="Home" />

      {results?.map((movie) => (
        <Link href={`/movies/${movie.original_title}/${movie.id}`} key={movie.id} className="wrap">
          <div onClick={()=> onClick(movie.id, movie.original_title)} className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
            <h4>{movie.original_title}</h4>
          </div>
        </Link>
      ))}


      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        a {text-decoration:none}
        .movie {cursor:pointer}
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {

  const { results } = await ( await fetch(`http://localhost:3000/api/movies`) ).json();

  return {
    props: {
      results,
    }
  }
        
}