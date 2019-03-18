import { ALLOCATE, REGISTER, ArrayBufferView } from "./runtime";
import { COMPARATOR, SORT as SORT_IMPL } from "./util/sort";

export class Int8Array extends ArrayBufferView {

  // @ts-ignore: decorator
  @lazy
  static readonly BYTES_PER_ELEMENT: usize = sizeof<i8>();

  constructor(length: i32) {
    super(length, alignof<i8>());
  }

  get buffer(): ArrayBuffer {
    return this.data;
  }

  get length(): i32 {
    return this.byteLength;
  }

  @operator("[]") // unchecked is built-in
  private __get(index: i32): i8 {
    if (<u32>index >= <u32>this.dataLength) throw new Error("Offset out of bounds");
    return load<i8>(this.dataStart + <usize>index);
  }

  @operator("[]=") // unchecked is built-in
  private __set(index: i32, value: native<i8>): void {
    if (<u32>index >= <u32>this.dataLength) throw new Error("Offset out of bounds");
    store<i8>(this.dataStart + <usize>index, value);
  }

  fill(value: i32, start: i32 = 0, end: i32 = i32.MAX_VALUE): Int8Array {
    return FILL<Int8Array, i8>(this, value, start, end);
  }

  sort(comparator: (a: i8, b: i8) => i32 = COMPARATOR<i8>()): Int8Array {
    return SORT<Int8Array, i8>(this, comparator);
  }

  subarray(begin: i32 = 0, end: i32 = 0x7fffffff): Int8Array {
    return SUBARRAY<Int8Array, i8>(this, begin, end);
  }

  reduce<T>(
    callbackfn: (accumulator: T, value: i8, index: i32, array: Int8Array) => T,
    initialValue: T,
  ): T {
    return REDUCE<Int8Array, i8, T>(this, callbackfn, initialValue);
  }

  reduceRight<T>(
    callbackfn: (accumulator: T, value: i8, index: i32, array: Int8Array) => T,
    initialValue: T,
  ): T {
    return REDUCE_RIGHT<Int8Array, i8, T>(this, callbackfn, initialValue);
  }

  map(callbackfn: (value: i8, index: i32, self: Int8Array) => i8): Int8Array {
    return MAP<Int8Array, i8>(this, callbackfn);
  }

  findIndex(callbackfn: (value: i8, index: i32, self: Int8Array) => bool): i32 {
    return FIND_INDEX<Int8Array, i8>(this, callbackfn);
  }

  some(callbackfn: (value: i8, index: i32, self: Int8Array) => bool): bool {
    return SOME<Int8Array, i8>(this, callbackfn);
  }

  every(callbackfn: (value: i8, index: i32, self: Int8Array) => bool): bool {
    return EVERY<Int8Array, i8>(this, callbackfn);
  }

  forEach(callbackfn: (value: i8, index: i32, self: Int8Array) => void): void {
    FOREACH<Int8Array, i8>(this, callbackfn);
  }

  reverse(): this {
    return REVERSE<this, i8>(this);
  }
}

export class Uint8Array extends ArrayBufferView {

  // @ts-ignore: decorator
  @lazy
  static readonly BYTES_PER_ELEMENT: usize = sizeof<u8>();

  constructor(length: i32) {
    super(length, alignof<u8>());
  }

  get buffer(): ArrayBuffer {
    return this.data;
  }

  get length(): i32 {
    return this.byteLength;
  }

  @operator("[]") // unchecked is built-in
  private __get(index: i32): u8 {
    if (<u32>index >= <u32>this.dataLength) throw new Error("Offset out of bounds");
    return load<u8>(this.dataStart + <usize>index);
  }

  @operator("[]=") // unchecked is built-in
  private __set(index: i32, value: native<u8>): void {
    if (<u32>index >= <u32>this.dataLength) throw new Error("Offset out of bounds");
    store<u8>(this.dataStart + <usize>index, value);
  }

  fill(value: u32, start: i32 = 0, end: i32 = i32.MAX_VALUE): Uint8Array {
    return FILL<Uint8Array, u8>(this, value, start, end);
  }

  sort(comparator: (a: u8, b: u8) => i32 = COMPARATOR<u8>()): Uint8Array {
    return SORT<Uint8Array, u8>(this, comparator);
  }

  subarray(begin: i32 = 0, end: i32 = 0x7fffffff): Uint8Array {
    return SUBARRAY<Uint8Array, u8>(this, begin, end);
  }

  reduce<T>(
    callbackfn: (accumulator: T, value: u8, index: i32, array: Uint8Array) => T,
    initialValue: T,
  ): T {
    return REDUCE<Uint8Array, u8, T>(this, callbackfn, initialValue);
  }

  reduceRight<T>(
    callbackfn: (accumulator: T, value: u8, index: i32, array: Uint8Array) => T,
    initialValue: T,
  ): T {
    return REDUCE_RIGHT<Uint8Array, u8, T>(this, callbackfn, initialValue);
  }

  map(callbackfn: (value: u8, index: i32, self: Uint8Array) => u8): Uint8Array {
    return MAP<Uint8Array, u8>(this, callbackfn);
  }

  findIndex(callbackfn: (value: u8, index: i32, self: Uint8Array) => bool): i32 {
    return FIND_INDEX<Uint8Array, u8>(this, callbackfn);
  }

  some(callbackfn: (value: u8, index: i32, self: Uint8Array) => bool): bool {
    return SOME<Uint8Array, u8>(this, callbackfn);
  }

  every(callbackfn: (value: u8, index: i32, self: Uint8Array) => bool): bool {
    return EVERY<Uint8Array, u8>(this, callbackfn);
  }

  forEach(callbackfn: (value: u8, index: i32, self: Uint8Array) => void): void {
    FOREACH<Uint8Array, u8>(this, callbackfn);
  }

  reverse(): this {
    return REVERSE<this, u8>(this);
  }
}

export class Uint8ClampedArray extends ArrayBufferView {

  // @ts-ignore: decorator
  @lazy
  static readonly BYTES_PER_ELEMENT: usize = sizeof<u8>();

  constructor(length: i32) {
    super(length, alignof<u8>());
  }

  get buffer(): ArrayBuffer {
    return this.data;
  }

  get length(): i32 {
    return this.byteLength;
  }

  @operator("[]") // unchecked is built-in
  private __get(index: i32): u8 {
    if (<u32>index >= <u32>this.dataLength) throw new Error("Offset out of bounds");
    return load<u8>(this.dataStart + <usize>index);
  }

  @operator("[]=") // unchecked is built-in
  private __set(index: i32, value: native<u8>): void {
    if (<u32>index >= <u32>this.dataLength) throw new Error("Offset out of bounds");
    store<u8>(this.dataStart + <usize>index, ~(<i32>value >> 31) & (((255 - value) >> 31) | value));
  }

  fill(value: u32, start: i32 = 0, end: i32 = i32.MAX_VALUE): Uint8ClampedArray {
    return FILL<Uint8ClampedArray, u8>(this, value, start, end);
  }

  sort(comparator: (a: u8, b: u8) => i32 = COMPARATOR<u8>()): Uint8ClampedArray {
    return SORT<Uint8ClampedArray, u8>(this, comparator);
  }

  subarray(begin: i32 = 0, end: i32 = 0x7fffffff): Uint8ClampedArray {
    return SUBARRAY<Uint8ClampedArray, u8>(this, begin, end);
  }

  reduce<T>(
    callbackfn: (accumulator: T, value: u8, index: i32, array: Uint8ClampedArray) => T,
    initialValue: T,
  ): T {
    return REDUCE<Uint8ClampedArray, u8, T>(this, callbackfn, initialValue);
  }

  reduceRight<T>(
    callbackfn: (accumulator: T, value: u8, index: i32, array: Uint8ClampedArray) => T,
    initialValue: T,
  ): T {
    return REDUCE_RIGHT<Uint8ClampedArray, u8, T>(this, callbackfn, initialValue);
  }

  map(callbackfn: (value: u8, index: i32, self: Uint8ClampedArray) => u8): Uint8ClampedArray {
    return MAP<Uint8ClampedArray, u8>(this, callbackfn);
  }

  findIndex(callbackfn: (value: u8, index: i32, self: Uint8ClampedArray) => bool): i32 {
    return FIND_INDEX<Uint8ClampedArray, u8>(this, callbackfn);
  }

  some(callbackfn: (value: u8, index: i32, self: Uint8ClampedArray) => bool): bool {
    return SOME<Uint8ClampedArray, u8>(this, callbackfn);
  }

  every(callbackfn: (value: u8, index: i32, self: Uint8ClampedArray) => bool): bool {
    return EVERY<Uint8ClampedArray, u8>(this, callbackfn);
  }

  forEach(callbackfn: (value: u8, index: i32, self: Uint8ClampedArray) => void): void {
    FOREACH<Uint8ClampedArray, u8>(this, callbackfn);
  }

  reverse(): this {
    return REVERSE<this, u8>(this);
  }
}

export class Int16Array extends ArrayBufferView {

  // @ts-ignore: decorator
  @lazy
  static readonly BYTES_PER_ELEMENT: usize = sizeof<i16>();

  constructor(length: i32) {
    super(length, alignof<i16>());
  }

  get buffer(): ArrayBuffer {
    return this.data;
  }

  get length(): i32 {
    return this.byteLength >>> alignof<i16>();
  }

  @operator("[]") // unchecked is built-in
  private __get(index: i32): i16 {
    if (<u32>index >= <u32>this.dataLength >>> alignof<i16>()) throw new Error("Offset out of bounds");
    return load<i16>(this.dataStart + (<usize>index << alignof<i16>()));
  }

  @operator("[]=") // unchecked is built-in
  private __set(index: i32, value: native<i16>): void {
    if (<u32>index >= <u32>this.dataLength >>> alignof<i16>()) throw new Error("Offset out of bounds");
    store<i16>(this.dataStart + (<usize>index << alignof<i16>()), value);
  }

  fill(value: i32, start: i32 = 0, end: i32 = i32.MAX_VALUE): Int16Array {
    return FILL<Int16Array, i16>(this, value, start, end);
  }

  sort(comparator: (a: i16, b: i16) => i32 = COMPARATOR<i16>()): Int16Array {
    return SORT<Int16Array, i16>(this, comparator);
  }

  subarray(begin: i32 = 0, end: i32 = 0x7fffffff): Int16Array {
    return SUBARRAY<Int16Array, i16>(this, begin, end);
  }

  reduce<T>(
    callbackfn: (accumulator: T, value: i16, index: i32, array: Int16Array) => T,
    initialValue: T,
  ): T {
    return REDUCE<Int16Array, i16, T>(this, callbackfn, initialValue);
  }

  reduceRight<T>(
    callbackfn: (accumulator: T, value: i16, index: i32, array: Int16Array) => T,
    initialValue: T,
  ): T {
    return REDUCE_RIGHT<Int16Array, i16, T>(this, callbackfn, initialValue);
  }

  map(callbackfn: (value: i16, index: i32, self: Int16Array) => i16): Int16Array {
    return MAP<Int16Array, i16>(this, callbackfn);
  }

  findIndex(callbackfn: (value: i16, index: i32, self: Int16Array) => bool): i32 {
    return FIND_INDEX<Int16Array, i16>(this, callbackfn);
  }

  some(callbackfn: (value: i16, index: i32, self: Int16Array) => bool): bool {
    return SOME<Int16Array, i16>(this, callbackfn);
  }

  every(callbackfn: (value: i16, index: i32, self: Int16Array) => bool): bool {
    return EVERY<Int16Array, i16>(this, callbackfn);
  }

  forEach(callbackfn: (value: i16, index: i32, self: Int16Array) => void): void {
    FOREACH<Int16Array, i16>(this, callbackfn);
  }

  reverse(): this {
    return REVERSE<this, i16>(this);
  }
}

export class Uint16Array extends ArrayBufferView {

  // @ts-ignore: decorator
  @lazy
  static readonly BYTES_PER_ELEMENT: usize = sizeof<u16>();

  constructor(length: i32) {
    super(length, alignof<u16>());
  }

  get buffer(): ArrayBuffer {
    return this.data;
  }

  get length(): i32 {
    return this.byteLength >>> alignof<u16>();
  }

  @operator("[]") // unchecked is built-in
  private __get(index: i32): u16 {
    if (<u32>index >= <u32>this.dataLength >>> alignof<u16>()) throw new Error("Offset out of bounds");
    return load<u16>(this.dataStart + (<usize>index << alignof<u16>()));
  }

  @operator("[]=") // unchecked is built-in
  private __set(index: i32, value: native<u16>): void {
    if (<u32>index >= <u32>this.dataLength >>> alignof<u16>()) throw new Error("Offset out of bounds");
    store<u16>(this.dataStart + (<usize>index << alignof<u16>()), value);
  }

  fill(value: u32, start: i32 = 0, end: i32 = i32.MAX_VALUE): Uint16Array {
    return FILL<Uint16Array, u16>(this, value, start, end);
  }

  sort(comparator: (a: u16, b: u16) => i32 = COMPARATOR<u16>()): Uint16Array {
    return SORT<Uint16Array, u16>(this, comparator);
  }

  subarray(begin: i32 = 0, end: i32 = 0x7fffffff): Uint16Array {
    return SUBARRAY<Uint16Array, u16>(this, begin, end);
  }

  reduce<T>(
    callbackfn: (accumulator: T, value: u16, index: i32, array: Uint16Array) => T,
    initialValue: T,
  ): T {
    return REDUCE<Uint16Array, u16, T>(this, callbackfn, initialValue);
  }

  reduceRight<T>(
    callbackfn: (accumulator: T, value: u16, index: i32, array: Uint16Array) => T,
    initialValue: T,
  ): T {
    return REDUCE_RIGHT<Uint16Array, u16, T>(this, callbackfn, initialValue);
  }

  map(callbackfn: (value: u16, index: i32, self: Uint16Array) => u16): Uint16Array {
    return MAP<Uint16Array, u16>(this, callbackfn);
  }

  findIndex(callbackfn: (value: u16, index: i32, self: Uint16Array) => bool): i32 {
    return FIND_INDEX<Uint16Array, u16>(this, callbackfn);
  }

  some(callbackfn: (value: u16, index: i32, self: Uint16Array) => bool): bool {
    return SOME<Uint16Array, u16>(this, callbackfn);
  }

  every(callbackfn: (value: u16, index: i32, self: Uint16Array) => bool): bool {
    return EVERY<Uint16Array, u16>(this, callbackfn);
  }

  forEach(callbackfn: (value: u16, index: i32, self: Uint16Array) => void): void {
    FOREACH<Uint16Array, u16>(this, callbackfn);
  }

  reverse(): this {
    return REVERSE<this, u16>(this);
  }
}

export class Int32Array extends ArrayBufferView {

  // @ts-ignore: decorator
  @lazy
  static readonly BYTES_PER_ELEMENT: usize = sizeof<i32>();

  constructor(length: i32) {
    super(length, alignof<i32>());
  }

  get buffer(): ArrayBuffer {
    return this.data;
  }

  get length(): i32 {
    return this.byteLength >>> alignof<i32>();
  }

  @operator("[]") // unchecked is built-in
  private __get(index: i32): i32 {
    if (<u32>index >= <u32>this.dataLength >>> alignof<i32>()) throw new Error("Offset out of bounds");
    return load<i32>(this.dataStart + (<usize>index << alignof<i32>()));
  }

  @operator("[]=") // unchecked is built-in
  private __set(index: i32, value: i32): void {
    if (<u32>index >= <u32>this.dataLength >>> alignof<i32>()) throw new Error("Offset out of bounds");
    store<i32>(this.dataStart + (<usize>index << alignof<i32>()), value);
  }

  fill(value: i32, start: i32 = 0, end: i32 = i32.MAX_VALUE): Int32Array {
    return FILL<Int32Array, i32>(this, value, start, end);
  }

  sort(comparator: (a: i32, b: i32) => i32 = COMPARATOR<i32>()): Int32Array {
    return SORT<Int32Array, i32>(this, comparator);
  }

  subarray(begin: i32 = 0, end: i32 = 0x7fffffff): Int32Array {
    return SUBARRAY<Int32Array, i32>(this, begin, end);
  }

  reduce<T>(
    callbackfn: (accumulator: T, value: i32, index: i32, array: Int32Array) => T,
    initialValue: T,
  ): T {
    return REDUCE<Int32Array, i32, T>(this, callbackfn, initialValue);
  }

  reduceRight<T>(
    callbackfn: (accumulator: T, value: i32, index: i32, array: Int32Array) => T,
    initialValue: T,
  ): T {
    return REDUCE_RIGHT<Int32Array, i32, T>(this, callbackfn, initialValue);
  }

  map(callbackfn: (value: i32, index: i32, self: Int32Array) => i32): Int32Array {
    return MAP<Int32Array, i32>(this, callbackfn);
  }

  findIndex(callbackfn: (value: i32, index: i32, self: Int32Array) => bool): i32 {
    return FIND_INDEX<Int32Array, i32>(this, callbackfn);
  }

  some(callbackfn: (value: i32, index: i32, self: Int32Array) => bool): bool {
    return SOME<Int32Array, i32>(this, callbackfn);
  }

  every(callbackfn: (value: i32, index: i32, self: Int32Array) => bool): bool {
    return EVERY<Int32Array, i32>(this, callbackfn);
  }

  forEach(callbackfn: (value: i32, index: i32, self: Int32Array) => void): void {
    FOREACH<Int32Array, i32>(this, callbackfn);
  }

  reverse(): this {
    return REVERSE<this, i32>(this);
  }
}

export class Uint32Array extends ArrayBufferView {

  // @ts-ignore: decorator
  @lazy
  static readonly BYTES_PER_ELEMENT: usize = sizeof<u32>();

  constructor(length: i32) {
    super(length, alignof<u32>());
  }

  get buffer(): ArrayBuffer {
    return this.data;
  }

  get length(): i32 {
    return this.byteLength >>> alignof<u32>();
  }

  @operator("[]") // unchecked is built-in
  private __get(index: i32): u32 {
    if (<u32>index >= <u32>this.dataLength >>> alignof<u32>()) throw new Error("Offset out of bounds");
    return load<u32>(this.dataStart + (<usize>index << alignof<u32>()));
  }

  @operator("[]=") // unchecked is built-in
  private __set(index: i32, value: u32): void {
    if (<u32>index >= <u32>this.dataLength >>> alignof<u32>()) throw new Error("Offset out of bounds");
    store<u32>(this.dataStart + (<usize>index << alignof<u32>()), value);
  }

  fill(value: u32, start: i32 = 0, end: i32 = i32.MAX_VALUE): Uint32Array {
    return FILL<Uint32Array, u32>(this, value, start, end);
  }

  sort(comparator: (a: u32, b: u32) => i32 = COMPARATOR<u32>()): Uint32Array {
    return SORT<Uint32Array, u32>(this, comparator);
  }

  subarray(begin: i32 = 0, end: i32 = 0x7fffffff): Uint32Array {
    return SUBARRAY<Uint32Array, u32>(this, begin, end);
  }

  reduce<T>(
    callbackfn: (accumulator: T, value: u32, index: i32, array: Uint32Array) => T,
    initialValue: T,
  ): T {
    return REDUCE<Uint32Array, u32, T>(this, callbackfn, initialValue);
  }

  reduceRight<T>(
    callbackfn: (accumulator: T, value: u32, index: i32, array: Uint32Array) => T,
    initialValue: T,
  ): T {
    return REDUCE_RIGHT<Uint32Array, u32, T>(this, callbackfn, initialValue);
  }

  map(callbackfn: (value: u32, index: i32, self: Uint32Array) => u32): Uint32Array {
    return MAP<Uint32Array, u32>(this, callbackfn);
  }

  findIndex(callbackfn: (value: u32, index: i32, self: Uint32Array) => bool): i32 {
    return FIND_INDEX<Uint32Array, u32>(this, callbackfn);
  }

  some(callbackfn: (value: u32, index: i32, self: Uint32Array) => bool): bool {
    return SOME<Uint32Array, u32>(this, callbackfn);
  }

  every(callbackfn: (value: u32, index: i32, self: Uint32Array) => bool): bool {
    return EVERY<Uint32Array, u32>(this, callbackfn);
  }

  forEach(callbackfn: (value: u32, index: i32, self: Uint32Array) => void): void {
    FOREACH<Uint32Array, u32>(this, callbackfn);
  }

  reverse(): this {
    return REVERSE<this, u32>(this);
  }
}

export class Int64Array extends ArrayBufferView {

  // @ts-ignore: decorator
  @lazy
  static readonly BYTES_PER_ELEMENT: usize = sizeof<i64>();

  constructor(length: i32) {
    super(length, alignof<i64>());
  }

  get buffer(): ArrayBuffer {
    return this.data;
  }

  get length(): i32 {
    return this.byteLength >>> alignof<i64>();
  }

  @operator("[]") // unchecked is built-in
  private __get(index: i32): i64 {
    if (<u32>index >= <u32>this.dataLength >>> alignof<i64>()) throw new Error("Offset out of bounds");
    return load<i64>(this.dataStart + (<usize>index << alignof<i64>()));
  }

  @operator("[]=") // unchecked is built-in
  private __set(index: i32, value: i64): void {
    if (<u32>index >= <u32>this.dataLength >>> alignof<i64>()) throw new Error("Offset out of bounds");
    store<i64>(this.dataStart + (<usize>index << alignof<i64>()), value);
  }

  fill(value: i64, start: i32 = 0, end: i32 = i32.MAX_VALUE): Int64Array {
    return FILL<Int64Array, i64>(this, value, start, end);
  }

  sort(comparator: (a: i64, b: i64) => i32 = COMPARATOR<i64>()): Int64Array {
    return SORT<Int64Array, i64>(this, comparator);
  }

  subarray(begin: i32 = 0, end: i32 = 0x7fffffff): Int64Array {
    return SUBARRAY<Int64Array, i64>(this, begin, end);
  }

  reduce<T>(
    callbackfn: (accumulator: T, value: i64, index: i32, array: Int64Array) => T,
    initialValue: T,
  ): T {
    return REDUCE<Int64Array, i64, T>(this, callbackfn, initialValue);
  }

  reduceRight<T>(
    callbackfn: (accumulator: T, value: i64, index: i32, array: Int64Array) => T,
    initialValue: T,
  ): T {
    return REDUCE_RIGHT<Int64Array, i64, T>(this, callbackfn, initialValue);
  }

  map(callbackfn: (value: i64, index: i32, self: Int64Array) => i64): Int64Array {
    return MAP<Int64Array, i64>(this, callbackfn);
  }

  findIndex(callbackfn: (value: i64, index: i32, self: Int64Array) => bool): i32 {
    return FIND_INDEX<Int64Array, i64>(this, callbackfn);
  }

  some(callbackfn: (value: i64, index: i32, self: Int64Array) => bool): bool {
    return SOME<Int64Array, i64>(this, callbackfn);
  }

  every(callbackfn: (value: i64, index: i32, self: Int64Array) => bool): bool {
    return EVERY<Int64Array, i64>(this, callbackfn);
  }

  forEach(callbackfn: (value: i64, index: i32, self: Int64Array) => void): void {
    FOREACH<Int64Array, i64>(this, callbackfn);
  }

  reverse(): this {
    return REVERSE<this, i64>(this);
  }
}

export class Uint64Array extends ArrayBufferView {

  // @ts-ignore: decorator
  @lazy
  static readonly BYTES_PER_ELEMENT: usize = sizeof<u64>();

  constructor(length: i32) {
    super(length, alignof<u64>());
  }

  get buffer(): ArrayBuffer {
    return this.data;
  }

  get length(): i32 {
    return this.byteLength >>> alignof<u64>();
  }

  @operator("[]") // unchecked is built-in
  private __get(index: i32): u64 {
    if (<u32>index >= <u32>this.dataLength >>> alignof<u64>()) throw new Error("Offset out of bounds");
    return load<u64>(this.dataStart + (<usize>index << alignof<u64>()));
  }

  @operator("[]=") // unchecked is built-in
  private __set(index: i32, value: u64): void {
    if (<u32>index >= <u32>this.dataLength >>> alignof<u64>()) throw new Error("Offset out of bounds");
    store<u64>(this.dataStart + (<usize>index << alignof<u64>()), value);
  }

  fill(value: u64, start: i32 = 0, end: i32 = i32.MAX_VALUE): Uint64Array {
    return FILL<Uint64Array, u64>(this, value, start, end);
  }

  sort(comparator: (a: u64, b: u64) => i32 = COMPARATOR<u64>()): Uint64Array {
    return SORT<Uint64Array, u64>(this, comparator);
  }

  subarray(begin: i32 = 0, end: i32 = 0x7fffffff): Uint64Array {
    return SUBARRAY<Uint64Array, u64>(this, begin, end);
  }

  reduce<T>(
    callbackfn: (accumulator: T, value: u64, index: i32, array: Uint64Array) => T,
    initialValue: T,
  ): T {
    return REDUCE<Uint64Array, u64, T>(this, callbackfn, initialValue);
  }

  reduceRight<T>(
    callbackfn: (accumulator: T, value: u64, index: i32, array: Uint64Array) => T,
    initialValue: T,
  ): T {
    return REDUCE_RIGHT<Uint64Array, u64, T>(this, callbackfn, initialValue);
  }

  map(callbackfn: (value: u64, index: i32, self: Uint64Array) => u64): Uint64Array {
    return MAP<Uint64Array, u64>(this, callbackfn);
  }

  findIndex(callbackfn: (value: u64, index: i32, self: Uint64Array) => bool): i32 {
    return FIND_INDEX<Uint64Array, u64>(this, callbackfn);
  }

  some(callbackfn: (value: u64, index: i32, self: Uint64Array) => bool): bool {
    return SOME<Uint64Array, u64>(this, callbackfn);
  }

  every(callbackfn: (value: u64, index: i32, self: Uint64Array) => bool): bool {
    return EVERY<Uint64Array, u64>(this, callbackfn);
  }

  forEach(callbackfn: (value: u64, index: i32, self: Uint64Array) => void): void {
    FOREACH<Uint64Array, u64>(this, callbackfn);
  }

  reverse(): this {
    return REVERSE<this, u64>(this);
  }
}

export class Float32Array extends ArrayBufferView {

  // @ts-ignore: decorator
  @lazy
  static readonly BYTES_PER_ELEMENT: usize = sizeof<f32>();

  constructor(length: i32) {
    super(length, alignof<f32>());
  }

  get buffer(): ArrayBuffer {
    return this.data;
  }

  get length(): i32 {
    return this.byteLength >>> alignof<f32>();
  }

  @operator("[]") // unchecked is built-in
  private __get(index: i32): f32 {
    if (<u32>index >= <u32>this.dataLength >>> alignof<f32>()) throw new Error("Offset out of bounds");
    return load<f32>(this.dataStart + (<usize>index << alignof<f32>()));
  }

  @operator("[]=") // unchecked is built-in
  private __set(index: i32, value: f32): void {
    if (<u32>index >= <u32>this.dataLength >>> alignof<f32>()) throw new Error("Offset out of bounds");
    store<f32>(this.dataStart + (<usize>index << alignof<f32>()), value);
  }

  fill(value: f32, start: i32 = 0, end: i32 = i32.MAX_VALUE): Float32Array {
    return FILL<Float32Array, f32>(this, value, start, end);
  }

  sort(comparator: (a: f32, b: f32) => i32 = COMPARATOR<f32>()): Float32Array {
    return SORT<Float32Array, f32>(this, comparator);
  }

  subarray(begin: i32 = 0, end: i32 = 0x7fffffff): Float32Array {
    return SUBARRAY<Float32Array, f32>(this, begin, end);
  }

  reduce<T>(
    callbackfn: (accumulator: T, value: f32, index: i32, array: Float32Array) => T,
    initialValue: T,
  ): T {
    return REDUCE<Float32Array, f32, T>(this, callbackfn, initialValue);
  }

  reduceRight<T>(
    callbackfn: (accumulator: T, value: f32, index: i32, array: Float32Array) => T,
    initialValue: T,
  ): T {
    return REDUCE_RIGHT<Float32Array, f32, T>(this, callbackfn, initialValue);
  }

  map(callbackfn: (value: f32, index: i32, self: Float32Array) => f32): Float32Array {
    return MAP<Float32Array, f32>(this, callbackfn);
  }

  findIndex(callbackfn: (value: f32, index: i32, self: Float32Array) => bool): i32 {
    return FIND_INDEX<Float32Array, f32>(this, callbackfn);
  }

  some(callbackfn: (value: f32, index: i32, self: Float32Array) => bool): bool {
    return SOME<Float32Array, f32>(this, callbackfn);
  }

  every(callbackfn: (value: f32, index: i32, self: Float32Array) => bool): bool {
    return EVERY<Float32Array, f32>(this, callbackfn);
  }

  forEach(callbackfn: (value: f32, index: i32, self: Float32Array) => void): void {
    FOREACH<Float32Array, f32>(this, callbackfn);
  }

  reverse(): this {
    return REVERSE<this, f32>(this);
  }
}

export class Float64Array extends ArrayBufferView {

  // @ts-ignore: decorator
  @lazy
  static readonly BYTES_PER_ELEMENT: usize = sizeof<f64>();

  constructor(length: i32) {
    super(length, alignof<f64>());
  }

  get buffer(): ArrayBuffer {
    return this.data;
  }

  get length(): i32 {
    return this.byteLength >>> alignof<f64>();
  }

  @operator("[]") // unchecked is built-in
  private __get(index: i32): f64 {
    if (<u32>index >= <u32>this.dataLength >>> alignof<f64>()) throw new Error("Offset out of bounds");
    return load<f64>(this.dataStart + (<usize>index << alignof<f64>()));
  }

  @operator("[]=") // unchecked is built-in
  private __set(index: i32, value: f64): void {
    if (<u32>index >= <u32>this.dataLength >>> alignof<f64>()) throw new Error("Offset out of bounds");
    store<f64>(this.dataStart + (<usize>index << alignof<f64>()), value);
  }

  fill(value: f64, start: i32 = 0, end: i32 = i32.MAX_VALUE): Float64Array {
    return FILL<Float64Array, f64>(this, value, start, end);
  }

  sort(comparator: (a: f64, b: f64) => i32 = COMPARATOR<f64>()): Float64Array {
    return SORT<Float64Array, f64>(this, comparator);
  }

  subarray(begin: i32 = 0, end: i32 = 0x7fffffff): Float64Array {
    return SUBARRAY<Float64Array, f64>(this, begin, end);
  }

  reduce<T>(
    callbackfn: (accumulator: T, value: f64, index: i32, array: Float64Array) => T,
    initialValue: T,
  ): T {
    return REDUCE<Float64Array, f64, T>(this, callbackfn, initialValue);
  }

  reduceRight<T>(
    callbackfn: (accumulator: T, value: f64, index: i32, array: Float64Array) => T,
    initialValue: T,
  ): T {
    return REDUCE_RIGHT<Float64Array, f64, T>(this, callbackfn, initialValue);
  }

  map(callbackfn: (value: f64, index: i32, self: Float64Array) => f64): Float64Array {
    return MAP<Float64Array, f64>(this, callbackfn);
  }

  findIndex(callbackfn: (value: f64, index: i32, self: Float64Array) => bool): i32 {
    return FIND_INDEX<Float64Array, f64>(this, callbackfn);
  }

  some(callbackfn: (value: f64, index: i32, self: Float64Array) => bool): bool {
    return SOME<Float64Array, f64>(this, callbackfn);
  }

  every(callbackfn: (value: f64, index: i32, self: Float64Array) => bool): bool {
    return EVERY<Float64Array, f64>(this, callbackfn);
  }

  forEach(callbackfn: (value: f64, index: i32, self: Float64Array) => void): void {
    FOREACH<Float64Array, f64>(this, callbackfn);
  }

  reverse(): this {
    return REVERSE<this, f64>(this);
  }
}

// @ts-ignore: decorator
@inline
function FILL<TArray extends ArrayBufferView, T extends number>(
  array: TArray,
  value: native<T>,
  start: i32,
  end: i32
): TArray {
  var dataStart = array.dataStart;
  var length = array.length;
  start = start < 0 ? max(length + start, 0) : min(start, length);
  end   = end   < 0 ? max(length + end,   0) : min(end,   length);
  if (sizeof<T>() == 1) {
    if (start < end) memory.fill(dataStart + <usize>start, <u8>value, <usize>(end - start));
  } else {
    for (; start < end; ++start) {
      store<T>(dataStart + (<usize>start << alignof<T>()), value);
    }
  }
  return array;
}

// @ts-ignore: decorator
@inline
function SORT<TArray extends ArrayBufferView, T>(
  array: TArray,
  comparator: (a: T, b: T) => i32
): TArray {
  var length = array.length;
  if (length <= 1) return array;
  var base = array.dataStart;
  if (length == 2) {
    let a: T = load<T>(base, sizeof<T>()); // a = arr[1]
    let b: T = load<T>(base); // b = arr[0]
    if (comparator(a, b) < 0) {
      store<T>(base, b, sizeof<T>()); // arr[1] = b
      store<T>(base, a); // arr[0] = a
    }
    return array;
  }
  SORT_IMPL<T>(base, length, comparator);
  return array;
}

// @ts-ignore: decorator
@inline
function SUBARRAY<TArray extends ArrayBufferView, T>(
  array: TArray,
  begin: i32,
  end: i32
): TArray {
  var length = <i32>array.length;
  if (begin < 0) begin = max(length + begin, 0);
  else begin = min(begin, length);
  if (end < 0) end = max(length + end, begin);
  else end = max(min(end, length), begin);
  var out = REGISTER<TArray>(ALLOCATE(offsetof<TArray>()));
  var data = array.data;
  var dataStart = array.dataStart;
  changetype<ArrayBufferView>(out).data = data; // links
  changetype<ArrayBufferView>(out).dataStart = dataStart + (<usize>begin << alignof<T>());
  changetype<ArrayBufferView>(out).dataLength = (end - begin) << alignof<T>();
  return out;
}

// @ts-ignore: decorator
@inline
function REDUCE<TArray extends ArrayBufferView, T, TRet>(
  array: TArray,
  callbackfn: (accumulator: TRet, value: T, index: i32, array: TArray) => TRet,
  initialValue: TRet
): TRet {
  var dataStart = array.dataStart;
  for (let i = 0, k = array.length; i < k; i++) {
    initialValue = callbackfn(initialValue, load<T>(dataStart + (<usize>i << alignof<T>())), i, array);
  }
  return initialValue;
}

// @ts-ignore: decorator
@inline
function REDUCE_RIGHT<TArray extends ArrayBufferView, T, TRet>(
  array: TArray,
  callbackfn: (accumulator: TRet, value: T, index: i32, array: TArray) => TRet,
  initialValue: TRet
): TRet {
  var dataStart = array.dataStart;
  for (let i = array.length - 1; i >= 0; i--) {
    initialValue = callbackfn(initialValue, load<T>(dataStart + (<usize>i << alignof<T>())), i, array);
  }
  return initialValue;
}

// @ts-ignore: decorator
@inline
function MAP<TArray extends ArrayBufferView, T>(
  array: TArray,
  callbackfn: (value: T, index: i32, self: TArray) => T,
): TArray {
  var length = array.length;
  var dataStart = array.dataStart;
  var out = instantiate<TArray>(length);
  var outDataStart = out.dataStart;
  for (let i = 0; i < length; i++) {
    store<T>(
      outDataStart + (<usize>i << alignof<T>()),
      callbackfn(load<T>(dataStart + (<usize>i << alignof<T>())), i, array)
    );
  }
  return out;
}

// @ts-ignore: decorator
@inline
function FIND_INDEX<TArray extends ArrayBufferView, T>(
  array: TArray,
  callbackfn: (value: T, index: i32, array: TArray) => bool,
): i32 {
  var dataStart = array.dataStart;
  for (let i = 0, k = array.length; i < k; i++) {
    if (callbackfn(load<T>(dataStart + (<usize>i << alignof<T>())), i, array)) return i;
  }
  return -1;
}

// @ts-ignore: decorator
@inline
function SOME<TArray extends ArrayBufferView, T>(
  array: TArray,
  callbackfn: (value: T, index: i32, array: TArray) => bool,
): bool {
  var dataStart = array.dataStart;
  for (let i = 0, k = array.length; i < k; i++) {
    if (callbackfn(load<T>(dataStart + (<usize>i << alignof<T>())), i, array)) return true;
  }
  return false;
}

// @ts-ignore: decorator
@inline
function EVERY<TArray extends ArrayBufferView, T>(
  array: TArray,
  callbackfn: (value: T, index: i32, array: TArray) => bool,
): bool {
  var dataStart = array.dataStart;
  for (let i = 0, k = array.length; i < k; i++) {
    if (callbackfn(load<T>(dataStart + (<usize>i << alignof<T>())), i, array)) continue;
    return false;
  }
  return true;
}

// @ts-ignore: decorator
@inline
function FOREACH<TArray extends ArrayBufferView, T>(
  array: TArray,
  callbackfn: (value: T, index: i32, array: TArray) => void,
): void {
  var dataStart = array.dataStart;
  for (let i = 0, k = array.length; i < k; i++) {
    callbackfn(load<T>(dataStart + (<usize>i << alignof<T>())), i, array);
  }
}

// @ts-ignore: decorator
@inline
export function REVERSE<TArray extends ArrayBufferView, T>(array: TArray): TArray {
  var dataStart = array.dataStart;
  for (let front = 0, back = array.length - 1; front < back; ++front, --back) {
    let frontPtr = dataStart + (<usize>front << alignof<T>());
    let backPtr = dataStart + (<usize>back << alignof<T>());
    let temp = load<T>(frontPtr);
    store<T>(frontPtr, load<T>(backPtr));
    store<T>(backPtr, temp);
  }
  return array;
}
