/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // note that each time you introduce new routes, a traefik's router should be updated as sell
  // see infra/README.md
  output: "export",
  images: {unoptimized: true},
};
