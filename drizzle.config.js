/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-mockup_owner:w0Zg7GopBRtS@ep-sweet-fog-a558e8yz.us-east-2.aws.neon.tech/ai-mockup?sslmode=require',
    }
  };