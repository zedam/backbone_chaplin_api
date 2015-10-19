define [
  'chaplin'
], (Chaplin) ->

  class Model extends Chaplin.Model
    # Mixin a synchronization state machine.
    # _.extend @prototype, Chaplin.SyncMachine
    # initialize: ->
    #   super
    #   @on 'request', @beginSync
    #   @on 'sync', @finishSync
    #   @on 'error', @unsync

    # Place your application-specific model features here.

    sync: (method, collection, options) ->
      options = options || {}
      options.beforeSend = (xhr) ->
        xhr.setRequestHeader('Authorization', ('Token ' + 'fccb3a073f9e7e53e01838d4693d1302e5857cf3'))

      Backbone.sync.call(this, method, collection, options)
