import { NetworkBadge } from "components/Badges";
import { PrimaryButton } from "components/Buttons";
import FavoriteButton from "components/Buttons/FavoriteButton";
import Placeholder from "components/Placeholders";
import useFavorites from "hooks/useFavorites";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getImage } from "services/firebase/storage";
import { FavoriteContainer, FavoritesContainer } from "styles/favorites.styles";
import { CourseModel, UserModel } from "utils/types/firebase";
import Layout from "components/Layouts";
import { Override } from "utils/types/utility";

function Favorites() {
  const [isLoading, setIsLoading] = useState(true);
  const { favorites, refetch } = useFavorites({});

  useEffect(() => {
    refetch().finally(() => setIsLoading(false));
  }, [refetch]);

  return (
    <Layout>
      <FavoritesContainer>
        {!isLoading && !favorites.length ? (
          <div className="message">
            <h1>Sin favoritos</h1>
            <p>
              Tus cursos marcados como favoritos apareceran en esta seccion.
            </p>

            <Link href="/">
              <PrimaryButton as="a" className="link">
                Comienza a agregar cursos!
              </PrimaryButton>
            </Link>
          </div>
        ) : (
          <div className="favorites">
            {favorites.map((favorite) => (
              <Favorite key={favorite.id} {...favorite} />
            ))}
          </div>
        )}
      </FavoritesContainer>
    </Layout>
  );
}

export default Favorites;

type CourseType = Override<CourseModel, { instructor: UserModel | null }>;
function Favorite({ image, ...favorite }: CourseType) {
  const img: string = typeof image === "string" ? image : image?.md || "";

  return (
    <FavoriteContainer key={favorite.id}>
      <Link href={`/course/${favorite.url}`}>
        <a className="link">
          {img ? (
            <div className="img-container">
              <Image layout="fill" className="img" src={img} alt="" />
            </div>
          ) : (
            <Placeholder width="4em" height="4em" />
          )}
          <div className="info">
            <h3>{favorite.name}</h3>
            <p>{favorite.instructor?.name}</p>
          </div>
        </a>
      </Link>

      <NetworkBadge width="1.5em" network={favorite.rampp?.network} onlyIcon />
      <FavoriteButton id={favorite.id} />
    </FavoriteContainer>
  );
}
