Steps to run:

1. clone the git repo   git clone https://github.com/rksahu17/JukeBox.git
2. get into the dir JukeBoxBackend and run npm install
3. then run npm nodemon server.js
4. Exported Postman JukeBox API collection


{
	"info": {
		"_postman_id": "6f38caeb-fab4-43cc-8d0a-c7b45efe448c",
		"name": "JukeBoxAPIs",
		"description": "# Introduction\nWhat does your API do?\n\n# Overview\nThings that the developers should know about\n\n# Authentication\nWhat is the preferred way of using the API?\n\n# Error Codes\nWhat errors and status codes can a user expect?\n\n# Rate limit\nIs there a limit to the number of requests an user can send?",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "http://localhost:5000/musicians/add",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\"name\":\"value\",\"musicianType\":\"value\"}"
				},
				"url": {
					"raw": "http://localhost:5000/musicians/add",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"musicians",
						"add"
					]
				},
				"description": "API to create music album records "
			},
			"response": [
				{
					"name": "Default",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:5000/musicians/add",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"musicians",
								"add"
							]
						}
					},
					"_postman_previewlanguage": null,
					"header": null,
					"cookie": [],
					"body": ""
				}
			]
		},
		{
			"name": "http://localhost:5000/musicalbums/add",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\"albumName\":\"value\",\"dateOfRelease\":\"value\",\"genre\":\"value\",\"price\":\"value\",\"description\":\"valuee\"}"
				},
				"url": {
					"raw": "http://localhost:5000/musicalbums/add",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"musicalbums",
						"add"
					]
				},
				"description": "API to create music album records "
			},
			"response": [
				{
					"name": "Default",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:5000/musicalbums/add",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"musicalbums",
								"add"
							]
						}
					},
					"_postman_previewlanguage": null,
					"header": null,
					"cookie": [],
					"body": ""
				}
			]
		},
		{
			"name": "http://localhost:5000/musicians/update/:id",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\"name\":\"value\",\"musicianType\":\"value\"}"
				},
				"url": {
					"raw": "http://localhost:5000/musicians/update/:id",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"musicians",
						"update",
						":id"
					],
					"variable": [
						{
							"key": "id"
						}
					]
				},
				"description": "API to update music album records "
			},
			"response": [
				{
					"name": "Default",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:5000/musicians/update/:id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"musicians",
								"update",
								":id"
							],
							"variable": [
								{
									"key": "id"
								}
							]
						}
					},
					"_postman_previewlanguage": null,
					"header": null,
					"cookie": [],
					"body": ""
				}
			]
		},
		{
			"name": "http://localhost:5000/musicalbums/update/:id",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\"albumName\":\"value\",\"dateOfRelease\":\"value\",\"genre\":\"value\",\"price\":\"value\",\"description\":\"valuee\"}"
				},
				"url": {
					"raw": "http://localhost:5000/musicalbums/update/:id",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"musicalbums",
						"update",
						":id"
					],
					"variable": [
						{
							"key": "id"
						}
					]
				},
				"description": "API to update music album records "
			},
			"response": [
				{
					"name": "Default",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:5000/musicalbums/update/:id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"musicalbums",
								"update",
								":id"
							],
							"variable": [
								{
									"key": "id"
								}
							]
						}
					},
					"_postman_previewlanguage": null,
					"header": null,
					"cookie": [],
					"body": ""
				}
			]
		},
		{
			"name": "http://localhost:5000/musicalbums/list/sortbydaterelease",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "http://localhost:5000/musicalbums/list/sortbydaterelease",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"musicalbums",
						"list",
						"sortbydaterelease"
					]
				},
				"description": "API to retrieve the list of Music albums sorted by Date of release in ascending order"
			},
			"response": [
				{
					"name": "Default",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:5000/musicalbums/list/sortbydaterelease",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"musicalbums",
								"list",
								"sortbydaterelease"
							]
						}
					},
					"_postman_previewlanguage": null,
					"header": null,
					"cookie": [],
					"body": ""
				}
			]
		},
		{
			"name": "http://localhost:5000/musicalbums/list/sortbyprice",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "http://localhost:5000/musicalbums/list/sortbyprice",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"musicalbums",
						"list",
						"sortbyprice"
					]
				},
				"description": "API to retrieve the list of Music albums for a musician sorted by Price in ascending order"
			},
			"response": [
				{
					"name": "Default",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:5000/musicalbums/list/sortbyprice",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"musicalbums",
								"list",
								"sortbyprice"
							]
						}
					},
					"_postman_previewlanguage": null,
					"header": null,
					"cookie": [],
					"body": ""
				}
			]
		},
		{
			"name": "http://localhost:5000/musicianinalbum/5feb1ae8a137841907e536df/sortbymusicianname",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "http://localhost:5000/musicianinalbum/5feb1ae8a137841907e536df/sortbymusicianname",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"musicianinalbum",
						"5feb1ae8a137841907e536df",
						"sortbymusicianname"
					]
				},
				"description": "API to retrieve the list of musicians for a music album sorted by musician's Name"
			},
			"response": [
				{
					"name": "Default",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:5000/musicianinalbum/5feb1ae8a137841907e536df/sortbymusicianname",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"musicianinalbum",
								"5feb1ae8a137841907e536df",
								"sortbymusicianname"
							]
						}
					},
					"_postman_previewlanguage": null,
					"header": null,
					"cookie": [],
					"body": ""
				}
			]
		}
	],
	"protocolProfileBehavior": {}
}