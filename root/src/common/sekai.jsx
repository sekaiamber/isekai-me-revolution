const React = require('react');

const imgstatic = require('./../../assets/images/static.gif');
const img1 = require('./../../assets/images/1.gif');
const img2 = require('./../../assets/images/2.gif');
const img3 = require('./../../assets/images/3.gif');
const img4 = require('./../../assets/images/4.gif');
const img5 = require('./../../assets/images/5.gif');
const img6 = require('./../../assets/images/6.gif');
const img7 = require('./../../assets/images/7.gif');
const img8 = require('./../../assets/images/8.gif');

const imgs = [img1, img2, img3, img4, img5, img6, img7, img8];

export default class Sekai extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
    };
  }
  componentDidMount() {
    const func = () => {
      setTimeout(() => {
        this.setState({
          imgIndex: (this.state.imgIndex + 1) % 16,
        }, func);
      }, 2000 - ((this.state.imgIndex % 2) * 1000));
    };
    func();
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <svg
        className="sekai" version="1.1" id="svg1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 1229.846 362.801" width="770px" height="230px"
      >
        <pattern id="svgp-static" patternUnits="objectBoundingBox" width="1" height="1">
          <image xlinkHref={imgstatic} x="0" y="0" width="1200" height="380" preserveAspectRatio="none" />
        </pattern>
        {
          imgs.map((img, i) =>
            <pattern key={`svgp-${i}`} id={`svgp-${i}`} patternUnits="objectBoundingBox" width="1" height="1">
              <image xlinkHref={imgs[i]} x="0" y="0" width="1200" height="380" preserveAspectRatio="none" />
            </pattern>
          )
        }
        <path d="M1180.065,95.473l0.018-0.019c3.213-3.481,8.868-5.477,15.516-5.477h14.248V56.554h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656V53.43h-0.656v-0.625h-0.656V52.18h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656V37.81h-0.656v-0.625h-0.656V36.56h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-153.318v33.424h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625H1048v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h1.035v164.935c0,15.702-1.307,18.727-4.079,21.5c-3.798,3.797-9.098,5.723-15.752,5.723h-3.721c-0.258-0.742-0.522-1.502-0.794-2.292L954.433,56.554h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.435l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.435l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.435l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.435l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.435l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.435l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.435l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.435l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.435l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.435l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.435l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.435l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.435l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.435l-0.22-0.625h-0.436l-0.22-0.625h-0.436l-0.22-0.625h-0.435l-0.22-0.625h-0.436l-0.22-0.625h-47.367l-69.322,199.089c-8.607,24.648-18.204,40.996-29.384,50.012c-5.508,4.507-9.066,6.262-15.733,7.354l-76.165-123.677l19.742-22.805c16.031-18.562,23.906-25.314,34.538-32.647c4.225-2.925,9.1-5.533,15.344-8.208l0.104-0.046c6.433-2.859,9.042-3.426,17.446-3.792l8.131-0.354V56.554h-0.656v-0.625H777v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656V53.43h-0.656v-0.625h-0.656V52.18h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625H760.6v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656V37.81h-0.656v-0.625h-0.656V36.56h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625H622.332v6.873h-0.255v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625H461.788v17.202c-0.111-0.105-0.234-0.196-0.348-0.298c-0.213-0.214-0.431-0.423-0.656-0.625c-0.213-0.214-0.431-0.423-0.656-0.625c-0.213-0.214-0.431-0.423-0.656-0.625c-0.213-0.214-0.431-0.423-0.656-0.625c-0.213-0.214-0.431-0.423-0.656-0.625c-0.213-0.214-0.431-0.423-0.656-0.625c-0.213-0.214-0.431-0.423-0.656-0.625c-0.213-0.214-0.431-0.423-0.656-0.625c-0.213-0.214-0.431-0.423-0.656-0.625c-0.213-0.214-0.431-0.423-0.656-0.625c-0.213-0.214-0.431-0.422-0.655-0.624c-0.213-0.214-0.431-0.423-0.656-0.625c-0.213-0.214-0.431-0.423-0.656-0.625c-0.213-0.214-0.431-0.423-0.656-0.625c-0.213-0.214-0.431-0.423-0.656-0.625c-0.213-0.214-0.431-0.423-0.656-0.625c-0.213-0.214-0.431-0.423-0.656-0.625c-0.213-0.214-0.431-0.423-0.656-0.625c-3.717-3.727-9.176-5.658-16.293-5.658H212.15v3.659h-0.345v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656V23.35h-0.656v-0.625h-0.656V22.1h-0.656v-0.625h-0.656V20.85h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-31.21l-9.056,23.973l-0.037,0.099c-0.06,0.166-0.119,0.316-0.175,0.454c-0.548-0.242-1.256-0.59-2.14-1.085c-16.551-11.166-19.874-12.901-31.451-16.467c-8.192-2.72-16.523-4.099-24.763-4.099c-48.037,0-81.586,34.9-81.586,84.871c0,20.596,6.218,41.483,17.062,57.319c4.307,6.453,9.056,12.072,14.987,17.401c0.183,0.175,0.367,0.35,0.552,0.524c0.218,0.209,0.436,0.417,0.656,0.625c0.217,0.208,0.435,0.417,0.656,0.625c0.217,0.208,0.435,0.417,0.656,0.624c0.218,0.209,0.436,0.418,0.657,0.625c0.217,0.208,0.435,0.417,0.656,0.625c0.218,0.209,0.436,0.418,0.657,0.626c0.217,0.208,0.434,0.417,0.655,0.624c0.217,0.208,0.435,0.417,0.655,0.624c0.218,0.209,0.437,0.419,0.658,0.627c0.217,0.208,0.434,0.416,0.655,0.623c0.217,0.208,0.435,0.417,0.655,0.624c0.218,0.209,0.437,0.419,0.659,0.627c0.217,0.208,0.434,0.416,0.654,0.623c0.217,0.208,0.435,0.417,0.655,0.624c0.218,0.209,0.437,0.419,0.658,0.627c0.217,0.208,0.434,0.416,0.654,0.623c0.218,0.209,0.436,0.418,0.658,0.626c0.217,0.208,0.434,0.416,0.654,0.622c0.218,0.209,0.436,0.418,0.657,0.626c0.218,0.209,0.436,0.418,0.657,0.626c0.217,0.208,0.434,0.416,0.654,0.623c0.218,0.209,0.436,0.418,0.657,0.626c0.218,0.209,0.436,0.418,0.657,0.626c0.217,0.208,0.435,0.417,0.655,0.624c0.218,0.209,0.436,0.417,0.656,0.625c0.217,0.208,0.435,0.417,0.655,0.624c0.218,0.209,0.435,0.417,0.656,0.625c0.218,0.209,0.436,0.417,0.656,0.625c0.217,0.208,0.435,0.417,0.656,0.625c0.217,0.208,0.435,0.417,0.656,0.624c0.218,0.209,0.435,0.418,0.656,0.625c0.218,0.209,0.435,0.417,0.656,0.625c0.218,0.209,0.436,0.418,0.657,0.626c0.217,0.208,0.434,0.417,0.655,0.624c0.217,0.208,0.435,0.417,0.655,0.624c0.218,0.209,0.437,0.419,0.658,0.627c0.217,0.208,0.434,0.417,0.655,0.624c0.217,0.208,0.435,0.417,0.655,0.624c0.218,0.209,0.437,0.419,0.658,0.627c0.217,0.208,0.434,0.416,0.654,0.623c0.218,0.209,0.436,0.418,0.657,0.625c0.217,0.208,0.435,0.417,0.656,0.625c0.217,0.208,0.435,0.417,0.656,0.624c0.218,0.209,0.436,0.418,0.658,0.626c0.105,0.1,0.206,0.202,0.312,0.302c11.481,11.551,27.493,21.285,55.019,34.256c8.322,3.869,15.425,7.389,21.49,10.649c0.354,1.948,0.497,3.945,0.497,6.031c0,16.288-13.264,26.812-33.792,26.812c-6.709,0-14.382-1.185-22.338-4.679c-3.01-5.005-5.915-10.639-8.659-17.021c-5.826-13.593-8.185-21.726-12.623-43.514l-1.386-6.803h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529L53.324,188h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625h-0.529l-0.127-0.625H14.242v138.537h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h31.608l9.834-25.879c0.007-0.017,0.013-0.033,0.02-0.049c0.011,0.011,0.023,0.022,0.034,0.034l0.362,0.362l0.403,0.315c22.375,17.55,45.415,26.448,68.478,26.448c24.788,0,47.215-9.129,63.149-25.706c0.469-0.488,0.911-1.001,1.367-1.5h0.349v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h226.117c6.066,0,12.76-1.301,17.618-5.829v0.205h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h153.729v-2.499h0.33v0.625h0.656v0.625h0.656v0.625h0.656v0.625h259.25v-13.745h0.43v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h285.12v-33.424h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656V311.5h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-1.035V117.61C1175.356,101.369,1177.145,98.618,1180.065,95.473z M450.975,165.224h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h33.366l-2.537-88.368h0.321v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h1.035v164.935c0,1.627-0.015,3.111-0.043,4.48v-35.726h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625H475.9v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656V199.3h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-29.777V147.73h0.17l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567l0.089,0.625h0.567L450.975,165.224z M365.733,90.385c0.534-0.25,2.351-0.818,7.857-0.818c7.039,0,13.3,0.265,18.9,0.818H365.733z M365.714,98.885c0,5.413-0.289,10.363-0.87,14.886V98.312c0-5.762,0.599-7.464,0.816-7.892c0.015-0.008,0.036-0.017,0.054-0.026V98.885z M417.631,107.879h-0.371v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625H410.7v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.236c4.133,0.697,7.842,1.605,11.197,2.733C413.764,98.493,415.859,103.118,417.631,107.879z M365.716,241.962l0.185,8.311h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.642l0.014,0.625h0.208c-1.547,0.979-3.114,1.912-4.719,2.75c-5.311,2.747-11.295,4.762-18.194,6.093v-53.58C365.324,230.385,365.57,235.392,365.716,241.962z M614.675,105.122c0.74-5.569,2.13-7.505,3.994-9.528c2.41-2.37,5.421-3.99,8.986-4.861L614.675,105.122z M614.072,232.587l2.255-2.471l20.27,34.772c5.043,8.927,5.444,11.103,5.444,13.018c0,3.495-4.086,4.229-7.514,4.229h-16.712v2.499h-0.33v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-1.445V232.587z M918.37,274.211c0,2.572,0,7.924-13.672,7.924h-13.427v13.745h-0.43v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-0.656v-0.625h-8.236c0.206-0.74,0.42-1.477,0.638-2.205l3.318-9.699h45.102C918.219,272.1,918.37,273.544,918.37,274.211z M214.862,184.951c-0.218-0.209-0.436-0.418-0.656-0.625c-0.218-0.209-0.436-0.418-0.656-0.625c-0.218-0.209-0.436-0.417-0.656-0.625c-0.218-0.21-0.437-0.418-0.657-0.626c-0.217-0.209-0.436-0.417-0.655-0.624c-0.217-0.209-0.436-0.417-0.655-0.624c-0.218-0.21-0.438-0.419-0.658-0.627c-0.217-0.209-0.436-0.417-0.655-0.624c-0.217-0.209-0.436-0.417-0.655-0.624c-0.218-0.21-0.438-0.419-0.658-0.627c-0.217-0.209-0.436-0.417-0.655-0.624c-0.218-0.209-0.436-0.418-0.656-0.625c-0.218-0.209-0.436-0.417-0.656-0.625c-0.218-0.209-0.436-0.418-0.656-0.625c-0.218-0.21-0.437-0.418-0.657-0.626c-0.217-0.209-0.435-0.416-0.654-0.623c-0.218-0.21-0.437-0.418-0.657-0.626c-0.218-0.21-0.437-0.418-0.657-0.626c-0.217-0.209-0.435-0.416-0.654-0.623c-0.218-0.21-0.438-0.419-0.658-0.627c-0.217-0.209-0.436-0.417-0.655-0.624c-0.217-0.209-0.436-0.417-0.655-0.624c-0.218-0.21-0.438-0.419-0.658-0.627c-0.217-0.209-0.436-0.417-0.655-0.624c-0.218-0.209-0.436-0.418-0.656-0.625c-0.218-0.209-0.436-0.418-0.656-0.625c-0.218-0.209-0.436-0.417-0.656-0.625c-0.218-0.21-0.437-0.418-0.657-0.626c-0.217-0.209-0.435-0.416-0.654-0.623c-0.218-0.21-0.437-0.418-0.657-0.626c-0.218-0.21-0.437-0.418-0.657-0.626c-0.217-0.209-0.436-0.417-0.655-0.624c-0.217-0.209-0.436-0.417-0.655-0.624c-0.218-0.21-0.438-0.419-0.658-0.627c-0.217-0.209-0.436-0.417-0.655-0.624c-0.218-0.209-0.436-0.418-0.656-0.625c-0.218-0.209-0.436-0.417-0.656-0.625c-0.218-0.209-0.436-0.418-0.656-0.625c-0.218-0.209-0.436-0.418-0.656-0.625c-0.218-0.209-0.436-0.417-0.656-0.625c-0.218-0.209-0.436-0.418-0.656-0.625c-0.218-0.21-0.437-0.418-0.657-0.626c-0.217-0.209-0.435-0.416-0.654-0.623c-0.218-0.21-0.438-0.419-0.658-0.627c-0.217-0.209-0.436-0.417-0.655-0.624c-0.217-0.209-0.436-0.417-0.655-0.624c-0.218-0.21-0.438-0.419-0.658-0.627c-0.217-0.209-0.436-0.417-0.655-0.624c-0.217-0.209-0.436-0.417-0.655-0.624c-0.218-0.21-0.438-0.419-0.658-0.627c-2.925-2.814-6.037-5.449-9.336-7.88l-0.015-0.012c-13.495-9.896-28.989-19.139-45.981-27.437c-8.658-4.329-15.799-7.964-21.724-11.071c0.945-12.803,12.649-22.26,27.974-22.26c7.004,0,14.187,1.685,21.069,4.784c5.094,8.777,8.437,18.761,12.315,36.339l1.471,6.669h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h0.518l0.138,0.625h32.164v-86.6h0.345v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h0.656v0.625h1.035v164.935c0,6.682-0.238,11.063-0.723,14.111c0.159-2.409,0.265-4.836,0.265-7.293C246.181,231.221,234.89,203.848,214.862,184.951z" />
        <path className={'sekai-inner svgp-' + (this.state.imgIndex / 2)} fill="#FFFFFF" d="M167.585,152.835c-12.318-9.033-27.1-18.066-44.755-26.689c-40.239-20.119-49.272-25.868-55.431-34.49c-2.875-3.695-4.517-9.033-4.517-14.371c0-18.477,16.013-32.437,36.543-32.437c18.066,0,36.954,9.444,50.504,25.046c13.55,16.424,18.477,26.689,24.636,54.61H191.4V25.138h-16.834l-6.98,18.477c-1.643,4.517-4.106,6.57-6.98,6.57c-2.053,0-4.927-1.232-7.801-2.875c-16.424-11.086-18.887-12.318-29.563-15.603c-7.391-2.464-14.782-3.695-22.172-3.695c-43.113,0-73.086,31.206-73.086,76.371c0,18.888,5.748,38.186,15.603,52.557c11.497,17.245,27.1,28.332,62.822,45.166c46.808,21.762,60.358,34.49,60.358,56.252c0,20.94-16.834,35.312-42.292,35.312c-30.795,0-55.842-20.53-72.266-58.716c-6.159-14.371-8.623-22.993-13.139-45.166H22.644v121.537h17.245l7.801-20.53c2.053-4.927,3.695-6.57,6.98-6.57c1.642,0,4.517,1.232,6.98,3.695c20.94,16.424,41.881,24.636,63.232,24.636c46.397,0,79.245-34.08,79.245-82.53C204.128,198.411,190.989,170.08,167.585,152.835z M413.123,259.18c-7.801,9.854-16.834,17.245-26.278,22.172c-11.907,6.159-26.689,9.033-45.987,9.033c-14.371,0-18.066-2.875-18.066-14.371V177.06c24.226,0.411,36.543,7.801,44.755,27.51c4.927,11.497,6.159,18.888,6.57,37.365h16.834V99.046h-16.834c0,41.06-16.424,60.769-51.325,61.589V66.609c0-13.96,2.875-17.245,17.246-17.245c27.92,0,44.755,4.106,56.663,13.55c14.781,11.497,27.51,32.848,32.848,55.431c0.821,3.285,1.643,7.801,2.463,13.55h17.246l-2.464-85.815c-0.411-9.033-4.106-12.729-13.55-12.729h-212.69v16.424h6.159c9.033,0,16.835,3.285,21.762,8.212c5.338,6.159,6.57,11.497,6.57,27.921v169.167c0,16.013-1.232,22.172-6.57,27.51c-5.337,5.337-12.729,8.212-21.762,8.212h-6.159v16.424h217.617c11.086,0,16.013-4.927,16.013-16.834v-89.921h-16.013C432.421,230.027,427.494,241.935,413.123,259.18z M1140.284,57.986c4.927-5.338,12.729-8.212,21.762-8.212h5.748V33.351h-136.319v16.424h6.159c9.033,0,16.835,3.285,21.762,8.212c5.338,6.159,6.57,11.497,6.57,27.921v169.167c0,16.013-1.231,22.172-6.57,27.51c-5.337,5.337-12.729,8.212-21.762,8.212h-5.748c-10.265-0.411-14.781-1.643-20.119-5.338c-9.444-6.57-11.908-10.676-20.12-34.49L914.866,33.351h-35.312l-67.338,193.392c-9.033,25.868-19.298,43.523-32.026,53.789c-7.73,6.324-13.071,8.436-23.451,9.687c-14.35-2.096-20.453-7.511-31.565-25.29l-86.226-140.014l23.815-27.51c15.603-18.066,24.225-25.868,36.133-34.08c5.337-3.695,11.086-6.57,16.834-9.033c7.391-3.285,11.086-4.106,20.53-4.517V33.351H630.735v16.424h8.212c11.086,0,17.245,5.338,17.245,13.96c0,6.159-2.874,11.497-12.318,21.762l-71.854,79.656V85.907c0-16.424,1.642-22.172,6.98-27.921c5.338-5.338,12.729-8.212,21.762-8.212h6.159V33.351H470.191v16.424h6.159c9.033,0,16.835,3.285,21.762,8.212c5.338,6.159,6.57,11.497,6.57,27.921v169.167c0,16.013-1.232,22.172-6.57,27.51c-5.337,5.337-12.729,8.212-21.762,8.212h-6.159v16.424H606.92v-16.424h-6.159c-9.033,0-16.834-2.875-21.762-8.212c-5.338-5.749-6.98-11.497-6.98-27.51V197.59l21.351-23.404l50.503,86.637c5.338,9.443,6.57,13.139,6.57,17.245c0,7.801-6.159,12.729-16.014,12.729h-8.212v16.424h124.818h10.679h106.752v-16.424c-16.424,0-23.404-2.053-31.616-9.033c-7.391-6.159-11.497-14.371-11.497-22.994c0-4.517,1.232-9.033,2.464-13.139l5.337-15.603h81.709l9.444,31.205c1.642,5.338,2.463,10.676,2.463,13.14c0,10.675-7.801,16.424-22.172,16.424h-4.927v16.424h131.802h0.411h135.908v-16.424h-5.748c-9.443,0-17.245-2.875-21.762-8.212c-5.338-5.749-6.98-11.497-6.98-27.51V85.907C1133.304,69.483,1134.946,63.735,1140.284,57.986z M840.958,206.212l34.901-98.543l31.206,98.543H840.958z" />
      </svg>
    );
  }
}
