In TypeScript, any disables type checking. Once a value is typed as any, you can access properties, call functions, or assign invalid values without errors.

let value: any = "hello";

value.toFixed(); 

This is why any is called a type safety hole — it bypasses the protections TypeScript provides.

Why unknown Is Safer

unknown also accepts any value, but TypeScript forces you to verify the type before using it.

let value: unknown = "hello";

value.toUpperCase(); // Error

You must first narrow the type:

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

This prevents unsafe operations and reduces runtime bugs.

What Is Type Narrowing?

Type narrowing means refining a broad type (unknown, unions, etc.) into a more specific type using checks like:

- typeof
- instanceof
- Array.isArray()
- Custom type guards

Example:

function print(value: unknown) {
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  }
}