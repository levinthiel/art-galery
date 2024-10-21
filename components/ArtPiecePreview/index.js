import Image from "next/image";
import Link from "next/link";


export default function ArtPiecePreview({ image, title, artist, slug }) {
  
  return (
    <>
      <li>
        <h2>{title}</h2> 
        <Link href={`/artpieces/${slug}`}>
          <Image src={image} width={200} height={200} alt={title} />
        </Link>
        <p>{artist}</p>
      </li>
    </>
  );
}
