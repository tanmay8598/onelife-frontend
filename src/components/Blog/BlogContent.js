"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Parser } from "html-to-react";
import apiClient from "@/api/client";

const BlogContent = ({ blogid }) => {
  const [data, setData] = useState({});

  const fetchBlogs = async () => {
    const { data } = await apiClient.get(`/blog/blogbyid/${blogid}`);

    setData(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="mx-auto max-w-screen-2xl  py-10 px-3  lg:h-full  lg:mb-40 lg:mt-10">
      <Image
        src={data?.image}
        alt="logo"
        height={2000}
        width={2000}
        className="h-full w-full"
      />
      <p className="font-bold text-3xl lg:text-5xl mt-10"> {data.heading}</p>
      <div className="mt-2 lg:mt-10 w-auto text-justify fit-img">
        {Parser().parse(data.content)}
      </div>
    </div>
  );
};

export default BlogContent;
