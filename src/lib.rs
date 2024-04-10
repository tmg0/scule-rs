#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

const STR_SPLITTERS: [&str; 4] = ["-", "_", "/", "."];

#[napi]
pub fn split_by_case(str: String) -> Vec<String> {
  let splitters = STR_SPLITTERS;
  let mut parts: Vec<String> = Vec::new();

  if str.is_empty() {
    return Vec::new();
  }

  let mut buff = String::new();
  let mut previous_upper: Option<bool> = None;
  let mut previous_splitter: Option<bool> = None;

  for char in str.chars() {
    let is_splitter = splitters.iter().any(|&s| s.contains(char));

    if is_splitter {
      if !buff.is_empty() {
        parts.push(buff.clone());
        buff.clear();
      }
      previous_upper = None;
      previous_splitter = Some(true);
      continue;
    }

    let is_upper = char.is_uppercase();

    if previous_splitter == Some(false) {
      if previous_upper == Some(false) && is_upper {
        parts.push(buff.clone());
        buff.clear();
        buff.push(char);
        previous_upper = Some(is_upper);
        continue;
      }

      if previous_upper == Some(true) && !is_upper && buff.len() > 1 {
        let last_char = buff.pop().unwrap();
        parts.push(buff.clone());
        buff.clear();
        buff.push(last_char);
        buff.push(char);
        previous_upper = Some(is_upper);
        continue;
      }
    }

    buff.push(char);
    previous_splitter = Some(false);
    previous_upper = Some(is_upper);
  }

  if !buff.is_empty() {
    parts.push(buff);
  }

  parts
}

#[napi]
pub fn upper_first(str: String) -> String {
  str[0..1].to_uppercase() + &str[1..]
}

#[napi]
pub fn lower_first(str: String) -> String {
  str[0..1].to_lowercase() + &str[1..]
}

#[napi]
pub fn pascal_case(str: String) -> String {
  split_by_case(str)
    .into_iter()
    .map(|p| upper_first(p.to_lowercase()))
    .collect()
}

#[napi]
pub fn camel_case(str: String) -> String {
  lower_first(pascal_case(str))
}

#[napi]
pub fn kebab_case(str: String, joiner: Option<&str>) -> String {
  let joiner = joiner.unwrap_or("-");

  split_by_case(str)
    .into_iter()
    .map(|p| p.to_lowercase())
    .collect::<Vec<_>>()
    .join(joiner)
}

#[napi]
pub fn snake_case(str: String) -> String {
  kebab_case(str, Some("_"))
}
