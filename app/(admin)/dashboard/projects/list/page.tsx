async function getProject(){
    return (await fetch('/api/project')).json()
}
const ProjectPage = () => {
    const projects = getProject()
    console.log(projects)
    return (
        <div className='container'>
            
        </div>
    );
};

export default ProjectPage;