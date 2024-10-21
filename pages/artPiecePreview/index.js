import Image from "next/image";

export default function ArtPiecePreview ({image, title, artist}) {
    
    return (
        <>
                <li>
                    <Image
                            src={image}
                            width={200}
                            height={200}
                            alt={title}/>
                    <h2>{title}</h2>
                    <p>{artist}</p>
                </li>
        </>
    )
}