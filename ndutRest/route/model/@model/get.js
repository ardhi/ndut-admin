module.exports = {
  handler: async function (request, reply) {
    if (!request.isAdmin) throw this.Boom.forbidden('onlyAminCanDoThis', { ndut: 'ndutAdmin' })
    const { handler } = await this.ndutRest.helper.modelAsFindRoute({ alias: request.params.model })
    return await handler.call(this, request, reply)
  },
  schema: {
    description: 'Get records. Use query string to filter, sort and pagination',
    tags: ['Admin']
  }
}
