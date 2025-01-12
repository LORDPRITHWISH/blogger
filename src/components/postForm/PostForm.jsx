import React, { useCallback } from "react";
import { get, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Input from "../Input";
import RTE from "../RTE";
import service from "../../appwrite/config";
import Select from "../Select";
import Button from "../Button";

const PostForm = ( {post} ) => {
  // console.log(post)
  // console.log(post.logo)
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active",
      image: post?.logo || "",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    console.log("Data:", data);
    if (post) {
      const file = data.image[0] ? data.image[0] : null;
      if (file) {
        service.deleteFile(post.logo);
      }

      const dbPost = await service.updatePost(post.$id, {
        ...data,
        logo: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } 
    else {
      const file = await service.uploadFile(data.image[0]);

      console.log("File:", file);
      if (file) {
        const fileID = file.$id;
        data.logo = fileID;
        const dbPost = await service.createPost({ ...data, userId: userData.$id });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/gi, "-")
        .replace(/^-|-$/g, "");
    }
  });

  React.useEffect(() => {
    // register("slug", { transform: slugTransform });
    watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value), { shouldValidate: true });
      }
    });
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="w-full flex flex-wrap">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Input label="Title " placeholder="title" className="mb-4 bg-blue-950 rounded-md" {...register("title", { required: true })} />
        <Input
          label="Slug"
          placeholder="slug"
          className="mb-4 bg-blue-950 rounded-md"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.target.value), { shouldValidate: true });
          }}
        />
        <RTE label={"Content: "} name={"content"} control={control} defaultvalue={getValues("content")} />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Input label="Featured Image" type="file" className="mb-4 ml-5  rounded-md" accept="image/png, image/jpg, image/jpeg" {...register("image", { required: !post })} />
        {post && (
          <div className="mb-4 bg-blue-950">
            <img src={service.getPreview(post.logo)} alt={post.title} className="h-32  bg-blue-950 " />
          </div>
        )}
        <Select option={["active", "inactive"]} labtxt="Status" className="mb-4 bg-blue-950 p-2 rounded-md" {...register("status", { required: true })} />
        <Button
          name={post ? "Update" : "Create"}
          type="submit"
          colour={post ? "bg-blue" : "bg-green"}
          className="text-white font-bold py-2 px-4 rounded-2xl border-gray-400 border-2 mt-4"
        />
      </div>
    </form>
  );
};

export default PostForm;
