class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :username
end
