define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "Home Page",
    "group": "Home",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apiUrl",
            "description": "<p>URL API DOCUMENTATION.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/index.js",
    "groupTitle": "Home",
    "name": "Get"
  },
  {
    "type": "get",
    "url": "/apidoc",
    "title": "Api DOCS",
    "group": "Home",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Html",
            "optional": false,
            "field": "URL",
            "description": "<p>API DOCUMENTATION.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/index.js",
    "groupTitle": "Home",
    "name": "GetApidoc"
  },
  {
    "type": "get",
    "url": "/secret",
    "title": "Secret resource!",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message for the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/index.js",
    "groupTitle": "User",
    "name": "GetSecret"
  },
  {
    "type": "post",
    "url": "/signin",
    "title": "Signin",
    "name": "Signin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users unique email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT Token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "Signup",
    "name": "Signup",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users unique email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT Token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/index.js",
    "groupTitle": "User"
  }
] });
