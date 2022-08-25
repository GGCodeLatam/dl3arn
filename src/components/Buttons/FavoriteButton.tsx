import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { FAVORITES_KEY } from "hooks/useFavorites";
import { getLocal, setLocal } from "utils/localStorage";

type Theme = "light" | "dark";
interface ButtonStyles {
  isFavorite: boolean;
  theme: Theme;
}
const Button = styled.button<ButtonStyles>`
  background-color: transparent;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }

  ${({ isFavorite, theme }) =>
    isFavorite
      ? css`
          color: #f33;
          opacity: 1;
        `
      : css`
          color: ${theme === "light" ? "#fff" : "#000"};
        `}
`;

const size = 26;
interface Props {
  id: string;
  onClick?: (_?: any) => any;
  theme?: Theme;
}

type Ids = string[];
function FavoriteButton({ id, theme }: Props) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const data = getLocal<Ids>(FAVORITES_KEY);
    if (!data?.includes(id)) return setIsFavorite(false);
    return setIsFavorite(true);
  }, [id]);

  const handleFavorite = () => {
    const data = getLocal<Ids>(FAVORITES_KEY);
    if (!data?.includes(id)) {
      setIsFavorite(true);
      return setLocal<Ids>(FAVORITES_KEY, [id, ...(data ? data : [])]);
    }

    setIsFavorite(false);
    return setLocal<Ids>(
      FAVORITES_KEY,
      data.filter((_id) => _id !== id)
    );
  };

  return (
    <Button theme={theme} isFavorite={isFavorite} onClick={handleFavorite}>
      {isFavorite ? (
        <IoIosHeart size={size} />
      ) : (
        <IoIosHeartEmpty size={size} />
      )}
    </Button>
  );
}

export default FavoriteButton;
