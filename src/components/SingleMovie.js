import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_ENDPOINT } from "../context";
const url =
  "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";

const SingleMovie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovie = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "False") {
        setError({ show: true, msg: data.Error });
        setIsLoading(false);
      } else {
        setMovie(data);
        setIsLoading(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`);
  }, [id]);

  if (isLoading) {
    return (
      <div className="text-center h-full text-4xl mt-10 font-bold">
        Loading...
      </div>
    );
  }

  if (error.show) {
    <div className="text-center h-full text-4xl mt-10 font-bold">
      {error.msg}
      <Link to="/">Back To Movies</Link>
    </div>;
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;

  return (
    <section className="max-w-screen-2xl mx-auto mt-40 ">
      <div className=" max-w-5xl mx-auto  rounded-lg  flex justify-between items-center gap-10 bg-gray-900 text-white p-10">
        <img src={poster === "N/A" ? url : poster} alt={title} />
        <div className=" max-w-2xl space-y-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className=" leading-8 text-xl">{plot}</p>
          <h4 className=" bg-green-500 inline-block px-4 py-2 rounded-md text-lg ">
            {year}
          </h4>
          <div>
            <Link
              to="/"
              className=" inline-block text-red-600 font-semibold hover:text-white duration-200"
            >
              {" "}
              Back To Movies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
