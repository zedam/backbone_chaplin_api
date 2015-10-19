define [
  'models/base/model'
], (Model) ->
  'use strict'

  class CarouselModel extends Model
    defaults:
      image: ''
      image_2x: ''
      title: ''
      subtitle: ''
      action: ''
      action_url: ''