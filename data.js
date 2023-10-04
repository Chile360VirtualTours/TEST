var APP_DATA = {
  "scenes": [
    {
      "id": "0-habitacion",
      "name": "HABITACION",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.415604372587387,
        "pitch": 0.38039857187439274,
        "fov": 1.2989219527417935
      },
      "linkHotspots": [
        {
          "yaw": 0.40403361453141784,
          "pitch": 0.7828801269818566,
          "rotation": 0,
          "target": "2-pasillo2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pasillo",
      "name": "PASILLO",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.7343581804262804,
        "pitch": 0.4846723648958715,
        "fov": 1.2989219527417935
      },
      "linkHotspots": [
        {
          "yaw": -3.0787337118337508,
          "pitch": 0.8765005750668227,
          "rotation": 6.283185307179586,
          "target": "0-habitacion"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pasillo2",
      "name": "PASILLO2",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.4525467496820319,
        "pitch": -0.009278013948156527,
        "fov": 1.2989219527417935
      },
      "linkHotspots": [
        {
          "yaw": -3.0900766348816653,
          "pitch": 0.8833571383896253,
          "rotation": 0,
          "target": "0-habitacion"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "TESTT",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
