define [
  'handlebars'
  'chaplin'
  'lib/view-helper' # Just load the view helpers, no return value
], (Handlebars, Chaplin) ->
  'use strict'

  class View extends Chaplin.View

    constructor: (options = {}) ->
      super
      @render = _.wrap @render, (render) =>
        @beforeRender()
        render()
        @afterRender()
        @

    beforeRender: () =>
      @

    render: () =>
      super

    afterRender: () =>

      setTimeout ->
        # CSS animations executed after rendering,
        # JS could be done instead like GreenSockJS Library
        $('.animated').each () ->
          $(@).on 'inview', (event, isInView, visiblePartX, visiblePartY) ->
            if (isInView)
              if (visiblePartY == 'top')
              else if (visiblePartY == 'bottom')
              else
                $(@).addClass('animated-loaded')
      , 100
      @


    getTemplateFunction: ->
      # Template compilation
      # --------------------

      # This demo uses Handlebars templates to render views.
      # The template is loaded with Require.JS and stored as string on
      # the view prototype. On rendering, it is compiled on the
      # client-side. The compiled template function replaces the string
      # on the view prototype.
      #
      # In the end you might want to precompile the templates to JavaScript
      # functions on the server-side and just load the JavaScript code.
      # Several precompilers create a global JST hash which stores the
      # template functions. You can get the function by the template name:
      #
      # templateFunc = JST[@templateName]

      template = @template

      if typeof template is 'string'
        # Compile the template string to a function and save it
        # on the prototype. This is a workaround since an instance
        # shouldn’t change its prototype normally.
        templateFunc = Handlebars.compile template
        @constructor::template = templateFunc
      else
        templateFunc = template

      templateFunc
