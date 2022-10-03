module.exports = {
  handler: async function (request, reply) {
    if (!request.isAdmin) throw this.Boom.forbidden('onlyAminCanDoThis', { ndut: 'ndutAdmin' })
    const { handler } = await this.ndutRest.helper.modelAsUpdateRoute({ alias: request.params.model })
    return await handler.call(this, request, reply)
  },
  schema: {
    description: 'Update record by its ID',
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
