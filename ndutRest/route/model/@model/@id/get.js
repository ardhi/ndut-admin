module.exports = {
  handler: async function (request, reply) {
    if (!request.isAdmin) throw this.Boom.forbidden('onlyAminCanDoThis', { ndut: 'ndutAdmin' })
    const { handler } = await this.ndutRest.helper.modelAsGetRoute({ alias: request.params.model })
    return await handler.call(this, request, reply)
  },
  schema: {
    description: 'Get record by its ID',
    tags: ['Admin'],
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'Record ID'
        }
      }
    }
  }
}
