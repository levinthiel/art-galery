import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function ArtPieceDetails({ image, artist, title, genre, year, onToggleFavorite, artPiecesInfo }) {
  const router = useRouter();

  return (
    <>
      <div>
        <StyledFavbutton onClick={onToggleFavorite} >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={artPiecesInfo ? "red" : "grey"}>
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
          </svg>
        </StyledFavbutton>
        <Image src={image} width={800} height={800} alt={title} />
      </div>
      <p>{artist}</p>
      <p>{genre}</p>
      <p>{year}</p>
      <StyledButton type="button" onClick={() => router.back()}>
        ← Back
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  background-color: grey;
  border: none;
  position: absolute;
  left: 20px;
  top: 50%;
  padding: 20px;
  cursor: pointer;
`;
const StyledFavbutton = styled.button`
  width: 50px;
  position: absolute;
  margin: 15px;
  fill: grey;
  background-color: transparent;
  border:none;
  cursor: pointer;

  &:hover {
    fill: darkred;
  }
`;
