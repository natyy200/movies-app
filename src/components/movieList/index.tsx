"use client";

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import MovieCard from '../movieCard';
import { Movie } from '@/types/movie';

export default function MovieList () {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        getMovies();
    }, []);
    const getMovies = async () => {
        await axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'b899ef5b0ddc7c703f24664928ec8169',
                language: 'pt-br',
            }
        }).then(response => {
            setMovies(response.data.results);
        });

    }

    return (
        <ul className="movie-list">
            {movies.map((movie) =>
                <MovieCard
                    key={movie.id}
                    movie={movie}
                />
            )}
        </ul>
    );
}