const userSlot = {
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null,
    },
  },
  render: (h, context) => {
    const params = {
      row: context.props.row,
      index: context.props.index,
    };
    if (context.props.column) params.column = context.props.column;
    return context.props.render(h, params);
  },
};
export default userSlot;
