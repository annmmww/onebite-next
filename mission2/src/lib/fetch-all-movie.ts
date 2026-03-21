import { MovieType } from "@/type";

export default async function fetchMovie(q?: string): Promise<MovieType[]> {
  let url = `https://challenge-onebite-cinema-server-mai-coral.vercel.app/movie`;

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}
