define [
  'views/base/view'
  'text!templates/about/about-view.hbs'
], (BaseCollectionView, template) ->
  'use strict'

  class AboutView extends BaseCollectionView

    initialize: ->
      super

    className: 'about-container'

    id: 'about'

    autoRender: true

    template: template

    template = null



