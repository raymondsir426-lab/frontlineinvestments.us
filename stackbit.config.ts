import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Home",
          type: "page",
          urlPath: "/",
          filePath: "content/pages/home.json",
          fields: [
            { name: "title", type: "string", required: true }
          ]
        }
      ]
    })
  ]
});
