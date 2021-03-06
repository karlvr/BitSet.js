export declare interface ReadOnlyBitSet
{
    /**
     * Creates the bitwise AND of two sets.
     *
     * Ex:
     * bs1 = new BitSet(10);
     * bs2 = new BitSet(10);
     *
     * res = bs1.and(bs2);
     *
     * @param {ReadOnlyBitSet} other A bitset object
     * @returns {BitSet} A new BitSet object, containing the bitwise AND of this and other
     */
    and(other: ReadOnlyBitSet): BitSet;

    /**
    * Creates the bitwise OR of two sets.
    *
    * Ex:
    * bs1 = new BitSet(10);
    * bs2 = new BitSet(10);
    *
    * res = bs1.or(bs2);
    *
    * @param {ReadOnlyBitSet} other A bitset object
    * @returns {BitSet} A new BitSet object, containing the bitwise OR of this and other
    */
    or(other: ReadOnlyBitSet): BitSet;

    /**
     * Creates the bitwise AND NOT (not confuse with NAND!) of two sets.
     *
     * Ex:
     * bs1 = new BitSet(10);
     * bs2 = new BitSet(10);
     *
     * res = bs1.notAnd(bs2);
     *
     * @param {ReadOnlyBitSet} other A bitset object
     * @returns {BitSet} A new BitSet object, containing the bitwise AND NOT of this and other
     */
    andNot(other: ReadOnlyBitSet): BitSet;

    /**
    * Creates the bitwise NOT of a set.
    *
    * Ex:
    * bs1 = new BitSet(10);
    *
    * res = bs1.not();
    *
    * @returns {BitSet} A new BitSet object, containing the bitwise NOT of this
    */
    not(): BitSet;

    /**
     * Creates the bitwise XOR of two sets.
     *
     * Ex:
     * bs1 = new BitSet(10);
     * bs2 = new BitSet(10);
     *
     * res = bs1.xor(bs2);
     *
     * @param {ReadOnlyBitSet} other A bitset object
     * @returns {BitSet} A new BitSet object, containing the bitwise XOR of this and other
     */
    xor(other: ReadOnlyBitSet): BitSet;

    /**
     * Compares two BitSet objects
     *
     * Ex:
     * bs1 = new BitSet(10);
     * bs2 = new BitSet(10);
     *
     * bs1.equals(bs2) ? 'yes' : 'no'
     *
     * @param {ReadOnlyBitSet} other A bitset object
     * @returns {boolean} Whether the two BitSets have the same bits set (valid for indefinite sets as well)
     */
    equals(other: ReadOnlyBitSet): boolean;

    /**
    * Clones the actual object
    *
    * Ex:
    * bs1 = new BitSet(10);
    * 
    * bs2 = bs1.clone();
    *
    * @returns {ReadOnlyBitSet} A new BitSet object, containing a copy of the actual object
    */
    clone(): BitSet;

    /**
     * Check if the BitSet is empty, means all bits are unset
     *
     * Ex:
     * bs1 = new BitSet(10);
     *
     * bs1.isEmpty() ? 'yes' : 'no'
     *
     * @returns {boolean} Whether the bitset is empty
     */
    isEmpty(): boolean;

    /**
     * Overrides the toString method to get a binary representation of the BitSet
     *
     * @param {number=} base
     * @returns string A binary string
     */
    toString(base?: number): string;

    /**
     * Gets a list of set bits
     *
     * @returns {Array}
     */
    toArray(): Array<number>;

    /**
     * Calculates the number of bits set
     *
     * Ex:
     * bs1 = new BitSet(10);
     *
     * num = bs1.cardinality();
     *
     * @returns {number} The number of bits set
     */
    cardinality(): number;

    /**
     * Calculates the Most Significant Bit / log base two
     *
     * Ex:
     * bs1 = new BitSet(10);
     *
     * logbase2 = bs1.msb();
     *
     * truncatedTwo = Math.pow(2, logbase2); // May overflow!
     *
     * @returns {number} The index of the highest bit set
     */
    msb(): number;

    /**
     * Calculates the Least Significant Bit
     *
     * Ex:
     * bs1 = new BitSet(10);
     *
     * lsb = bs1.lsb();
     *
     * @returns {number} The index of the lowest bit set
     */
    lsb(): number;

    /**
     * Calculates the number of trailing zeros
     *
     * Ex:
     * bs1 = new BitSet(10);
     *
     * ntz = bs1.ntz();
     *
     * @returns {number} The index of the lowest bit set
     */
    ntz(): number;

    /**
     * Get a single bit flag of a certain bit position
     *
     * Ex:
     * bs1 = new BitSet();
     * isValid = bs1.get(12);
     *
     * @param {number} index the index to be fetched
     * @returns {number|null} The binary flag
     */
    get(index: number): number;

    /**
     * Gets an entire range as a new bitset object
     *
     * Ex:
     * bs1 = new BitSet();
     * 
     * var res = bs1.slice(4, 8);
     *
     * @param {number=} fromIndex The start index of the range to be get
     * @param {number=} toIndex The end index of the range to be get
     * @returns {BitSet|null} A new smaller bitset object, containing the extracted range
     */
    slice(fromIndex?: number, toIndex?: number): BitSet;
    
    /**
    * Iterates over the set bits
    */
    [Symbol.iterator](): Iterator<number>;
}
export declare var ReadOnlyBitSet: ReadOnlyBitSet;

export declare class BitSet implements ReadOnlyBitSet
{
    /**
     * @constructor create a new BitSet
     * @param {String | number | BitSet | Array<number> | Uint8Array | ReadOnlyBitSet} input
     *
     * Strings
     *
     * - Binary strings "010101"
     * - Binary strings with prefix "0b100101"
     * - Hexadecimal strings with prefix "0xaffe"
     *
     * Arrays
     * - The values of the array are the indizes to be set to 1
     *
     * Uint8Array
     * - A binary representation in 8 bit form
     *
     * Number
     * - A binary value
     * 
     * BitSet | ReadOnlyBitSet
     * - A BitSet object, which is cloned
     *
     */
    constructor(input?: String | number | BitSet | Array<number> | Uint8Array | ReadOnlyBitSet);

    public static fromBinaryString(str: string): BitSet;
    public static fromHexString(str: string): BitSet;
    public static Random(n: number): BitSet;

    /**
     * Creates the bitwise AND of two sets.
     *
     * Ex:
     * bs1 = new BitSet(10);
     * bs2 = new BitSet(10);
     *
     * res = bs1.and(bs2);
     *
     * @param {ReadOnlyBitSet} other A bitset object
     * @returns {BitSet} A new BitSet object, containing the bitwise AND of this and other
     */
    and(other: ReadOnlyBitSet): BitSet;

    /**
    * Creates the bitwise OR of two sets.
    *
    * Ex:
    * bs1 = new BitSet(10);
    * bs2 = new BitSet(10);
    *
    * res = bs1.or(bs2);
    *
    * @param {ReadOnlyBitSet} other A bitset object
    * @returns {BitSet} A new BitSet object, containing the bitwise OR of this and other
    */
    or(other: ReadOnlyBitSet): BitSet;

    /**
     * Creates the bitwise AND NOT (not confuse with NAND!) of two sets.
     *
     * Ex:
     * bs1 = new BitSet(10);
     * bs2 = new BitSet(10);
     *
     * res = bs1.notAnd(bs2);
     *
     * @param {ReadOnlyBitSet} other A bitset object
     * @returns {BitSet} A new BitSet object, containing the bitwise AND NOT of this and other
     */
    andNot(other: ReadOnlyBitSet): BitSet;

    /**
    * Creates the bitwise NOT of a set.
    *
    * Ex:
    * bs1 = new BitSet(10);
    *
    * res = bs1.not();
    *
    * @returns {BitSet} A new BitSet object, containing the bitwise NOT of this
    */
    not(): BitSet;

    /**
     * Creates the bitwise XOR of two sets.
     *
     * Ex:
     * bs1 = new BitSet(10);
     * bs2 = new BitSet(10);
     *
     * res = bs1.xor(bs2);
     *
     * @param {ReadOnlyBitSet} other A bitset object
     * @returns {BitSet} A new BitSet object, containing the bitwise XOR of this and other
     */
    xor(other: ReadOnlyBitSet): BitSet;

    /**
     * Compares two BitSet objects
     *
     * Ex:
     * bs1 = new BitSet(10);
     * bs2 = new BitSet(10);
     *
     * bs1.equals(bs2) ? 'yes' : 'no'
     *
     * @param {ReadOnlyBitSet} other A bitset object
     * @returns {boolean} Whether the two BitSets have the same bits set (valid for indefinite sets as well)
     */
    equals(other: ReadOnlyBitSet): boolean;

    /**
    * Clones the actual object
    *
    * Ex:
    * bs1 = new BitSet(10);
    * 
    * bs2 = bs1.clone();
    *
    * @returns {ReadOnlyBitSet} A new BitSet object, containing a copy of the actual object
    */
    clone(): BitSet;

    /**
     * Check if the BitSet is empty, means all bits are unset
     *
     * Ex:
     * bs1 = new BitSet(10);
     *
     * bs1.isEmpty() ? 'yes' : 'no'
     *
     * @returns {boolean} Whether the bitset is empty
     */
    isEmpty(): boolean;

    /**
     * Overrides the toString method to get a binary representation of the BitSet
     *
     * @param {number=} base
     * @returns string A binary string
     */
    toString(base?: number): string;

    /**
     * Gets a list of set bits
     *
     * @returns {Array}
     */
    toArray(): Array<number>;

    /**
     * Calculates the number of bits set
     *
     * Ex:
     * bs1 = new BitSet(10);
     *
     * num = bs1.cardinality();
     *
     * @returns {number} The number of bits set
     */
    cardinality(): number;

    /**
     * Calculates the Most Significant Bit / log base two
     *
     * Ex:
     * bs1 = new BitSet(10);
     *
     * logbase2 = bs1.msb();
     *
     * truncatedTwo = Math.pow(2, logbase2); // May overflow!
     *
     * @returns {number} The index of the highest bit set
     */
    msb(): number;

    /**
     * Calculates the Least Significant Bit
     *
     * Ex:
     * bs1 = new BitSet(10);
     *
     * lsb = bs1.lsb();
     *
     * @returns {number} The index of the lowest bit set
     */
    lsb(): number;

    /**
     * Calculates the number of trailing zeros
     *
     * Ex:
     * bs1 = new BitSet(10);
     *
     * ntz = bs1.ntz();
     *
     * @returns {number} The index of the lowest bit set
     */
    ntz(): number;

    /**
     * Get a single bit flag of a certain bit position
     *
     * Ex:
     * bs1 = new BitSet();
     * isValid = bs1.get(12);
     *
     * @param {number} index the index to be fetched
     * @returns {number|null} The binary flag
     */
    get(index: number): number;

    /**
     * Gets an entire range as a new bitset object
     *
     * Ex:
     * bs1 = new BitSet();
     * 
     * var res = bs1.slice(4, 8);
     *
     * @param {number=} fromIndex The start index of the range to be get
     * @param {number=} toIndex The end index of the range to be get
     * @returns {BitSet|null} A new smaller bitset object, containing the extracted range
     */
    slice(fromIndex?: number, toIndex?: number): BitSet;

    /**
     * Set a single bit flag
     *
     * Ex:
     * bs1 = new BitSet(10);
     *
     * bs1.set(3, 1);
     *
     * @param {number} index The index of the bit to be set
     * @param {number=} value Optional value that should be set on the index (0 or 1)
     * @returns {BitSet} this
     */
    public set(index?: number, value?: number): BitSet;

    /**
     * Shift bits left by some number of bits.
     * @param {number} count The number of bits to shift
     */
    public lshift(count: number): BitSet;

    /**
     * Shift bits right by some number of bits, without sign extension.
     * @param {number} count The number of bits to shift
     */
    public rshift(count: number): BitSet;

    /**
     * Set a range of bits
     *
     * Ex:
     * bs1 = new BitSet();
     *
     * bs1.setRange(10, 15, 1);
     *
     * @param {number} fromIndex The start index of the range to be set
     * @param {number} toIndex The end index of the range to be set
     * @param {number=} value Optional value that should be set on the index (0 or 1)
     * @returns {BitSet} this
     */
    public setRange(fromIndex: number, toIndex: number, value?: number | string): BitSet;

    /**
     * Clear a range of bits by setting it to 0
     *
     * Ex:
     * bs1 = new BitSet();
     * bs1.clear(); // Clear entire set
     * bs1.clear(5); // Clear single bit
     * bs1.clar(3,10); // Clear a bit range
     *
     * @param {number=} fromIndex The start index of the range to be cleared
     * @param {number=} toIndex The end index of the range to be cleared
     * @returns {BitSet} this
     */
    public clear(fromIndex?: number, toIndex?: number): void;

    /**
     * Flip/Invert a range of bits by setting
     *
     * Ex:
     * bs1 = new BitSet();
     * bs1.flip(); // Flip entire set
     * bs1.flip(5); // Flip single bit
     * bs1.flip(3,10); // Flip a bit range
     *
     * @param {number=} fromIndex The start index of the range to be flipped
     * @param {number=} toIndex The end index of the range to be flipped
     * @returns {BitSet} this
     */
    public flip(fromIndex?: number, toIndex?: number): BitSet;

    /**
    * Iterates over the set bits
    */
    [Symbol.iterator](): Iterator<number>;
}

export default BitSet;
