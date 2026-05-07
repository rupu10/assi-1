Generics let you write reusable code while preserving type safety. Instead of hardcoding a type, you use a placeholder type that adapts to the data passed in.

function identity<T>(value: T): T {
  return value;
}

The function works with any type while still keeping accurate type information:

identity<string>("hello");
identity<number>(42);

This allows components and functions to remain flexible, reusable, and strictly typed without losing IntelliSense or compile-time safety.