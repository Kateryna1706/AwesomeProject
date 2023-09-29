export const selectPosts = (state) => state.posts.items;

export const selectPostsComments = (state) => state.posts.items.comments;

export const selectIsLoading = (state) => state.posts.isLoading;

export const selectError = (state) => state.posts.error;
