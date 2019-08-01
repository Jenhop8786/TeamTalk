function() {
  attachListeners()


function showComments(comment) {
  return comment;
}



function Comment(comment) {
  this.id = comment.id
  this.content = comment.content
  this.user = comment.user.name
  this.user_id = comment.user.id
  this.time_ago_in_words = comment.created_at
}

}
