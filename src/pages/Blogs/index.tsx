import React, { FC, ReactElement } from 'react';
import Post from '../../components/Post';
import { blogs } from '../../TextContent/texts';

const Projects: FC<{}> = (): ReactElement => {
  return (
    <div className="mb-28">
      <h3 className="text-center mb-5 md:text-3xl text-2xl">My posts</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 content-center">
        {blogs.map((post) => (
          <Post key={post.title} {...post} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
