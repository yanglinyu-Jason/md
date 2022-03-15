export default class MethodsPlugin {
  static install(Vue) {
    Vue.prototype.openAppModule = (fromObj, fromId, openFormDialog) => {
      console.log(fromObj, fromId);
      openFormDialog(
        {
          module: fromObj.module,
          app: fromObj.id,
          form: fromId,
        },
        {
          title: fromObj.title,
        },
      );
    };
  }
}
