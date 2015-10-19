define [
  'module'
  'models/base/collection'
  'models/carousel/carousel-model'
], (module, BaseCollection, CarouselModel) ->
  'use strict'

  class CarouselCollection extends BaseCollection

    model: CarouselModel

    url: 'carousel/'

