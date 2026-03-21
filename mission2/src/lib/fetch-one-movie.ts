import { MovieType } from "@/type";

export default async function fetchOneMovie(
  id: number,
): Promise<MovieType | null> {
  const url = `https://challenge-onebite-cinema-server-mai-coral.vercel.app/movie/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
