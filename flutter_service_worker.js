'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "230154e9650aa89de095a7b0c45a82b0",
"version.json": "2d98eb97cb64212b4126057c0dbaa8cc",
"splash/img/light-2x.png": "6ed55266c4f0e961d393294bff5ca0d6",
"splash/img/dark-4x.png": "1972407304ff5365e6c5bc2b6257432c",
"splash/img/light-3x.png": "f2e95a79339f032fe45238bdb3818b5f",
"splash/img/dark-3x.png": "f2e95a79339f032fe45238bdb3818b5f",
"splash/img/light-4x.png": "1972407304ff5365e6c5bc2b6257432c",
"splash/img/dark-2x.png": "6ed55266c4f0e961d393294bff5ca0d6",
"splash/img/dark-1x.png": "46e4cda622830ff51e20b02981c4053b",
"splash/img/light-1x.png": "46e4cda622830ff51e20b02981c4053b",
"splash/style.css": "64227ec06c71fef909f75868ada72c30",
"index.html": "22cd389daae5517cb664a8f23d6346af",
"/": "22cd389daae5517cb664a8f23d6346af",
"main.dart.js": "f69b61d86ebbe327377e01a6b7b86c87",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5d86762be660cff27012811126724b8c",
".git/ORIG_HEAD": "c6c5ce9412e566986aa21d18567d0e5c",
".git/config": "65c4f91c60fbd6c35343fa6062559105",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/8ba2023fe70b9b578c37c39331824d3fed5b83": "c058dfa4987b648ecdf30bff5a21f3b1",
".git/objects/6f/3a2913e199cebe9ace75cf7e5a2818da27fbd3": "45159ad6d14348c955865d0f51914657",
".git/objects/03/adc1587c2cec494193143c27394a97055b8c64": "7d5cfab30a063b8619288d2ef70a10ed",
".git/objects/9b/93f2c0c43cc39b7dcae8fdf5cf0aa6876e47a2": "872ce17a9bbbe236695e21b83ba7db34",
".git/objects/3c/864cdb1066a3e1e7a6521ec3f847ae0cb499f6": "05352fad95dbf0cd51d84fecc5812633",
".git/objects/51/392b5c6a90e8510b8aca37b090b3eb8d227424": "e2a292ccb5e708b49fd36085eba84105",
".git/objects/3d/695fdef0bc0816e49287f25d8c8e3b8317cb9c": "a6b1e1ad5d0c5cad71ea8e9fc7d6a572",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/edffc666f8d07f42799f36633eed6102482606": "f1af9b608f03e7374751eaafb18bab15",
".git/objects/93/bac3fcdbcd3468bd498a32740159eb8af3d3b8": "9465bbcc013130aa8ef2c6fd97293d81",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/33/595321b67833f208fb57cb96b1b5b3e1adcaa5": "0aeed3c5daadb1a7c26d2fbaa0450de2",
".git/objects/9c/ca150369ad8b49ec2ef0ff0e8251e2d9dfaf6f": "2f05fcb3fe6c1ee830add7775dc79b51",
".git/objects/a3/dd499116d936d8d0c51fa826f6882dcf5d6b5c": "ddf3c4d179d3627d6ee3e6aea217567d",
".git/objects/b2/2cc04d262317f3247b5c87f2d97bca71488ab6": "3836b0a3c40a34d91c62cf62a2547498",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/b3/f4bf9a751ea3098b2d8cc4e50616486229125c": "63087148d935c4ba16febdf8fbac036e",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/ae/b44192011ccbc6f332298284853e0368af991f": "fe650b7b4e121656602cbef9a1fc1ff6",
".git/objects/ab/ef37d9fbeeb443d74a78db494914bd85f9b717": "457ffc8d36b9a4508cfd82b4f8934d41",
".git/objects/e2/f9fd603e72feaa70066e742804e5d782593b70": "800ee7e8e0173f5551a1df56a08f62c4",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/0f68ff5b058f6badd258b701ce7d55cf57862d": "3d053be3f8ea4c7ed6f7dcf6571016b3",
".git/objects/e3/e7e0610d0a437a5505a4606a4e50f0e3bea268": "7cb145e3b4fd39a2ba2bbc73f0eb57fa",
".git/objects/e4/407807d648257480057f53f15643560439464b": "735f55a4ebdede3aedd235cdbf706ff5",
".git/objects/fe/70323330047b0dbdc2066d6c4ee37d6b5ba165": "45ea6a13a862df73f08f66267e8e3d03",
".git/objects/ec/1ec12525ed2f8a6a8eb70c705280a5d7058fcb": "0250d1d5e23ec0b26a65e29053593960",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/031464614b22692f63d57fa44da5f91ce1a18c": "338a734dd6d22c473e1a803d1e077505",
".git/objects/16/2ee07adbcf3da3f79396388095d3afe2ad6ff1": "c496edf232eb11e496ff1cc3ba24e181",
".git/objects/89/b18756a6f4a49dedf0604457d1e7321cf3dfb8": "73871acf27ee91c864fcfb5e53ae5a4d",
".git/objects/45/ddacff7d6bad6ab56ddbf21cd25912de1d0e17": "6f3af787ca4278bc73eb207bfddc98f5",
".git/objects/28/dcff2e7fefdca77af3f342a1d76c897f83b425": "e135ba519d073137eb211447155f2949",
".git/objects/17/5867d68021372c093d0203261c91d37185b7df": "283dee73e9f7634407adc6650df211f5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/cf90d2132fea14e0c80098613e2a9e2aeed6f0": "97ddd679bf3ff6be8b73847fae7ba38e",
".git/objects/19/d8f30fa600b403c95165d08315b20481495c8b": "137c3c05d8bed01d609d8291da6efb92",
".git/objects/4d/7a4b3d7576fb12d8428f69bae0e79a5fec9eb8": "0f18e64b25372b5c0ff51dfc60dc3b46",
".git/objects/72/2f03b2a5893284e2c437c4800118f35bd33076": "40e79b2effeba6f2db2e09f49a395693",
".git/objects/44/34563a20a70bae70c52bcff08159344f879510": "ffd2ca42a4d1249539591f69237c83a8",
".git/objects/2a/d6a1a1d89d9b90c4225a0618dc685c7f8129a6": "1ccb0b13d4e5297c7bbe17abce422a8e",
".git/objects/2f/b5543998bc960bb70950364a2b7fff76b627a3": "cef20fd7c76e621b3f3f0171a4ea6d71",
".git/objects/2f/5a99d27b476ead437c8de1d85cb6ad6f169a00": "91eea7387a11f13b267dc768f15a1be6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/4897777318356fd30b2e7255ffb7fc269258d2": "5f1d5ab24429a932002cc972925d37c2",
".git/objects/07/fa705df78d60dfacaa3132096b5f1d4f7f90a9": "e3a3caa1d79dcef793a9f56997d26b19",
".git/objects/38/d88b00bb1e0c50ab39fab8ca501ce3883b4bf8": "22cb98da1caf5b7204792cd415f8758b",
".git/objects/38/465e5ae301b3ddefabfe22b188c4fee52182c0": "eebe5c7c15a8b55c3d09dbb81b38a9a6",
".git/objects/00/5c17c10b30624951c7a5d9db99189500fe4ce8": "dba6bb369bb2a997051eb9bdc8b0ff4c",
".git/objects/5c/582522b6a1bf5feb6e2db2bff6562506d8264f": "a1d4988f93236b22531f3d4a3f4f7598",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/30/a50fe67cb96b8434c8349e6d3553a42dfd4678": "5881ffa2c2a23b9885cc58b096d1e3cc",
".git/objects/6c/b6573052ba55552151b68ba2ba1ffcf557e1f1": "4c891c942149fc4f8400846f063c0d6c",
".git/objects/90/766be772a62f997f15974c53bf9b8bbef60342": "bc3f79c8fe35741da671abf832bd3331",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/abd4fc6afa615985c8950829b94704a3dd53fc": "4b092db21311096a34ece0ac0714d9f8",
".git/objects/dd/d61ab8783bc9f692f5a38336e20929370a315e": "a3fb6e0c94d01faa92f80aa9d79ec21c",
".git/objects/a9/e517fb7a416157f5fc7ecd388834b88d8c41e1": "0fd62b7090ab15d274e4224e11d4571d",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/af/753f78be33c0e574ff5b4958d93f97b5579475": "2c4d29217b888baa1091da7239e51900",
".git/objects/af/c486eec44aad18ef88b251b665b99dfefa02df": "5402535445b8d60317708f277e1099bd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/377713c8a2897d65df2f64746943da6fa59d0e": "6eb328af9ab6558196286eb88752e570",
".git/objects/a1/b2b3aecc50fc1f9f1d4e3a6cb38562c9f27c2f": "6fbf20feb485886efe641c2c2dcdb382",
".git/objects/c3/300ea0d4728dbd20a8d6a8271e278ab64aa885": "3117fcbb57d98014702a5dd348c4b46f",
".git/objects/c2/c886f7bc1a72ee6f61fab0846fe23d91857a27": "e13dd18fea2667f1446e01852855b335",
".git/objects/c2/944061b152e977678ea80be48718f5b0b6e69a": "99e8b8fd1c45c52e2e5b3215a99f7050",
".git/objects/ce/6f181f1c493b2832202f982ca62b74c920e2bd": "963ebc41d468afd131269793e04570e5",
".git/objects/e0/144276b2b0d4b086d97bf98ba07291fa509489": "37fd285d131b152b18c256732069f24c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/24/4e7b5df92813c2e52ef60bba89799807443a0c": "480ba55569ca62237e3070aa4b7b72b1",
".git/objects/23/517e8e7fd85a0fa0e9b4a162ae0b4c7de94cdd": "6efa3736458263ef95e5864f683a9e43",
".git/objects/8d/db6e2018aeb98ccf49bd56ecfa5d91938081f1": "364ece13bec85162792a20a4e1427b2c",
".git/objects/8d/4db5a0f6403189f60e4b7f3b0646c9c6cf6bc2": "fd034dda01ab2a5cf5b92cdd087e3f85",
".git/objects/8d/42d290b7e33ae1fe84f96125a1abe5cd109099": "4ff8c95c1f2e3e6890c12a4661966bfd",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/71/1990552082ba18ff969e50a49e4c4d54e82add": "18631a199d23239b69b5584e65723fe0",
".git/objects/71/bfa1c3596c5f184740ae8dd892f0be2821c552": "efe654f18b32af656e207321e9037641",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/76f7b780ae62dd647b53f4e2b5071e2d22614c": "bae96c5aa74a5e84128c952222d7cd11",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/13/2f5bcfb60fdef912f52780a383761290014f97": "92fd35495f3059a63a06fad3fbc61e62",
".git/objects/7a/0f8c47fde00141c9cbfdd4bb0623ca9aece3b3": "dbbaa96bfc3bd76eb2cf002aa3c2d8e8",
".git/objects/14/b59218c5dec2e185cc4b2f20d6990eb8945e30": "4237537dc69cea78011906f4337575f8",
".git/objects/8e/710f8baab0cebee566010111662fada51e6a16": "dbd8b2ece6c4836cb18fddeb023eb743",
".git/objects/22/7bd6f19374aee87e2ffcd24138e0b88c868d10": "a8b5423c1b5851b2e13dd2a68afe3522",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8379cc1a4740211ab6c1d6568656cdc4",
".git/logs/refs/heads/main": "35f32ae3e369a2fb90e0967df22ab2d4",
".git/logs/refs/remotes/origin/main": "fbd590d2403de15db1411c7bfc962b80",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c6c5ce9412e566986aa21d18567d0e5c",
".git/refs/remotes/origin/main": "c6c5ce9412e566986aa21d18567d0e5c",
".git/index": "06d63b9ecd5d48e2f47ce194cd0b0f97",
".git/COMMIT_EDITMSG": "4864ef41036fc852f43fafd244673855",
".git/FETCH_HEAD": "906851515089d48f9e8b83ada187dd0e",
".vscode/settings.json": "8ab8729084acaaa571a2c5e90f13a6ef",
"assets/AssetManifest.json": "bfe14f9f3ba6221827dd4b6698e7f242",
"assets/NOTICES": "9edd205b42f2d605e3056edc772e3bf0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b76b35ebdbfe98c81d20331a0b848b19",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "01002c5a16d6f81c1f02fc4bc674c10a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/wait.json": "3f6082ff8abf1ba7447007846e66aa11",
"assets/assets/upload.json": "98eaf55c0739fed7c078b803e7adc01d",
"assets/assets/8.png": "a0cdb19aa2dd500768f9ed27de95f9aa",
"assets/assets/9.png": "0610672d03cc37079964fc7d0c1262df",
"assets/assets/ChargeRevenuFixe.json": "f2e86b26513c6d21f8f41f45de51dd6d",
"assets/assets/deux.png": "e88c95fc6196b76ddf0079a7f02ab554",
"assets/assets/divider.png": "2d19b3fd77f1dfd2a0cc83677d4e9172",
"assets/assets/hight.json": "09a9bd3b2f81c0dec2927a19d6b9e626",
"assets/assets/bankOut.json": "5c1ee261ec1efad3374fdddfe4bb80c0",
"assets/assets/challenge.json": "a9007d09db7278f7bbd97c487d821a1b",
"assets/assets/11.png": "ef1e6c05432af51e9172b8f9efab9ce4",
"assets/assets/10.png": "589f6e37430847c506561b7f63d58567",
"assets/assets/logo1.png": "5894d9cb2db6f632f90541c4b6df5f00",
"assets/assets/logo.png": "d3f1489383cffa0f2477768560853e65",
"assets/assets/trash.json": "c240d1e151f4fd73116cd9662870018f",
"assets/assets/picture.json": "d88d4bd398457632d1c5a09a0f0e6c49",
"assets/assets/7.png": "8fc8bfeaa168841dca932d96feb46959",
"assets/assets/6.png": "2938c348efb0d3a9666fbf2d09bffeff",
"assets/assets/2.png": "1f36d90cab10b705bc04023d8f9ac36c",
"assets/assets/3.png": "545505fbbe6b6177d9439dcce5b72b4f",
"assets/assets/1.png": "81fc06e9a4a5724d6d2b204f3e356b4c",
"assets/assets/photo.json": "d6273a9a081dae72772ee7f9d9fc9ef9",
"assets/assets/low.json": "cfd7ff75800a7ac7bd9872a8ee82cef1",
"assets/assets/un.png": "987b4527852ddabf58ca8fc944de53d0",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
