Array.prototype.myFilter = function (cb, obj) {
  let result = [];
  let context = this;

  if (obj) {
    context = obj;
  }

  for (let i = 0; i < context.length; i++) {
    if (i in context) {
      el = context[i];
      if (cb.call(context, el, i, context)) {
        result.push(el);
      }
    }
  }
  return result;
};
