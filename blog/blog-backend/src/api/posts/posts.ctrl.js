import Post from '../../models/post';

export const write = async ctx => {
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
    const posts = await Post.find().exec();
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