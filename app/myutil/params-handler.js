'use strict'
module.exports = {
  offsetFormat: (params,defaultLimt) => {
    let result = {}
    const pagesize = (params.pagesize !== undefined) ? parseInt(params.pagesize) : parseInt(defaultLimt)
    const currentPage = (params.page !== undefined) ? params.page : 1
    const sortRule = (params.sortRule !==undefined) ? parseInt(params.sortRule) : parseInt(-1)
    result.skipCount = (currentPage - 1) * pagesize
    result.pagesize = pagesize
    result.sortRule = sortRule
    return result
  }
}