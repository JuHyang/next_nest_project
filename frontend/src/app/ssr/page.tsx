export default async function SSR() {
  const message = await getData();

  return (
    <div>
      <h1>SSR with NestJS</h1>
      <p>{message}</p>
    </div>
  );
}

async function getData() {
  const res = await fetch('http://localhost:3001/hello', {
    // SSR 캐싱 무효화
    cache: 'no-store',
  });
  return res.text();
}
