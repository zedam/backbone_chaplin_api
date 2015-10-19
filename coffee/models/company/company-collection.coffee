define [
  'module'
  'models/base/collection'
  'models/company/company-model'
], (module, BaseCollection, CompanyModel) ->
  'use strict'

  class CompanyCollection extends BaseCollection

    model: CompanyModel

    url: 'company/'
