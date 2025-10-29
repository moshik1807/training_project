
// export async function getAllTrainers() {
//   try {
//     const res = await fetch("http://localhost:3000/trainers/readAll");
//     if (!res.ok) throw new Error("Failed to fetch trainers");
//     const data = await res.json();
//     return data;
//   } catch (err) {
//     console.error("Error fetching trainers:", err);
//     return [];
//   }
// }

// export async function getTrainerById(id) {
//   try {
//     const res = await fetch(`http://localhost:3000/trainers/readById/${id}`);
//     if (!res.ok) throw new Error("Failed to fetch trainer");
//     const data = await res.json();
//     return data;
//   } catch (err) {
//     console.error("Error fetching trainer:", err);
//     return null;
//   }
// }

