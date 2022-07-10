import React, { FC, ReactElement, useEffect } from 'react';
import Card from '../../components/Card';
import { projectsContent } from '../../TextContent/texts';

const Projects: FC<{}> = (): ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mb-20 bg-light dark:bg-mainBg">
      <h3 className="text-center mb-5 md:text-3xl text-2xl">
        Most recent projects
      </h3>
      <div className="flex justify-center flex-col md:flex-row md:flex-wrap">
        {projectsContent.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
