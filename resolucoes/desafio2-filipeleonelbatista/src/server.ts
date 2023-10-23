import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";
import { createVideoRoute } from "./routes/create-video";
import { deleteVideoRoute } from "./routes/delete-video";
import { getAllVideosRoute } from "./routes/get-all-videos";
import { updateVideoRoute } from "./routes/update-video";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(createVideoRoute);
app.register(getAllVideosRoute);
app.register(updateVideoRoute);
app.register(deleteVideoRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => console.log("HTTP Server Running!"));
