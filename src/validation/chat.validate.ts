import * as Joi from "joi";

const chatData = Joi.object({
  interlocutorEmail: Joi.string().email().required(),
});

const room = Joi.object({
  room: Joi.string().uuid().required(),
});

export { chatData, room };
