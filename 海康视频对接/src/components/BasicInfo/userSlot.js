const userSlot = {
  functional: true,
  props: {
    data: Object,
    render: Function,
  },
  render: (h, context) => {
    const params = {
      data: context.props.data,
    };
    return context.props.render(h, params);
  },
};
export default userSlot;
