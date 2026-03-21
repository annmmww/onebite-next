import { MovieType } from "@/type";

export default async function fetchRandomMovie(): Promise<MovieType[]> {
  const url = `https://challenge-onebite-cinema-server-mai-coral.vercel.app/movie/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}
