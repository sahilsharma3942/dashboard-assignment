// Helper function to create URL-friendly paths
export const formatPath = (title:string) => {
    return title.toLowerCase().replace(/\s+/g, '-'); // Replace spaces with dashes
  };