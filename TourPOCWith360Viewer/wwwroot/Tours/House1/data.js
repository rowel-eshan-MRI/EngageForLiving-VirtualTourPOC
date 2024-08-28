var APP_DATA = {
  "scenes": [
    {
      "id": "0-lebombo",
      "name": "lebombo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0503566786059366,
          "pitch": 0.15388213807692708,
          "rotation": 5.497787143782138,
          "target": "2-small_empty_house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-modern_bathroom",
      "name": "modern_bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2201797224440165,
          "pitch": 0.3227652861118173,
          "rotation": 0,
          "target": "2-small_empty_house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-small_empty_house",
      "name": "small_empty_house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1889506386710913,
          "pitch": 0.2169888644908422,
          "rotation": 7.0685834705770345,
          "target": "0-lebombo"
        },
        {
          "yaw": 2.616476240620832,
          "pitch": 0.26097871359371005,
          "rotation": 0,
          "target": "1-modern_bathroom"
        },
        {
          "yaw": 0.2207294358631522,
          "pitch": 0.2551817798101883,
          "rotation": 0,
          "target": "3-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-balcony",
      "name": "balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5102934710995477,
          "pitch": 0.1048174123979635,
          "rotation": 0,
          "target": "2-small_empty_house"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
