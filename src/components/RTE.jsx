import { Editor } from "@tinymce/tinymce-react";
import React from "react";
import { Controller } from "react-hook-form";

const RTE = ({ name, controll, label, defaultvalue = "" }) => {
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
          control={controll}
          render={({ field: { onchange } }) => (
            <Editor
              initialValue={defaultvalue}
              init={{
                branding: false,
                height: 500,
                menubar: true,
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
              onEditorChange={onchange}
            />
          )}
        />
      </div>
    </div>
  );
};

export default RTE;
