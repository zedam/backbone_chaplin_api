define [
  'swiper'
  'views/base/view'
  'models/carousel/carousel-model'
  'text!templates/carousel/carousel-item-list-view.hbs'
], (Swiper, BaseView, CarouselModel, template) ->
  'use strict'

  class CarouselItemView extends BaseView

    initialize: ->
      super

    model: CarouselModel

    className: 'swiper-slide'

    autoRender: true

    autoAttach: true

    afterRender: ->
      setTimeout () ->
        new Swiper '.swiper-container', {
          direction: 'horizontal'
          autoplay: 6000
          parallax: true
          loop: false
          paginationClickable: true
          keyboardControl: true
          pagination: '.swiper-pagination'
          nextButton: '.swiper-button-next'
          prevButton: '.swiper-button-prev'
        }
      , 100

    template: template

    template = null
