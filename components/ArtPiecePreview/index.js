import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <li>
        <h2>{title}</h2>
        <Image src={image} width={200} height={200} alt={title} />

        <p>{artist}</p>
      </li>
    </>
  );
}
