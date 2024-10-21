import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPiece({artPieces}){
    return(
        <>
            <ul>
                {artPieces.map((artpiece)=> (
                    <ArtPiecePreview key={artpiece.slug} image={artpiece.imageSource} title={artpiece.name} artist={artpiece.artist} slug={artpiece.slug} />

                    ))}
            </ul>
        </>
    )
}