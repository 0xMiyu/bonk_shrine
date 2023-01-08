/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const env = {RPC_ENDPOINT: process.env.RPC_ENDPOINT}

module.exports = {nextConfig, env}
