define [
  'views/base/view'
  'models/company/company-model'
  'text!templates/company/company-item-list-view.hbs'
], (BaseView, CompanyModel, template) ->
  'use strict'

  class CompanyItemView extends BaseView

    model: CompanyModel

    className: 'company-item-list__container'

    autoRender: true

    template: template

    template = null