const API = import.meta.env.VITE_API;

export async function getBooks() {
  try {
    const res = await fetch(API + "./books");
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
}
