"use strict";

class user {
  get rules() {
    return {
      name: "required",
      username: "required",
      email: "required",
      password: "required",
      type_user_id: "required",
    };
  }

  get messages() {
    return {
      "name.required": "O campo nome é obrigatório",
      "username.required": "O campo username é obrigatório",
      "email.required": "O campo email é obrigatório",
      "password.required": "O campo senha é obrigatório",
      "type_user_id.required": "O campo tipo de usuário é obrigatório",
    };
  }
}

module.exports = user;
