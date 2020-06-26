export default  {
  openapi: '3.0.0',
  info: {
    title: 'DVIC Passport API',
    description: 'Optional multi-line or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.',
    version: '1.0.0',
    tags: [
      'Skills'
    ]
  },
  components: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT'
    },
    schemas: {
      Skill: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'ID of the skill'
          },
          name: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          required_skills: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  description: 'ID of the skill'
                },
                name: {
                  type: 'string'
                },
                description: {
                  type: 'string'
                },
                required_skills: {
                  type: 'array',
                  items: {
                    type: 'string'
                  }
                }
              }
            }
          }
        }
      },
      User: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'ID of the skill'
          },
          login_name: {
            type: 'string'
          },
          owned_skills: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                level: {
                  type: 'integer'
                },
                skill_info: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      description: 'ID of the skill'
                    },
                    name: {
                      type: 'string'
                    },
                    description: {
                      type: 'string'
                    },
                    required_skills: {
                      type: 'array',
                      items: {
                        type: 'string'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      ArrayOfSkills: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/Skill'
        },
        minItems: 1
      }
    }
  },
  security: [
    {
      bearerAuth: []
    }
  ],
  servers: [
    {
      url: 'http://localhost:ENV_PORT/api/v1',
      description: 'Local'
    },
    {
      url: 'http://dvic-passport-api.herokuapp.com/api/v1',
      description: 'Staging'
    }
  ],
  paths: {
    '/skill': {
      get: {
        tags: [
          'Skills'
        ],
        summary: 'Returns all the skills.',
        
        responses: {
          '200': {
            description: 'A JSON array of user names',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ArrayOfSkills'
                }
              }
            }
          },
          '403': {
            description: 'Forbidden'
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ]
      },
      post: {
        tags: [
          'Skills'
        ],
        summary: 'Creates a new skill.',
        description: 'Request to create a new skill',
        parameters: [
          {
            'in': 'body',
            name: 'body',
            description: 'Pet object that needs to be added to the store',
            required: true,
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string'
                },
                description: {
                  type: 'string'
                },
                required_skills: {
                  type: 'array',
                  items: {
                    type: 'string'
                  },
                  required: false
                }
              }
            }
          }
        ],
        responses: {
          '200': {
            description: 'A JSON array of user names',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      description: 'ID of the skill'
                    },
                    name: {
                      type: 'string'
                    },
                    description: {
                      type: 'string'
                    },
                    required_skills: {
                      type: 'array',
                      items: {
                        type: 'string'
                      },
                      required: false
                    }
                  }
                }
              }
            }
          },
          '403': {
            description: 'Forbidden'
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ]
      }
    },
    '/skill/{skillId}': {
      get: {
        tags: [
          'Skills'
        ],
        summary: 'Returns a skill.',
        
        responses: {
          '200': {
            description: 'A JSON array of user names',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Skill'
                }
              }
            }
          },
          '403': {
            description: 'Forbidden'
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            'in': 'path',
            name: 'skillId',
            schema: {
              type: 'string'
            },
            required: true
          }
        ]
      },
      patch: {
        tags: [
          'Skills'
        ],
        summary: 'Edits a skill.',
        
        responses: {
          '200': {
            description: 'A JSON containing the operation details'
          },
          '403': {
            description: 'Forbidden'
          }
        },
        parameters: [
          {
            'in': 'path',
            name: 'skillId',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            'in': 'body',
            name: 'body',
            description: 'An objet with `Skill`\'s properties that will override the saved one.',
            required: true,
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  required: false
                },
                description: {
                  type: 'string',
                  required: false
                },
                required_skills: {
                  type: 'array',
                  items: {
                    type: 'string'
                  },
                  required: false
                }
              }
            }
          }
        ]
      },
      'delete': {
        tags: [
          'Skills'
        ],
        summary: 'Removes a skill.',
        responses: {
          '200': {
            description: 'A JSON containing the operation details'
          },
          '403': {
            description: 'Forbidden'
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            'in': 'path',
            name: 'skillId',
            schema: {
              type: 'string'
            },
            required: true
          }
        ]
      }
    },
    '/skill/{skillId}/user': {
      get: {
        tags: [
          'Skills'
        ],
        summary: 'Returns all users that have a certain skill.',
        responses: {
          '200': {
            description: 'A JSON array of user names',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items:{
                    $ref: '#/components/schemas/User'
                  }
                }
              }
            }
          },
          '403': {
            description: 'Forbidden'
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            'in': 'path',
            name: 'skillId',
            schema: {
              type: 'string'
            },
            required: true
          }
        ]
      }
    },
    '/skill/{skillId}/required-skill': {
      post: {
        tags: [
          'Skills'
        ],
        summary: 'Adds a required skill to a skill.',
        
        responses: {
          '200': {
            description: 'A JSON containing the operation details'
          },
          '403': {
            description: 'Forbidden'
          }
        },
        parameters: [
          {
            'in': 'path',
            name: 'skillId',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            'in': 'body',
            name: 'id',
            description: 'The id of the required skill you want to add.',
            required: true,
            schema: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  required: true
                }
              }
            }
          }
        ]
      },
      'delete': {
        tags: [
          'Skills'
        ],
        summary: 'Removes a required skill.',
        
        responses: {
          '200': {
            description: 'A JSON containing the operation details'
          }
        },
        parameters: [
          {
            'in': 'path',
            name: 'skillId',
            schema: {
              type: 'string'
            },
            required: true
          }
        ],
        security: [
          {
            bearerAuth: []
          }
        ]
      }
    },
    '/user/': {
      get: {
        tags: [
          'Users'
        ],
        summary: 'Returns a list of users.',
        responses: {
          '200': {
            description: 'A JSON array of user names',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/User'
                  }
                }
              }
            }
          },
          '403': {
            description: 'Forbidden'
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ]
      },
      post: {
        tags: [
          'Users'
        ],
        summary: 'Adds a new user.',
        responses: {
          '200': {
            description: 'A JSON array of user names',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/User'
                  }
                }
              }
            }
          },
          '403': {
            description: 'Forbidden'
          }
        },
        parameters: [
          {
            'in': 'body',
            name: 'body',
            schema: {
              type: 'object',
              properties: {
                login_name: {
                  type: 'string',
                  required: false
                },
                owned_skills: {
                  type: 'array',
                  required: false,
                  items: {
                    type: 'string'
                  }
                }
              }
            },
            required: true
          }
        ],
        security: [
          {
            bearerAuth: []
          }
        ]
      }
    },
    '/user/{userId}': {
      get: {
        tags: [
          'Users'
        ],
        summary: 'Gets the user with the userId corresponding.',
        parameters: [
          {
            'in': 'path',
            name: 'userId',
            schema: {
              type: 'string'
            },
            required: true
          }
        ],
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User'
                }
              }
            }
          },
          '403': {
            description: 'Forbidden'
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ]
      },
      'delete': {
        tags: [
          'Users'
        ],
        summary: 'Removes the user with the userId corresponding.',
        parameters: [
          {
            'in': 'path',
            name: 'userId',
            schema: {
              type: 'string'
            },
            required: true
          }
        ],
        responses: {
          '200': {
            description: 'A JSON containing the operation details'
          },
          '403': {
            description: 'Forbidden'
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ]
      },
      patch: {
        tags: [
          'Users'
        ],
        summary: 'Edits the user with the userId corresponding.',
        parameters: [
          {
            'in': 'path',
            name: 'userId',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            'in': 'body',
            schema: {
              type: 'object',
              properties: {
                login_name: {
                  type: 'string',
                  required: false
                },
                owned_skill: {
                  type: 'array',
                  items: {
                    type: 'string'
                  },
                  required: false
                }
              }
            }
          }
        ],
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User'
                }
              }
            }
          },
          '403': {
            description: 'Forbidden'
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ]
      }
    },
    '/user/{userId}/skill/{skillId}': {
      post: {
        tags: [
          'Skill attribution'
        ],
        summary: 'Adds an skill to the user with the skillId corresponding.',
        parameters: [
          {
            'in': 'path',
            name: 'userId',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            'in': 'path',
            name: 'skillId',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            'in': 'body',
            name: 'body',
            required: false,
            schema: {
              type: 'object',
              properties: {
                level: {
                  type: 'integer',
                  required: false,
                  example: 1
                }
              }
            }
          }
        ],
        responses: {
          '200': {
            description: 'A JSON containing the operation details'
          },
          '403': {
            description: 'Forbidden'
          }
        }
      },
      patch: {
        tags: [
          'Skill attribution'
        ],
        summary: 'Edits the user\'s skill with the skillId corresponding.',
        parameters: [
          {
            'in': 'path',
            name: 'userId',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            'in': 'path',
            name: 'skillId',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            'in': 'body',
            name: 'body',
            required: false,
            schema: {
              type: 'object',
              properties: {
                level: {
                  type: 'integer',
                  required: true,
                  example: 1
                }
              }
            }
          }
        ],
        responses: {
          '200': {
            description: 'A JSON containing the operation details'
          },
          '403': {
            description: 'Forbidden'
          }
        }
      },
      'delete': {
        tags: [
          'Skill attribution'
        ],
        summary: 'Removes the user\'s skill with the skillId corresponding.',
        parameters: [
          {
            'in': 'path',
            name: 'userId',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            'in': 'path',
            name: 'skillId',
            required: true,
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          '200': {
            description: 'A JSON containing the operation details'
          },
          '403': {
            description: 'Forbidden'
          }
        }
      }
    }
  }
}