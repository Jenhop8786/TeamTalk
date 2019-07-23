class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :username, :user_id
end
