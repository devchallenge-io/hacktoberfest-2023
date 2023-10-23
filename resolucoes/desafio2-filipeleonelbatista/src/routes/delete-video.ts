import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";
import { z } from "zod";

export async function deleteVideoRoute(app: FastifyInstance) {
  app.delete("/videos/:videoId", async (request, reply) => {
    const paramsSchema = z.object({
      videoId: z.string().uuid(),
    });

    const { videoId } = paramsSchema.parse(request.params);

    const deletedRecord = await prisma.video.delete({
      where: {
        id: videoId,
      },
    });

    return {
      deletedRecord,
    };
  });
}
