const hash = require('./testindex');

test('Verificar hash de UTEQ', () => {
    const message = "UTEQ";
    const hashtest = hash(message);

    expect(hashtest).toEqual("892f78a98921edc19e4c8ddd9208b5ca90c9d02eddd1d050583035e16f0ffbd371b2959d30627763d61d01fd473a98dde1c0856ddd8eceb960d74dcdd44c58f1");
});
