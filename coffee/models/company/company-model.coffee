define [
  'models/base/model'
], (Model) ->
  'use strict'

  class CompanyModel extends Model
    defaults:
      name: ''
      website: ''
      logo: ''
      logo_2x: ''