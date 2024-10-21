import ArtPieceDetails from "/components/ArtPieceDetail";
import { useRouter } from "next/router";

export default function ArtPieces ({data}){

    const router = useRouter();
    const { slug } = router.query;
  
    // Check if slug exists and find the corresponding art piece
    if (!slug) return null;
    
    const artPiece = data.find((piece) => piece.slug === slug);
  
    // Return 404 if art piece not found
    if (!artPiece) {
      return <p>404 - Art Piece Not Found</p>;
    }

    return (
        <>
            <ArtPieceDetails image={artPiece.imageSource} year={artPiece.year} genre={artPiece.genre} artist={artPiece.artist} />
        </>
    )
}