define [
  'swiper'
  'views/base/view'
  'models/comment/comment-model'
  'text!templates/comment/comment-item-list-view.hbs'
], (Swiper, BaseView, CommentModel, template) ->
  'use strict'

  class CommentItemView extends BaseView

    initialize: ->
      super

    model: CommentModel

    className: 'comment-item-list-view'

    autoRender: true

    template: template

    template = null
