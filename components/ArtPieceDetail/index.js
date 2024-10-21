import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function ArtPieceDetails({ image, artist, title, genre, year  }){

    const router = useRouter();

    return (
        <>  
            
            <Image src={image} width={800} height={800} alt={title} />
            <p>{artist}</p>
            <p>{genre}</p>
            <p>{year}</p>
            <StyledButton type="button" onClick={() => router.back()}>
                ← Back
            </StyledButton>
        </>
    )
}

const StyledButton = styled.button`
    background-color: grey;
    border: none;
    position: absolute;
    left: 20px;
    top: 50%;
    padding: 20px;
`;