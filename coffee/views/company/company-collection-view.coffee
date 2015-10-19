define [
  'views/base/collection-view'
  'views/company/company-item-list-view'
  'text!templates/company/company-list-view.hbs'
], (BaseCollectionView, CompanyItemListView, template) ->
  'use strict'

  class CompanyCollectionView extends BaseCollectionView

    tagName: 'div'

    id: 'carrers'

    listSelector: '#company-container'

    className: 'company-collection-view'

    autoRender: true

    renderItems: true

    itemView: CompanyItemListView

    template: template

    template = null



