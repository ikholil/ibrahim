async function getData() {
  const res = await fetch("http://localhost:3000/api/project");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <main className="container py-14 lg:py-28">
      <h2 className="text-center text-3xl font-semibold my-4">Projects</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>date</th>
            <th>Live Link</th>
            <th>Github Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.projects.map(({ id, title, description, thumb, date, liveLink, githubLink }: any) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{date}</td>
              <td>{liveLink}</td>
              <td>{githubLink}</td>
              <td>
                <div className="flex gap-4">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
