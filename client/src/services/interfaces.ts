export interface CreateUserForm {
  name: string;
  username: string;
  email: string;
  profile: FileList;
  password: string;
  passwordConfirmation: string;
}

export interface User {
  id: number;
  firstName: string;
  createdAt: Date;
  lastName: string;
  email: string;
  username: string;
  profileImg: string;
  followers: number[]; // list of user id's
  following: number[]; // list of user id's
  postLikes: number[]; // list of post id's
}

// when we get the post object, must have the user avatar
export interface Posts {
  id: number;
  userId: number;
  firstName: string;
  lastName: string;
  username: string;
  profileImg: string;
  postImg: string;
  description: string;
  tags: string[];
  likes: number[]; // need array of strings to check if current user has liked this post
  comments: Comments[] | null;
}

interface Comments {
  id: number;
  userId: number;
  userName: string;
  userProfileImg: string;
  comment: string;
  createdAt: Date;
}
