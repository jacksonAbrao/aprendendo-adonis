"use strict";

const Route = use("Route");

Route.get("/", () => {
  return { status: "online" };
});

// Route.get("/users", "UserController.index");
// Route.get("/users/:id", "UserController.show");
// Route.post("/users", "UserController.store");
// Route.put("/users/:id", "UserController.update");
// Route.delete("/users/:id", "UserController.destroy");

Route.resource("users", "UserController")
  .apiOnly()
  .validator(
    new Map([
      [["users.store"], ["user"]],
      [["users.update"], ["user"]],
    ])
  );
Route.resource("clients", "ClientController").apiOnly();
Route.resource("trainings", "TrainingController").apiOnly();
Route.resource("exercises", "ExerciseController").apiOnly();
