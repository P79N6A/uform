"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@uform/react");

var _utils = require("../utils");

var _next = require("@alifd/next");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var UploadCard = _next.Upload.Card,
    UploadDragger = _next.Upload.Dragger;
var exts = [{
  ext: /\.docx?/i,
  icon: '//img.alicdn.com/tfs/TB1n8jfr1uSBuNjy1XcXXcYjFXa-200-200.png'
}, {
  ext: /\.pptx?/i,
  icon: '//img.alicdn.com/tfs/TB1ItgWr_tYBeNjy1XdXXXXyVXa-200-200.png'
}, {
  ext: /\.jpe?g/i,
  icon: '//img.alicdn.com/tfs/TB1wrT5r9BYBeNjy0FeXXbnmFXa-200-200.png'
}, {
  ext: /pdf/i,
  icon: '//img.alicdn.com/tfs/TB1GwD8r9BYBeNjy0FeXXbnmFXa-200-200.png'
}, {
  ext: /\.png/i,
  icon: '//img.alicdn.com/tfs/TB1BHT5r9BYBeNjy0FeXXbnmFXa-200-200.png'
}, {
  ext: /\.eps/i,
  icon: '//img.alicdn.com/tfs/TB1G_iGrVOWBuNjy0FiXXXFxVXa-200-200.png'
}, {
  ext: /\.ai/i,
  icon: '//img.alicdn.com/tfs/TB1B2cVr_tYBeNjy1XdXXXXyVXa-200-200.png'
}, {
  ext: /\.gif/i,
  icon: '//img.alicdn.com/tfs/TB1DTiGrVOWBuNjy0FiXXXFxVXa-200-200.png'
}, {
  ext: /\.svg/i,
  icon: '//img.alicdn.com/tfs/TB1uUm9rY9YBuNjy0FgXXcxcXXa-200-200.png'
}, {
  ext: /\.xlsx?/i,
  icon: '//img.alicdn.com/tfs/TB1any1r1OSBuNjy0FdXXbDnVXa-200-200.png'
}, {
  ext: /\.psd?/i,
  icon: '//img.alicdn.com/tfs/TB1_nu1r1OSBuNjy0FdXXbDnVXa-200-200.png'
}, {
  ext: /\.(wav|aif|aiff|au|mp1|mp2|mp3|ra|rm|ram|mid|rmi)/i,
  icon: '//img.alicdn.com/tfs/TB1jPvwr49YBuNjy0FfXXXIsVXa-200-200.png'
}, {
  ext: /\.(avi|wmv|mpg|mpeg|vob|dat|3gp|mp4|mkv|rm|rmvb|mov|flv)/i,
  icon: '//img.alicdn.com/tfs/TB1FrT5r9BYBeNjy0FeXXbnmFXa-200-200.png'
}, {
  ext: /\.(zip|rar|arj|z|gz|iso|jar|ace|tar|uue|dmg|pkg|lzh|cab)/i,
  icon: '//img.alicdn.com/tfs/TB10jmfr29TBuNjy0FcXXbeiFXa-200-200.png'
}, {
  ext: /\..+/i,
  icon: '//img.alicdn.com/tfs/TB10.R4r3mTBuNjy1XbXXaMrVXa-200-200.png'
}];

var testOpts = function testOpts(ext, options) {
  if (options && (0, _utils.isArr)(options.include)) {
    return options.include.some(function (url) {
      return ext.test(url);
    });
  }

  if (options && (0, _utils.isArr)(options.exclude)) {
    return !options.exclude.some(function (url) {
      return ext.test(url);
    });
  }

  return true;
};

var getImageByUrl = function getImageByUrl(url, options) {
  for (var i = 0; i < exts.length; i++) {
    if (exts[i].ext.test(url) && testOpts(exts[i].ext, options)) {
      return exts[i].icon;
    }
  }

  return url;
};

var normalizeFileList = function normalizeFileList(fileList) {
  if (fileList && fileList.length) {
    return fileList.map(function (file) {
      return _extends({
        name: file.name,
        downloadURL: file.downloadURL || file.imgURL
      }, file.response, {
        imgURL: getImageByUrl(file.imgURL, {
          exclude: ['.png', '.jpg', '.jpeg', '.gif']
        })
      });
    });
  }

  return [];
};

var shallowClone = function shallowClone(val) {
  return (0, _utils.isArr)(val) ? [].concat(val) : typeof val === 'object' ? _extends({}, val) : val;
};

(0, _react2.registerFormField)('upload', (0, _react2.connect)({
  getProps: _utils.mapStyledProps
})((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Uploader, _React$Component);

  function Uploader() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: (0, _utils.toArr)(_this.props.value)
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeHandler", function (fileList) {
      var onChange = _this.props.onChange;
      fileList = (0, _utils.toArr)(fileList);

      if (fileList.every(function (file) {
        return file.state === 'done' || file.imgURL || file.downloadURL;
      })) {
        fileList = normalizeFileList(fileList);

        _this.setState({
          value: fileList
        }, function () {
          onChange(fileList.length > 0 ? fileList : undefined);
        });
      } else {
        _this.setState({
          value: fileList
        });
      }
    });

    return _this;
  }

  var _proto = Uploader.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(preProps) {
    if (this.props.value && !(0, _utils.isEqual)(this.props.value, preProps.value)) {
      this.setState({
        value: this.props.value
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        listType = _this$props.listType,
        locale = _this$props.locale,
        onChange = _this$props.onChange,
        value = _this$props.value,
        others = _objectWithoutPropertiesLoose(_this$props, ["listType", "locale", "onChange", "value"]);

    if (listType.indexOf('card') > -1) {
      return _react.default.createElement(UploadCard, _extends({}, others, {
        value: shallowClone(this.state.value),
        onChange: this.onChangeHandler,
        listType: "card"
      }));
    }

    if (listType.indexOf('dragger') > -1) {
      return _react.default.createElement(UploadDragger, _extends({}, others, {
        value: shallowClone(this.state.value),
        onChange: this.onChangeHandler,
        listType: listType.indexOf('image') > -1 ? 'image' : 'text'
      }));
    }

    return _react.default.createElement(_next.Upload, _extends({}, others, {
      value: shallowClone(this.state.value),
      onChange: this.onChangeHandler,
      listType: listType
    }), _react.default.createElement(_next.Button, {
      style: {
        margin: '0 0 10px'
      }
    }, locale && locale.uploadText || '上传文件'));
  };

  return Uploader;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  action: '//www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload',
  listType: 'text',
  multiple: true
}), _temp)));