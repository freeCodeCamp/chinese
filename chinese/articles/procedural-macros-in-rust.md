---
title: Procedural Macros in Rust – A Handbook for Beginners
date: 2024-04-24T17:49:17.000Z
author: Anshul Sanghi
authorURL: https://www.freecodecamp.org/news/author/anshulsanghi/
originalURL: https://www.freecodecamp.org/news/procedural-macros-in-rust/
translator: ""
reviewer: ""
---

/ [#Rust][1]

<!-- more -->

# Procedural Macros in Rust – A Handbook for Beginners

![Anshul Sanghi](https://www.freecodecamp.org/news/content/images/size/w60/2024/04/DSC02590.JPG)

[Anshul Sanghi][2]

  ![Procedural Macros in Rust – A Handbook for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2024/04/Procedural-Macros-in-Rust-Cover--1-.png)

In this handbook, you'll learn about procedural macros in Rust, and what purposes they serve. You'll also learn how to write your own procedural macros with both hypothetical and real-world examples.

This guide assumes that you're familiar with Rust and its basic concepts, such as data-types, iterators, and traits. If you need to establish or review your Rust basics, [check out this interactive course][3].

You don't need any prior knowledge of macros, as this article covers everything from the ground up.

## Table of Contents

1.  [What are Macros in Rust?][4]
    1.  [Types of Macros in Rust][5]
    2.  [Types of Procedural Macros][6]
2.  [Prerequisites][7]
    1.  [Helpful Dependencies][8]
3.  [How to Write a Simple Derive Macro][9]
    1.  [The `IntoStringHashMap` Derive Macro][10]
    2.  [How to Declare a Derive Macro][11]
    3.  [How to Parse Macro Input][12]
    4.  [How to Ensure a Struct Target for the Macro][13]
    5.  [How to Build the Output Code][14]
    6.  [How to Use Your Derive Macro][15]
    7.  [How to Improve Our Implementation][16]
4.  [A More Elaborate Derive macro][17]
    1.  [The `DeriveCustomModel` Macro][18]
    2.  [How to Separate Implementation From Declaration][19]
    3.  [How to Parse Derive Macro Arguments][20]
    4.  [How to Implement `DeriveCustomModel`][21]
    5.  [How to Generate Each Custom Model][22]
    6.  [How to Use Your `DeriveCustomModal` Macro][23]
5.  [A Simple Attribute Macro][24]
    1.  [The `log_duration` Attribute][25]
    2.  [How to Declare an Attribute Macro][26]
    3.  [How to Implement the `log_duration` Attribute Macro][27]
    4.  [How to Use Your `log_duration` Macro][28]
6.  [A More Elaborate Attribute macro][29]
    1.  [The `cached_fn` Attribute][30]
    2.  [How to Implement the `cached_fn` Attribute Macro][31]
    3.  [`cached_fn` Attribute Arguments][32]
    4.  [How to Use the `cached_fn` Macro][33]
7.  [A Simple Function-like Macro][34]
    1.  [The `constant_string` Macro][35]
    2.  [How to Declare a Function-like Macro][36]
    3.  [How to Implement the `constant_string` Macro][37]
    4.  [How to Use the `constant_string` Macro][38]
8.  [A More Elaborate Function-like Macro][39]
    1.  [The `hash_mapify` Macro][40]
    2.  [How to Implement the `hash_mapify` Macro][41]
    3.  [How to Parse `hash_mapify`'s Input][42]
    4.  [How to Generate Output Code][43]
    5.  [How to Convert Custom Data Types To Output Tokens][44]
    6.  [How to Use the `hash_mapify` Macro][45]
9.  [Beyond Writing Macros][46]
    1.  [Helpful Crates/Tools][47]
10.  [Downsides of Macros][48]
    1.  [Debugging (or lack thereof)][49]
    2.  [Compile Time Costs][50]
    3.  [Lack of auto-complete and code checks][51]
    4.  [Where do we draw the line?][52]
11.  [Wrapping Up][53]
    1.  [Enjoying my work?][54]

## **What are Macros in Rust?**

Macros are an integral part of the Rust programming language. It doesn’t take long before you start encountering them when first learning the language.

In their simplest form, macros in Rust allow you to execute some code at compile-time. Rust pretty much allows you to do whatever you want when it comes to macros and what you can do with them. The most common use-case of this feature is writing code that generates other code.

Macros are a way to extend functionality of the compiler beyond what's supported as standard. Whether you want to generate code based on existing code, or you want to transform existing code in some form, macros are your go-to tool.

Here's how the official Rust book describes it:

> The term _macro_ refers to a family of features in Rust.  
>   
> Fundamentally, macros are a way of writing code that writes other code, which is known as _metaprogramming_.  
>   
> Metaprogramming is useful for reducing the amount of code you have to write and maintain, which is also one of the roles of functions. However, macros have some additional powers that functions don’t.

Using macros, you can also dynamically add things that are required to be added at compilation time, which is not possible using functions since they get called at runtime. One such feature, for example, is implementing _Traits_ on types, which is required to be implemented at compilation time.

Another advantage of macros is that they can be very flexible, since they can take a dynamic amount of parameters or inputs unlike a function.

Macros do have their own syntax for both writing and using them, which we'll explore in detail in the coming sections.

Some examples of how macros are being used really helps convey just how powerful they are:

-   The ****SQLx**** project uses macros to verify all your SQL queries and statements (as long as you created them using the provided macro) at compile-time by actually executing them against a running instance of DB (yes, at compile time).
-   ****typed\_html**** implements a complete HTML parser with compile-time validation, all while using the familiar JSX syntax.

## Types of Macros in Rust

In Rust, there are 2 different types of macros: declarative and procedural.

### Declarative macros

Declarative macros work based on syntax parsing. While the official docs define them as allowing you to write syntax extensions, I believe it's more intuitive to consider them as an advanced version of the `match` keyword for the compiler.

You can define one or more patterns to match, and their body should return the output Rust code you'd like the macro to produce.

We're not going to be talking about them in this article, but if you'd like to learn more, [this][55] is a good place to start.

### Procedural macros

These macros, in their most basic use cases, execute any Rust code you want at compile time. The only requirement is that they should take Rust code as input, and return Rust code as output.

There's no special syntax parsing involved for writing these macros (unless you want to do so), which is why they're personally easier for me to understand and write.

Procedural macros are further divided into 3 categories: derive macros, attribute macros, and functional macros.

### Types of Procedural Macros

#### Derive macros

Derive macros are, generally speaking, applied to data types in Rust. They are a way to extend the type declaration to also automatically "derive" functionality for it.

You can use them to generate "derived" types from a type, or as a way to implement methods on the target data type automatically. This should make sense once you look at the following example below.

Printing non-primitive data types, such as structs, enums or even errors (which are just structs, but let's assume they're not), for debugging purposes is a very common feature for any language, not just Rust. In Rust, only primitives implicitly have the ability to be printed in "debug" contexts.

If you think about how everything in Rust is just traits (even basic operations like add and equals), this makes sense. You want to be able to debug print your custom data types, but Rust has no way of saying "please apply this trait to every single data type in the code out there, ever".

This is where the `Debug` derive macro comes in. There's a standard way of debug-printing each type of data structure in Rust that it uses for its internal types. The `Debug` macro allows you to automatically implement the `Debug` trait for your custom types, while following the same rules and style guide as the implementation for internal data types.

```rust
// Derive macro examples

/// Example for deriving methods on data types
#[derive(Debug)]
pub struct User {
	username: String,
    first_name: String,
    last_name: String,
}
```

The `Debug` derive macro will result in the following code (presentational, not exact):

```rust
impl core::fmt::Debug for User {
    fn fmt(&self, f: &mut core::fmt::Formatter) -> core::fmt::Result {
        f.debug_struct(
            "User"
        )
        .field("username", &self.username)
        .field("first_name", &self.first_name)
        .field("last_name", &self.last_name)
        .finish()
    }
}
```

As you might be able to tell, nobody wants to write this code for all of their custom structs and enums again and again. This simple macro gives you a sense of both the power of macros in Rust, as well as why they're an essential part of the language itself.

During actual compilation, the same code would give the following as the result:

```rust
pub struct User {
	username: String,
    first_name: String,
    last_name: String,
}

impl core::fmt::Debug for User {
    fn fmt(&self, f: &mut core::fmt::Formatter) -> ::core::fmt::Result {
        f.debug_struct(
            "User"
        )
        .field("username", &self.username)
        .field("first_name", &self.first_name)
        .field("last_name", &self.last_name)
        .finish()
    }
}
```

Notice how the original type declaration is preserved in the output code. This is one of the main differences between derive macros vs others. Derive macros preserve the input type without modifications. They only add additional code to the output. On the other hand, all the other macros do not behave the same way. They only preserve the target when the output for macro itself includes the target as well.

#### Attribute macros

Attribute macros, in addition to data types, are usually applied to code blocks such as functions, impl blocks, inline blocks, and so on. They're usually used to either transform the target code in some way, or annotate it with additional information.

The most common use case for these is to modify a function to add additional functionality or logic to it. For example, you can easily write an attribute macro that:

-   Logs all input and output parameters
-   Logs the total runtime of the function
-   Counts the number of times that function is called
-   Adds pre-determined additional fields to any struct

and so on.

All of the things I mentioned above, and much more, combined form the insanely popular and useful `instrumentation` macro in Rust provided by the `tracing` crate. Of course I'm massively simplifying here, but it's good enough as an example.

If you're used to using Clippy, it might have screamed at you a couple of times to add the `#[must_use]` attribute to your function or method.

That is an example of macros used to annotate the function with additional information. It tells the compiler to warn the user if the return value from this function call isn't used. The `Result` type is already annotated with `#[must_use]` by default, which is how you see the warning `Unused Result<...> that must be used` when you don't use a return value of `Result` type.

Attribute macros are also what powers [conditional compilation][56] in Rust.

#### Functional macros

Functional macros are macros disguised as functions. These are the least restrictive type of procedural macros, as they can be used literally anywhere, as long as they output code that's valid in the context that they're used in.

These macros aren't "applied" to anything unlike the 2 others, but rather called just like you'd call a function. As arguments, you can literally pass in anything you want, as long as your macro knows how to parse it. This includes everything all the way from no arguments to valid Rust code to random gibberish that only your macro can make sense of.

They're in a sense the procedural version of declarative macros. If you need to execute Rust code and also be able to parse custom syntax, functional macros are your go-to tool. They're also useful if you need macro-like functionality in places where other macros cannot be used.

After that lengthy description of the basic information regarding macros, it's finally time to dive into actually writing procedural macros.

## Prerequisites

There are certain rules around writing your own procedural-macros that you'll need to follow. These rules apply to all 3 types of procedural macros. They are:

-   Procedural macros can only be added to a project that is marked as `proc-macro` in `Cargo.toml`
-   Projects marked as such cannot export anything other than procedural macros.
-   The macros themselves have to all be declared in the `lib.rs` file.

Let’s begin by setting up our project with this code:

```shell
cargo new --bin my-app
cd my-app
cargo new --lib my-app-macros;
```

This will create a root project, as well as a sub-project within it that will host our macros. You need some changes in the `Cargo.toml` files for both these projects.

First, the `Cargo.toml` file for `my-app-macros` should have the following contents (notice that you need to declare a lib section that has the `proc-macro` property):

```toml
# my-app/my-app-macros/Cargo.toml

[package]
name = "my-app-macros"
version = "0.1.0"
edition = "2021"

[lib]
name = "my_app_macros"
path = "src/lib.rs"
proc-macro = true

[dependencies]
```

Next, the `Cargo.toml` file for `my-app` should have the following contents:

```toml
# my-app/Cargo.toml

workspace = { members = ["my-app-macros"] }

[package]
name = "my-app"
version = "0.1.0"
edition = "2021"
resolver = "2"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
my-app-macros = { path = "./my-app-macros" }
```

You need to set the dependency resolver version to “2”, and add your macros project as a dependency of the `my-app` project.

### Helpful dependencies

From the compiler’s point of view, this is how macros work:

-   They take a stream of tokens as input (and optionally a stream of tokens as arguments to the macro itself).
-   They return a stream of tokens as output.

That’s all that the compiler knows! And as you'll soon see, it's enough for the compiler to know that.

This does create a problem though. You need to be able to make sense of this "stream of tokens" in a way where you correctly understand them, whether as Rust code or custom syntax, are able to modify them, and also output them. Doing so manually is no easy task, and for the purposes of this tutorial, it is out of scope.

We can, however, rely on great open source work done by many developers to ease this for us. You need to add a few dependencies to help with this problem:

-   `syn` — A syntax parser for Rust. This helps you to parse the input token stream as Rust AST. AST is a concept that you mostly run into when trying to write your own interpreter or compiler, but a basic understanding is essential for working with macros. Macros, after all, are just extensions that you write for the compiler in a sense. If you’re interested in learning more about what ASTs are, [check out this very helpful introduction][57].
-   `quote` — quote is, and this is a huge generalisation, a crate that helps us perform the reverse operation of what `syn` does. It helps us convert Rust source code into a stream of tokens that we can output from our macro.
-   `proc-macro2` — The standard library provides a `proc-macro` crate, but the types it provides cannot exist outside of procedural macros. `proc-macro2` is a wrapper around the standard library that makes all of the internal types usable outside of the context of macros. This, for example, allows both `syn` and `quote` to not only be used for procedural macros, but in regular Rust code as well, should you ever have such a need. And we will indeed be using that extensively if we ever want to unit test our macros or their expansions.
-   `darling`–It facilitates parsing and working with macro arguments, which is otherwise a tedious process due to having to manually parse it from the syntax tree. `darling` provides us with `serde`\-like ability to automatically parse input argument tree into our arguments struct. It also helps us in error handling around invalid arguments, required arguments, and so on.

While these projects are contributed to by many developers, I want to give special thanks to [David Tolnay][58]. He's a legend in the Rust community and is the creator of most of these projects, and many many more open source crates in Rust.

Let’s quickly add these dependencies to our project and start writing our macro:

```shell
// my-app-macros

cargo add syn quote proc-macro2 darling
```

## How to Write a Simple Derive Macro

You are going to learn how to write a `Derive` macro in this section. By this time, you should already be aware of the different types of macros and what they entail, as we talked about them in the above sections.

### The `IntoStringHashMap` Derive Macro

Let's say you have an app where you need to be able to convert structs into hash maps, that uses the `String` type for both keys and values. This means that it should work with any struct where all of the fields are convertible to `String` type using the `Into` trait.

### How to Declare a Derive Macro

You declare macros by creating a function, and annotating that function using attribute macros that tell the compiler to consider that function as a macro declaration. Since your `lib.rs` is empty right now, you also need to declare `proc-macro2` as an extern crate:

```rust
// my-app-macros/src/lib.rs
extern crate proc_macro;

use proc_macro::TokenStream;

#[proc_macro_derive(IntoStringHashMap)]
pub fn derive_into_hash_map(item: TokenStream) -> TokenStream {
	todo!()
}
```

All we’re doing here is declaring our macro as a derive macro with the identifier `IntoStringHashMap`. Note that the function name is not important here. What's important is the identifier passed to the `proc_macro_derive` attribute macro.

Let's immediately see how you can use this – we'll come back and finish the implementation later:

```rust
// my-app/src/main.rs

use my_app_macros::IntoStringHashMap;

#[derive(IntoStringHashMap)]
pub struct User {
    username: String,
    first_name: String,
    last_name: String,
    age: u32,
}

fn main() {

}
```

You can just use your macro as any other derive macro, using the identifier you declared for it (in this case it was `IntoStringHashMap`).

If you try and compile your code at this stage, you should see the following compilation error:

```shell
   Compiling my-app v0.1.0 
   
error: proc-macro derive panicked
 --> src/main.rs:3:10
  |
3 | #[derive(IntoHashMap)]
  |          ^^^^^^^^^^^
  |
  = help: message: not yet implemented

error: could not compile `my-app` (bin "my-app") due to 1 previous error
```

This clearly proves that our macro was executed during the compilation stage, as, if you're not familiar with the `todo!()` macro, panics with `help: message: not yet implemented` when executed.

This means that both our macro declaration and its usage works. We can move on to actually implementing this macro now.

### How to Parse the Macro's Input

First, you parse the input token stream as a `DeriveInput` using `syn`, which is a representation of any target that you can use a derive macro with_:_

```rust
let input = syn::parse_macro_input!(item as syn::DeriveInput);
```

`syn` provides us with the `parse_macro_input` macro that uses a somewhat custom syntax as its arguments. You provide it the name of your input variable, the `as` keyword, and the data type in `syn` that it should parse the input token stream as (in our case, a `DeriveInput`).

If you jump into the source code for `DeriveInput`, you'll see that it gives us the following information:

-   `attrs`: Attributes applied to this type, whether other attribute macros declared by us, or the built-in ones such as `must_use`.
-   `vis`: The visibility specifier for this type declaration.
-   `ident`: The identifier (name) of the type.
-   `generics`: Information about the generic parameters this type takes, including lifetimes.
-   `data`: An enum that describes whether the target is a struct, an enum, or a union, and also provides us with more information for each of these.

These field names and their types (apart from data field) are pretty standard across targets supported by `syn`, such as functions, enums, and so on.

If you further jump into the declaration of the `Data` enum, and into `DataStruct` in particular, you'll see that it provides you with a field called `fields`. This is a collection of all the fields of this struct and you can use it to iterate over them. This is exactly what we need to build our hash map!

The complete implementation for this macro looks like this:

```rust
// my-app/my-app-macros/lib.rs

extern crate proc_macro2;

use proc_macro::TokenStream;
use quote::quote;
use syn::Data;

#[proc_macro_derive(IntoHashMap)]
pub fn into_hash_map(item: TokenStream) -> TokenStream {
    let input = syn::parse_macro_input!(item as syn::DeriveInput);

    let struct_identifier = &input.ident;

    match &input.data {
        Data::Struct(syn::DataStruct { fields, .. }) => {
            let mut implementation = quote!{
                let mut hash_map = std::collections::HashMap::<String, String>::new();
            };

            for field in fields {
                let identifier = field.ident.as_ref().unwrap();
                implementation.extend(quote!{
                    hash_map.insert(stringify!(#identifier).to_string(), String::from(value.#identifier));
                });
            }

            quote! {
                #[automatically_derived]
                impl From<#struct_identifier> for std::collections::HashMap<String, String> {
                    fn from(value: #struct_identifier) -> Self {
                        #implementation

                        hash_map
                    }
                }
            }
        }
        _ => unimplemented!()
    }.into()
}
```

There's a lot going on here, so let's break it down:

### How to Ensure a `struct` Target for the Macro

`let struct_identifier = &input.ident;`: You store the struct identifier into a separate variable, so that you can easily use it later.

```rust
match &input.data {
	Data::struct(syn::DataStruct { fields, .. }) => { ... },
    _ => unimplemented!()
}
```

You match over the parsed data field from `DeriveInput`. If it is of type `DataStruct` (a Rust struct) then continue, else panic, as the macro isn't implemented for other types.

### How to Build the Output Code

Let's take a look at the match arm implementation when you do have a `DataStruct`:

```rust
let mut implementation = quote!{
	let mut hash_map = std::collections::HashMap::<String, String>::new();
};
```

Here you created a new `TokenStream` using `quote`. This `TokenStream` is different than the one provided by the standard library, so don't confuse it with that. This needs to be mutable, as we'll be adding more code to this `TokenStream` soon.

`TokenStream` is basically the inverse representation of an AST. You provide actual Rust code to the `quote` macro, and it gives us the "stream of tokens" as you've called it previously for that source code.

This `TokenStream` can either be converted to the macro's output type, or be manipulated using methods provided by `quote` such as extend.

Moving on,

```rust
for field in fields {
	let identifier = field.ident.as_ref().unwrap();
	implementation.extend(quote!{
		hash_map.insert(
			stringify!(#identifier).to_string(),
			String::from(value.#identifier)
		);
	});
}
```

You loop over all of the fields. In each iteration, you first create a variable `identifier` to hold the name of the field for later use. You then use the `extend` method on our previously created `TokenStream` to add additional code to it.

The `extend` method just takes another `TokenStream`, which can easily be generated using `quote` macro. For the extension, you simply write code to insert a new entry into the `hash_map` that will be created in the macro output.

Let's have a closer look at that:

```rust
hash_map.insert(
	stringify!(#identifier).to_string(),
	String::from(value.#identifier)
);
```

As you know, the insert method takes a key and a value. You've told the compiler that both the key and value are of `String` type. `stringify` is a built-in macro in the standard library, that converts any `Ident` type into its `&str` equivalent. You use it here to convert your field identifiers into actual `&str`. You then call `to_string()` method on it to convert it to the `String` type.

But what does the `#identifier` represent?

`quote` provides you with the ability to use any variables declared outside of the `TokenStream` within it using the `#` prefix. Think of it as `{}` in format args. `#identifier` in this case simply gets replaced with the field identifier we declared outside of the `extend` call. So you basically call the `stringify!()` macro on the field identifier directly.

Similarly, you can access the value of a field using the familiar `struct_variable.field_name` syntax, but use the identifier variable instead of the field name instead. This is what you do when you pass the value to your insert statement: `String::from(value.#identifier)`.

If you've looked at the code closely, you'll realise where the `value` came from, but if not, it's just what the trait implementation method uses to declare its input argument further down.

Once you've built your implementation using the for loop for each field in the struct, you have a `TokenStream` which, for representational purposes, contains the following code:

```rust
let mut hash_map = std::collections::HashMap::<String, String>::new();
hash_map.insert("username".to_string(), String::from(value.username));
hash_map.insert("first_name".to_string(), String::from(value.first_name));
hash_map.insert("last_name".to_string(), String::from(value.last_name));
```

Moving on to finally generating the output of our macro, you have:

```rust
quote! {
	impl From<#struct_identifier> for std::collections::HashMap<String, String> {
		fn from(value: #struct_identifier) -> Self {
			#implementation

			hash_map
		}
	}
}
```

Here you start by creating another `TokenStream` using `quote`. You write your `From` trait implementation in this block.

The following line again uses the `#` prefix syntax that we just looked at to declare that the trait implementation should be for your target struct, based on the identifier for the struct. In this case, this identifier will be replaced with `User` if you apply the derive macro to `User` struct.

```rust
impl From<#struct_identifier> for std::collections::HashMap<String, String> {}
```

Finally, you have the actual method body:

```rust
fn from(value: #struct_identifier) -> Self {
	#implementation

	hash_map
}
```

As you can see, you can easily nest `TokenStream`s into other `TokenStreams` using the same `#` syntax that lets you use external variables within the `quote` macro.

Here, you declare that your hash map implementation should be inserted as the first few lines of the function. And then you simply return the same `hash_map`. This completes your trait implementation.

As the very last step, you call `.into()` on the return type of our `match` block, which returns the output of `quote` macro call. This converts the `TokenStream` type used by `quote` into the `TokenStream` type that comes from the standard library and is expected by the compiler to be returned from a macro.

If it was harder to understand it when I broke it down line by line, you can look at the following complete but commented code in addition:

```rust
// Tell the compiler that this function is a derive macro, and the identifier for derive is `IntoHashMap`.
#[proc_macro_derive(IntoHashMap)]
// Declare a function that takes an input `TokenStream` and outputs `TokenStream`.
pub fn into_hash_map(item: TokenStream) -> TokenStream {
    // Parse the input token stream as `DeriveInput` type provided by `syn` crate.
    let input = syn::parse_macro_input!(item as syn::DeriveInput);

    // Store the struct identifier (name) into a variable so that you can insert it in the output code.
    let struct_identifier = &input.ident;

    // Match over the target type to which the derive macro was applied
    match &input.data {
        // Match that the target was a struct, and destructure the `fields` field from its information.
        Data::Struct(syn::DataStruct { fields, .. }) => {
            // Declare a new quote block that will hold the code for your implementation of the hash map.
            // This block will both create a new hash map, and also populate it with all of the fields from
            // the struct.
            let mut implementation = quote!{
                // This is just code that you want to see in the output. In this case, you want to have
                // a new hash map created.
                let mut hash_map = std::collections::HashMap::<String, String>::new();
            };

            // Iterate over all the fields of your target struct
            for field in fields {
                // Create a variable to store the identifier (name) of the field for later use
                let identifier = field.ident.as_ref().unwrap();
                // Extend your `implementation` block to include code in the output that populates
                // the hash map you create with the information from current field.
                implementation.extend(quote!{
                    // Convert the field identifier to a string using `stringify!` macro. This is used
                    // as the key in your new hash map entry. For value of this key, we access the field value
                    // from the struct using `value.#identifier`, where `#identifier` is replaced with the actual
                    // field name in output code.
                    hash_map.insert(stringify!(#identifier).to_string(), String::from(value.#identifier));
                });
            }

            // Create the final output block
            quote! {
                // Implement the `From` trait to allow converting your target struct, identified by
                // `struct_identifier` to a HashMap with both the key and the value as `String`.
                // Just like previously, #struct_identifier is replaced with the actual name of the
                // target struct in output code.
                impl From<#struct_identifier> for std::collections::HashMap<String, String> {
                    // This is just a method that the `From` trait requires you to implement. The
                    // type of the input value is again `#struct_identifier`, which is replaced with
                    // the name of the target struct in output code.
                    fn from(value: #struct_identifier) -> Self {
                        // Include the `implementation` block you created using `quote!` as the body
                        // of this method. `quote` allows you to nest other `quote` blocks freely.
                        #implementation

                        // Return the hash_map.
                        hash_map
                    }
                }
            }
        }
        // If the target is of any other type, panic.
        _ => unimplemented!()
        // Convert the `TokenStream` type used by `quote` to `TokenStream` type used by the
        // standard library and the compiler
    }.into()
}
```

And that's it. You've written your very first procedural macro in Rust!

**It's now time to enjoy the fruits of your labour.**

### How to Use Your Derive Macro

Coming back to your `my-app/main.rs`, let's debug-print the hashmap that you create using the macro you implemented. Your `main.rs` should look like this:

```rust
// my-app/src/main.rs

use std::collections::HashMap;
use my_app_macros::IntoHashMap;

#[derive(IntoHashMap)]
pub struct User {
    username: String,
    first_name: String,
    last_name: String,
}

fn main() {
    let user = User {
        username: "username".to_string(),
        first_name: "First".to_string(),
        last_name: "Last".to_string(),
    };

    let hash_map = HashMap::<String, String>::from(user);

    dbg!(hash_map);
}
```

If you run this using `cargo run`, you should see the following output in your terminal:

```shell
[src/main.rs:20:5] hash_map = {
    "last_name": "Last",
    "first_name": "First",
    "username": "username",
}
```

And there you go!

### How to Improve Our Implementation

There is a better way to work with iterators and `quote` that I skipped over in our original implementation – intentionally so, because it requires us to learn a bit more of the syntax specific to `quote`.

Let's see what it would have looked like with that, before we dive into how it works:

```rust
let input = syn::parse_macro_input!(item as syn::DeriveInput);
    let struct_identifier = &input.ident;

    match &input.data {
        Data::Struct(syn::DataStruct { fields, .. }) => {
            let field_identifiers = fields.iter().map(|item| item.ident.as_ref().unwrap()).collect::<Vec<_>>();

            quote! {
                impl From<#struct_identifier> for std::collections::HashMap<String, String> {
                    fn from(value: #struct_identifier) -> Self {
                        let mut hash_map = std::collections::HashMap::<String, String>::new();

                        #(
                            hash_map.insert(stringify!(#field_identifiers).to_string(), String::from(value.#field_identifiers));
                        )*

                        hash_map
                    }
                }
            }
        }
        _ => unimplemented!()
    }.into()
```

That looks so much more concise and easier to understand! Let's look at the special bit of syntax that makes it possible – in particular, the following line:

```rust
#(
	hash_map.insert(stringify!(#field_identifiers).to_string(), String::from(value.#field_identifiers));
)*
```

Let's break it down. First, you wrap the entire block in a `#()*` and your code goes inside the parentheses. This syntax is what allows you to make use of any iterator inside of the parenthesis, and it will repeat that block of code for all items in the iterator, while replacing the variable with correct item in each iteration.

In this case, you first create a `field_identifiers` iterator, that is a collection of all the field identifiers in your target struct. You then write your `hash_map` insert statement while using the iterator directly as if it is a single item. The `#()*` wrapper converts this into the expected output of multiple lines, one for each item in the iterator.

## A More Elaborate Derive Macro

Now that you're comfortable writing a simple Derive macro, it's time to move on and create something that will actually be useful in the real world – especially if you're working with database models.

### The `DeriveCustomModel` Macro

You're going to be building a Derive macro that helps you generate derived structs from your original struct. You're going to be needing this all the time whenever you're working with databases, and only want to load part of the data.

For example, if you have a `User` struct, which has all of the user information, but you only want to load the name information for the User from the database, you'll need a struct that only contains those fields – unless you want to make all the fields an Option, which isn't the best idea.

We will also need to add an implementation of `From` trait to automatically convert from `User` struct to the derived struct. Another thing our macro needs is to be able to derive multiple models from the same target struct.

Let's start by declaring it in `lib.rs`:

```rust
// lib.rs

#[proc_macro_derive(DeriveCustomModel, attributes(custom_model))]
pub fn derive_custom_model(item: TokenStream) -> TokenStream {
	todo!()
}
```

Most of this syntax should familiar to you by now from our previous example. The only addition we have here, is now we also define `attributes(custom_model)` in the call to `proc_macro_derive`, which basically tells the compiler to treat any attribute that begins with `#[custom_model]` as an argument for this derive macro on that target.

For example, once you've defined this, you can apply `#[custom_model(name = "SomeName")]` to the target struct, to define that the derived struct should have the name "SomeName". You need to parse this yourself and handle it too, of course – the definition was only to tell the compiler to pass that through to your macro implementation and not treat it as an unknown attribute.

Let's also create a new file that will contain the implementation detail of this macro. The macro rule states that it needs to be **defined** in `lib.rs`, and we've done that. The implementation itself can live anywhere in the project.

Create a new file `custom_model.rs`:

```shell
touch src/custom_model.rs
```

### How to Separate the Implementation from the Declaration

Define a function that implements the `DeriveCustomModel` macro. We're also going to add all imports right away to avoid confusion later:

```rust
// custom_model.rs

use syn::{
    parse_macro_input, Data::Struct, DataStruct, DeriveInput, Field, Fields, Ident, Path,
};
use darling::util::PathList;
use darling::{FromAttributes, FromDeriveInput, FromMeta};
use proc_macro::TokenStream;
use quote::{quote, ToTokens};

pub(crate) fn derive_custom_model_impl(input: TokenStream) -> TokenStream {
	// Parse input token stream as `DeriveInput`
	let original_struct = parse_macro_input!(input as DeriveInput);
    
    // Destructure data & ident fields from the input
    let DeriveInput { data, ident, .. } = original_struct.clone();
}
```

This is just a Rust function, so there are no special rules here. You can call this from the declaration just like a regular Rust function.

```rust
#[proc_macro_derive(DeriveCustomModel, attributes(custom_model))]
pub fn derive_custom_model(item: TokenStream) -> TokenStream {
	custom_model::custom_model_impl(item)
}
```

### How to Parse Derive Macro Arguments

To parse the arguments to our derive macro (which are usually provided using attributes applied to either the target or to its fields), we are going to rely on the `darling` crate to make it as simple as defining the data type for them.

```rust
// custom_model.rs

// Derive `FromDeriveInput` for this struct, which is a
// macro provided by darling to automatically add the ability
// to parse argument tokens into the given struct.
#[derive(FromDeriveInput, Clone)]
// We tell darling that we're looking for arguments
// that are defined using the `custom_model` attribute, and
// that we only support named structs for this.
#[darling(attributes(custom_model), supports(struct_named))]
struct CustomModelArgs {
    // Specify parameters for generating a derive model.
    // Multiple models can be generated by repeating
    // this attribute with parameters for each model.
    #[darling(default, multiple, rename = "model")]
    pub models: Vec<CustomModel>,
}
```

We've told `darling` that for arguments to the struct, we should expect a list of `model` arguments, and each one will define parameters for a single derived model. This allows us to use the macro to generate multiple derived structs from a single input struct.

Next, let's define the arguments for each model:

```rust
// custom_model.rs

// Derive `FromMeta` for this struct, which is a
// macro provided by darling to automatically add the ability
// to parse metadata into the given struct.
#[derive(FromMeta, Clone)]
struct CustomModel {
    // Name of the generated model.
    name: String,
    // Comma-separated list of field identifiers
    // to be included in the generated model
    fields: PathList,
    // List of additional derives to apply to the
    // resulting struct such as `Eq` or `Hash`.
    #[darling(default)]
    extra_derives: PathList,
}
```

In this, we have two required arguments, `name` and `fields`, and one optional argument `extra_derives`. It's optional because of the `#[darling(default)]` annotation on it.

### How to Implement `DeriveCustomModel`

Now that we have all of our data types defined, let's get to parsing – which is as simple as calling a method on our argument struct! The complete function implementation should like this:

```rust
// custom_model.rs

pub(crate) fn derive_custom_model_impl(input: TokenStream) -> TokenStream {
	// Parse input token stream as `DeriveInput`
	let original_struct = parse_macro_input!(input as DeriveInput);
    
    // Destructure data & ident fields from the input
    let DeriveInput { data, ident, .. } = original_struct.clone();
    
    if let Struct(data_struct) = data {
    	// Extract the fields from this data struct
        let DataStruct { fields, .. } = data_struct;
        
        // `darling` provides this method on the struct
        // to easily parse arguments, and also handles
        // errors for us.
        let args = match CustomModelArgs::from_derive_input(&original_struct) {
            Ok(v) => v,
            Err(e) => {
            	// If darling returned an error, generate a
                // token stream from it so that the compiler
                // shows the error in the right location.
                return TokenStream::from(e.write_errors());
            }
        };

		// Destructure `models` field from parsed args.
        let CustomModelArgs { models } = args;

		// Create a new output
        let mut output = quote!();

		// Panic if no models are defined but macro is
        // used.
        if models.is_empty() {
            panic!(
                "Please specify at least 1 model using the `model` attribute"
            )
        }

		// Iterate over all defined models
        for model in models {
        	// Generate custom model from target struct's fields and `model` args.
            let generated_model = generate_custom_model(&fields, &model);

			// Extend the output to include the generated model
            output.extend(quote!(#generated_model));
        }

		// Convert output into TokenStream and return
        output.into()
    } else {
    	// Panic if target is not a named struct
        panic!("DeriveCustomModel can only be used with named structs")
    }
}
```

The code that generates tokens for each model has been extracted away to another function that we call `generate_custom_model`. Let's implement that as well:

### How to Generate Each Custom Model

```rust
// custom_model.rs

fn generate_custom_model(fields: &Fields, model: &CustomModel) -> proc_macro2::TokenStream {
    let CustomModel {
        name,
        fields: target_fields,
        extra_derives,
    } = model;

    // Create new fields output
    let mut new_fields = quote!();

    // Iterate over all fields in the source struct
    for Field {
        // The identifier for this field
        ident,
        // Any attributes applied to this field
        attrs,
        // The visibility specifier for this field
        vis,
        // The colon token `:`
        colon_token,
        // The type of this field
        ty,
        ..
    } in fields
    {
        // Make sure that field has an identifier, panic otherwise
        let Some(ident) = ident else {
            panic!("Failed to get struct field identifier")
        };

        // Try to convert field identifier to `Path` which is a type provided
        // by `syn`. We do this because `darling`'s PathList type is just a
        // collection of this type with additional methods on it.
        let path = match Path::from_string(&ident.clone().to_string()) {
            Ok(path) => path,
            Err(error) => panic!("Failed to convert field identifier to path: {error:?}"),
        };

        // If the list of target fields doesn't contain this field,
        // skip to the next field
        if !target_fields.contains(&path) {
            continue;
        }

        // If it does contain it, reconstruct the field declaration
        // and add it in `new_fields` output so that we can use it
        // in the output struct.
        new_fields.extend(quote! {
            #(#attrs)*
            #vis #ident #colon_token #ty,
        });
    }

    // Create a new identifier for output struct
    // from the name provided.
    let struct_ident = match Ident::from_string(name) {
        Ok(ident) => ident,
        Err(error) => panic!("{error:?}"),
    };

    // Create a TokenStream to hold the extra derive declarations
    // on new struct.
    let mut extra_derives_output = quote!();

    // If extra_derives is not empty,
    if !extra_derives.is_empty() {
        // This syntax is a bit compact, but you should already
        // know everything you need to understand it by now.
        extra_derives_output.extend(quote! {
            #(#extra_derives,)*
        })
    }

    // Construct the final struct by combining all the
    // TokenStreams generated so far.
    quote! {
        #[derive(#extra_derives_output)]
        pub struct #struct_ident {
            #new_fields
        }
    }
}
```

### How to Use Your `DeriveCustomModel` Macro

Coming back to your `my-app/main.rs`, let's debug-print the generated hash-maps for your new structs that you create using the macro you implemented. Your `main.rs` should look like this:

```rust
// my-app/src/main.rs

use macros::{DeriveCustomModel, IntoStringHashMap};
use std::collections::HashMap;

#[derive(DeriveCustomModel)]
#[custom_model(model(
    name = "UserName",
    fields(first_name, last_name),
    extra_derives(IntoStringHashMap)
))]
#[custom_model(model(name = "UserInfo", fields(username, age), extra_derives(Debug)))]
pub struct User2 {
    username: String,
    first_name: String,
    last_name: String,
    age: u32,
}

fn main() {
    let user_name = UserName {
        first_name: "first_name".to_string(),
        last_name: "last_name".to_string(),
    };
    let hash_map = HashMap::<String, String>::from(user_name);

    dbg!(hash_map);

    let user_info = UserInfo {
        username: "username".to_string(),
        age: 27,
    };

    dbg!(user_info);
}
```

As you can see, `extra_derives` is already useful to us since we need to derive `Debug` and `IntoStringHashMap` for the new models.

If you run this using `cargo run`, you should see the following output in your terminal:

```shell
[src/main.rs:32:5] hash_map = {
    "last_name": "last_name",
    "first_name": "first_name",
}
[src/main.rs:39:5] user_info = UserInfo {
    username: "username",
    age: 27,
}
```

We are going to wrap up the derive macros here.

## A Simple Attribute Macro

In this section, you're going to learn how to write an **attribute** macro.

### The `log_duration` Attribute

You are going to write a simple attribute macro that can be applied to any function (or method) that will log the total run time of that function each time the function is called.

### How to Declare an Attribute Macro

You declare attribute macros by creating a function and annotating that function using the `proc_macro_attribute` macro that tells the compiler to consider that function as a macro declaration. Let's see what that looks like:

```rust
// my-app-macros/src/lib.rs

#[proc_macro_attribute]
pub fn log_duration(args: TokenStream, item: TokenStream) -> TokenStream {
    log_duration_impl(args, item)
}
```

For these macros, the function name is important, as that also becomes the name of the macro. As you can see, these take two different arguments. The first is the argument passed to the attribute macro, and the second is the target of the attribute macro.

Let's also implement `log_duration_impl`. Create a new file `log_duration.rs`:

```shell
touch src/log_duration.rs
```

### How to Implement the `log_duration` Attribute Macro

I'm going to give you the complete implementation first, and then I'll break down the parts that I haven't used so far:

```rust
// my-app-macros/src/log_duration.rs

use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, ItemFn};

pub(crate) fn log_duration_impl(_args: TokenStream, input: TokenStream) -> TokenStream {
    // Parse the input as `ItemFn` which is a type provided
    // by `syn` to represent a function.
    let input = parse_macro_input!(input as ItemFn);

    let ItemFn {
        // The function signature
        sig,
        // The visibility specifier of this function
        vis,
        // The function block or body
        block,
        // Other attributes applied to this function
        attrs,
    } = input;

    // Extract statements in the body of the functions
    let statements = block.stmts;
    
    // Store the function identifier for logging
    let function_identifier = sig.ident.clone();

    // Reconstruct the function as output using parsed input
    quote!(
    	// Reapply all the other attributes on this function.
        // The compiler doesn't include the macro we are
        // currently working in this list.
        #(#attrs)*
        // Reconstruct the function declaration
        #vis #sig {
            // At the beginning of the function, create an instance of `Instant`
            let __start = std::time::Instant::now();
            
            // Create a new block, the body of which is the body of the function.
            // Store the return value of this block as a variable so that we can
            // return it later from the parent function.
            let __result = {
                #(#statements)*
            };

            // Log the duration information for this function
            println!("{} took {}μs", stringify!(#function_identifier), __start.elapsed().as_micros());

            // Return the result (if any)
            return __result;
        }
    )
    .into()
}
```

The only things that you might not have seen previously are the `sig` and the `block` fields you get from parsing the input as `ItemFn`. `sig` contains the entire signature of a function while `block` contains the entire body of the function. This is why, by using the following code, we can basically reconstruct the unmodified function:

```rust
// Example code to reconstruct unmodified fn in macro

#vis #sig #block
```

In this example, you want to modify the function body, which is why you create a new block that encapsulates the original function block.

### How to Use Your `log_duration` Macro

Coming back to `main.rs`, using an attribute macro is simpler than you might think:

```rust
// main.rs

#[log_duration]
#[must_use]
fn function_to_benchmark() -> u16 {
    let mut counter = 0;
    for _ in 0..u16::MAX {
        counter += 1;
    }

    counter
}

fn main() {
    println!("{}", function_to_benchmark());
}
```

When you run this, you should get the following output:

```shell
function_to_benchmark took 498μs
65535
```

We are now ready to move on to a more complex use-case.

## A More Elaborate Attribute Macro

### The `cached_fn` Attribute

You are going to write an attribute macro that will allow you to add caching capability to any function. For the purposes of this example, we're going to assume that our function always has `String` arguments and also returns a `String` value.

Some of you might know this better as a "memoized" function.

In addition, you will need to allow the user of this macro to tell the macro how it can generate a dynamic key based on function args.

To help us facilitate the caching part so that we don't get diverted, we're going to use a dependency called `cacache`. `cacache` is a Rust library for managing local key and content caches. It works by writing the cache to the disk.

Let's add it to the project by editing the `Cargo.toml` file for `my-app` directly:

```rust
// Cargo.toml

workspace = { members = ["my-app-macros"] }

[package]
name = "my-app"
version = "0.1.0"
edition = "2021"
resolver = "2"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
# New dependency
cacache = { version = "13.0.0", default-features = false, features = ["mmap"] }
macros = { path = "./macros" }
```

### How to Implement the `cached_fn` Attribute Macro

Let's start by declaring this macro in `lib.rs`:

```rust
// my-app-macros/src/lib.rs

#[proc_macro_attribute]
pub fn cached_fn(args: TokenStream, item: TokenStream) -> TokenStream {
	cached_fn_impl(args, item)
}
```

Create a new file `cached_fn.rs` to store the implementation:

```shell
touch my-app-macros/src/cached_fn.rs
```

Let's define how our arguments should look before we go ahead and implement anything:

### `cached_fn` Attribute Arguments

```rust
// my-app-macros/src/cached_fn.rs

#[derive(FromMeta)]
struct CachedParams {
    // Accept any expression that we should use to compute the
    // key. This can be a constant string, or some computation
    // based on function arguments.
    keygen: Option<Expr>,
}
```

The only argument is an optional `keygen`, which is of type `Expr`. `Expr` represents any valid [Rust expression][59], so it can be very dynamic. In this example, you'll be passing an expression that generates the key based on function arguments of the target function.

As always, we'll first see the entire implementation and then break down the parts that are new:

```rust
// my-app-macros/src/cached_fn.rs

pub fn cached_fn_impl(args: TokenStream, item: TokenStream) -> TokenStream {
    // Parse argument tokens as a list of NestedMeta items
    let attr_args = match NestedMeta::parse_meta_list(args.into()) {
        Ok(v) => v,
        Err(e) => {
            // Write error to output token stream if there is one
            return proc_macro::TokenStream::from(Error::from(e).write_errors());
        }
    };

    // Parse the nested meta list as our `CachedParams` struct
    let CachedParams { keygen } = match CachedParams::from_list(&attr_args) {
        Ok(params) => params,
        Err(error) => {
            // Write error to output token stream if there is one
            return proc_macro::TokenStream::from(Error::from(error).write_errors());
        }
    };

    // Parse the input target item as a function
    let ItemFn {
        // The function signature
        sig,
        // The visibility specifier of this function
        vis,
        // The function block or body
        block,
        // Other attributes applied to this function
        attrs,
    } = parse_macro_input!(item as ItemFn);

    // Generate our key statement based on given param (or lack thereof)
    let key_statement = if let Some(keygen) = keygen {
        // If the user specified a `keygen`, use that as an expression to
        // get the cache key.
        quote! {
            let __cache_key = #keygen;
        }
    } else {
        // If no `keygen` was provided, use the name of the function
        // as cache key.
        let fn_name = sig.ident.clone().to_string();
        quote! {
            let __cache_key = #fn_name;
        }
    };

    // Reconstruct the function as output using parsed input
    quote!(
        // Apply other attributes from the original function to the generated function
        #(#attrs)*
        #vis #sig {
            // Include the key_statement we generated above as the first
            // thing in the function body
            #key_statement

            // Try to read the value from cache
            match cacache::read_sync("./__cache", __cache_key.clone()) {
                // If the value exists, parse it as string and return it
                Ok(value) => {
                    println!("Data is fetched from cached");
                    from_utf8(&value).unwrap().to_string()
                },
                Err(_) => {
                    println!("Data is not fetched from cached");
                    // Save the output of original function block into
                    // a variable.
                    let output = #block;

                    // Write the output value to cache as bytes
                    cacache::write_sync("./__cache", __cache_key, output.as_bytes()).unwrap();

                    // Return the original output
                    output
                }
            }
        }
    )
    .into()
}
```

Well, turns out that you've seen everything that we used in this one before.

The only new thing here is the use of the `cacache` dependency, but that's also pretty straightforward. You just give the location where you want to store the cached data as the first argument to the `read_sync` and `write_sync` functions provided by `cacache`.

We've also added some logging to help us verify that the macro works as expected.

### How to Use the `cached_fn` Macro

To make any function memoized or cached, we simply annotate it using the `cached_fn` attribute:

```rust
// src/main.rs

#[cached_fn(keygen = "format!(\"{first_name} {last_name}\")")]
fn test_cache(first_name: String, last_name: String) -> String {
    format!("{first_name} {last_name}")
}

fn main() {
	test_cache("John".to_string(), "Appleseed".to_string());
    test_cache("John".to_string(), "Appleseed".to_string());
    test_cache("John".to_string(), "Doe".to_string());
}
```

If you run this, you should see the following output:

```shell
Data is not fetched from cached
Data is fetched from cached
Data is not fetched from cached
```

Which clearly shows that if the function is called more than once for the same arguments, data is returned from cache. But if the arguments are different, it doesn't return the value that was cached for a different set of arguments.

We did make a lot of assumptions for this one which don't hold true for a real-world use case. As such, this is only for learning purposes, but depicts a real-world use case.

For example, I've written attribute macros to cache HTTP handler functions using `redis` for production servers. Those have a very similar implementation to this, but contains a lot of bells and whistles to work with that particular use case.

## A Simple Function-like Macro

It's finally time to have some _fun_ again. We are going to start simple, but the second example is going to include parsing custom syntax. _Fun_, right?

Disclaimer: If you're familiar with declarative macros (using `macro_rules!` syntax), you might realize that the following examples can easily be written using that syntax and don't need to be procedural macros. Writing example procedural macros that cannot be written as declarative ones is extremely difficult if you also want to keep things simple, which is why the examples were chosen despite this.

### The `constant_string` Macro

We're going to build a very simple macro that takes in a string literal (of type `&str`) as input and creates a global public constant for it (the name of the variable being the same as the value). Basically, our macro will generate the following:

```rust
pub const STRING_LITERAL: &str = "STRING_LITERAL";
```

### How to Declare a Function-like Macro

You declare function-like macros by creating a function and annotating that function using a `proc_macro` macro. It tells the compiler to consider that function as a macro declaration. Let's see what that looks like:

```rust
// my-app-macros/src/lib.rs

#[proc_macro]
pub fn constant_string(item: TokenStream) -> TokenStream {
    constant_string_impl(args, item)
}
```

For these macros, the function name is important, as that also becomes the name of the macro. As you can see, these only take a single argument, which is whatever you pass on to the macro. It can literally be anything, even custom syntax that's not valid Rust code.

### How to Implement the `constant_string` Macro

For the implementation, let's create a new file `constant_string.rs`:

```rust
touch my-app-macros/src/constant_string.rs
```

The implementation is pretty simple:

```rust
use darling::FromMeta;
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, Ident, LitStr};

pub fn constant_string_impl(item: TokenStream) -> TokenStream {
    // Parse input as a string literal
    let constant_value = parse_macro_input!(item as LitStr);

    // Create a new `Ident` (identifier) from the passed string value.
    // This is going to be the name of the constant variable.
    let constant_value_name = Ident::from_string(&constant_value.value()).unwrap();

    // Generate the code for declaring the constant variable.
    quote!(pub const #constant_value_name: &str = #constant_value;).into()
}
```

All we're doing is parsing input as a string literal. If you pass something to do this is not a string literal, it will throw an error. Then we take the string, create a identifier out of it, and generate the output code. Short and simple.

### How to Use the `constant_string` Macro

The usage of this macro is also pretty simple:

```rust
// src/main.rs

constant_string!("SOME_CONSTANT_STRING_VALUE");
```

The above code will expand to this:

```rust
pub const SOME_CONSTANT_STRING_VALUE: &str = "SOME_CONSTANT_STRING_VALUE";
```

## A More Elaborate Function-like Macro

Function-like macros, as the name might suggest, can be used in a similar way to calling a function. You can also use them in any place where you can call a function, and beyond.

### The `hash_mapify` Macro

Moving on to the interesting parts: the macro you're going to write now will allow you to generate a `HashMap` by simply passing in a list of key-value pairs. For example:

```rust
let variable = "Some variable";

hash_mapify!(
	&str,
	key = "value", 
    key2 = "value2", 
    key3 = "value3", 
    key4 = variable
);
```

As you can see, we want the first argument to be the type of the value, and the subsequent arguments to be the key-value pairs. And we'll need to parse all of this ourselves.

To keep things simple, since this can easily get out of hand, we're only going to support primitive values such as strings, integers, floats and booleans. So we're not going to support creating a `hash_map` with non-string keys or `enum` and `struct` as values.

### How to Implement the `hash_mapify` Macro

We're going to start as usual by declaring our macro:

```rust
// my-app-macros/src/lib.rs

#[proc_macro]
pub fn hash_mapify(item: TokenStream) -> TokenStream {
    hash_mapify_impl(item)
}
```

Next, you're going to define a data structure to hold your input data. In this case, you need to know the value type passed, as well as a list of key-value pairs.

We are going to extract the implementation to a separate file, which is where you'll also implement the data types and parsing logic.

Create new file `hash_mapify.rs` and declare the data type to hold input data:

```shell
touch my-app-macros/src/hash_mapify.rs
```

### How to Parse `hash_mapify`'s Input

```rust
// my-app-macros/src/hash_mapify.rs

use proc_macro::TokenStream;
use quote::{quote, ToTokens};
use syn::parse::{Parse, ParseStream};
use syn::{parse_macro_input, Lit, LitStr, Token, Type};

pub struct ParsedMapEntry(String, proc_macro2::TokenStream);

pub struct ParsedMap {
    value_type: Type,
    entries: Vec<ParsedMapEntry>,
}
```

You store the value as `TokenStream` directly because you need to support both literal values as well as variables, both of which only have 1 common type in this context, `TokenStream`.

You also might have noticed that we save the `value_type` as `Type` which is a type provided by `syn` crate which is an enum of the possible types that a Rust value could have. That was a mouthful!

You won't need to handle each variant of this enum, since this type can also directly be converted to `TokenStream`. You'll better understand what that means shortly.

Next, you need to implement the `syn::parse::Parse` trait for `ParsedMap` declared previously, so that it can be computed from the `TokenStream` passed as arguments to the macro.

```rust
// my-app-macros/src/hash_mapify.rs

impl Parse for ParsedMap {
	fn parse(input: ParseStream) -> syn::Result<Self> {
    	let mut entries = Vec::<ParsedMapEntry>::new();
    }
}
```

`input`, which is of type `ParsedStream` in this case, works similar to an iterator. You need to parse tokens out of the input using the method `parse` on it, which will also advance the stream to the beginning of the next token.

For example, if you have a stream of tokens representing `[a, b, c]`, as soon as you parse `[` out of this stream, the stream will be mutated to only contain `a, b, c]` . This is very similar to iterators, where as soon as you take a value out, the iterator is advanced by one position and only holds the remaining items.

Before you parse anything, you need to check if input is empty, and panic if it is:

```rust
// my-app-macros/src/hash_mapify.rs

impl Parse for ParsedMap {
	fn parse(input: ParseStream) -> syn::Result<Self> {
    	// ...
        
    	// Check if input is empty (no arguments are passed). If
        // not, then panic as we cannot continue further.
        if input.is_empty() {
            panic!("At least a type must be specified for an empty hashmap");
        }
        
        // ...
    }
}
```

Since we expect the first argument passed to the macro to be the type of the value in our hashmap, let's parse that out of the token stream:

```rust
// my-app-macros/src/hash_mapify.rs

impl Parse for ParsedMap {
	fn parse(input: ParseStream) -> syn::Result<Self> {
    	// ...
        
    	// Since the first argument should be of type `Type`, you try
        // to parse `Type` out of input and returns an error otherwise.
        let ty = input.parse::<Type>()?;
        
        // ...
    }
}
```

Parse takes a single type argument which represents what to parse.

If the first argument cannot be parsed as a valid type, an error will be returned. Do note that this doesn't verify if the type you passed actually exists or not, this will only validate whether the tokens in the first argument are valid for a type definition, and that's all.

This means that if you pass `SomeRandomType` where `SomeRandomType` isn't actually defined, the parsing will still succeed. It will only fail after expanding the macro during compile time.

Moving on, we also expect the user to use `,` to separate the arguments. Let's parse that as the next token after type:

```rust
// my-app-macros/src/hash_mapify.rs

impl Parse for ParsedMap {
	fn parse(input: ParseStream) -> syn::Result<Self> {
    	// ...
        
    	// Next, parse the `,` token, which you expect to be used to
        // separate the arguments.
        input.parse::<Token![,]>()?;
        
        // ...
    }
}
```

You might notice the usage of the `Token!` macro when providing the type argument for the `parse` method. It's a macro provided by `syn` to easily convert built-ins such as keywords (`type`, `async` , `fn` and so on) as well as punctuation marks (`,`, `.`, `;` and so on) and delimiters (`{`, `[`, `(` and so on). This macro takes a single argument, which is the keyword/punctuation/delimiter literal for which the type is needed.

The official docs define it as:

> A type-macro that expands to the name of the Rust type representation of a given token.

Now that you have the type of value as well as the first separator (comma), it's time to start parsing key-value pairs. All of the key-value pairs follow the same structure `key = value` and are separated by commas.

Do note that white-space isn't important, as that is entirely handled during the tokenization process and isn't something that you need to handle.

Since you won't know how many key-value pairs are passed, you need something to tell you when all of it is parsed:

```rust
// my-app-macros/src/hash_mapify.rs

impl Parse for ParsedMap {
	fn parse(input: ParseStream) -> syn::Result<Self> {
    	// ...
        
        // Loop until the input is empty (there is nothing else
        // left to parse).
    	while !input.is_empty() {
        	// ..
        }
        
        // ...
    }
}
```

'

As I explained previously, tokens are taken out of the stream and it's advanced each time you parse something. This means that when all of the tokens are parsed, the stream will be empty. We utilise this fact here to figure out when to break out of the loop.

Each key-value pair can be parsed in a similar fashion as you parsed the type argument:

```rust
// my-app-macros/src/hash_mapify.rs

impl Parse for ParsedMap {
	fn parse(input: ParseStream) -> syn::Result<Self> {
    	// ...
        
        // Loop until the input is empty (there is nothing else
        // left to parse).
    	while !input.is_empty() {
        	// Try to parse the key as an identifier
            let key = if let Ok(key) = input.parse::<syn::Ident>() {
                key.to_string()
                // If it's not an identifier, try to parse it as
                // a string literal
            } else if let Ok(key) = input.parse::<LitStr>() {
                key.value()
                // If it's neither an identifier nor a string literal,
                // it is not a valid key, so panic with appropriate
                // error.
            } else {
                panic!("Key must be either a string literal or an identifier!");
            };

            // Parse the `=` sign, which should be the next token after
            // a key.
            input.parse::<Token![=]>()?;

            // Next, try to parse the value as an identifier. If it is, it
            // means that it's a variable, so we should convert it to token
            // stream directly.
            let value = if let Ok(value) = input.parse::<syn::Ident>() {
                value.to_token_stream()
                // If the input isn't an identifier, try to parse it as a
                // literal value such as `"string"` for strings, `42`
                // for numbers `false` for boolean value, etc.
            } else if let Ok(value) = input.parse::<Lit>() {
                value.to_token_stream()
            } else {
                // If the input is neither an identifier nor a literal value
                // panic with appropriate error.
                panic!("Value must be either a literal or an identifier!");
            };

            // Push the parsed key value pair to our list.
            entries.push(ParsedMapEntry(key, value));

            // Check if next token is a comma, without advancing the stream
            if input.peek(Token![,]) {
                // If it is, then parse it out and advance the stream before
                // moving on to the next key-value pair
                input.parse::<Token![,]>()?;
            }
        }
        
        // ...
    }
}
```

The only thing here that is new, is the call to `peek` method at the end. This is a special method that returns a boolean if the token that is passed to `peek` is the next token in the stream, and false otherwise.

As the name might suggest, this only performs a check, so it doesn't take that token out of the stream or advance the stream in any form.

Once all of the parsing is done, you just return the information as part of `ParsedMap` struct we declared earlier. The complete implementation for this trait is as below if that's easier for you to read through:

```rust
// my-app-macros/src/hash_mapify.rs

impl Parse for ParsedMap {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        let mut entries = Vec::<ParsedMapEntry>::new();

        // Check if input is empty (no arguments are passed). If not, then
        // panic as we cannot continue further.
        if input.is_empty() {
            panic!("At least a type must be specified for an empty hashmap");
        }

        // Since the first argument should be of type `Type`, you try
        // to parse `Type` out of input and returns an error otherwise.
        let ty = input.parse::<Type>()?;

        // Next, parse the `,` token, which you expect to be used to
        // separate the arguments.
        input.parse::<Token![,]>()?;

        // Loop until the input is empty (there is nothing else
        // left to parse).
        while !input.is_empty() {
            // Try to parse the key as an identifier
            let key = if let Ok(key) = input.parse::<syn::Ident>() {
                key.to_string()
                // If it's not an identifier, try to parse it as
                // a string literal
            } else if let Ok(key) = input.parse::<LitStr>() {
                key.value()
                // If it's neither an identifier nor a string literal,
                // it is not a valid key, so panic with appropriate
                // error.
            } else {
                panic!("Key must be either a string literal or an identifier!");
            };

            // Parse the `=` sign, which should be the next token after
            // a key.
            input.parse::<Token![=]>()?;

            // Next, try to parse the value as an identifier. If it is, it
            // means that it's a variable, so we should convert it to token
            // stream directly.
            let value = if let Ok(value) = input.parse::<syn::Ident>() {
                value.to_token_stream()
                // If the input isn't an identifier, try to parse it as a
                // literal value such as `"string"` for strings, `42`
                // for numbers `false` for boolean value, etc.
            } else if let Ok(value) = input.parse::<Lit>() {
                value.to_token_stream()
            } else {
                // If the input is neither an identifier nor a literal value
                // panic with appropriate error.
                panic!("Value must be either a literal or an identifier!");
            };

            // Push the parsed key value pair to our list.
            entries.push(ParsedMapEntry(key, value));

            // Check if next token is a comma, without advancing the stream
            if input.peek(Token![,]) {
                // If it is, then parse it out and advance the stream before
                // moving on to the next key-value pair
                input.parse::<Token![,]>()?;
            }
        }

        Ok(ParsedMap {
            value_type: ty,
            entries,
        })
    }
}
```

### How to Generate the Output Code

You can now finally write the actual macro implementation, which is going to be pretty-straightforward:

```rust
// my-app-macros/src/hash_mapify.rs

pub fn hash_mapify_impl(item: TokenStream) -> TokenStream {
    // Parse input token stream as `ParsedMap` defined by us.
    // This will use the logic from parse trait we implemented
    // earlier.
    let input = parse_macro_input!(item as ParsedMap);
    
    let key_value_pairs = input.entries;
    let ty = input.value_type;

    // Generate the output hashmap inside a code block so that
    // we don't shadow any existing variables. Return the hashmap
    // from the block.
    quote!({
        // Create a new hashmap with `String` for key type and `#ty` for 
        // value type, which parsed from the macro input arguments.
        let mut hash_map = std::collections::HashMap::<String, #ty>::new();
        
        // Insert all key-value pairs into the hashmap.
        #(
            hash_map.insert(#key_value_pairs);
        )*

        // Return the generated hashmap
        hash_map
    })
    .into()
}
```

If you're coding along with me, or if you have a keen eye, you might have noticed that there is an error here. The type of variable `key_value_pairs` is `Vec<ParsedMapEntry>`. We are trying to use it in the output as:

```rust
#(hash_map.insert(#key_value_pairs);)*
```

which is the correct syntax for working with lists, but the underlying type `ParsedMapEntry` is a custom type. And neither `syn` nor `quote` would know how to convert it to a token stream. So we cannot use it with this syntax.

But if we try to manually write an implementation where we loop it ourselves, generate a separate tokens stream in each loop, and extend the existing one, it's going to be quite tedious. Wouldn't it be great if there was a better solution? Turns out there is: `ToTokens` trait.

### How to Convert Custom Data Types to Output Tokens

This trait can be implemented for any of our custom types and defines how the type looks like when converted into the token stream.

```rust
// my-app-macros/src/hash_mapify.rs

impl ToTokens for ParsedMapEntry {
    fn to_tokens(&self, tokens: &mut proc_macro2::TokenStream) {
        let key = self.0.clone();
        let value = self.1.clone();

        tokens.extend(quote!(String::from(#key), #value));
    }
}
```

As part of the implementation, you need to mutate the `tokens` argument and extend it to contain the token stream that we want our type to generate. The syntax I used to do that should all be familiar by now.

Once you've done this, `quote` can now easily convert the problematic code to token stream. So this: `#(hash_map.insert(#key_value_pairs);)*` will now work directly.

As usual, here's the complete implementation if that's easier to understand:

```rust
// my-app-macros/src/hash_mapify.rs

use proc_macro::TokenStream;
use quote::{quote, ToTokens};
use syn::parse::{Parse, ParseStream};
use syn::{parse_macro_input, Lit, LitStr, Token, Type};

pub struct ParsedMapEntry(String, proc_macro2::TokenStream);

pub struct ParsedMap {
    value_type: Type,
    entries: Vec<ParsedMapEntry>,
}

impl ToTokens for ParsedMapEntry {
    fn to_tokens(&self, tokens: &mut proc_macro2::TokenStream) {
        let key = self.0.clone();
        let value = self.1.clone();

        tokens.extend(quote!(String::from(#key), #value));
    }
}

impl Parse for ParsedMap {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        let mut entries = Vec::<ParsedMapEntry>::new();

        // Check if input is empty (no arguments are passed). If not, then
        // panic as we cannot continue further.
        if input.is_empty() {
            panic!("At least a type must be specified for an empty hashmap");
        }

        // Since the first argument should be of type `Type`, you try
        // to parse `Type` out of input and returns an error otherwise.
        let ty = input.parse::<Type>()?;

        // Next, parse the `,` token, which you expect to be used to
        // separate the arguments.
        input.parse::<Token![,]>()?;

        // Loop until the input is empty (there is nothing else
        // left to parse).
        while !input.is_empty() {
            // Try to parse the key as an identifier
            let key = if let Ok(key) = input.parse::<syn::Ident>() {
                key.to_string()
                // If it's not an identifier, try to parse it as
                // a string literal
            } else if let Ok(key) = input.parse::<LitStr>() {
                key.value()
                // If it's neither an identifier nor a string literal,
                // it is not a valid key, so panic with appropriate
                // error.
            } else {
                panic!("Key must be either a string literal or an identifier!");
            };

            // Parse the `=` sign, which should be the next token after
            // a key.
            input.parse::<Token![=]>()?;

            // Next, try to parse the value as an identifier. If it is, it
            // means that it's a variable, so we should convert it to token
            // stream directly.
            let value = if let Ok(value) = input.parse::<syn::Ident>() {
                value.to_token_stream()
                // If the input isn't an identifier, try to parse it as a
                // literal value such as `"string"` for strings, `42`
                // for numbers `false` for boolean value, etc.
            } else if let Ok(value) = input.parse::<Lit>() {
                value.to_token_stream()
            } else {
                // If the input is neither an identifier nor a literal value
                // panic with appropriate error.
                panic!("Value must be either a literal or an identifier!");
            };

            // Push the parsed key value pair to our list.
            entries.push(ParsedMapEntry(key, value));

            // Check if next token is a comma, without advancing the stream
            if input.peek(Token![,]) {
                // If it is, then parse it out and advance the stream before
                // moving on to the next key-value pair
                input.parse::<Token![,]>()?;
            }
        }

        Ok(ParsedMap {
            value_type: ty,
            entries,
        })
    }
}

pub fn hash_mapify_impl(item: TokenStream) -> TokenStream {
    // Parse input token stream as `ParsedMap` defined by us.
    // This will use the logic from parse trait we implemented
    // earlier.
    let input = parse_macro_input!(item as ParsedMap);

    let key_value_pairs = input.entries;
    let ty = input.value_type;

    // Generate the output hashmap inside a code block so that
    // we don't shadow any existing variables. Return the hashmap
    // from the block.
    quote!({
        // Create a new hashmap with `String` for key type and `#ty` for
        // value type, which parsed from the macro input arguments.
        let mut hash_map = std::collections::HashMap::<String, #ty>::new();

        // Insert all key-value pairs into the hashmap.
        #(
            hash_map.insert(#key_value_pairs);
        )*

        // Return the generated hashmap
        hash_map
    })
    .into()
}
```

### How to Use the `hash_mapify` Macro

We can verify that our macro works by writing a simple usage:

```rust
// src/main.rs

fn main() {
	test_hashmap();
}

fn test_hashmap() {
    let some_variable = "Some variable value";

    let hash_map = hash_mapify!(
        &str,
        "first_key" = "first_value",
        "second_variable" = some_variable,
        some_key = "value for variable key",
    );

    let number_hash_map =
        hash_mapify!(usize, "first_key" = 1, "second_variable" = 2, some_key = 3,);

    dbg!(hash_map);
    dbg!(number_hash_map);
}
```

If you run this code, you should see the following output:

```shell
[src/main.rs:62:5] hash_map = {
    "first_key": "first_value",
    "some_key": "value for variable key",
    "second_variable": "Some variable value",
}
[src/main.rs:63:5] number_hash_map = {
    "second_variable": 2,
    "first_key": 1,
    "some_key": 3,
}
```

which is what we would expect to happen.

And now that we've covered all three types of procedural macros, we're going to wrap up the examples here.

## Beyond Writing Macros

Now that you've learned how to write basic derive macros, I'd like to take some time to quickly introduce some additional tools and techniques that will be helpful when working with macros. I'll also point out some drawbacks of why and when to avoid them.

### Helpful Crates/Tools

[**cargo-expand**][60]

This is a CLI tool that can generate macro expanded code for any file in your project. Another great project by [David Tolnay][61]. You do need the nightly toolchain for Rust to use this, though. Don't worry – it's only required for the tool itself to work. You don't need to make your project use the nightly toolchain as well. Your project can stay in the stable zone.

Install nightly toolchain:

```shell
rustup toolchain install nightly
```

Install `cargo-expand`:

```shell
cargo install cargo-expand
```

Now that this is done, you can see what the actual expansion of your code in main looks like. Simply run the following in the `my-app` project directory:

```shell
cargo expand
```

and it will output the expanded code in the terminal output. You will see some unfamiliar stuff as well, such as what the `dbg!` macro expands to, but you can ignore those.

**[trybuild][62] & [macrotest][63]**

These are 2 crates that are extremely useful if you want to unit-test your procedural macros' expanded forms, or assert any expected compilation errors.

## Downsides of Macros

### Debugging (or lack thereof)

You cannot put a breakpoint into any line of code that is generated by the macro. Nor can you get to it from the stacktrace of an error. This makes debugging generated code very difficult.

In my usual workflow, I either put logging into the generated code, or if that is not enough, I replace the usage of macro with the code given to me by `cargo expand` temporarily to debug it, make changes, and then update the macro code based on that.

There might be better ways out there, and if you know any, I'd be grateful if you can share them with me.

### Compile Time Costs

There's a non-zero cost for macro expansion that the compiler needs to run and process, and then check that the code it generated is valid. This becomes even more expensive when recursive macros are involved.

As a very crude estimation, each macro expansion adds 10ms to the compile time of the project. If you're interested, I encourage you to read through this [introduction on how the compiler processes macros][64] internally.

### Lack of Auto-complete and Code Checks

Code written as part of a macro output isn't presently supported fully by any IDE, nor is it supported by rust-analyzer. So in most cases, you're writing code without relying on features such as auto-complete, auto-suggestions, and so on.

### Where Do We Draw the Line?

Given the insane potential of macros, it's very easy to get carried away with them. It's important to remember all of the drawbacks and make decisions accordingly, ensuring that you are not indulging yourselves into premature abstraction.

As a general rule, I personally avoid implementing any "business logic" with macros, nor do I attempt to write macros for generating code that I will need to step through with a debugger time and again. Or the code that I will need to make micro changes in for performance testing and improvement.

## Wrapping Up

This was a long journey! But I wanted anyone with basic knowledge and experience with Rust to be able to follow and come out of this able to write macros in their own projects.

Hopefully, I was able to do that for you. I will be writing a lot more about macros in general, so stay tuned for that.

You can find the complete code for everything we looked at in this article in [https://github.com/anshulsanghi-blog/macros-handbook][65] repository.

Also, feel free to ********[contact me][66]******** if you have any questions or opinions on this topic.

### ******Enjoying my work?******

Consider buying me a coffee to support my work!

[☕Buy me a coffee][67]

Till next time, happy coding and wishing you clear skies!

---

![Anshul Sanghi](https://www.freecodecamp.org/news/content/images/size/w60/2024/04/DSC02590.JPG)

[Anshul Sanghi][68]

Full-stack engineer mainly working with Rust & TypeScript with heavy focus on High-performance backend systems & Image processing and analysis tools. I'm also into Infrared & Astro Photography

---

If you read this far, thank the author to show them you care. Say Thanks

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started][69]

[1]: /news/tag/rust/
[2]: /news/author/anshulsanghi/
[3]: https://www.freecodecamp.org/news/rust-in-replit/
[4]: #what-are-macros-in-rust
[5]: #types-of-macros-in-rust
[6]: #types-of-procedural-macros
[7]: #prerequisites
[8]: #helpful-dependencies
[9]: #how-to-write-a-simple-derive-macro
[10]: #the-intostringhashmap-derive-macro
[11]: #how-to-declare-a-derive-macro
[12]: #how-to-parse-macro-input
[13]: #how-to-ensure-a-struct-target-for-macro
[14]: #how-to-build-the-output-code
[15]: #how-to-use-your-derive-macro
[16]: #how-to-improve-our-implementation
[17]: #a-more-elaborate-derive-macro
[18]: #the-derivecustommodel-macro
[19]: #how-to-separate-implementation-from-declaration
[20]: #how-to-parse-derive-macro-arguments
[21]: #how-to-implement-derivecustommodel
[22]: #how-to-generate-each-custom-model
[23]: #how-to-use-your-derivecustommodal-macro
[24]: #a-simple-attribute-macro
[25]: #the-log_duration-attribute
[26]: #how-to-declare-an-attribute-macro
[27]: #how-to-implement-the-log_duration-attribute-macro
[28]: #how-to-use-your-log-duration-macro
[29]: #a-more-elaborate-attribute-macro
[30]: #the-cached_fn-attribute
[31]: #how-to-implement-the-cached_fn-attribute-macro
[32]: #cached_fn-attribute-arguments
[33]: #how-to-use-the-cached_fn-macro
[34]: #a-simple-function-like-macro
[35]: #the-constant_string-macro
[36]: #how-to-declare-a-function-like-macro
[37]: #how-to-implement-the-constant_string-macro
[38]: #how-to-use-the-constant_string-macro
[39]: #a-more-elaborate-function-like-macro
[40]: #the-hash_mapify-macro
[41]: #how-to-implement-the-hash_mapify-macro
[42]: #how-to-parse-hash-mapifys-input
[43]: #how-to-generate-output-code
[44]: #how-to-convert-custom-data-types-to-output-tokens
[45]: #how-to-use-the-hash_mapify-macro
[46]: #beyond-writing-macros
[47]: #helpful-crates-tools
[48]: #downsides-of-macros
[49]: #debugging-or-lack-thereof-
[50]: #compile-time-costs
[51]: #lack-of-auto-complete-and-code-checks
[52]: #where-do-we-draw-the-line
[53]: #wrapping-up
[54]: #enjoying-my-work
[55]: https://doc.rust-lang.org/reference/macros-by-example.html
[56]: https://doc.rust-lang.org/reference/conditional-compilation.html
[57]: https://dev.to/balapriya/abstract-syntax-tree-ast-explained-in-plain-english-1h38
[58]: https://crates.io/users/dtolnay
[59]: https://doc.rust-lang.org/reference/expressions.html
[60]: https://github.com/dtolnay/cargo-expand
[61]: https://crates.io/users/dtolnay
[62]: https://docs.rs/trybuild/latest/trybuild/#
[63]: https://docs.rs/macrotest/latest/macrotest/#
[64]: https://rustc-dev-guide.rust-lang.org/macro-expansion.html
[65]: https://github.com/anshulsanghi-blog/macros-handbook
[66]: mailto:contact@anshulsanghi.tech
[67]: https://buymeacoffee.com/anshulsanghi
[68]: /news/author/anshulsanghi/
[69]: https://www.freecodecamp.org/learn/