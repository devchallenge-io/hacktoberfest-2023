import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";
import { z } from "zod";

export async function updateVideoRoute(app: FastifyInstance) {
  app.put("/videos/:videoId", async (request, reply) => {
    const paramsSchema = z.object({
      videoId: z.string().uuid(),
    });

    const { videoId } = paramsSchema.parse(request.params);

    const video = await prisma.video.findUniqueOrThrow({
      where: {
        id: videoId,
      },
    });

    const bodySchema = z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      url: z.string().optional(),
    });

    const { title, description, url } = bodySchema.parse(request.body);

    if (!title && !description && !url) {
      return reply
        .status(400)
        .send({
          error:
            "Pelo menos um dos campos deve estar presente: title, description ou url.",
        });
    }

    const updatedVideo = await prisma.video.update({
      where: {
        id: videoId,
      },
      data: {
        title: title ?? video.title,
        description: description ?? video.description,
        url: url ?? video.url,
      },
    });

    return {
      updatedVideo,
    };
  });
}
