define [
  'views/base/view'
  'models/comment/comment-model'
  'text!templates/comment/comment-form-view.hbs'
], (BaseView, CommentModel, template) ->
  'use strict'

  class CommentView extends BaseView

    initialize: ->
      super
      @delegateEvents 'submit': @submitForm

    animationDuration: 2000

    autoRender: true

    id: 'blog'

    className: 'comment__container'

    submitForm: (e) ->
      e.preventDefault()

      # form validation should be integrated here
      if $('#form-name').val() != '' && $('#form-email').val() != '' && $('#form-comment').val() != ''
        @model = new CommentModel
          name: $('#form-name').val()
          email: $('#form-email').val()
          comment: $('#form-comment').val()
        @model.save()

      else
        # Method to be improved with any notification system #
        alert('Please fill all the fields')

      @publishEvent 'updateComments', @model

    template: template
    template = null