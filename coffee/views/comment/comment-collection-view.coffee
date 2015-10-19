define [
  'swiper'
  'views/base/collection-view'
  'views/comment/comment-item-list-view'
  'text!templates/comment/comment-list-view.hbs'
  'views/comment/comment-form-view'
], (Swiper, BaseCollectionView, CommentItemListView, template) ->
  'use strict'

  class CommentCollectionView extends BaseCollectionView

    initialize: ->
      super
      @subscribeEvent 'updateComments',  @addComment

    tagName: 'div'

    className: 'comment-list-container'

    id: 'comment-container'

    listSelector: '#comments-container'

    itemView: CommentItemListView

    autoRender: true

    renderItems: true

    template: template

    addComment: (comment) ->
      @collection.add(comment)

    template = null

