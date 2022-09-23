module.exports = {
  handler: async function (request, reply) {
    if (!request.isAdmin) throw this.Boom.forbidden('onlyAminCanDoThis', { ndut: 'ndutAdmin' })
    const { handler } = await this.ndutRest.helper.modelAsCreateRoute({ model: request.params.model })
    return await handler.call(this, request, reply)
  },
  schema: {
    description: 'Create and persist records',
    tags: ['Admin'],
    body: {
      type: 'object'
    }
  }
}
