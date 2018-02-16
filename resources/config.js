var config = {
    apiUrl: "//165.227.189.226:1984/",
    coinUnitPlaces: 12,
    txMinConfirms: 10,
    coinSymbol: 'XSM',
    openAliasPrefix: "xsm",
    coinName: 'Mynt',
    coinUriPrefix: 'mynt:',
    addressPrefix: 1078,
    integratedAddressPrefix: 19,
    feePerKB: new JSBigInt('2000000000'),//10^10
    dustThreshold: new JSBigInt('10000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 3,
    txChargeAddress: 'XSwiLJUPxqv4hbFsvvV5BgVFqWiWmfzyXKWFQb9ZWuUJhKFhSYJUGSB6cmRn2qo2J5Vwsi1bfg8AYfyx9JKc2GdY2CiE1RrG8',
    idleTimeout: 10,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 60,
    debugMode: false
};
