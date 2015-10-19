define [
  'module'
  'models/base/collection'
  'models/comment/comment-model'
], (module, BaseCollection, CommentModel) ->
  'use strict'

  class CommentCollection extends BaseCollection

    model: CommentModel

    url: 'comments/'

