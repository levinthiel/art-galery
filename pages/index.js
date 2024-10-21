import ArtPiece from "../components/ArtPiece";
import Link from "next/link";
import Spotlight from "./spotlight";

export default function HomePage({ data }) {
  return (
    <div>
      <h1>Art gallery</h1>
      <Link href={"/spotlight"}>Go to Spotlight</Link>
      <ArtPiece artPieces={data} />
    </div>
  );
}
