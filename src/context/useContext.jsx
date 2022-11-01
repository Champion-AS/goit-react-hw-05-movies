import { movieAPI } from "api/API";
import { useCallback } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const movieContext = createContext();
export const useMovie = () => useContext(movieContext);

const URL = {
    ADDRESS: 'https://api.themoviedb.org/3',
    KEY: '3fe1a44c986ecf2d606ea0a3a0e8c173',
    credits: '/credits',
    reviews: '/reviews',
    query: '&query=',
    search: '/search',
};

export const MovieProvider = ({ children }) => {
    const { trendingMovies, searchdMovies } = movieAPI;
    const { trend, setTrend } = useState([]);
    const { searchList, setSearchList } = useState([]);
    const { searchValue, setSearchValue } = useState({});
    const { ADDRESS, KEY, query, search, reviews, credits } = URL;

    const getTrendingMovis = useCallback(async () => {
        try {
            const { results } = await (await trendingMovies(ADDRESS, KEY)).json();
            setTrend(results);
            return await results;
        } catch (err) {
            console.log(err.message);
        }
    }, [ADDRESS, KEY, trendingMovies]);

    const fetchMovieData = useCallback(
        async ({ id = '', data = '', query = '', name = '', search = '' }) => {
            let parsedData = null;
            try {
                parsedData = await (await searchdMovies(ADDRESS, KEY, id, data, query, name, search)).json();
                return parsedData;
            } catch (err) {
                console.log(err.message);
            } finally {
                if (Array.isArray(parsedData.cast)) {
                    setSearchList(parsedData.cast)
                    return
                }
                if (Array.isArray(parsedData.results)) {
                    setSearchList(parsedData.results)
                    return
                }
                setSearchValue(prev => ({
                    ...prev,
                    ...parsedData,
                }));
                return;
            }
        }, [ADDRESS, KEY, searchdMovies]);
    
    const getMoviesById = useCallback(val => {
        const id = `/${val}`;
        return fetchMovieData({ id });
    }, [fetchMovieData]);

    const getMovieCast = useCallback(val => {
        const id = `/${val}`;
        return fetchMovieData({ id, data: credits });
    }, [fetchMovieData, credits]);

    const getMovieReview = useCallback(val => {
        const id = `/${val}`;
        return fetchMovieData({ id, data: reviews });
    }, [fetchMovieData, reviews]);

    const getMovieByName = useCallback(name => {
        return fetchMovieData({ name, query, search })
    }, [fetchMovieData, query, search]);

    return (
        <movieContext.Provider value={{ trend, searchValue, searchList, getTrendingMovis, getMoviesById, getMovieByName, getMovieCast, getMovieReview, setSearchList, setSearchValue }}>{children}</movieContext.Provider>
    )
};