import React from 'react';
import PostAddForm from '../../modules/post/PostAddForm';
import { DashboardHeading } from '../../components/dashboard-heading';

function DashboardAddPost() {
  return (
    <div className="">
      <DashboardHeading>Add new Post</DashboardHeading>
      <PostAddForm />
    </div>
  );
}

export default DashboardAddPost;
