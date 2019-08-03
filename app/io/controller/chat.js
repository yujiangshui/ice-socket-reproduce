'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    async disconnect() {
      const message = this.ctx.args[0];
      console.log(message);
    }
  }
  return Controller;
};

module.exports.ping = async function() {
  const message = this.args[0];
  await this.socket.emit('res', `Hi! I've got your message: ${message}`);
};
