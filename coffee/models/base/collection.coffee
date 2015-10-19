define [
  'chaplin'
  'config'
  'backbone'
  'models/base/model'
], (Chaplin, Config, Backbone, Model) ->

  class Collection extends Chaplin.Collection
    # Mixin a synchronization state machine.
    # _(@prototype).extend Chaplin.SyncMachine
    # initialize: ->
    #   super
    #   @on 'request', @beginSync
    #   @on 'sync', @finishSync
    #   @on 'error', @unsync

    model: Model

    parse: (response) ->
      response.results

    sync: (method, collection, options) ->
      options = options || {}
      options.beforeSend = (xhr) ->
        @url = API_ROOT_URL + @url;
        xhr.setRequestHeader('Authorization', ('Token ' + 'fccb3a073f9e7e53e01838d4693d1302e5857cf3'))

      Backbone.sync.call(this, method, collection, options)
