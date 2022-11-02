import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import MovieList from '../../components/MovieList/MovieList';
import Container from '../../components/Ul/Container/Container';
import { useMovie } from '../../context/useContext';

function Movies(props) {
  const { searchList, getMovieByName } = useMovie();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery) {
      getMovieByName(searchQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMovieByName]); 
    
  const onChange = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <Container>
      <section>
        <SearchForm value={searchQuery} onChange={onChange} />
        {searchList.length > 0 && <MovieList data={searchList} />}
      </section>
    </Container>
  );
}

export default Movies;