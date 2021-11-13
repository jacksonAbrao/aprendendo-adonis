"use strict";

const Server = use("Server");

const globalMiddleware = [
  "Adonis/Middleware/BodyParser",
  "App/Middleware/ConvertEmptyStringsToNull",
  "Adonis/Acl/Init",
];

const namedMiddleware = {
  auth: "Adonis/Middleware/Auth",
  guest: "Adonis/Middleware/AllowGuestOnly",
  is: "Adonis/Acl/Is",
  can: "Adonis/Acl/Can",
  audit: "App/Middleware/Audit",
};

const serverMiddleware = ["Adonis/Middleware/Static", "Adonis/Middleware/Cors"];

Server.registerGlobal(globalMiddleware)
  .registerNamed(namedMiddleware)
  .use(serverMiddleware);
