import FavoriteButton from "components/Buttons/FavoriteButton";
import useFavorites from "hooks/useFavorites";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Favorite, FavoritesContainer } from "styles/favorites.styles";

function Favorites() {
  const { favorites, refetch } = useFavorites({});

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <FavoritesContainer>
      <div className="favorites">
        {favorites.map((favorite) => (
          <Favorite key={favorite.id}>
            <FavoriteButton id={favorite.id} />
            <Link to={`/course/${favorite.id}`}>
              <h3>{favorite.name}</h3>
            </Link>
          </Favorite>
        ))}
      </div>
    </FavoritesContainer>
  );
}

export default Favorites;
