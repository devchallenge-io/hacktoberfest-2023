import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";
import { z } from "zod";

export async function createVideoRoute(app: FastifyInstance) {
  app.post("/videos", async (request, reply) => {
    const bodySchema = z.object({
      title: z.string(),
      description: z.string(),
      url: z.string(),
    });

    const { title, description, url } = bodySchema.parse(request.body);

    if (!title || !description || !url) {
      return reply.status(400).send({ error: "Missing body." });
    }

    const video = await prisma.video.create({
      data: { title, description, url },
    });

    return {
      video,
    };
  });
}
