export async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Erro ao buscar usuários");
  return res.json(); // retorna a lista de usuários
}

export async function fetchUserDetails(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error("Erro ao buscar detalhes do usuário");
  return res.json(); // retorna os detalhes de um usuário
}
