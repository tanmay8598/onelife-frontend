import React from "react";
import apiClient from "@/api/client";
import BlogContent from "@/components/Blog/BlogContent";

export async function generateMetadata({ params }) {
  const blogid = params?.blog;
  const { data } = await apiClient.get(`/blog/blogbyid/${blogid}`);

  return {
    title: data?.mtitle,
    description: data?.mdesc,
    openGraph: {
      images: [String(data?.image)],
    },
  };
}

const page = ({ params }) => {
  const blogid = params?.blog;
  return (
    <div>
      <BlogContent blogid={blogid} />
    </div>
  );
};

export default page;
