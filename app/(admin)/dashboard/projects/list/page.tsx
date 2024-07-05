"use client";

import Loader from "@/components/shared/Loader";
import { useEffect, useState } from "react";

export default function Page() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/project")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="container py-14 lg:py-28">
      <h2 className="text-center text-3xl font-semibold my-4">Projects</h2>
      <table className="w-full overflow-x-auto">
        <thead>
          <tr>
            <th>SL</th>
            <th>Title</th>
            <th>date</th>
            <th>Live Link</th>
            <th>Github Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(({ id, title, description, thumb, date, liveLink, githubLink }: any, index) => (
            <tr key={id}>
              <td>{index + 1}</td>
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
