import { useState } from "react";
import styled, { css } from "styled-components";
import addCourseToFavorite, { isFavorite } from "utils/addCourseToFavorite";

import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

interface ButtonStyles {
  isFavorite: boolean;
}
const Button = styled.button<ButtonStyles>`
  background-color: transparent;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }

  ${({ isFavorite }) =>
    isFavorite
      ? css`
          color: #f33;
          opacity: 1;
        `
      : css`
          color: #fff;
        `}
`;

const size = 32;
interface Props {
  id: string;
}

function FavoriteButton({ id }: Props) {
  const [favorite, setFavorite] = useState<boolean>(isFavorite(id));
  const handleFavorite = () => {
    addCourseToFavorite(id);
    setFavorite(isFavorite(id));
  };

  return (
    <Button isFavorite={favorite} onClick={handleFavorite}>
      {favorite ? <IoIosHeart size={size} /> : <IoIosHeartEmpty size={size} />}
    </Button>
  );
}

export default FavoriteButton;
