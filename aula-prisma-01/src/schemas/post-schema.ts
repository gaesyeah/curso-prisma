import JoiDate from "@joi/date";
import Joi from "joi";
import { CreatePost } from "../repositories/post-repository";

export const postSchema = Joi.object<CreatePost>({
  username: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  createAt: Joi.extend(JoiDate).date().format('YYYY-MM-DD').utc()
})