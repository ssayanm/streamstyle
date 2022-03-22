const url = process.env.NEXT_API_URL;

module.exports = {
  images: {
    domains: ["localhost", "res.cloudinary.com", ""],
  },
  env: {
    url: url,
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};
