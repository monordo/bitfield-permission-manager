# bitfield-permission-manager
![badge][0] [![Build Status][1]][2]

![MonOrdo logo](https://www.monordo.com/wp-content/uploads/2022/06/MonOrdo.jpg)

❤️ **This library is developed and maintained by MonOrdo** ❤️

This library is developed to use the [Bit field](https://en.wikipedia.org/wiki/Bit_field) method as the main logic base within our permission system. We did not invent this method, nor its application to the permission system, but after having been inspired by discord, for example. We chose to simplify its use by creating a library to apply it more simply. This library supports [injection](https://rxjs.dev/) within a module and can therefore be injected, for example, within the services of a [NestJs](https://nestjs.com/) server. This library also exposes a Guard to simplify its use within [NestJs](https://nestjs.com/).

The bit field method allows building a permission system like Discord uses for its channels. The main advantage is to avoid heavy data transfers on the whole proposed solution. For its use, the storage of a big int is enough. The second advantage is its reliability for the check of permissions, no storage of permissions is necessary except the storage of the big int, so only its interpretation can differ in time and not name migrations as can be found on classical methods.

**Repository:** [https://github.com/monordo/bitfield-permission-manager](https://github.com/monordo/bitfield-permission-manager)

**Official documentation:** [https://monordo.gitbook.io/bitfield-permission-manager/](https://monordo.gitbook.io/bitfield-permission-manager/)

**NPM details:** [https://www.npmjs.com/package/@monordo/bitfield-permission-manager](https://www.npmjs.com/package/@monordo/bitfield-permission-manager)




[0]: https://img.shields.io/badge/%20coverage%20-100-green?style=flat-square
[1]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fmonordo%2Fbitfield-permission-manager%2Fbadge%3Fref%3Dmain&style=flat-square

[2]: https://actions-badge.atrox.dev/monordo/bitfield-permission-manager/goto?ref=main

