"use strict";

const Exercise = use("App/Models/Exercise");
const Helpers = use("Helpers");

class ExerciseController {
  async index() {
    return await Exercise.all();
  }

  async show({ params }) {
    const exercise = await Exercise.findOrFail(params.id);
    return exercise;
  }

  async store({ request, response }) {
    const data = request.only([
      "name",
      "observation",
      "series",
      "waiting_time",
    ]);

    const photo = request.file("image", {
      types: ["image"],
      size: "2mb",
    });

    if (photo) {
      const image = await Exercise.findBy("url_image", photo.clientName);
      if (image) {
        return response.status(400).send({
          error: {
            message: "Imagem já existe",
            name: "DuplicateImage",
          },
        });
      }
      await photo.move(Helpers.publicPath("exercises"));
      data.url_image = photo.clientName;
    }

    console.log(request.input("action_by"));

    const exercise = await Exercise.create(data);
    return exercise;
  }

  async update({ params, request }) {
    const exercise = await Exercise.findOrFail(params.id);

    const data = request.only([
      "name",
      "observation",
      "series",
      "waiting_time",
    ]);

    exercise.merge(data);
    await exercise.save();
    return exercise;
  }

  async destroy({ params }) {
    const exercise = await Exercise.findOrFail(params.id);
    await exercise.delete();
    return { message: "Exercicio deletado" };
  }
}

module.exports = ExerciseController;
