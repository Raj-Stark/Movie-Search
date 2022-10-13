import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const url =
  "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";
const Movies = () => {
  const { movies, isLoading, error } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="text-center h-full text-4xl mt-10 font-bold">
        Loading...
      </div>
    );
  }

  return (
    <section className=" max-w-screen-xl mx-auto p-10 ">
      {error.show && (
        <div className="text-lg text-center text-red-600 font-bold">
          {error.msg}
        </div>
      )}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 ">
        {movies.map((m, i) => {
          const { imdbID: id, Poster: poster, Title: title, Year: year } = m;
          return (
            <Link to={`/movies/${id}`} key={id}>
              <article className="p-8  ">
                <img
                  src={poster === "N/A" ? url : poster}
                  alt={title}
                  className=" h-full w-full object-cover"
                />
                <div className=" mt-2 flex  justify-between items-center h-20 bg-black text-white p-4 overflow-hidden">
                  <h4 className="text-base font-medium overflow-hidden">
                    {title}
                  </h4>

                  <p className="bg-green-500 inline-block px-3  rounded-md mt-2 ">
                    {year}
                  </p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
