//          stuff(1)
//      home(0)
// about(2)   contact(3)
const pagePosition = [
  [0, 0], // home
  [1, -1], // stuff
  [-1, 1], // about
  [1, 1], // contact
];
const initState = {
  activeMenu: 0,
  activePage: 0,
  maskTarget: pagePosition[0],
};

const reducers = {
  changePage({ payload }, { setState }) {
    setState({
      activeMenu: payload,
      maskTarget: pagePosition[payload],
    });
  },
  activePage(_, { getState, setState }) {
    const activeMenu = getState(state => state.activeMenu);
    setState({
      activeMenu: 0,
      activePage: activeMenu,
    });
  },
};

export {
  initState,
  reducers,
};
