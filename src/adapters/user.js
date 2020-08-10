const parseUser = (rawUser) => {
  return {
    id: rawUser.id,
    name: rawUser.name,
    email: rawUser.email,
    avatar: rawUser.avatar_url,
    isSuper: rawUser.is_pro
  };
};

export {parseUser};
