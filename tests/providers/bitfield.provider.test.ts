import { BitfieldProvider } from "../../src/providers/bitfield.provider"


describe('Module testing', () => {
    const tool = new BitfieldProvider();

    const perms = {
        a: BigInt(0x0000000000000001),
        b: BigInt(0x0000000000000002),
        c: BigInt(0x0000000000000004),
        d: BigInt(0x0000000000000008),
        e: BigInt(0x0000000000000010),
        f: BigInt(0x0000000000000020),
        g: BigInt(0x0000000000000040),
        h: BigInt(0x0000000000000080),
        i: BigInt(0x0000000000000100),
        j: BigInt(0x0000000000000200),
        k: BigInt(0x0000000000000400),
        l: BigInt(0x0000000000000800),
        m: BigInt(0x0000000000001000),
        n: BigInt(0x0000000000002000),
        o: BigInt(0x0000000000004000),
        p: BigInt(0x0000000000008000),
        q: BigInt(0x0000000000010000),
        r: BigInt(0x0000000000020000),
        s: BigInt(0x0000000000040000),
        t: BigInt(0x0000000000080000),
        u: BigInt(0x0000000000100000),
        v: BigInt(0x0000000000200000),
        w: BigInt(0x0000000000400000),
        x: BigInt(0x0000000000800000),
        y: BigInt(0x0000000001000000),
        z: BigInt(0x0000000002000000),
        aa: BigInt(0x0000000004000000),
        ab: BigInt(0x0000000008000000),
        ac: BigInt(0x0000000010000000),
        ad: BigInt(0x0000000020000000),
        ae: BigInt(0x0000000040000000),
        af: BigInt(0x0000000080000000),
        ag: BigInt(0x0000000100000000),
        ah: BigInt(0x0000000200000000),
        ai: BigInt(0x0000000400000000),
        aj: BigInt(0x0000000800000000),
        ak: BigInt(0x0000001000000000),
        al: BigInt(0x0000002000000000),
        am: BigInt(0x0000004000000000),
        an: BigInt(0x0000008000000000),
        ao: BigInt(0x0000010000000000),
        ap: BigInt(0x0000020000000000),
        aq: BigInt(0x0000040000000000),
        ar: BigInt(0x0000080000000000),
        as: BigInt(0x0000100000000000),
        at: BigInt(0x0000200000000000),
        au: BigInt(0x0000400000000000),
        av: BigInt(0x0000800000000000),
        aw: BigInt(0x0001000000000000),
        ax: BigInt(0x0002000000000000),
        ay: BigInt(0x0004000000000000),
        az: BigInt(0x0008000000000000),
        ba: BigInt(0x0010000000000000),
        bb: BigInt(0x0020000000000000),
        bc: BigInt(0x0040000000000000),
        bd: BigInt(0x0080000000000000),
        be: BigInt(0x0100000000000000),
        bf: BigInt(0x0200000000000000),
        bg: BigInt(0x0400000000000000),
        bh: BigInt(0x0800000000000000),
        bi: BigInt(0x1000000000000000),
        bj: BigInt(0x2000000000000000),
        bk: BigInt(0x4000000000000000),
        bl: BigInt(0x8000000000000000),
        bm: BigInt(0x10000000000000000),
        bn: BigInt(0x20000000000000000),
        bo: BigInt(0x40000000000000000),
        bp: BigInt(0x80000000000000000),
        bq: BigInt(0x100000000000000000),
        br: BigInt(0x200000000000000000),
        bs: BigInt(0x400000000000000000),
        bt: BigInt(0x800000000000000000),
        bu: BigInt(0x1000000000000000000),
        bv: BigInt(0x2000000000000000000),
        bw: BigInt(0x4000000000000000000),
        bx: BigInt(0x8000000000000000000),
        by: BigInt(0x10000000000000000000),
        bz: BigInt(0x20000000000000000000),
        ca: BigInt(0x40000000000000000000),
        cb: BigInt(0x80000000000000000000),
        cc: BigInt(0x100000000000000000000),
        cd: BigInt(0x200000000000000000000),
        ce: BigInt(0x400000000000000000000),
        cf: BigInt(0x800000000000000000000),
        cg: BigInt(0x1000000000000000000000),
        ch: BigInt(0x2000000000000000000000),
        ci: BigInt(0x4000000000000000000000),
        cj: BigInt(0x8000000000000000000000),
        ck: BigInt(0x10000000000000000000000),
        cl: BigInt(0x20000000000000000000000),
        cm: BigInt(0x40000000000000000000000),
        cn: BigInt(0x80000000000000000000000),
        co: BigInt(0x100000000000000000000000),
        cp: BigInt(0x200000000000000000000000),
        cq: BigInt(0x400000000000000000000000),
        cr: BigInt(0x800000000000000000000000),
        cs: BigInt(0x1000000000000000000000000),
        ct: BigInt(0x2000000000000000000000000),
        cu: BigInt(0x4000000000000000000000000),
        cv: BigInt(0x8000000000000000000000000),
        cw: BigInt(0x10000000000000000000000000),
        cx: BigInt(0x20000000000000000000000000),
        cy: BigInt(0x40000000000000000000000000),
        cz: BigInt(0x80000000000000000000000000),
        da: BigInt(0x100000000000000000000000000),
        db: BigInt(0x200000000000000000000000000),
        dc: BigInt(0x400000000000000000000000000),
        dd: BigInt(0x800000000000000000000000000),
        de: BigInt(0x1000000000000000000000000000),
    }


    test('compute 1', () => {
        expect(tool.compute([])).toBe(0n);
    });
    test('compute 2', () => {
        expect(tool.compute([], perms.a)).toBe(perms.a);
    });
    test('compute 3', () => {
        expect(tool.compute([perms.a])).toBe(perms.a);
    });
    test('compute 4', () => {
        expect(tool.compute([perms.a, perms.b])).toBe(perms.a | perms.b);
    });

    test('compute 5', () => {
        expect(tool.compute([perms.a, perms.b], perms.c)).toBe(perms.c | perms.a  | perms.b);
    });

    test('compute 6', () => {
        expect(tool.compute([perms.a, perms.b], perms.c | perms.d)).toBe(perms.c | perms.d | perms.a  | perms.b);
    });

    test('hasPermission', () => {
        expect(tool.hasPermission(perms.a | perms.b, perms.b)).toBe(true);
    });

    test('hasPermission', () => {
        expect(tool.hasPermission(perms.a | perms.b, perms.c)).toBe(false);
    });

    test('hasPermission', () => {
        expect(tool.hasPermission(perms.a, perms.a)).toBe(true);
    });

    test('hasPermission', () => {
        expect(tool.hasPermission(perms.a, perms.c)).toBe(false);
    });

    test('hasPermissionsOR', () => {
        expect(tool.hasPermissionsOR(perms.a, [perms.a])).toBe(true);
    });

    test('hasPermissionsOR', () => {
        expect(tool.hasPermissionsOR(perms.a, [perms.a, perms.b])).toBe(true);
    });

    test('hasPermissionsOR', () => {
        expect(tool.hasPermissionsOR(perms.a, [])).toBe(false);
    });

    test('hasPermissionsOR', () => {
        expect(tool.hasPermissionsOR(perms.a, [perms.b])).toBe(false);
    });

    test('hasPermissionsOR', () => {
        expect(tool.hasPermissionsOR(perms.a, [perms.a, perms.b, perms.c])).toBe(true);
    });

    test('hasPermissionsOR', () => {
        expect(tool.hasPermissionsOR(perms.a | perms.c, [perms.c, perms.e])).toBe(true);
    });

    test('hasPermissionsOR', () => {
        expect(tool.hasPermissionsOR(perms.a | perms.c | perms.d, [perms.c, perms.e])).toBe(true);
    });

    test('hasPermissionsOR', () => {
        expect(tool.hasPermissionsOR(perms.a | perms.c | perms.d, [perms.i, perms.e])).toBe(false);
    });

    test('hasPermissionsAND', () => {
        expect(tool.hasPermissionsAND(perms.a, [perms.a])).toBe(true);
    });

    test('hasPermissionsAND', () => {
        expect(tool.hasPermissionsAND(perms.a | perms.b, [perms.a])).toBe(true);
    });

    test('hasPermissionsAND', () => {
        expect(tool.hasPermissionsAND(perms.a | perms.b, [perms.a, perms.b])).toBe(true);
    });

    test('hasPermissionsAND', () => {
        expect(tool.hasPermissionsAND(perms.a | perms.b | perms.c, [perms.a, perms.b, perms.c])).toBe(true);
    });
    
    test('hasPermissionsAND', () => {
        expect(tool.hasPermissionsAND(perms.a, [perms.i])).toBe(false);
    });

    test('hasPermissionsAND', () => {
        expect(tool.hasPermissionsAND(perms.a, [perms.a, perms.b])).toBe(false);
    });

    test('hasPermissionsAND', () => {
        expect(tool.hasPermissionsAND(perms.a | perms.b | perms.c, [perms.a, perms.b, perms.c, perms.i])).toBe(false);
    });

    test('addPermission', () => {
        expect(tool.addPermission(perms.a, perms.c)).toBe(perms.a | perms.c);
    });

    test('addPermission', () => {
        expect(tool.addPermission(perms.a | perms.b, perms.c)).toBe(perms.a | perms.b | perms.c);
    });

    test('addPermissions', () => {
        expect(tool.addPermissions(perms.a | perms.b, [perms.c, perms.d, perms.e])).toBe(perms.a | perms.b | perms.c | perms.d | perms.e);
    });

    test('revokePermission', () => {
        expect(tool.revokePermission(perms.a, perms.a)).toBe(0n);
    });

    test('revokePermission', () => {
        expect(tool.revokePermission(perms.a | perms.b, perms.a)).toBe(perms.b);
    });

    test('revokePermission', () => {
        expect(tool.revokePermission(perms.a | perms.b | perms.c, perms.c)).toBe(perms.b | perms.a);
    });

    test('revokePermissions', () => {
        expect(tool.revokePermissions(perms.a | perms.b | perms.c | perms.d, [perms.c])).toBe(perms.b | perms.a | perms.d);
    });

    test('test 1', () => {
        const permissions = BigInt(0);
        const test = [];
        expect(tool.test(permissions, test)).toBe(true);
    });

    test('test 2', () => {
        const permissions = BigInt(0);
        const test = [
            [perms.b]
        ];
        expect(tool.test(permissions, test)).toBe(false);
    });

    test('test 3', () => {
        const permissions = perms.a;
        const test = [
            [perms.a],
            [perms.a]
        ];
        expect(tool.test(permissions, test)).toBe(true);
    });

    test('test 4', () => {
        const permissions = perms.a;
        const test = [
            [perms.a, perms.a],
        ];
        expect(tool.test(permissions, test)).toBe(true);
    });

    test('test 5', () => {
        const permissions = perms.a;
        const test = [
            [perms.a, perms.b],
        ];
        expect(tool.test(permissions, test)).toBe(true);
    });

    test('test 6', () => {
        const permissions = perms.a;
        const test = [
            // [perms.a],
            [perms.b],
        ];
        expect(tool.test(permissions, test)).toBe(false);
    });

    test('test 7', () => {
        const permissions = perms.a;
        const test = [
            [perms.a],
            [perms.b],
        ];
        expect(tool.test(permissions, test)).toBe(false);
    });

    test('test 8', () => {
        const permissions = perms.a | perms.b;
        const test = [
            [perms.a],
            [perms.b],
        ];
        expect(tool.test(permissions, test)).toBe(true);
    });

    test('test 9', () => {
        const permissions = perms.a | perms.b | perms.c;
        const test = [
            [perms.a],
            [perms.b],
            [perms.c, perms.i],
        ];
        expect(tool.test(permissions, test)).toBe(true);
    });

    test('test 10', () => {
        const permissions = perms.a | perms.b | perms.c;
        const test = [
            [perms.a],
            [perms.b],
            [perms.c, perms.i],
            [perms.g],
        ];
        expect(tool.test(permissions, test)).toBe(false);
    });

    test('numberToBitfield', () => {
        Object.keys(perms).forEach((key, i) => {
            expect(BitfieldProvider.numberToBitfield(i)).toBe(perms[key]);
        });
    });
}) 