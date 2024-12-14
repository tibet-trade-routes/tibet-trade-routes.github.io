// https://supercolorpalette.com/?scp=G0-hsl-FF57A5-FF57EB-CD57FF-8657FF-576DFF-57B3FF-57F9FF-57FFBE-57FF78-7BFF57-C1FF57-FFF757

const paths = [
  [
    'Silk Road',
    '#FF57A5',
    [
      [39.4677, 75.9938, 'Kashgar'],
      [38.4143, 77.2463, 'Yarkland'],
      [37.4422, 78.5742, 'Muji'],
      [37.1118, 79.9132, 'Khotan'],
      [37.0677, 82.6961, 'Niya'],
      [38.1333, 85.5333, 'Cherchen'],
      [39.0333, 88, 'Charklik'],
      [40.1422, 94.662, 'Dunhuang'],
      [39.745, 98.508, 'Suzhou'],
      [38.9439, 100.415, 'Ganzhou'],
      [37.9282, 102.642, 'Liangzhou'],
      [36.0614, 103.8342, 'Lanzhou']
    ]
  ],
  [
    'Silk Road',
    '#FF57A5',
    [
      [39.0333, 88, 'Charklik'],
      [36.3039, 98.0953, 'Dulan'],
      [36.6173, 101.7778, 'Xining'],
      [36.0614, 103.8342, 'Lanzhou']
    ]
  ],
  [
    'Lhasa to Xining',
    '#FF57EB',
    [
      [31.4761, 92.0514, 'Nakchu'],
      [34.1538, 97.4734, 'Waypoint1'],
      [36.6173, 101.7778, 'Xining']
    ]
  ],
  [
    'Derge to Xining',
    '#FF57EB',
    [
      [34.1538, 97.4734, 'Waypoint1'],
      [33.0166, 96.7333, 'Jyekundo'],
      [32.1692, 99.3576, 'Nianguxiang']
    ]
  ],
  [
    'Lhasa to Chamdo to Chengdu',
    '#CD57FF',
    [
      [29.6526, 91.1378, 'Lhasa'],
      [30.311, 91.5182, 'Reting'],
      [31.4761, 92.0514, 'Nakchu'],
      [31.8667, 93.7666, 'Sok'],
      [31.4151, 95.591, 'Tengchen'],
      [31.1407, 97.1723, 'Chamdo'],
      [31.808, 98.5786, 'Derge'],
      [32.1692, 99.3576, 'Nianguxiang'],
      [31.6344, 99.9852, 'Kanze'],
      [29.9985, 101.9569, 'Dartsedo'],
      [30.66, 104.0633, 'Chengdu']
    ]
  ],
  [
    'Lhasa to Chamdo to Dartsedo',
    '#8657FF',
    [
      [29.6526, 91.1378, 'Lhasa'],
      [29.7555, 91.477, 'Ganden'],
      [29.8817, 93.2486, 'Gyamda'],
      [30.6409, 93.2324, 'Lhari'],
      [30.7301, 95.6161, 'Shopamdo'],
      [31.1407, 97.1723, 'Chamdo'],
      [30.5763, 98.9747, 'Markham'],
      [30.0166, 99.1166, 'Batang'],
      [30.0166, 100.2666, 'Litang'],
      [29.9985, 101.9569, 'Dartsedo']
    ]
  ],
  [
    'Markham to Dali',
    '#576DFF',
    [
      [30.5763, 98.9747, 'Markham'],
      [29.0313, 98.6044, 'Tsakhalho'],
      [28.2, 98.9833, 'Dechen'],
      [26.8565, 100.2271, 'Lijiang'],
      [25.6065, 100.2676, 'Dali']
    ]
  ],
  [
    'Lhasa to Leh',
    '#576DFF',
    [
      [29.6526, 91.1378, 'Lhasa'],
      [28.9148, 89.6045, 'Gyantse'],
      [29.267, 88.8812, 'Shigatse'],
      [29.1153, 86.36, 'Chung Riwoche'],
      [29.3294, 85.2342, 'Saga'],
      [31.0675, 81.3119, 'Kailash'],
      [31.728, 80.3371, 'Gartok'],
      [34.1526, 77.5771, 'Leh'],
      [37.4422, 78.5742, 'Muji']
    ]
  ],
  [
    'Lhasa to Leh',
    '#576DFF',
    [
      [34.1526, 77.5771, 'Leh'],
      [34.5539, 76.1349, 'Kargil'],
      [34.0837, 74.7973, 'Srinagar']
    ]
  ],
  [
    'Lhasa to Leh',
    '#576DFF',
    [
      [34.5539, 76.1349, 'Kargil'],
      [35.3247, 75.551, 'Skardo']
    ]
  ],
  [
    'Gartok to Delhi to Patna',
    '#57FFBE',
    [
      [31.728, 80.3371, 'Gartok'],
      [31.105, 77.164, 'Simla'],
      [30.901, 75.8573, 'Ludhiana'],
      [28.7041, 77.1025, 'Delhi'],
      [25.5941, 85.1376, 'Patna']
    ]
  ],
  [
    'Kailash to Patna',
    '#57FFBE',
    [
      [31.0675, 81.3119, 'Kailash'],
      [30.2848, 81.1767, 'Purang'],
      [29.5878, 81.8823, 'Waypoint1'],
      [28, 81.3461, 'Waypoint2'],
      [25.5941, 85.1376, 'Patna']
    ]
  ],
  [
    'Chumbi Valley',
    '#57B3FF',
    [
      [28.9148, 89.6045, 'Gyantse'],
      [27.7182, 89.155, 'Phari'],
      [27.4861, 88.9071, 'Dromo'],
      [27.3325, 88.614, 'Gangtok'],
      [27.06, 88.47, 'Kalimpong'],
      [27.0375, 88.2631, 'Darjeeling'],
      [26.7283, 88.3954, 'Siliguri'],
      [22.5723, 88.3651, 'Calcutta']
    ]
  ],
  [
    'Lhasa to Kathmandu',
    '#57F9FF',
    [
      [29.1522, 87.6945, 'Lhatse'],
      [28.6597, 87.1239, 'Shelkar'],
      [28.1572, 85.9793, 'Nyanang'],
      [27.71, 85.32, 'Kathmandu'],
      [28.2083, 83.9889, 'Pokhara'],
      [29.183, 83.9566, 'Lo Mustang'],
      [29.6923, 84.2362, 'Boburang']
    ]
  ],
  [
    'Kathmandu to Patna',
    '#57F9FF',
    [
      [27.71, 85.32, 'Kathmandu'],
      [25.5941, 85.1376, 'Patna']
    ]
  ]
];

module.exports = paths;
