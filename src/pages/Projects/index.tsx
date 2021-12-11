import React, { FC, ReactElement } from 'react'
import Card from '../../components/Card';
import { projectsContent } from '../../TextContent/texts';

const Projects: FC<{}> = ():ReactElement => {
    return (
    <div className="mb-20">
    <h3 className="text-center mb-5 md:text-3xl text-xl">Most recent projects</h3>
    <div className="flex justify-center flex-col md:flex-row">
        {projectsContent.map((project) => (
         <Card key={project.title} {...project} />
        ))}
    </div> 
    </div>
    );
}
export default Projects;
