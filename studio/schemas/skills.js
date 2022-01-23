export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "prog",
      title: "Progress",
      type: "string",
    },
  ],
  orderings: [
    {
      title: "Progress",
      name: "progress",
      by: [{ field: "prog", direction: "asc" }],
    },
  ],
};
