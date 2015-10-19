define [
  'models/base/model'
], (Model) ->
  'use strict'

  class CommentModel extends Model
    urlRoot: 'comments/'
    defaults:
      name: ''
      email: ''
      comment: ''