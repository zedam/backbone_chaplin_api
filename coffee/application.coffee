define [
  'chaplin'
], (Chaplin) ->
  'use strict'

  # The application object.
  # Choose a meaningful name for your application.
  class Application extends Chaplin.Application
    title: 'Element Website'

    # start: ->
    #   # You can fetch some data here and start app
    #   # (by calling `super`) after that.
    #   super