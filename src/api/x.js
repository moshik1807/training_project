export async function login(data) {
  const response = await fetch("http://localhost:3000/trainees/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function signup(data) {
  const response = await fetch("http://localhost:3000/trainees/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getAllTrainers() {
  try {
    const res = await fetch("http://localhost:3000/trainers/readAll");
    if (!res.ok) throw new Error("Failed to fetch trainers");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching trainers:", err);
    return [];
  }
}
