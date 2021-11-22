import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const { ObjectId } = mongoose.Types;

export const getPostById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad request
    return;
  }

  try {
    const post = await Post.findById(id);

    if (!post) {
      ctx.status = 404; //not found
      return;
    }

    ctx.state.post = post;
    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
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
    title, body, tags,
    user: ctx.state.user,
  })

  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e)
  }
};

/*
GET /api/posts\?username=&tag=&page=
*/
export const list = async ctx => {
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  const { tag, username } = ctx.query;

  const query = {
    ...(username ? { 'user.username': username} : {}),
    ...(tag ? { tags: tag } : {}),
  };

  try {
    const posts = await Post.find(query)
    .sort({ _id: -1}).limit(10).skip((page-1)* 10).lean().exec(); //'-1'은 내림차순, '1'은 오름차순
    const postCount = await Post.countDocuments(query).exec();//lean() 함수는 처음부터 json 형태로 데이터를 가져온다
    ctx.set('Last-Page', Math.ceil(postCount/10));
    ctx.body = posts//.map(post => post.toJSON())
    .map(post => ({
      ...post,
      body: post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
    }));//글자수가 200자 이상이면 ...을 붙인다. 
  } catch(e) {
    ctx.throw(500, e);
  }
}

export const read = async ctx => {
  ctx.body = ctx.state.post;  
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

export const checkOwnPost = (ctx, next) => {
  const { user, post } = ctx.state;
  if(post.user._id.toString() !== user._id) {
    ctx.status = 403;
    return;
  }

  return next();
}