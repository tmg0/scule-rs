#![deny(clippy::all)]

use napi::JsString;

#[macro_use]
extern crate napi_derive;

const STR_SPLITTERS: [&str; 4] = ["-", "_", "/", "."];

#[napi]
pub fn is_uppercase(char: String) -> bool {
  let c = char.to_lowercase();
  char != c
}

#[napi]
pub fn split_by_case(str: JsString) -> JsString {
  let splitters = STR_SPLITTERS;
  let parts: Vec<&str> = Vec::new();
  str
}

#[napi]
pub fn pascal_case(str: JsString) -> JsString {
  str
}
