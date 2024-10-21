import Image from "next/image";

export default function Spotlight({ data }) {
  function randomSpotlight(data) {
    if (!data || data.length === 0) {
      return null; // Fallback, wenn kein Datenobjekt vorhanden ist oder das Array leer ist
    }
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex]; // Das zufällig ausgewählte Element zurückgeben
  }

  const spotlightData = randomSpotlight(data);

  if (!spotlightData) {
    return <p>Keine Daten vorhanden</p>; // Fallback, wenn keine Daten zurückgegeben werden
  }

  const { imageSource, artist } = spotlightData; // Destrukturierung des zurückgegebenen Objekts

  return (
    <>
      <h2>Spotlight Piece</h2>
      <Image src={imageSource} width={200} height={200} alt={artist} />
      <p>{artist}</p>
    </>
  );
}
