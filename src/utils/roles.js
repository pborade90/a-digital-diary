export const roles = {
  admin: ["deleteUsers", "deleteBlogs", "editBlogs"],
  author: ["editBlogs", "deleteOwnBlog", "createBlogs"],
  user: ["viewBlogs"],
};

export const hasPermission = (role, permission) => {
  return roles[role]?.includes(permission);
};
