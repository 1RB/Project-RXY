// Define a generic struct
pub struct Pair<T> {
    first: T,
    second: T,
}

impl<T> Pair<T> {
    // Method to create a new Pair
    pub fn new(first: T, second: T) -> Self {
        Self { first, second }
    }

    // Method to get the first element
    pub fn get_first(&self) -> &T {
        &self.first
    }

    // Method to get the second element
    pub fn get_second(&self) -> &T {
        &self.second
    }
}

fn main() {
    let pair_of_ints = Pair::new(1, 2);
    println!("First: {}, Second: {}", pair_of_ints.get_first(), pair_of_ints.get_second());

    let pair_of_strings = Pair::new("Hello", "World");
    println!("First: {}, Second: {}", pair_of_strings.get_first(), pair_of_strings.get_second());
}