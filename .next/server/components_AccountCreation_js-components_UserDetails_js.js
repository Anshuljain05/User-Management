exports.id = "components_AccountCreation_js-components_UserDetails_js";
exports.ids = ["components_AccountCreation_js-components_UserDetails_js"];
exports.modules = {

/***/ "./components/AccountCreation.js":
/*!***************************************!*\
  !*** ./components/AccountCreation.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\cursor\\Projects\\Greenie\\user-management\\components\\AccountCreation.js";



const AccountCreation = () => {
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: isFormValid,
    1: setIsFormValid
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: isSuccess,
    1: setIsSuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const handleSubmit = async event => {
    event.preventDefault();

    if (username && password) {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/users', {
          username,
          password
        }); // Handle the response from the server

        console.log(response.data);
        setIsSuccess(true); // Clear the form inputs

        setUsername('');
        setPassword('');
        setIsFormValid(false);
      } catch (error) {
        // Handle any errors that occur during the request
        console.error(error);
      }
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleInputChange = event => {
    const {
      name,
      value
    } = event.target;

    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }

    setIsFormValid(username && password);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "account-creation",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: ["Username:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          name: "username",
          value: username,
          onChange: handleInputChange,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: ["Password:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "password",
          name: "password",
          value: password,
          onChange: handleInputChange,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "submit",
        disabled: !isFormValid,
        value: "Create Account",
        style: {
          backgroundColor: isFormValid ? '#0070f3' : 'inherit',
          color: isFormValid ? 'white' : 'black',
          padding: '10px 20px',
          cursor: isFormValid ? 'pointer' : 'auto'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined), isSuccess && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "success-notification",
      children: "Account created successfully!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AccountCreation);

/***/ }),

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\cursor\\Projects\\Greenie\\user-management\\components\\Modal.js";
// components/Modal.js


const Modal = ({
  user,
  onClose
}) => {
  const {
    0: reportGenerated,
    1: setReportGenerated
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const handleReportGeneration = () => {
    // Here you would normally generate a report for the user
    console.log(`Report generated for user: ${user.username}`);
    setReportGenerated(true);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "modal",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: user.username
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), !reportGenerated ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: handleReportGeneration,
      children: "Generate Report"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Email: ", user.email]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Phone: ", user.phone]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["ID: ", user.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Creation Date: ", user.creationDate]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Report generated!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: onClose,
      children: "Close"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./components/UserDetails.js":
/*!***********************************!*\
  !*** ./components/UserDetails.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UserDetails; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./components/Modal.js");

var _jsxFileName = "F:\\cursor\\Projects\\Greenie\\user-management\\components\\UserDetails.js";
// components/UserDetails.js


function UserDetails() {
  const {
    0: users,
    1: setUsers
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: searchTerm,
    1: setSearchTerm
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: selectedUser,
    1: setSelectedUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetch('/api/users').then(response => response.json()).then(data => setUsers(data));
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleUserClick = user => {
    setSelectedUser(user);
  };

  const filteredUsers = users.filter(user => user.username.toLowerCase().includes(searchTerm.toLowerCase()));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "user-details",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      placeholder: "Search by username",
      value: searchTerm,
      onChange: handleSearch
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "Phone"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "Creation Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: filteredUsers.map(user => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          onClick: () => handleUserClick(user),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: user.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: user.email
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: user.phone
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: user.id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: user.creationDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, this)]
        }, user.id, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), selectedUser && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_2__.default, {
      user: selectedUser,
      onClose: () => setSelectedUser(null)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2VyLW1hbmFnZW1lbnQtZGFzaGJvYXJkLy4vY29tcG9uZW50cy9BY2NvdW50Q3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdXNlci1tYW5hZ2VtZW50LWRhc2hib2FyZC8uL2NvbXBvbmVudHMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdXNlci1tYW5hZ2VtZW50LWRhc2hib2FyZC8uL2NvbXBvbmVudHMvVXNlckRldGFpbHMuanMiXSwibmFtZXMiOlsiQWNjb3VudENyZWF0aW9uIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImlzRm9ybVZhbGlkIiwic2V0SXNGb3JtVmFsaWQiLCJpc1N1Y2Nlc3MiLCJzZXRJc1N1Y2Nlc3MiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJheGlvcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVJbnB1dENoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicGFkZGluZyIsImN1cnNvciIsIk1vZGFsIiwidXNlciIsIm9uQ2xvc2UiLCJyZXBvcnRHZW5lcmF0ZWQiLCJzZXRSZXBvcnRHZW5lcmF0ZWQiLCJoYW5kbGVSZXBvcnRHZW5lcmF0aW9uIiwiZW1haWwiLCJwaG9uZSIsImlkIiwiY3JlYXRpb25EYXRlIiwiVXNlckRldGFpbHMiLCJ1c2VycyIsInNldFVzZXJzIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWxlY3RlZFVzZXIiLCJzZXRTZWxlY3RlZFVzZXIiLCJmZXRjaCIsInRoZW4iLCJqc29uIiwiaGFuZGxlU2VhcmNoIiwiaGFuZGxlVXNlckNsaWNrIiwiZmlsdGVyZWRVc2VycyIsImZpbHRlciIsInRvTG93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c0JBQUtBLElBQUksQ0FBQy9CO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUEsc0JBQUsrQixJQUFJLENBQUNLO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQUEsc0JBQUtMLElBQUksQ0FBQ007QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGVBSUU7QUFBQSxzQkFBS04sSUFBSSxDQUFDTztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFLRTtBQUFBLHNCQUFLUCxJQUFJLENBQUNRO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRjtBQUFBLFdBQVNSLElBQUksQ0FBQ08sRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLEVBbUNHTyxZQUFZLGlCQUNYLDhEQUFDLDJDQUFEO0FBQU8sVUFBSSxFQUFFQSxZQUFiO0FBQTJCLGFBQU8sRUFBRSxNQUFNQyxlQUFlLENBQUMsSUFBRDtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUNELEMiLCJmaWxlIjoiY29tcG9uZW50c19BY2NvdW50Q3JlYXRpb25fanMtY29tcG9uZW50c19Vc2VyRGV0YWlsc19qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBBY2NvdW50Q3JlYXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzRm9ybVZhbGlkLCBzZXRJc0Zvcm1WYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzU3VjY2Vzcywgc2V0SXNTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICh1c2VybmFtZSAmJiBwYXNzd29yZCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS91c2VycycsIHtcclxuICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEhhbmRsZSB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0SXNTdWNjZXNzKHRydWUpO1xyXG5cclxuICAgICAgICAvLyBDbGVhciB0aGUgZm9ybSBpbnB1dHNcclxuICAgICAgICBzZXRVc2VybmFtZSgnJyk7XHJcbiAgICAgICAgc2V0UGFzc3dvcmQoJycpO1xyXG4gICAgICAgIHNldElzRm9ybVZhbGlkKGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBIYW5kbGUgYW55IGVycm9ycyB0aGF0IG9jY3VyIGR1cmluZyB0aGUgcmVxdWVzdFxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc1N1Y2Nlc3MpIHtcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRJc1N1Y2Nlc3MoZmFsc2UpO1xyXG4gICAgICB9LCAzMDAwKTtcclxuICBcclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICB9XHJcbiAgfSwgW2lzU3VjY2Vzc10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgIGlmIChuYW1lID09PSAndXNlcm5hbWUnKSB7XHJcbiAgICAgIHNldFVzZXJuYW1lKHZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3Bhc3N3b3JkJykge1xyXG4gICAgICBzZXRQYXNzd29yZCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXNGb3JtVmFsaWQodXNlcm5hbWUgJiYgcGFzc3dvcmQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtY3JlYXRpb25cIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgVXNlcm5hbWU6XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICBQYXNzd29yZDpcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyFpc0Zvcm1WYWxpZH1cclxuICAgICAgICAgIHZhbHVlPVwiQ3JlYXRlIEFjY291bnRcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Zvcm1WYWxpZCA/ICcjMDA3MGYzJyA6ICdpbmhlcml0JyxcclxuICAgICAgICAgICAgY29sb3I6IGlzRm9ybVZhbGlkID8gJ3doaXRlJyA6ICdibGFjaycsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDIwcHgnLFxyXG4gICAgICAgICAgICBjdXJzb3I6IGlzRm9ybVZhbGlkID8gJ3BvaW50ZXInOiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIHsvKiBSZW5kZXIgdGhlIHN1Y2Nlc3Mgbm90aWZpY2F0aW9uIGFuZCBjbG9zZSBidXR0b24gKi99XHJcbiAgICAgIHtpc1N1Y2Nlc3MgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VjY2Vzcy1ub3RpZmljYXRpb25cIj5cclxuICAgICAgICAgIEFjY291bnQgY3JlYXRlZCBzdWNjZXNzZnVsbHkhXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudENyZWF0aW9uOyIsIi8vIGNvbXBvbmVudHMvTW9kYWwuanNcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTW9kYWwgPSAoeyB1c2VyLCBvbkNsb3NlIH0pID0+IHtcclxuICBjb25zdCBbcmVwb3J0R2VuZXJhdGVkLCBzZXRSZXBvcnRHZW5lcmF0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXBvcnRHZW5lcmF0aW9uID0gKCkgPT4ge1xyXG4gICAgLy8gSGVyZSB5b3Ugd291bGQgbm9ybWFsbHkgZ2VuZXJhdGUgYSByZXBvcnQgZm9yIHRoZSB1c2VyXHJcbiAgICBjb25zb2xlLmxvZyhgUmVwb3J0IGdlbmVyYXRlZCBmb3IgdXNlcjogJHt1c2VyLnVzZXJuYW1lfWApO1xyXG4gICAgc2V0UmVwb3J0R2VuZXJhdGVkKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgIDxoMj57dXNlci51c2VybmFtZX08L2gyPlxyXG4gICAgICB7IXJlcG9ydEdlbmVyYXRlZCA/IChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlcG9ydEdlbmVyYXRpb259PkdlbmVyYXRlIFJlcG9ydDwvYnV0dG9uPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwPkVtYWlsOiB7dXNlci5lbWFpbH08L3A+XHJcbiAgICAgICAgICA8cD5QaG9uZToge3VzZXIucGhvbmV9PC9wPlxyXG4gICAgICAgICAgPHA+SUQ6IHt1c2VyLmlkfTwvcD5cclxuICAgICAgICAgIDxwPkNyZWF0aW9uIERhdGU6IHt1c2VyLmNyZWF0aW9uRGF0ZX08L3A+XHJcbiAgICAgICAgICA8cD5SZXBvcnQgZ2VuZXJhdGVkITwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xyXG4iLCIvLyBjb21wb25lbnRzL1VzZXJEZXRhaWxzLmpzXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyRGV0YWlscygpIHtcclxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NlbGVjdGVkVXNlciwgc2V0U2VsZWN0ZWRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goJy9hcGkvdXNlcnMnKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4gc2V0VXNlcnMoZGF0YSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gZXZlbnQgPT4ge1xyXG4gICAgc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVzZXJDbGljayA9IHVzZXIgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRVc2VyKHVzZXIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkVXNlcnMgPSB1c2Vycy5maWx0ZXIodXNlciA9PlxyXG4gICAgdXNlci51c2VybmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWRldGFpbHNcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IHVzZXJuYW1lXCJcclxuICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNofVxyXG4gICAgICAvPlxyXG4gICAgICA8dGFibGU+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+VXNlcm5hbWU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+RW1haWw8L3RoPlxyXG4gICAgICAgICAgICA8dGg+UGhvbmU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+SUQ8L3RoPlxyXG4gICAgICAgICAgICA8dGg+Q3JlYXRpb24gRGF0ZTwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge2ZpbHRlcmVkVXNlcnMubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXt1c2VyLmlkfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVc2VyQ2xpY2sodXNlcil9PlxyXG4gICAgICAgICAgICAgIDx0ZD57dXNlci51c2VybmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57dXNlci5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57dXNlci5waG9uZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57dXNlci5pZH08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57dXNlci5jcmVhdGlvbkRhdGV9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIHsvKiB7c2VsZWN0ZWRVc2VyICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgICAgICA8aDI+e3NlbGVjdGVkVXNlci51c2VybmFtZX08L2gyPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFVzZXIobnVsbCl9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9ICovfVxyXG4gICAgICB7c2VsZWN0ZWRVc2VyICYmIChcclxuICAgICAgICA8TW9kYWwgdXNlcj17c2VsZWN0ZWRVc2VyfSBvbkNsb3NlPXsoKSA9PiBzZXRTZWxlY3RlZFVzZXIobnVsbCl9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=