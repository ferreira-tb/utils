export type ExtractPartial<T, K extends keyof T> = Partial<T>[K];

export type ExtractRequired<T, K extends keyof T> = Required<T>[K];

/** Void function. */
export type Fn = () => void;

/** Something may be an array. */
export type MaybeArray<T> = T | T[];

/** Something may be a promise. */
export type MaybePromise<T> = T | PromiseLike<T>;

/** Null or undefined. */
// eslint-disable-next-line @typescript-eslint/naming-convention
export type nil = null | undefined;

/** Something may be nullish. */
export type Option<T> = T | nil;

/** Constructs a type where all properties of `T` may be null. */
export type PartialNull<T> = {
  [P in keyof T]: T[P] | null;
};

/** Constructs a type where all properties of `T` may be nullish. */
export type PartialNullish<T> = {
  [P in keyof T]?: Option<T[P]>;
};

/** Like `Pick`, but constructs the type based on the values. */
export type PickByValue<T, V> = {
  [P in keyof T as T[P] extends V ? P : never]: T[P];
};

/** Constructs a type by picking the set of properties `K` from a partial version of `T`. */
export type PickPartial<T, K extends keyof T> = Pick<Partial<T>, K>;

/** Constructs a type by picking the set of properties `K` from a required version of `T`. */
export type PickRequired<T, K extends keyof T> = Pick<Required<T>, K>;

/** Constructs a type where all properties of `T` may be written. */
export type Writable<T> = { -readonly [P in keyof T]: T[P] };

/** Constructs a type where all properties of `T` may be written and nullish. */
export type WritablePartial<T> = Writable<PartialNullish<T>>;

/** Constructs a type consisting of some properties of T set to partial. */
export type WithPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/** Constructs a type consisting of some properties of T set to required. */
export type WithRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
