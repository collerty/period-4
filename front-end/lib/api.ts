// const apiUrl = "http://period-4-production.up.railway.app"
const apiUrl = "http://localhost:4000"

export async function register({ username, email, password }: { username: string, email: string, password: string }) {
  const res = await fetch(`${apiUrl}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  });
  if (!res.ok) throw new Error('Registration failed');
  let res1 = await res.json();
  console.log(res1);
  return res.json();
}

export async function login({ email, password }: { email: string, password: string }) {
  console.log("login");
  console.log(`fetch url: ${apiUrl}/auth/login`)
  const res = await fetch(`${apiUrl}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error('Login failed');
  let res1 = await res.json();
  // console.log(res1);
  return res1
}