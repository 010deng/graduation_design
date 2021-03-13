'use strict';

const Controller = require('egg').Controller;

class VisitController extends Controller {
  constructor(ctx) {
    super(ctx);

    this.createRule = {
      name: 'string',
      phone: 'string',
      purpose: 'string',
      visit_date: 'date',
      require_description: 'string',
    };
  }

  // 获取单个id
  async show() {
    const { ctx } = this;

    ctx.body = await ctx.service.visit.show({
      id: ctx.params.id,
    });
  }

  async index() {
    const { ctx } = this;

    ctx.body = await ctx.service.visit.list();
  }

  // 来访录入
  async create() {
    const { ctx } = this;
    // ctx.validate(this.createRule);
    // todo 解决插入校验的问题
    const id = await ctx.service.visit.create(ctx.request.body);
    ctx.body = {
      insertId: id,
    };
    ctx.status = 201;
  }
}

module.exports = VisitController;
