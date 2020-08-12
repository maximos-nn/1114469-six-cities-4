const parseComments = (rawComments) => {
  return rawComments.map((comment) => ({
    id: comment.id,
    date: comment.date,
    comment: comment.comment,
    rating: comment.rating,
    user: {
      id: comment.user.id,
      name: comment.user.name,
      avatar: comment.user.avatar_url,
      isSuper: comment.user.is_pro
    }
  }));
};

export {parseComments};
