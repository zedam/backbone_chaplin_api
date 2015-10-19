define [
  'swiper'
  'views/base/collection-view'
  'views/carousel/carousel-item-list-view'
  'text!templates/carousel/carousel-list-view.hbs'
], (Swiper, BaseCollectionView, CarouselItemListView, template) ->
  'use strict'

  class CarouselCollectionView extends BaseCollectionView

    initialize: ->
      super
      @.on('render', @onRender);

    onRender: 'rendered'

    tagName: 'div'

    className: 'swiper-container'

    id: 'swiper-container'

    listSelector: '#swiper-wrapper'

    autoRender: true

    renderItems: true

    itemView: CarouselItemListView

    template: template

    template = null


    ###
    addProfile: (profile) ->
      @collection.add(profile)###



