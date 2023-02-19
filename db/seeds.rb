# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
books = Book.create([
    {
        name: "the power of positive thinking",
        price: "12.9",
        author: "Norman Vincent Peal",
        category: "self help",
        buy_link: "https://somebooksellingsite.com/purchase"
    },
    {
        name: "Atomic Habit",
        price: "12.9",
        author: "James Clear",
        category: "self help",
        buy_link: "https://somebooksellingsite.com/purchase"
    },
    {
        name: "The power of Habits",
        price: "12.9",
        author: "Charles Duhigg",
        category: "self help",
        buy_link: "https://somebooksellingsite.com/purchase"
    },
    {
        name: "Attitude Is Everything",
        price: "12.9",
        author: "Jeff Keller",
        category: "self help",
        buy_link: "https://somebooksellingsite.com/purchase"
    }
])