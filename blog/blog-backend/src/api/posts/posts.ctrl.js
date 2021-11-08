import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad request
    return;
  }
  return next();
}

export const write = async ctx => {
  const schema = Joi.object().keys({
    title:Joi.string().required(),
    body: Joi.string().required(),
    tags:Joi.array().items(Joi.string()).required,
  });

  const result = schema.validate(ctx.request.body);

  if(result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title, body, tags
  })

  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e)
  }
};

export const list = async ctx => {
  try {
    const posts = await Post.find().sort({ _id: -1}).limit(10).exec(); //'-1'은 내림차순, '1'은 오름차순
    ctx.body = posts;
  } catch(e) {
    ctx.throw(500, e);
  }
}

export const read = async ctx => {
  const { id } = ctx.params;

  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404; //Not Found;
      return;
    }

    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
}

export const remove = async ctx => {
  const { id } = ctx.params;

  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status=204; //No content (성공하기는 했지만 응답할 데이터는 없음)
  } catch(e) {
    ctx.throw(500,e);
  }
}

export const update = async ctx => {
  const { id } = ctx.params;

  const schema = Joi.object().keys({
    title:Joi.string(),
    body:Joi.string(),
    tags: Joi.array().items(Joi.string())
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new:true, //이 값은 업데이트된 데이터를 반환한다. false는 업데이트되기 이전의 데이터를 반환한다. 
    }).exec();

    if (!post) {
      ctx.status=404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
}