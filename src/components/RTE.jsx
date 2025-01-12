import { Editor } from "@tinymce/tinymce-react";
import React from "react";
import { Controller } from "react-hook-form";

const RTE = ({ name, control, label, defaultvalue = "" }) => {
  return (
    <div>
      <div className="">
        {label && (
          <label className="inline-block" htmlFor="">
            {label}
          </label>
        )}
        <Controller
          name={name || "darkness"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              className="bg-zinc-800"
              apiKey="uyykhqwsi06zllxhvx0x9v1rlxl3u1ral55n420bjtzxdxrm"
              initialValue={defaultvalue}
              init={{
                branding: false,
                height: 500,
                menubar: true,
                // content_css: "tinymce-5-dark",
                selector: "textarea", // change this value according to your HTML
                skin: "oxide-dark",
                content_css: "tinymce-5-dark",
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
              onEditorChange={onChange}
            />
          )}
        />
      </div>
    </div>
  );
};

export default RTE;
