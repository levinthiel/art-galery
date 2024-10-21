import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "/components/Navigation";

const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    return res.json();
  };
  const { data, error } = useSWR(URL, fetcher);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  const randomIndex = Math.floor(Math.random() * data.length);
  const spotlightData = data[randomIndex];

  return (
    <>
      <Navigation />
      <GlobalStyle />
      <Component {...pageProps} data={data} />
    </>
  );
}
