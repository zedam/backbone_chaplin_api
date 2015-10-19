define [
  'views/base/view'
  'text!templates/blog/blog-view.hbs'
], (BaseCollectionView, template) ->
  'use strict'

  class BlogView extends BaseCollectionView

    initialize: ->
      super

    className: 'blog__container'

    id: 'blog'

    autoRender: true

    template: template

    template = null



