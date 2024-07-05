"use client"

import { useEffect, useState } from "react";

const ProjectPage =  () => {
    const [projects, setProjects] = useState([])

    useEffect(()=> {
        fetch('/api/project', {method:"GET"}).then(res => res.json()).then(data => setProjects(data))
    },[])
    console.log(projects)
    return (
        <div className='container'>
            <h2 className="text-center text-3xl my-4">Projects</h2>
        </div>
    );
};

export default ProjectPage;