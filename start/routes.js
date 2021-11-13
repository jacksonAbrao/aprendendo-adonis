"use strict";

const Route = use("Route");

Route.get("/", () => {
  return { status: "online" };
});

Route.post("/sessions", "SessionController.create");
Route.put("/sessions", "SessionController.refreshToken");

Route.resource("users", "UserController")
  .apiOnly()
  .validator(
    new Map([
      [["users.store"], ["user"]],
      [["users.update"], ["user"]],
    ])
  )
  .middleware(["auth:jwt", "is:manager"]);

Route.resource("clients", "ClientController")
  .apiOnly()
  .middleware(["auth:jwt", "is:manager"]);

Route.resource("trainings", "TrainingController")
  .apiOnly()
  .middleware(["auth:jwt", "is:manager", "audit"]);

Route.resource("exercises", "ExerciseController")
  .apiOnly()
  .middleware(["auth:jwt", "is:manager", "audit"]);

Route.resource("permissions", "PermissionController")
  .apiOnly()
  .middleware(["auth:jwt", "is:manager"]);

Route.resource("roles", "RoleController")
  .apiOnly()
  .middleware(["auth:jwt", "is:manager"]);

Route.resource("products", "ProductController")
  .apiOnly()
  .middleware(["auth:jwt", "is:manager"]);
