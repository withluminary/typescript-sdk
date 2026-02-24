# Changelog

## 0.1.0 (2026-02-24)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/withluminary/typescript-sdk/compare/v0.0.1...v0.1.0)

### Features

* **api:** add cursor config ([4bd9999](https://github.com/withluminary/typescript-sdk/commit/4bd99999c5d997a4af650833e93b32dbdce30481))
* **api:** configurable auth domain ([8ced713](https://github.com/withluminary/typescript-sdk/commit/8ced713a51f444a11d7e0e9658da74b05daeb239))
* **api:** manual updates ([83b7395](https://github.com/withluminary/typescript-sdk/commit/83b7395959ad7db5655618acff60067cb0a072f0))
* **api:** manual updates ([806d13b](https://github.com/withluminary/typescript-sdk/commit/806d13bfe069211f5a3c8c51cb1e44aeeb640a0c))
* **api:** manual updates ([45e809e](https://github.com/withluminary/typescript-sdk/commit/45e809e60ec377010a68fca4a78dec5ca53814cf))
* **api:** manual updates ([d58efd3](https://github.com/withluminary/typescript-sdk/commit/d58efd3bdee194370d84558f8a445fb2a0dc958a))
* **api:** manual updates ([2343256](https://github.com/withluminary/typescript-sdk/commit/2343256aef247ff9566fc64365c06555e339266f))
* **api:** revert token change ([dfdcf77](https://github.com/withluminary/typescript-sdk/commit/dfdcf778c875ff9b6c031df428570e6bfef0a76b))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([f279f3c](https://github.com/withluminary/typescript-sdk/commit/f279f3cfe8fb5974f79b51663ea7b9af08c1a15e))
* **client:** avoid removing abort listener too early ([5c33fa5](https://github.com/withluminary/typescript-sdk/commit/5c33fa587acd8ec8564f92a476f37dddf84526dd))
* **docs/contributing:** correct pnpm link command ([73396a7](https://github.com/withluminary/typescript-sdk/commit/73396a794e53c7f8ac93077ac52dceedd41a8779))
* **internal:** skip tests that depend on mock server ([e6b11eb](https://github.com/withluminary/typescript-sdk/commit/e6b11eb602c00ba3de9c6675da9277681b4898ed))
* **mcp:** correct code tool API endpoint ([668a385](https://github.com/withluminary/typescript-sdk/commit/668a3857b856e399965754585087e3f073544829))
* **mcp:** return correct lines on typescript errors ([5d21f0c](https://github.com/withluminary/typescript-sdk/commit/5d21f0c5447cd6056c0fb195c90d108333025188))
* pass oauth2 grant_type in body of request ([a623b64](https://github.com/withluminary/typescript-sdk/commit/a623b64b671b5958b27d6fa720f294b7eeab5acd))
* various public API fixes ([d45ea97](https://github.com/withluminary/typescript-sdk/commit/d45ea97cac55e4139c7053063ad6c96f10f53ae4))


### Chores

* add entity in-estate status to API ([8c9ad50](https://github.com/withluminary/typescript-sdk/commit/8c9ad50c8bf62f18d544ab65395bf0ac74b1fa26))
* break long lines in snippets into multiline ([0f2bf40](https://github.com/withluminary/typescript-sdk/commit/0f2bf40c970249801015c3888864f1a003d9b89d))
* **ci:** upgrade `actions/github-script` ([dffcf95](https://github.com/withluminary/typescript-sdk/commit/dffcf9558f268fa628cf82bc9409bf8299ab84eb))
* **client:** do not parse responses with empty content-length ([987553e](https://github.com/withluminary/typescript-sdk/commit/987553e9b6b88b27ed5296072e580d58bdeafd28))
* **client:** fix logger property type ([6a0cc88](https://github.com/withluminary/typescript-sdk/commit/6a0cc881ef9dd19e12fbfa51c0daca6a0a4db868))
* **internal/client:** fix form-urlencoded requests ([45d5f3f](https://github.com/withluminary/typescript-sdk/commit/45d5f3fcf82887bb46154362a8eef2ae7a036a02))
* **internal:** avoid type checking errors with ts-reset ([865e9a2](https://github.com/withluminary/typescript-sdk/commit/865e9a23a76c2ef463a5ca2082d8588e4708fa19))
* **internal:** codegen related update ([ed3fdfd](https://github.com/withluminary/typescript-sdk/commit/ed3fdfdf02f6ccac3fa7e72182a4304559d068d0))
* **internal:** codegen related update ([da373a4](https://github.com/withluminary/typescript-sdk/commit/da373a428fc8091104363b96a1350b12ee138768))
* **internal:** codegen related update ([844d3f8](https://github.com/withluminary/typescript-sdk/commit/844d3f89d12f9baf89845e5b0034ff6fb8603f72))
* **internal:** configure pnpm minimumReleaseAge to 1 day ([8151605](https://github.com/withluminary/typescript-sdk/commit/8151605f1e0788f5294ac1856655974a131e9344))
* **internal:** fix pagination internals not accepting option promises ([a60041d](https://github.com/withluminary/typescript-sdk/commit/a60041d4a74a9d634ed30b7837a508e3ebe3952f))
* **internal:** remove mock server code ([37acfa5](https://github.com/withluminary/typescript-sdk/commit/37acfa585f68b3c27634749704c59b6af23baffc))
* **internal:** update `actions/checkout` version ([e737946](https://github.com/withluminary/typescript-sdk/commit/e7379462da4cea949f895203de71ce58be7c2917))
* **internal:** update lock file ([19d61ac](https://github.com/withluminary/typescript-sdk/commit/19d61acacc914359c4e6fdb0c2266d6dbf1554e2))
* **internal:** upgrade babel, qs, js-yaml ([296d220](https://github.com/withluminary/typescript-sdk/commit/296d220cb20174ed88831eac7e9cf118b90fd0c7))
* **internal:** upgrade brace-expansion and @babel/helpers ([9714963](https://github.com/withluminary/typescript-sdk/commit/97149636f879a8180bc4a397ffda20b18fed9bb3))
* **internal:** upgrade eslint ([b8cc80f](https://github.com/withluminary/typescript-sdk/commit/b8cc80fcd24897e27e58462bd0b50be4be9573cd))
* **internal:** upgrade pnpm ([88e1f70](https://github.com/withluminary/typescript-sdk/commit/88e1f704b72bda2e7e110e0cc8d767f9e09f7e49))
* **internal:** upgrade pnpm version ([e75b0c1](https://github.com/withluminary/typescript-sdk/commit/e75b0c15ba3b37e9bbd57ba151667ab20eae25bb))
* remove custom code ([b155797](https://github.com/withluminary/typescript-sdk/commit/b1557977fdecec8b0d999916b8c074cf04429e8a))
* update mock server docs ([0dcdb39](https://github.com/withluminary/typescript-sdk/commit/0dcdb3940f295f468bebcefc5232b981e9d93450))
* update SDK settings ([c4d5bd8](https://github.com/withluminary/typescript-sdk/commit/c4d5bd880eaed839d3f5163b3eb5452a79a8e25f))
* update SDK settings ([5dceac5](https://github.com/withluminary/typescript-sdk/commit/5dceac5024cf41956bb00b48a638f0ae98bcd0f7))
* update SDK settings ([1c4380a](https://github.com/withluminary/typescript-sdk/commit/1c4380ab46515dfcec2d58b82448a5cbd47252f5))
* user endpoint and pagination ([fb2eb4f](https://github.com/withluminary/typescript-sdk/commit/fb2eb4ff892b302c38135f7c3098d1a236817b75))
