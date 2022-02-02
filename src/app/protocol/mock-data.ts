import {ClientData, StageUpdateData, Waypoints} from './type-definitions'

export const DEFAULT_DATA: StageUpdateData = {
  time: 0,
  carData: {
    positionData: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      velocity: [0, 0, 0],
    },
    inputData: {
      clutchInput: 0,
      throttleInput: 0,
      steeringInput: 0,
      brakeInput: 0,
      handbrakeInput: 0,
      tcsTriggered: false,
      espTriggered: false,
      absTriggered: false,
    },
    brakeData: {
      temperatureBack: 0,
      temperatureFront: 0,
    },
    drivetrain: {
      velocity: 0,
      wheelTireVelocity: 0,
      rpm: 0,
      canStall: false,
      isStalling: false,
      torque: 0,
      clutch: 0,
      canShiftAgain: true,
      currentGearRatio: 0,
      currentPower: 0,
      gear: 1,
      isChangingGear: false,
      shiftTriggered: false,
      throttle: 0,
    },
  },
}

export const MOCK_WAYPOINTS: Waypoints = [
  [-485.001_16, 4.525_985_72, 611.3586],
  [-473.0044, 4.684_509_28, 595.296_265],
  [-460.838_257, 4.848_854, 579.1419],
  [-448.845_337, 5.011_291_5, 563.234],
  [-436.555_542, 5.176_483, 546.884_46],
  [-424.4983, 5.336_067, 530.7507],
  [-412.437_744, 5.492_164_61, 514.48],
  [-400.357_422, 5.643_844_6, 498.006_775],
  [-388.641_632, 5.785_24, 481.815_735],
  [-376.824_249, 5.920_578, 465.2104],
  [-365.395_63, 6.042_427, 448.811_279],
  [-353.930_145, 6.152_824_4, 431.913_33],
  [-342.9113, 6.243_103, 415.0785],
  [-332.064_331, 6.309_196_47, 397.6493],
  [-322.222_778, 6.335_144, 380.555_542],
  [-313.083_923, 6.297_943, 362.393_677],
  [-305.352_234, 6.173_362_73, 343.645_142],
  [-299.0484, 5.963_684, 324.427_429],
  [-294.158_02, 5.678_161_62, 305.022_461],
  [-290.441_956, 5.318_451, 285.011_169],
  [-287.809_631, 4.906_517, 264.9734],
  [-285.912_262, 4.461_975, 244.9042],
  [-284.231_14, 4.016_395_57, 224.873_413],
  [-281.816_681, 3.626_098_63, 204.953_217],
  [-278.807_831, 3.443_817_14, 191.459_656],
  [-277.0366, 3.378_852_84, 185.208_466],
  [-272.4255, 3.294_189_45, 172.131_073],
  [-269.9792, 3.293_029_79, 166.317_139],
  [-266.304_932, 3.344_062_81, 157.081_543],
  [-267.436, 3.373_153_69, 146.3133],
  [-276.007_568, 3.281_532_29, 140.847_656],
  [-280.736_42, 3.237_556_46, 139.463_074],
  [-295.824_982, 3.117_843_63, 136.203_613],
  [-300.498_047, 3.092_620_85, 134.999_023],
  [-311.316_345, 3.082_176_21, 130.071_35],
  [-314.505_066, 3.210_136_41, 121.798_065],
  [-311.809_357, 3.536_789, 107.833_466],
  [-310.272_43, 3.690_475_46, 102.193_97],
  [-308.184_54, 3.959_724_43, 93.214_78],
  [-309.171_265, 4.929_580_69, 73.618_255_6],
  [-311.2542, 5.548_431_4, 57.493_59],
  [-315.0769, 5.755_409_24, 37.575_012_2],
  [-318.221_466, 5.699_051, 17.381_897],
  [-317.889_465, 5.654_716_49, 8.570_633],
  [-316.3191, 5.662_491, -1.584_899_9],
  [-318.727_875, 5.499_878, -7.899_597],
  [-325.4386, 5.198_868, -15.535_156_3],
  [-332.5494, 4.893_196, -27.771_698],
  [-336.501_221, 4.670_883, -36.956_01],
  [-341.5047, 4.100_075, -53.739_013_7],
  [-341.081_024, 3.504_852_29, -67.798_72],
  [-339.8572, 2.979_255_68, -79.844_79],
  [-339.898_682, 2.542_228_7, -90.029_63],
  [-344.850_128, 2.186_805_73, -99.325_87],
  [-354.8644, 2.131_652_83, -101.748_047],
  [-369.017_151, 2.223_304_75, -101.347_664],
  [-379.1046, 2.322_731, -101.121_651],
  [-391.499_451, 2.427_116_39, -103.387_192],
  [-405.527_771, 2.494_720_46, -112.414_894],
  [-411.279_053, 2.523_758, -117.600_815],
  [-422.410_278, 2.585_197_45, -129.843_384],
  [-427.823, 2.619_903_56, -137.144_211],
  [-436.477_051, 2.684_539_79, -151.304_459],
  [-439.8039, 2.713_760_38, -158.246_338],
  [-445.7268, 2.777_282_71, -173.813_492],
  [-447.7174, 2.807_800_29, -181.270_859],
  [-449.489_136, 2.865_676_88, -194.8796],
  [-446.134_583, 2.918_365_48, -206.865_417],
  [-441.959_045, 2.967_735_29, -217.895_767],
  [-441.125_244, 3.031_700_13, -232.006_042],
  [-446.5548, 3.085_342_41, -245.6425],
  [-451.823_364, 3.112_098_69, -254.470_352],
  [-459.889_465, 3.147_758_48, -266.5081],
  [-465.7884, 3.176_139_83, -274.973_267],
  [-473.816_04, 3.225_387_57, -286.7585],
  [-479.107_056, 3.274_238_59, -295.317_139],
  [-484.681_641, 3.372_619_63, -307.005_829],
  [-486.053_04, 3.548_263_55, -317.871_948],
  [-480.9063, 3.961_135_86, -332.594_879],
  [-478.0097, 4.153_724_67, -339.1723],
  [-476.787_964, 4.363_708_5, -349.759_583],
  [-478.7135, 4.424_476_62, -356.279_968],
  [-486.5985, 4.478_668, -370.815_369],
  [-490.9496, 4.481_186, -377.680_725],
  [-498.9358, 4.474_716, -392.020_477],
  [-501.708_13, 4.487_625, -405.060_76],
  [-500.742_92, 4.489_464, -412.627_625],
  [-494.999_023, 4.482_330_32, -427.926_666],
  [-491.079_163, 4.495_987, -434.742_249],
  [-483.060_73, 4.584_099, -447.048_523],
  [-478.9203, 4.670_471, -453.604_279],
  [-470.112_427, 4.892_746, -467.659_973],
  [-465.628_174, 5.012_359_62, -473.677_826],
  [-454.487_061, 5.295_677, -484.054_718],
  [-442.272_766, 5.562_057_5, -487.378_632],
  [-434.291_87, 5.710_319_52, -486.326_752],
  [-418.594_666, 5.981_170_65, -481.413_666],
  [-411.107_483, 6.107_452_39, -478.078_369],
  [-396.590_454, 6.357_307_43, -470.263_824],
  [-389.860_352, 6.480_011, -465.900_665],
  [-376.957_916, 6.742_424, -455.8195],
  [-367.191_62, 6.920_479, -443.899_384],
  [-363.016_876, 6.925_857_54, -435.5979],
  [-358.0905, 6.934_227, -421.465_485],
  [-355.6463, 7.026_771_55, -412.486_969],
  [-351.690_063, 7.432_335, -398.003_937],
  [-346.786_56, 8.402_481, -383.1733],
  [-344.4204, 9.3517, -374.6084],
  [-340.852_051, 11.368_850_7, -359.515_839],
  [-338.856_934, 12.579_940_8, -351.0406],
  [-334.696_716, 14.637_123_1, -336.002_655],
  [-331.721_771, 15.540_885_9, -328.058_533],
  [-322.6996, 16.404_083_3, -312.6957],
  [-310.2967, 15.000_190_7, -301.226_532],
  [-304.233_032, 13.897_209_2, -296.976_471],
  [-289.791_473, 10.978_530_9, -288.837_982],
  [-282.962_036, 9.595_627, -285.907_44],
  [-267.074_615, 6.766_617, -281.165_466],
  [-259.0276, 5.846_924, -280.310_547],
  [-248.059_57, 5.559_219_36, -281.485_382],
  [-239.222_046, 6.260_513_31, -285.049_835],
  [-227.205_688, 8.146_149, -293.358_368],
  [-220.139_526, 9.4758, -299.851_166],
  [-210.006_775, 11.166_984_6, -310.4359],
  [-202.4231, 11.847_938_5, -318.816_437],
  [-193.464_264, 11.826_873_8, -330.7845],
  [-189.196_167, 11.427_558_9, -339.1038],
  [-183.076_385, 10.494_69, -352.948_181],
  [-179.2876, 9.832_596, -361.250_977],
  [-171.927_673, 8.708_305, -374.447_235],
  [-166.417_786, 8.102_531, -381.4571],
  [-152.600_769, 7.245_682, -392.2544],
  [-144.5177, 7.034_195, -395.740_967],
  [-129.6859, 6.816_528_32, -400.285_828],
  [-121.058_334, 6.746_978_76, -402.237_244],
  [-105.854_95, 6.673_225_4, -404.9557],
  [-96.796_57, 6.649_276_73, -406.193_085],
  [-81.724_624_6, 6.623_657, -407.769_775],
  [-72.309_02, 6.609_634_4, -408.441],
  [-57.312_99, 6.575_577, -409.0388],
  [-47.872_772_2, 6.5336, -409.042_725],
  [-32.990_34, 6.397_423, -408.282_623],
  [-16.172_73, 5.941_383_36, -404.464_63],
  [-3.714_302, 5.173_698_43, -395.8761],
  [2.015_503, 4.635_025, -388.3627],
  [8.909_935, 3.952_140_81, -375.2301],
  [14.302_681, 3.736_267, -363.550_018],
  [17.560_09, 3.824_264_53, -352.3467],
  [19.5607, 4.094_757, -339.572_449],
  [20.556_472_8, 4.431_801, -328.162_567],
  [21.387_397_8, 4.887_962_34, -315.3278],
  [21.928_657_5, 5.170_089_72, -308.828_43],
  [22.171_142_6, 6.797_561_65, -291.929_016],
  [21.270_95, 6.919_876, -279.8944],
  [20.166_351_3, 5.059_158_33, -266.854_675],
  [18.896_728_5, 3.342_170_72, -250.6668],
  [19.162_574_8, 2.953_476, -242.8355],
  [16.618_331_9, 2.636_627_2, -227.089_355],
  [8.117_866_52, 2.734_153_75, -212.313_553],
  [3.371_299_74, 2.843_490_6, -206.440_613],
  [-7.534_271_24, 3.140_998_84, -193.507_813],
  [-12.113_51, 3.286_308_29, -187.797_119],
  [-21.576_767, 3.647_712_71, -173.643_173],
  [-25.079_406_7, 3.890_358, -162.912_46],
  [-23.988_616_9, 4.010_269, -153.504_288],
  [-18.708_16, 4.014_053_34, -142.831_039],
  [-11.205_337_5, 3.997_49, -132.972_733],
  [-3.088_241_58, 4.058_586, -124.311_241],
  [5.840_339_66, 4.318_062, -115.672_516],
  [16.714_263_9, 5.357_994, -105.405_212],
  [24.372_657_8, 6.970_741_27, -99.728_54],
  [36.910_522_5, 10.009_231_6, -92.777_68],
  [47.562_637_3, 11.524_810_8, -87.483_38],
  [60.509_67, 11.012_451_2, -80.9964],
  [69.337_295_5, 9.471_306, -77.034_09],
  [82.240_13, 6.890_777_59, -70.916_72],
  [95.195_816, 5.179_428, -63.442_932_1],
  [103.406_731, 4.468_384, -58.942_306_5],
  [116.433_151, 3.562_317, -51.152_94],
  [123.716_042, 3.185_936, -45.189_773_6],
  [131.672_379, 2.930_496_22, -35.138_595_6],
  [135.159_073, 2.958_107, -26.494_873],
  [138.340_79, 3.220_535_28, -11.697_326_7],
  [139.453_72, 3.489_639_28, -2.396_530_15],
  [140.767_441, 4.051_01, 12.368_911_7],
  [141.654_755, 4.516_487, 21.824_264_5],
  [143.924_988, 5.641_037, 38.211_12],
  [144.800_568, 6.497_246, 45.914_032],
  [146.402_191, 8.708_405, 62.231_842],
  [147.446_609, 9.733_749, 69.688_415_5],
  [152.985_443, 11.355_629, 87.7565],
  [161.456_909, 10.399_505_6, 99.951_995_8],
  [168.845_276, 8.952_293, 106.862_579],
  [180.779_785, 6.996_727, 114.363_77],
  [194.359_955, 5.939_895_63, 119.528_656],
  [203.095_81, 5.661_827, 120.577_148],
  [218.927_216, 5.356_071_47, 120.9364],
  [227.809_86, 5.246_872, 120.905_029],
  [243.609_329, 5.098_61, 121.419_25],
  [252.192_886, 5.022_598_27, 122.891_235],
  [262.055_176, 4.873_077_39, 128.854_34],
  [263.700_745, 4.730_926_51, 136.133_057],
  [261.313_843, 4.486_389, 150.445_862],
  [257.951_935, 4.358_818, 159.836_121],
  [251.937_943, 4.232_841_49, 172.957_336],
  [247.268_524, 4.195_877, 181.611_633],
  [239.828_918, 4.227_524, 193.897_522],
  [233.318_985, 4.366_035_46, 203.386_23],
  [224.827_744, 4.732_071, 214.617_065],
  [218.239_685, 5.132_744, 222.7572],
  [209.092_117, 5.754_303, 233.285_156],
  [201.741_928, 6.270_164_49, 240.988_22],
  [191.685_043, 6.955_795_29, 250.348_022],
  [183.093_43, 7.488_991, 257.019_836],
  [171.612_137, 8.075_073, 263.672_272],
  [162.176_987, 8.385_086, 266.54],
  [149.3309, 8.476_128, 265.436_127],
  [141.035_767, 8.360_565, 261.7369],
  [128.257_935, 8.031_883, 253.2528],
  [121.256_691, 7.796_470_64, 247.461_914],
  [109.642_929, 7.371_803_28, 236.845_642],
  [103.295_143, 7.142_257_69, 230.733_49],
  [91.958_96, 6.790_497, 219.984_039],
  [83.065_59, 6.637_97, 212.477_844],
  [73.130_47, 6.623_382_57, 203.894_409],
  [64.827_09, 6.732_467_65, 195.959_29],
  [55.873_23, 6.897_201_54, 186.748_108],
  [46.601_074_2, 7.085_159_3, 177.1218],
  [34.605_247_5, 7.228_378_3, 174.740_112],
  [28.942_916_9, 7.224_914_55, 180.574_158],
  [18.554_641_7, 7.207_016, 192.888_855],
  [13.568_908_7, 7.196_304_32, 199.662_72],
  [4.698_173_52, 7.183_51, 212.975_891],
  [0.202_041_626, 7.185_264_59, 220.436_584],
  [-7.650_711, 7.208_366_39, 234.508_728],
  [-11.602_233_9, 7.234_146, 242.166_626],
  [-18.508_651_7, 7.303_619_38, 256.377_319],
  [-22.115_28, 7.355_484, 264.269_379],
  [-28.404_724_1, 7.472_236_63, 278.702_728],
  [-31.634_185_8, 7.550_239_56, 286.4663],
  [-37.4877, 7.734_474, 301],
  [-40.093_795_8, 7.880_943_3, 309.033_875],
  [-42.912_445_1, 8.264_046, 324.737_061],
  [-43.390_09, 8.518_463, 333.202_759],
  [-43.288_757_3, 9.059_944, 349.303_04],
  [-43.048_75, 9.365_517, 357.7251],
  [-43.390_655_5, 9.951_469, 373.6731],
  [-44.887_94, 10.231_369, 381.772_766],
  [-48.666_336_1, 10.502_838_1, 390.826_538],
  [-57.833_465_6, 10.660_285_9, 399.647_217],
  [-64.169_174_2, 10.664_253_2, 402.3866],
  [-80.571_38, 10.572_212_2, 405.987_671],
  [-88.091_43, 10.502_395_6, 406.7744],
  [-105.105_576, 10.312_683_1, 407.7638],
  [-112.909_393, 10.213_989_3, 408.029_175],
  [-129.518_25, 9.988_579, 408.682_617],
  [-137.361_511, 9.875_885, 409.286_743],
  [-153.6037, 9.636_04, 412.467_957],
  [-161.454_285, 9.529_526, 419.7556],
  [-160.386_414, 9.575_767_52, 432.9696],
  [-155.895_447, 9.643_875, 441.983_337],
  [-148.174_988, 9.719_566, 453.9165],
  [-142.275_33, 9.739_838, 462.409_424],
  [-134.624_939, 9.697_151, 473.998_047],
  [-127.056_274, 9.491_089, 487.975_22],
  [-123.036_469, 9.324_112, 495.3827],
  [-115.202_148, 8.956_352, 509.0962],
  [-110.945_19, 8.734_596, 516.3839],
  [-102.972_733, 8.283_386, 530.1648],
  [-98.916_93, 8.031_105, 537.44],
  [-91.529_05, 7.524_017_33, 551.609_741],
  [-88.066_01, 7.249_977, 559.1246],
  [-84.184_71, 6.892_616_27, 568.8377],
  [-79.992_614_7, 6.374_511_72, 582.121],
  [-77.450_225_8, 5.964_149_48, 592.084_656],
  [-74.479_324_3, 5.381_63, 605.7712],
  [-72.495_97, 4.923_523, 616.2818],
  [-70.128_33, 4.321_937_56, 629.9146],
  [-68.140_365_6, 3.840_812_68, 640.885_254],
]

export const MOCK_DATA: ClientData<StageUpdateData>[] = [
  {
    user: 'MOCK-1',
    data: {
      time: 124.525_256_1,
      carData: {
        positionData: {
          position: [0, 0, 0],
          rotation: [0, 0, 23],
          velocity: [0, 0, 0],
        },
        inputData: {
          clutchInput: 0.66,
          throttleInput: 0.5,
          steeringInput: 0.2533,
          brakeInput: 0.52,
          handbrakeInput: 0.363_323_44,
          tcsTriggered: false,
          espTriggered: true,
          absTriggered: false,
        },
        brakeData: {
          temperatureBack: 15,
          temperatureFront: 245,
        },
        drivetrain: {
          velocity: 24.256,
          wheelTireVelocity: 25.256,
          rpm: 2405.205,
          canStall: false,
          isStalling: false,
          torque: 13.256,
          clutch: 0.5,
          canShiftAgain: true,
          currentGearRatio: 1.5,
          currentPower: 13.256,
          gear: 1,
          isChangingGear: false,
          shiftTriggered: false,
          throttle: 0.5,
        },
      },
    },
  },
]
