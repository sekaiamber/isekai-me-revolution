import React from 'react';
import './../common/g.scss';
import Corner from './../common/corner';
import connect from '../dispatch';
import reducers from './reducers';

import './index.scss';

class Index extends React.Component {
  componentDidMount() {
    const update = () => {
      this.props.dispatch({
        type: 'updateZhangsuTable',
      });
      this.props.dispatch({
        type: 'updateZhangfuTable',
      });
      this.props.dispatch({
        type: 'checkZhangsu',
      });
    };
    setInterval(update, 1000);
    update();
  }
  render() {
    const { tableZhangsu, tableZhangfu, selectedId } = this.props;
    return (
      <div style={{ height: '100%' }} >
        <Corner />
        <p>准备工作：<br />
        </p>
        <ol>
          <li>chrome浏览器</li>
          <li>安装<a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US" target="_blank" rel="noopener noreferrer">这个插件</a></li>
          <li>在插件中允许跨域策略</li>
        </ol>
        <div className="modal fade" id="detailModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal100 modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">{selectedId}</h4>
              </div>
              <div className="modal-body">
                {selectedId.length > 0 && (
                  <iframe className="modaliframe" src={`http://stockpage.10jqka.com.cn/${selectedId}/`} frameBorder="0" />
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        {tableZhangsu && tableZhangsu.head && [
          <p key="p1">
            涨速，上次更新{tableZhangsu.time.getHours()}:{tableZhangsu.time.getMinutes()}:{tableZhangsu.time.getSeconds()}
          </p>,
          <table key="t1" className="table table-striped">
            <thead>
              <tr>
                { tableZhangsu.head.map((h, i) => <th key={i}>{h}</th>) }
              </tr>
            </thead>
            <tbody>
              {tableZhangsu.body.map((r, i) => (
                <tr key={i} className={parseFloat(r[4]) > 9 ? 'danger' : ''}>
                  { r.map((d, j) => <td key={j}>{d}</td>) }
                </tr>
              ))}
            </tbody>
          </table>,
        ]}
        {tableZhangfu && tableZhangfu.head && [
          <p key="p2">
            涨幅，上次更新{tableZhangfu.time.getHours()}:{tableZhangfu.time.getMinutes()}:{tableZhangfu.time.getSeconds()}
          </p>,
          <table key="t2" className="table table-striped">
            <thead>
              <tr>
                { tableZhangfu.head.map((h, i) => <th key={i}>{h}</th>) }
              </tr>
            </thead>
            <tbody>
              {tableZhangfu.body.map((r, i) => (
                <tr key={i}>
                  { r.map((d, j) => <td key={j}>{d}</td>) }
                </tr>
              ))}
            </tbody>
          </table>,
        ]}
      </div>
    );
  }
}

export default connect(({ tableZhangsu, tableZhangfu, selectedId }) => ({
  tableZhangsu,
  tableZhangfu,
  selectedId,
}), {
  tableZhangsu: {},
  tableZhangfu: {},
  selectedId: '',
}, reducers)(Index);
