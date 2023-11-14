(function() {
var exports = {};
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "./pages/api/users.js":
/*!****************************!*\
  !*** ./pages/api/users.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next */ "next");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_0__);
// pages/api/users.js
 // Placeholder user data

const users = [{
  id: 1,
  username: 'user1',
  email: 'user1@example.com',
  phone: '1234567890',
  creationDate: '2021-01-01'
}, {
  id: 2,
  username: 'user2',
  email: 'user2@example.com',
  phone: '0987654321',
  creationDate: '2021-02-01'
} // Add more users as needed
];

const generateRandomPhoneNumber = () => {
  const randomNumber = Math.floor(Math.random() * 10000000000);
  const phoneNumber = randomNumber.toString().padStart(10, '0');
  return phoneNumber;
};

function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    // Handle POST request
    const {
      username,
      password
    } = req.body;

    if (!username || !password) {
      res.status(400).json({
        message: 'Username and password are required'
      });
      return;
    } // In a real application, you would add the new user to the database here


    const newUser = {
      id: users.length + 1,
      username,
      email: `${username}@example.com`,
      phone: generateRandomPhoneNumber(),
      creationDate: new Date().toISOString().slice(0, 10)
    };
    users.push(newUser);
    res.status(201).json(newUser);
  } else {
    // Handle unsupported HTTP methods
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

/***/ }),

/***/ "next":
/*!***********************!*\
  !*** external "next" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/users.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2VyLW1hbmFnZW1lbnQtZGFzaGJvYXJkLy4vcGFnZXMvYXBpL3VzZXJzLmpzIiwid2VicGFjazovL3VzZXItbWFuYWdlbWVudC1kYXNoYm9hcmQvZXh0ZXJuYWwgXCJuZXh0XCIiXSwibmFtZXMiOlsidXNlcnMiLCJpZCIsInVzZXJuYW1lIiwiZW1haWwiLCJwaG9uZSIsImNyZWF0aW9uRGF0ZSIsImdlbmVyYXRlUmFuZG9tUGhvbmVOdW1iZXIiLCJyYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwaG9uZU51bWJlciIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsInBhc3N3b3JkIiwiYm9keSIsIm1lc3NhZ2UiLCJuZXdVc2VyIiwibGVuZ3RoIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJwdXNoIiwic2V0SGVhZGVyIiwiZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FJQTs7QUFDQSxNQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFRLEVBQUUsT0FBbkI7QUFBNEJDLE9BQUssRUFBRSxtQkFBbkM7QUFBd0RDLE9BQUssRUFBRSxZQUEvRDtBQUE2RUMsY0FBWSxFQUFFO0FBQTNGLENBRFksRUFFWjtBQUFFSixJQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFRLEVBQUUsT0FBbkI7QUFBNEJDLE9BQUssRUFBRSxtQkFBbkM7QUFBd0RDLE9BQUssRUFBRSxZQUEvRDtBQUE2RUMsY0FBWSxFQUFFO0FBQTNGLENBRlksQ0FHWjtBQUhZLENBQWQ7O0FBTUEsTUFBTUMseUJBQXlCLEdBQUcsTUFBTTtBQUNwQyxRQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsV0FBM0IsQ0FBckI7QUFDQSxRQUFNQyxXQUFXLEdBQUdKLFlBQVksQ0FBQ0ssUUFBYixHQUF3QkMsUUFBeEIsQ0FBaUMsRUFBakMsRUFBcUMsR0FBckMsQ0FBcEI7QUFDQSxTQUFPRixXQUFQO0FBQ0QsQ0FKSDs7QUFNZSxTQUFTRyxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDeEMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEI7QUFDQUQsT0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJuQixLQUFyQjtBQUNELEdBSEQsTUFHTyxJQUFJZSxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUNoQztBQUNBLFVBQU07QUFBRWYsY0FBRjtBQUFZa0I7QUFBWixRQUF5QkwsR0FBRyxDQUFDTSxJQUFuQzs7QUFDQSxRQUFJLENBQUNuQixRQUFELElBQWEsQ0FBQ2tCLFFBQWxCLEVBQTRCO0FBQzFCSixTQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRyxlQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNBO0FBQ0QsS0FOK0IsQ0FPaEM7OztBQUNBLFVBQU1DLE9BQU8sR0FBRztBQUNkdEIsUUFBRSxFQUFFRCxLQUFLLENBQUN3QixNQUFOLEdBQWUsQ0FETDtBQUVkdEIsY0FGYztBQUdkQyxXQUFLLEVBQUcsR0FBRUQsUUFBUyxjQUhMO0FBSWRFLFdBQUssRUFBRUUseUJBQXlCLEVBSmxCO0FBS2RELGtCQUFZLEVBQUUsSUFBSW9CLElBQUosR0FBV0MsV0FBWCxHQUF5QkMsS0FBekIsQ0FBK0IsQ0FBL0IsRUFBaUMsRUFBakM7QUFMQSxLQUFoQjtBQU9BM0IsU0FBSyxDQUFDNEIsSUFBTixDQUFXTCxPQUFYO0FBQ0FQLE9BQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSSxPQUFyQjtBQUNELEdBakJNLE1BaUJBO0FBQ0w7QUFDQVAsT0FBRyxDQUFDYSxTQUFKLENBQWMsT0FBZCxFQUF1QixDQUFDLEtBQUQsRUFBUSxNQUFSLENBQXZCO0FBQ0FiLE9BQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JZLEdBQWhCLENBQXFCLFVBQVNmLEdBQUcsQ0FBQ0UsTUFBTyxjQUF6QztBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7QUMzQ0Qsa0MiLCJmaWxlIjoicGFnZXMvYXBpL3VzZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL3VzZXJzLmpzXHJcblxyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcblxyXG4vLyBQbGFjZWhvbGRlciB1c2VyIGRhdGFcclxuY29uc3QgdXNlcnMgPSBbXHJcbiAgeyBpZDogMSwgdXNlcm5hbWU6ICd1c2VyMScsIGVtYWlsOiAndXNlcjFAZXhhbXBsZS5jb20nLCBwaG9uZTogJzEyMzQ1Njc4OTAnLCBjcmVhdGlvbkRhdGU6ICcyMDIxLTAxLTAxJyB9LFxyXG4gIHsgaWQ6IDIsIHVzZXJuYW1lOiAndXNlcjInLCBlbWFpbDogJ3VzZXIyQGV4YW1wbGUuY29tJywgcGhvbmU6ICcwOTg3NjU0MzIxJywgY3JlYXRpb25EYXRlOiAnMjAyMS0wMi0wMScgfSxcclxuICAvLyBBZGQgbW9yZSB1c2VycyBhcyBuZWVkZWRcclxuXTtcclxuXHJcbmNvbnN0IGdlbmVyYXRlUmFuZG9tUGhvbmVOdW1iZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwMCk7XHJcbiAgICBjb25zdCBwaG9uZU51bWJlciA9IHJhbmRvbU51bWJlci50b1N0cmluZygpLnBhZFN0YXJ0KDEwLCAnMCcpO1xyXG4gICAgcmV0dXJuIHBob25lTnVtYmVyO1xyXG4gIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAvLyBIYW5kbGUgR0VUIHJlcXVlc3RcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXJzKTtcclxuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgLy8gSGFuZGxlIFBPU1QgcmVxdWVzdFxyXG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG4gICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnVXNlcm5hbWUgYW5kIHBhc3N3b3JkIGFyZSByZXF1aXJlZCcgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIEluIGEgcmVhbCBhcHBsaWNhdGlvbiwgeW91IHdvdWxkIGFkZCB0aGUgbmV3IHVzZXIgdG8gdGhlIGRhdGFiYXNlIGhlcmVcclxuICAgIGNvbnN0IG5ld1VzZXIgPSB7XHJcbiAgICAgIGlkOiB1c2Vycy5sZW5ndGggKyAxLFxyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgZW1haWw6IGAke3VzZXJuYW1lfUBleGFtcGxlLmNvbWAsXHJcbiAgICAgIHBob25lOiBnZW5lcmF0ZVJhbmRvbVBob25lTnVtYmVyKCksXHJcbiAgICAgIGNyZWF0aW9uRGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApLFxyXG4gICAgfTtcclxuICAgIHVzZXJzLnB1c2gobmV3VXNlcik7XHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbihuZXdVc2VyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gSGFuZGxlIHVuc3VwcG9ydGVkIEhUVFAgbWV0aG9kc1xyXG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCcsICdQT1NUJ10pO1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==