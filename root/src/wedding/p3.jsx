import React from 'react';
import invitation from '../../assets/images/wedding/invitation.png';

export default class P3 extends React.Component {
  render() {
    return (
      <div className="p3">
        <h1>请帖方案（暂定）</h1>
        <div className="invitation">
          <div className="left">
            <img src={invitation} alt="invitation" />
          </div>
          <div className="right">
            <p>
              <a href={invitation} target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-info btn-lg">下载原始图片</button></a>
            </p>
            <h2>信封</h2>
            <p>
              <img src="https://img.alicdn.com/imgextra/i1/216279225/TB2nMhzrVXXXXcmXXXXXXXXXXXX_!!216279225.jpg" alt="" />
              <img src="https://img.alicdn.com/imgextra/i3/216279225/TB29kBIrVXXXXccXXXXXXXXXXXX_!!216279225.jpg" alt="" />
            </p>
            <p>
              <a href="https://item.taobao.com/item.htm?spm=a1z09.2.0.0.mVAnqL&id=528368115134&_u=4kr3vp1957" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-info">购买地址</button></a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
