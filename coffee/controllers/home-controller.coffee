define [
  'chaplin'
  'controllers/base/controller'
  'models/carousel/carousel-collection'
  'views/carousel/carousel-collection-view'
  'models/company/company-collection'
  'views/company/company-collection-view'
  'models/comment/comment-collection'
  'views/comment/comment-collection-view'
  'views/comment/comment-form-view'
], (Chaplin, Controller, CarouselCollection, CarouselCollectionView, CompanyCollection, CompanyCollectionView, CommentCollection, CommentCollectionView, CommentFormView) ->
  'use strict'

  class ProfileController extends Controller

    beforeAction: ->
      super
      @reuse 'carouselCollection',
        compose: ->
          @item = new CarouselCollection
          @item.fetch()
      @reuse 'companyCollection',
        compose: ->
          @item = new CompanyCollection
          @item.fetch()
      @reuse 'commentCollection',
        compose: ->
          @item = new CommentCollection
          @item.fetch()

    index: ->
      @carouselView = new CarouselCollectionView collection: @reuse('carouselCollection'), region: 'top'
      @companyView = new CompanyCollectionView collection: @reuse('companyCollection'), region: 'main'
      @commentFormView = new CommentFormView region: 'main'
      @commentView = new CommentCollectionView collection: @reuse('commentCollection'), region: 'main'

